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
const currentTotalMsv = inject('currentMsv')
const doseLimit = inject('doseLimit')

// --- Scan subtype options with translations (unchanged) ---
const scanSubtypes = {
  'CT': [
    { value: 'Abdomen & Pelvis', en: 'Abdomen & Pelvis', ar: 'البطن والحوض' },
    { value: 'Brain with contrast', en: 'Brain with contrast', ar: 'الدماغ بمادة تباين' },
    { value: 'Angiography CTA', en: 'Angiography CTA', ar: 'تصوير الأوعية CTA' },
    { value: 'Urography', en: 'Urography', ar: 'تصوير المسالك البولية' },
    { value: 'Enterography', en: 'Enterography', ar: 'تصوير الأمعاء' },
    { value: 'Other', en: 'Other...', ar: 'أخرى...' }
  ],
  'X-ray': [
    { value: 'Barium Swallow', en: 'Barium Swallow', ar: 'بلع الباريوم' },
    { value: 'Barium Meal', en: 'Barium Meal', ar: 'وجبة الباريوم' },
    { value: 'Barium Enema', en: 'Barium Enema', ar: 'حقنة الباريوم الشرجية' },
    { value: 'IV Urogram (IVP)', en: 'IV Urogram (IVP)', ar: 'أشعة المسالك البولية (IVP)' },
    { value: 'HSG', en: 'HSG', ar: 'أشعة الرحم (HSG)' },
    { value: 'VCUG', en: 'VCUG', ar: 'دراسة المثانة بالصبغة (VCUG)' },
    { value: 'Other', en: 'Other...', ar: 'أخرى...' }
  ]
}

// --- Component local state ---
const recommendationMode = ref('personal')
const form = ref({
  patientId: null,
  patientName: '',
  birthDate: '',
  gender: 'male',
  weight: null, // ✅ Includes weight in the form state
  patientCumulativeDose: 0,
  medicalHistory: '',
  currentSymptoms: '',
  allergies: '',
  isPregnant: false,
  estimatedDueDate: '',
  scanType: 'CT',
  subScanType: '',
  otherScanDescription: '',
  doctorAdditionalContext: '',
})

// --- UI states ---
const isLoading = ref(false)
const isFetchingPatient = ref(false)
const aiResponse = ref(null)
const errorMessage = ref('')

// --- Computed Properties (unchanged) ---
const userRole = computed(() => authStore.role)
const isDoctorPersonalScan = computed(() => userRole.value === 'doctor' && recommendationMode.value === 'personal')
const currentScanSubtypes = computed(() => scanSubtypes[form.value.scanType] || [])
const showOtherInput = computed(() => form.value.subScanType === 'Other')
const patientDoseLabel = computed(() => recommendationMode.value === 'personal' ? (currentLanguage.value === 'en' ? 'Your Estimated Dose' : 'جرعتك المقدرة') : (currentLanguage.value === 'en' ? 'Patient Dose' : 'جرعة المريض'))
const doctorDoseLabel = computed(() => currentLanguage.value === 'en' ? 'Occupational Dose' : 'الجرعة المهنية')
const showDoctorDoseBox = computed(() => {
  if (!aiResponse.value || aiResponse.value.doctorOccupationalMsv == null) return false
  return !(userRole.value === 'doctor' && recommendationMode.value === 'personal')
})

// --- Helpers ---
const clearForm = () => {
  form.value = {
    patientId: null, patientName: '', birthDate: '', gender: 'male', weight: null, patientCumulativeDose: 0,
    medicalHistory: '', currentSymptoms: '', allergies: '', isPregnant: false, estimatedDueDate: '',
    scanType: 'CT', subScanType: '', otherScanDescription: '', doctorAdditionalContext: ''
  }
}

const toDateString = (input) => {
  if (!input) return ''
  let d = (typeof input.toDate === 'function') ? input.toDate() : new Date(input)
  return d.toISOString().split('T')[0]
}

// ✅ Correctly loads weight from the patient's record
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
      form.value.weight = patientData.weight || null // Get weight
      form.value.gender = patientData.gender || 'male'
      form.value.isPregnant = patientData.isPregnant || false
      form.value.estimatedDueDate = toDateString(patientData.estimatedDueDate)
      form.value.medicalHistory = Array.isArray(patientData.medicalHistory) ? patientData.medicalHistory.join(', ') : ''
      form.value.allergies = Array.isArray(patientData.allergies) ? patientData.allergies.join(', ') : ''

      const scans = await databaseStore.fetchScansForPatient(id)
      if (scans) {
        const yearStart = new Date(new Date().getFullYear(), 0, 1)
        const getJsDate = (d) => d ? (d.toDate ? d.toDate() : new Date(d)) : null
        const scansThisYear = scans.filter(scan => getJsDate(scan.scanDate) >= yearStart)
        form.value.patientCumulativeDose = parseFloat(scansThisYear.reduce((sum, s) => sum + (s.patientDose || 0), 0).toFixed(3))
      }
    }
  } catch (e) {
    console.error('Error fetching patient details:', e)
    errorMessage.value = currentLanguage.value === 'en' ? 'Failed to load patient data.' : 'فشل في تحميل بيانات المريض.'
  } finally {
    isFetchingPatient.value = false
  }
}

// --- Watchers (unchanged) ---
watch(recommendationMode, (newMode) => {
  aiResponse.value = null
  if (newMode === 'personal' && authStore.user) {
    loadPatientData(authStore.user.uid)
  } else if (!route.query.patientId) {
    clearForm()
  }
})
watch(() => route.query.patientId, (newId) => {
  if (newId) {
    recommendationMode.value = 'general'
    loadPatientData(newId)
  } else if (authStore.user) {
    recommendationMode.value = 'personal'
    loadPatientData(authStore.user.uid)
  }
}, { immediate: true })
watch(() => form.value.isPregnant, (isPregnant) => {
  if (!isPregnant) form.value.estimatedDueDate = ''
})
watch(() => form.value.scanType, () => {
    form.value.subScanType = '';
    form.value.otherScanDescription = '';
});

// --- Main Recommendation Logic ---
// ✅ Correctly uses weight in the AI prompts
const getRecommendations = async () => {
  isLoading.value = true
  errorMessage.value = ''
  aiResponse.value = null

  if (!form.value.birthDate || !form.value.subScanType || (showOtherInput.value && !form.value.otherScanDescription)) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Please complete all required fields.' : 'يرجى إكمال جميع الحقول المطلوبة.'
    isLoading.value = false
    return
  }
  if (form.value.isPregnant && !form.value.estimatedDueDate) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Estimated Due Date is required for pregnant patients.' : 'تاريخ الولادة المتوقع مطلوب للحامل.'
    isLoading.value = false
    return
  }

  const age = new Date().getFullYear() - new Date(form.value.birthDate).getFullYear()
  // This creates the text snippet for the prompt
  const weightContext = form.value.weight ? `Weight: ${form.value.weight} kg.` : 'Weight: Not provided.';

  let pregnancyContext = `Not pregnant.`
  if (form.value.isPregnant && form.value.estimatedDueDate) {
    pregnancyContext = `Pregnant with an estimated due date of ${form.value.estimatedDueDate}. The AI must carefully weigh risks, especially during the first trimester.`
  }

  const finalScanDetail = showOtherInput.value ? form.value.otherScanDescription : form.value.subScanType

  let prompt = ''
  let responseSchema = {}

  if (userRole.value === 'doctor') {
    if (isDoctorPersonalScan.value) {
      prompt = `
As a medical radiation safety advisor, provide a recommendation for a doctor who is also the patient.
- Scenario Context: The doctor IS THE PATIENT.
- Doctor's State: My annual occupational dose is ${currentTotalMsv.value.toFixed(2)} mSv. The annual limit is ${doseLimit.value} mSv.
- Patient Details (My Details):
  - Age: ${age}, Gender: ${form.value.gender}.
  - ${weightContext}
  - Pregnancy Status: ${pregnancyContext}
  - My cumulative dose this year: ${form.value.patientCumulativeDose} mSv.
- Scan I am considering:
  - Category: ${form.value.scanType}
  - Protocol: "${finalScanDetail}"
- My Exposure Context: ${form.value.doctorAdditionalContext || 'No additional context provided.'}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for me.
2. **Patient Dose (patientCalculatedMsv):** Estimate my effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** This MUST be 0 because I am the patient.
4. **Warning (Warning):** Warn if my new total dose (occupational + patient) exceeds any limits.
Respond ONLY with valid JSON in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    } else {
      prompt = `
As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is the PRACTITIONER for another patient.
- Doctor's State: The doctor's annual occupational dose is ${currentTotalMsv.value.toFixed(2)} mSv. The annual limit is ${doseLimit.value} mSv.
- Patient Details:
  - Age: ${age}, Gender: ${form.value.gender}.
  - ${weightContext}
  - Pregnancy Status: ${pregnancyContext}
  - Patient's cumulative dose this year: ${form.value.patientCumulativeDose} mSv.
- Scan being considered for the patient:
  - Category: ${form.value.scanType}
  - Protocol: "${finalScanDetail}"
- Doctor's Exposure Context: ${form.value.doctorAdditionalContext || 'No additional context provided.'}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for the patient.
2. **Patient Dose (patientCalculatedMsv):** Estimate the patient's effective dose in mSv from THIS SCAN.
3. **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's occupational dose in mSv from performing this procedure.
4. **Warning (Warning):** Warn if the patient's new total dose will exceed the public limit, OR if the doctor's new occupational dose exceeds their limit.
Respond ONLY with valid JSON in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    }
    responseSchema = { type: 'OBJECT', properties: { recommendationText: { type: 'STRING' }, patientCalculatedMsv: { type: 'NUMBER' }, doctorOccupationalMsv: { type: 'NUMBER' }, Warning: { type: 'STRING' } }, required: ['recommendationText', 'patientCalculatedMsv', 'doctorOccupationalMsv', 'Warning'] }
  } else {
    prompt = `
As a patient advocate, explain a medical scan.
- My estimated radiation dose this year: ${form.value.patientCumulativeDose} mSv.
- My Details: Born on ${form.value.birthDate}, Gender: ${form.value.gender}, ${weightContext}, Pregnancy: ${pregnancyContext}.
- Scan being considered:
  - Category: ${form.value.scanType}
  - Protocol: "${finalScanDetail}"
Tasks:
1. **Information (recommendationText):** Explain the purpose of this scan in simple terms.
2. **Dose Estimation (patientCalculatedMsv):** Estimate my dose in mSv from THIS SCAN.
3. **Warning (Warning):** If my new total dose exceeds 1 mSv, provide a clear warning.
Respond ONLY with valid JSON in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    responseSchema = { type: 'OBJECT', properties: { recommendationText: { type: 'STRING' }, patientCalculatedMsv: { type: 'NUMBER' }, Warning: { type: 'STRING' } }, required: ['recommendationText', 'patientCalculatedMsv', 'Warning'] }
  }

  try {
    const payload = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', responseSchema } }
    const apiKey = import.meta.env.VITE_GEMINI_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
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

        <!-- ✅ Correctly displays the weight -->
        <div v-if="form.patientId && form.patientName" class="patient-info-display">
          {{ currentLanguage === 'en' ? 'Getting recommendation for:' : 'الحصول على توصية لـ:' }}
          <strong>{{ form.patientName }}</strong> ({{ form.weight ? `${form.weight} kg` : 'Weight N/A' }})
        </div>

        <form @submit.prevent="getRecommendations" class="recommend-form">
          <!-- ✅ Correctly adds an input for weight -->
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Weight (kg)' : 'الوزن (كجم)' }}
            </label>
            <input type="number" step="0.1" v-model="form.weight" :disabled="recommendationMode === 'personal'" placeholder="e.g. 70.5" />
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Date of Birth' : 'تاريخ الميلاد' }}
              <span class="required-indicator">*</span>
            </label>
            <input type="date" v-model="form.birthDate" :disabled="recommendationMode === 'personal'" required />
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="form.gender" :disabled="recommendationMode === 'personal'" required>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <div v-if="form.gender === 'female'" class="pregnancy-section">
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" v-model="form.isPregnant" :disabled="recommendationMode==='personal'" />
                <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل هي حامل؟' }}</span>
              </label>
            </div>
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

          <h3 class="section-title">{{ currentLanguage === 'en' ? 'Scan to Consider' : 'الفحص المقترح' }}</h3>
          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Category' : 'فئة الفحص' }}
                <span class="required-indicator">*</span>
              </label>
              <select v-model="form.scanType" required>
                <option value="CT">{{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}</option>
                <option value="X-ray">{{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Protocol' : 'بروتوكول الفحص' }}
                <span class="required-indicator">*</span>
              </label>
              <select v-model="form.subScanType" required>
                <option disabled value="">{{ currentLanguage === 'en' ? 'Select...' : 'اختر...' }}</option>
                <option v-for="option in currentScanSubtypes" :key="option.value" :value="option.value">
                  {{ currentLanguage === 'en' ? option.en : option.ar }}
                </option>
              </select>
            </div>
          </div>

          <div v-if="showOtherInput" class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Please specify scan protocol' : 'يرجى تحديد بروتوكول الفحص' }}
              <span class="required-indicator">*</span>
            </label>
            <input type="text" v-model="form.otherScanDescription" :placeholder="currentLanguage === 'en' ? 'e.g., Chest X-ray' : 'مثال: أشعة سينية للصدر'" required />
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
.form-group { margin-bottom: 1rem; }
.form-group label { font-weight: 600; margin-bottom: 8px; display: block; }
.form-group input, .form-group textarea, .form-group select { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ccc; box-sizing: border-box; }
.form-group input:disabled, .form-group textarea:disabled, .form-group select:disabled { background-color: #e9ecef; cursor: not-allowed; }
.required-indicator { color: #d32f2f; }
.action-button { width: 100%; padding: 15px; margin-top: 1rem; font-size: 1.1em; background-color: #8d99ae; color: white; border: none; border-radius: 8px; cursor: pointer; }
.action-button:disabled { background-color: #ccc; }
.message { margin-top: 1.5rem; padding: 1rem; border-radius: 8px; }
.error-message { background-color: #ffebee; color: #c62828; }
.warning-message { background-color: #fff3e0; color: #e65100; }
.prediction-result { margin-top: 1rem; border-top: 1px solid #eee; padding-top: 1rem; }
.msv-details-container { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.msv-details { text-align: center; padding: 1rem; border-radius: 8px; flex: 1; min-width: 150px; background-color: #f8f9fa; border: 1px solid #e9ecef;}
.msv-details h4 { margin: 0; font-size: 0.9em; color: #555; }
.msv-details p { margin: 0.5rem 0 0; font-size: 1.5em; }
.msv-details.doctor-dose { background-color: #fffbe6; }
.result-text { margin-top: 1.5rem; }
.switch-link-container { text-align: center; margin-top: 2rem; }
.switch-link-container a { color: #8d99ae; }
.loading-overlay { text-align: center; padding: 2rem; color: #8d99ae; }
.recommend-form { display: flex; flex-direction: column; gap: 5px; }
.patient-info-display { padding: 15px; border-radius: 8px; background-color: #e9ecef; text-align: start; margin-bottom: 1rem; }
.checkbox-group label { display: flex; align-items: center; gap: 10px; font-weight: normal; }
.checkbox-group input { width: auto; }
.doctor-exposure-section { border-top: 1px dashed #d3dce6; padding-top: 20px; margin-top: 10px; }
.section-title { text-align: center; font-weight: 600; color: #6a7483; margin: 1.5rem 0 1rem; }
.pregnancy-section { border: 1px solid #eef2f7; border-radius: 8px; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
</style>
