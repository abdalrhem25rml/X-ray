<script setup>
import { ref, watch, computed, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'

// --- Pinia and Vue Router ---
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()

// --- Injected global app states ---
const currentLanguage = inject('currentLanguage')
const currentTotalMsv = inject('currentMsv') // Doctor's total occupational dose (if doctor)
const doseLimit = inject('doseLimit') // Doctor's annual dose limit

// --- Component local state ---
const recommendationMode = ref('personal')
const form = ref({
  patientId: null,
  patientName: '',
  birthDate: '',
  gender: 'male',
  patientCumulativeDose: 0,
  medicalHistory: '',
  currentSymptoms: '',
  allergies: '',
  isPregnant: false,
  estimatedDueDate: '',
  scanType: '',
  doctorAdditionalContext: '',
})

// UI states
const isLoading = ref(false)
const isFetchingPatient = ref(false)
const aiResponse = ref(null)
const errorMessage = ref('')

const userRole = computed(() => authStore.role)
const isDoctorPersonalScan = computed(() => userRole.value === 'doctor' && recommendationMode.value === 'personal')

// --- Labels for doses, dynamic based on user & mode ---
const patientDoseLabel = computed(() => {
  if (recommendationMode.value === 'personal') {
    return currentLanguage.value === 'en' ? 'Your Estimated Dose' : 'جرعتك المقدرة'
  }
  return currentLanguage.value === 'en' ? 'Patient Dose' : 'جرعة المريض'
})
const doctorDoseLabel = computed(() => currentLanguage.value === 'en' ? 'Occupational Dose' : 'الجرعة المهنية')

// Show doctor dose only if applicable
const showDoctorDoseBox = computed(() => {
  if (!aiResponse.value) return false
  if (aiResponse.value.doctorOccupationalMsv == null) return false
  // Don't show doctor's occupational dose when doctor is patient requesting own scan
  if (userRole.value === 'doctor' && recommendationMode.value === 'personal') return false
  return true
})

// --- Helpers ---
const clearForm = () => {
  form.value = {
    patientId: null,
    patientName: '',
    birthDate: '',
    gender: 'male',
    patientCumulativeDose: 0,
    medicalHistory: '',
    currentSymptoms: '',
    allergies: '',
    isPregnant: false,
    estimatedDueDate: '',
    scanType: '',
    doctorAdditionalContext: '',
  }
}

const toDateString = (input) => {
  if (!input) return ''
  let d = (typeof input.toDate === 'function') ? input.toDate() : new Date(input)
  return d.toISOString().split('T')[0]
}

// Load patient data, from authStore if personal, else from database
const loadPatientData = async (id) => {
  if (!id) return
  isFetchingPatient.value = true
  clearForm()
  try {
    let patientData = id === authStore.user?.uid ? authStore.userProfile : await databaseStore.fetchSinglePatient(id)

    if (patientData) {
      form.value.patientId = id
      form.value.patientName = patientData.displayName || patientData.name || ''
      form.value.birthDate = toDateString(patientData.birthDate)
      form.value.gender = patientData.gender || 'male'
      form.value.isPregnant = patientData.isPregnant || false
      form.value.estimatedDueDate = toDateString(patientData.estimatedDueDate)
      form.value.medicalHistory = Array.isArray(patientData.medicalHistory) ? patientData.medicalHistory.join(', ') : ''
      form.value.allergies = Array.isArray(patientData.allergies) ? patientData.allergies.join(', ') : ''

      // Fetch patient's scan history and cumulative dose
      const scans = await databaseStore.fetchScansForPatient(id)
      if (scans) {
        const yearStart = new Date(new Date().getFullYear(), 0, 1)
        const getJsDate = (d) => d ? (d.toDate ? d.toDate() : new Date(d)) : null
        const scansThisYear = scans.filter(scan => {
          const scanDate = getJsDate(scan.scanDate)
          return scanDate && scanDate >= yearStart
        })
        const cumulativeDose = scansThisYear.reduce((sum, s) => sum + (s.patientDose || 0), 0)
        form.value.patientCumulativeDose = parseFloat(cumulativeDose.toFixed(3))
      } else {
        form.value.patientCumulativeDose = 0
      }
    }
  } catch (e) {
    console.error('Error fetching patient details:', e)
    errorMessage.value = currentLanguage.value === 'en' ? 'Failed to load patient data.' : 'فشل في تحميل بيانات المريض.'
  } finally {
    isFetchingPatient.value = false
  }
}

// --- Reactivity watchers ---
watch(recommendationMode, (newMode) => {
  aiResponse.value = null
  if (newMode === 'personal' && authStore.user) {
    loadPatientData(authStore.user.uid)
  } else if (newMode === 'general' && route.query.patientId) {
    loadPatientData(route.query.patientId)
  } else {
    clearForm()
  }
})

watch(() => route.query.patientId, (newId) => {
  if (newId) {
    recommendationMode.value = 'general'
    loadPatientData(newId)
  } else {
    recommendationMode.value = 'personal'
    if (authStore.user) loadPatientData(authStore.user.uid)
  }
}, { immediate: true })

watch(() => form.value.isPregnant, (isPregnant) => {
  if (!isPregnant) form.value.estimatedDueDate = ''
})

// --- Main recommendation fetching logic ---
const getRecommendations = async () => {
  isLoading.value = true
  errorMessage.value = ''
  aiResponse.value = null

  // Basic validation
  if (!form.value.birthDate || !form.value.scanType) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Date of Birth and Scan Type are required.' : 'تاريخ الميلاد ونوع الفحص مطلوبان.'
    isLoading.value = false
    return
  }
  if (form.value.isPregnant && !form.value.estimatedDueDate) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Estimated Due Date is required for pregnant patients.' : 'تاريخ الولادة المتوقع مطلوب للحامل.'
    isLoading.value = false
    return
  }

  const age = new Date().getFullYear() - new Date(form.value.birthDate).getFullYear()

  // Enhanced pregnancy context for AI prompt
  let pregnancyContext = `Not pregnant.`
  if (form.value.isPregnant && form.value.estimatedDueDate) {
    pregnancyContext = `Pregnant with an estimated due date of ${form.value.estimatedDueDate}. The AI must carefully weigh the radiation risks especially during the first trimester.`
  }

  // Build prompts conditionally with clear scenario descriptions
  let prompt = ''
  let responseSchema = {}

  if (userRole.value === 'doctor') {
    prompt = `As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is considering a scan.
${isDoctorPersonalScan.value ? "The doctor IS THE PATIENT, receiving the scan." : "The doctor is the PRACTITIONER performing the scan on another person."}
- Doctor's Current Annual Occupational Dose: ${currentTotalMsv.value.toFixed(2)} mSv.
- Doctor's Effective Annual Dose Limit: ${doseLimit.value.toFixed(2)} mSv.
- Patient Details:
  - Age: ${age}, Gender: ${form.value.gender}.
  - Pregnancy Status: ${pregnancyContext}
  - Patient's cumulative radiation dose this year: ${form.value.patientCumulativeDose} mSv.
  - Medical History: ${form.value.medicalHistory || 'None'}.
  - Current Symptoms: ${form.value.currentSymptoms || 'None'}.
- Scan being considered: ${form.value.scanType}.
- Doctor's Exposure Context: ${form.value.doctorAdditionalContext || 'No additional context provided.'}

Tasks:
1. **Recommendation (recommendationText):** Advise if the scan is justified considering ALARA, existing doses, and pregnancy status. Suggest safer alternatives if pregnancy or high dose risk exists.
2. **Patient Dose (patientCalculatedMsv):** Estimate effective dose from this scan.
3. **Doctor Occupational Dose (doctorOccupationalMsv):** If the doctor is the practitioner, estimate occupational dose from this scan; if doctor is patient, must be 0.
4. **Warning (Warning):** Warn if patient's cumulative dose plus scan dose exceeds 1 mSv public limit, or if doctor's dose exceeds limit. Otherwise, empty string.

Respond ONLY with valid JSON. Provide the response in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    responseSchema = {
      type: 'OBJECT',
      properties: {
        recommendationText: { type: 'STRING' },
        patientCalculatedMsv: { type: 'NUMBER' },
        doctorOccupationalMsv: { type: 'NUMBER' },
        Warning: { type: 'STRING' },
      },
      required: ['recommendationText', 'patientCalculatedMsv', 'doctorOccupationalMsv', 'Warning'],
    }
  } else {
    // Patient prompt for themselves
    prompt = `As a patient advocate, explain a medical scan clearly.
- My estimated radiation dose this year is ${form.value.patientCumulativeDose} mSv. The recommended annual limit is 1 mSv for the public.
- My details: born on ${form.value.birthDate}, gender ${form.value.gender}.
- Pregnancy status: ${pregnancyContext}
- Current symptoms: ${form.value.currentSymptoms || 'None'}

Tasks:
1. Explain the scan's purpose in simple language.
2. Estimate effective dose from this scan.
3. Warn if the new cumulative dose will exceed 1 mSv. Otherwise, empty warning.

Respond ONLY with valid JSON. The response language should be ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    responseSchema = {
      type: 'OBJECT',
      properties: {
        recommendationText: { type: 'STRING' },
        patientCalculatedMsv: { type: 'NUMBER' },
        Warning: { type: 'STRING' },
      },
      required: ['recommendationText', 'patientCalculatedMsv', 'Warning'],
    }
  }

  try {
    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json', responseSchema },
    }

    const apiKey = import.meta.env.VITE_GEMINI_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)

    const result = await response.json()
    aiResponse.value = JSON.parse(result.candidates[0].content.parts[0].text)
  } catch (error) {
    console.error('Error getting recommendation:', error)
    errorMessage.value = currentLanguage.value === 'en' ? `An error occurred: ${error.message}` : `حدث خطأ: ${error.message}`
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="recommend-page" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <main class="recommend-main-content">
      <section class="recommend-card">
        <h2>{{ currentLanguage === 'en' ? 'Medical Scan Recommendation' : 'توصية الفحص الطبي' }}</h2>
        <p>{{ currentLanguage === 'en' ? 'Get an AI-powered recommendation based on patient details and radiation safety principles.' : 'احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع.' }}</p>

        <div class="mode-switcher">
          <button
            :class="{ active: recommendationMode === 'personal' }"
            @click="recommendationMode = 'personal'"
          >
            {{ currentLanguage === 'en' ? 'For Myself' : 'لنفسي' }}
          </button>
          <button
            v-if="userRole === 'doctor'"
            :class="{ active: recommendationMode === 'general' }"
            @click="recommendationMode = 'general'"
          >
            {{ currentLanguage === 'en' ? 'For Another Patient' : 'لمريض آخر' }}
          </button>
        </div>

        <div v-if="isFetchingPatient" class="loading-overlay">
          <span>{{ currentLanguage === 'en' ? 'Loading Patient Data...' : 'جاري تحميل بيانات المريض...' }}</span>
        </div>

        <div v-if="form.patientId && form.patientName" class="patient-info-display">
          {{ currentLanguage === 'en' ? 'Getting recommendation for:' : 'الحصول على توصية لـ:' }}
          <strong>{{ form.patientName }}</strong>
        </div>

        <form @submit.prevent="getRecommendations" class="recommend-form">
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Date of Birth' : 'تاريخ الميلاد' }}
              <span class="required-indicator">*</span>
            </label>
            <input type="date" v-model="form.birthDate" :disabled="recommendationMode==='personal'" required />
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="form.gender" :disabled="recommendationMode==='personal'" required>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <div v-if="form.gender === 'female'" class="pregnancy-section">
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.isPregnant" :disabled="recommendationMode==='personal'" />
              <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل هي حامل؟' }}</span>
            </label>
            <div v-if="form.isPregnant" class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Estimated Due Date' : 'تاريخ الولادة المتوقع' }}
                <span class="required-indicator">*</span>
              </label>
              <input type="date" v-model="form.estimatedDueDate" :disabled="recommendationMode==='personal'" required />
            </div>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Relevant Medical History' : 'التاريخ الطبي ذو الصلة' }}</label>
            <textarea v-model="form.medicalHistory" rows="3" :disabled="recommendationMode==='personal'"></textarea>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Current Symptoms' : 'الأعراض الحالية' }}</label>
            <textarea v-model="form.currentSymptoms" rows="3"></textarea>
          </div>

          <div v-if="userRole === 'doctor' && recommendationMode === 'general'" class="doctor-exposure-section">
            <h3 class="section-title">
              {{ currentLanguage === 'en' ? 'Occupational Exposure Context' : 'سياق التعرض المهني' }}
            </h3>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Your positioning, shielding, etc. (Optional)' : 'موقعك، التدريع المستخدم، إلخ (اختياري)' }}
              </label>
              <textarea v-model="form.doctorAdditionalContext" rows="3"></textarea>
            </div>
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Type of Scan to Consider' : 'نوع الفحص المقترح' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="form.scanType" required>
              <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Scan Type' : 'اختر نوع الفحص' }}</option>
              <option value="X-ray">{{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}</option>
              <option value="CT">{{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}</option>
            </select>
          </div>

          <button type="submit" :disabled="isLoading" class="action-button">
            {{
              isLoading
                ? (currentLanguage === 'en' ? 'Getting Recommendations...' : 'جاري الحصول على التوصيات...')
                : (currentLanguage === 'en' ? 'Get Recommendation' : 'الحصول على توصية')
            }}
          </button>
        </form>

        <div v-if="errorMessage" class="message error-message">{{ errorMessage }}</div>

        <div v-if="aiResponse" class="prediction-result-wrapper">
          <div v-if="aiResponse.Warning" class="message warning-message">
            <h4>{{ currentLanguage === 'en' ? 'Important Warning' : 'تحذير هام' }}</h4>
            <p>{{ aiResponse.Warning }}</p>
          </div>

          <div class="prediction-result">
            <h3>{{ currentLanguage === 'en' ? 'AI Powered Recommendation' : 'التوصية المدعومة بالذكاء الاصطناعي' }}</h3>
            <div class="msv-details-container">
              <div v-if="aiResponse.patientCalculatedMsv !== null" class="msv-details">
                <h4>{{ patientDoseLabel }}</h4>
                <p><strong>{{ aiResponse.patientCalculatedMsv }} mSv</strong></p>
              </div>
              <div v-if="showDoctorDoseBox" class="msv-details doctor-dose">
                <h4>{{ doctorDoseLabel }}</h4>
                <p><strong>{{ aiResponse.doctorOccupationalMsv }} mSv</strong></p>
              </div>
            </div>
            <div class="result-text">
              <h4>{{ currentLanguage === 'en' ? 'Recommendation' : 'التوصية' }}</h4>
              <p>{{ aiResponse.recommendationText }}</p>
            </div>
          </div>
        </div>

        <p class="switch-link-container">
          <a href="#" @click.prevent="router.push('/dashboard')">
            {{ currentLanguage === 'en' ? 'Back to Dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.prediction-result-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.recommend-page { padding: 30px; background-color: #f8f9fa; }
.recommend-card { background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); max-width: 700px; margin: auto; }
.recommend-card h2 { text-align: center; color: #8d99ae; }
.recommend-card p { text-align: center; color: #555; margin-bottom: 2rem; }
.mode-switcher { display: flex; justify-content: center; margin-bottom: 2rem; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
.mode-switcher button { flex: 1; padding: 12px; border: none; background-color: #f8f9fa; cursor: pointer; font-weight: 600; color: #555; transition: background-color 0.2s; }
.mode-switcher button.active { background-color: #8d99ae; color: white; }
.form-group label { font-weight: 600; margin-bottom: 8px; display: block; }
.form-group input, .form-group textarea, .form-group select { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ccc; box-sizing: border-box; }
.form-group input:disabled, .form-group textarea:disabled, .form-group select:disabled { background-color: #e9ecef; cursor: not-allowed; }
.required-indicator { color: #d32f2f; }
.action-button { width: 100%; padding: 15px; margin-top: 1rem; font-size: 1.1em; background-color: #8d99ae; color: white; border: none; border-radius: 8px; cursor: pointer; }
.action-button:disabled { background-color: #ccc; }
.message { margin-top: 1.5rem; padding: 1rem; border-radius: 8px; }
.error-message { background-color: #ffebee; color: #c62828; }
.warning-message { background-color: #fff3e0; color: #e65100; }
.prediction-result { margin-top: 2rem; border-top: 1px solid #eee; padding-top: 2rem; }
.msv-details-container { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.msv-details { text-align: center; padding: 1rem; border-radius: 8px; flex: 1; min-width: 150px; background-color: #f8f9fa; border: 1px solid #e9ecef;}
.msv-details h4 { margin: 0; font-size: 0.9em; color: #555; }
.msv-details p { margin: 0.5rem 0 0; font-size: 1.5em; }
.msv-details.doctor-dose { background-color: #fffbe6; }
.result-text { margin-top: 1.5rem; }
.switch-link-container { text-align: center; margin-top: 2rem; }
.switch-link-container a { color: #8d99ae; }
.loading-overlay { text-align: center; padding: 2rem; color: #8d99ae; }
.recommend-form { display: flex; flex-direction: column; gap: 15px; }
.patient-info-display { padding: 15px; border-radius: 8px; background-color: #e9ecef; text-align: start; margin-bottom: 1rem; }
.checkbox-group label { display: flex; align-items: center; gap: 10px; font-weight: normal; }
.checkbox-group input { width: auto; }
.doctor-exposure-section { border-top: 1px dashed #d3dce6; padding: 20px 0; }
.section-title { text-align: center; font-weight: 600; color: #6a7483; }
.pregnancy-section { border: 1px solid #eef2f7; border-radius: 8px; padding: 1rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 1rem; }
</style>
