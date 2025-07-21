<script setup>
import { ref, watch, computed, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'

// --- Pinia Stores and Router ---
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()

// --- Injected State from App.vue ---
const currentLanguage = inject('currentLanguage')
const currentTotalMsv = inject('currentMsv')
// --- FIX #1: Inject the correct name provided by App.vue ---
const doseLimit = inject('doseLimit')

// --- Local Component State ---
const recommendationMode = ref('personal') // 'personal' or 'general'
const form = ref({
  patientId: null,
  patientName: '',
  birthDate: '',
  gender: 'male',
  medicalHistory: '',
  currentSymptoms: '',
  allergies: '',
  isPregnant: false,
  previousRadiationExposure: '',
  scanType: '',
  doctorAdditionalContext: '',
})

// UI and AI State
const isLoading = ref(false)
const isFetchingPatient = ref(false)
const aiResponse = ref(null)
const errorMessage = ref('')

const userRole = computed(() => authStore.role)

// --- Data Loading Functions ---
const clearForm = () => {
  form.value = {
    patientId: null, patientName: '', birthDate: '', gender: 'male', medicalHistory: '',
    currentSymptoms: '', allergies: '', isPregnant: false, previousRadiationExposure: '',
    scanType: '', doctorAdditionalContext: '',
  }
}

const loadPatientData = async (id) => {
  if (!id) return
  isFetchingPatient.value = true
  clearForm()
  try {
    const patientData = await databaseStore.fetchPatientProfile(id)
    if (patientData) {
      // --- FIX #2: Add robust date handling to prevent crashes ---
      let birthDateString = ''
      if (patientData.birthDate) {
        if (typeof patientData.birthDate.toDate === 'function') {
          // It's a Firestore Timestamp
          birthDateString = patientData.birthDate.toDate().toISOString().split('T')[0]
        } else {
          // It's likely a JS Date object or a string
          birthDateString = new Date(patientData.birthDate).toISOString().split('T')[0]
        }
      }

      form.value.patientId = id
      form.value.patientName = patientData.displayName
      form.value.birthDate = birthDateString
      form.value.gender = patientData.gender || 'male'
      form.value.medicalHistory = patientData.medicalHistory?.join(', ') || ''
      form.value.allergies = patientData.allergies?.join(', ') || ''
    }
  } catch (e) {
    console.error('Error fetching patient details:', e)
    errorMessage.value = 'Failed to load patient data.'
  } finally {
    isFetchingPatient.value = false
  }
}

// --- Watchers for Reactivity ---
watch(recommendationMode, (newMode) => {
  aiResponse.value = null
  if (newMode === 'personal' && authStore.user) {
    loadPatientData(authStore.user.uid)
  } else {
    if (!route.query.patientId) {
      clearForm()
    }
  }
})

watch(
  () => route.query.patientId,
  (newId) => {
    if (newId) {
      recommendationMode.value = 'general'
      loadPatientData(newId)
    } else {
      recommendationMode.value = 'personal'
      if (authStore.user) {
        loadPatientData(authStore.user.uid)
      }
    }
  },
  { immediate: true },
)

// --- AI Recommendation Logic ---
const getRecommendations = async () => {
  // ... (This entire function remains the same, but now uses 'doseLimit.value' correctly)
  isLoading.value = true
  errorMessage.value = ''
  aiResponse.value = null

  if (!form.value.birthDate || !form.value.scanType) {
    errorMessage.value = 'Date of Birth and Scan Type are required.'
    isLoading.value = false
    return
  }

  const age = new Date().getFullYear() - new Date(form.value.birthDate).getFullYear()
  let prompt = ''
  let responseSchema = {}

  if (userRole.value === 'doctor') {
    prompt = `As a medical radiation safety advisor, provide a recommendation for a patient scan. The primary goal is to adhere to the ALARA (As Low As Reasonably Achievable) principle.
      - Doctor's Current State: Annual occupational dose is ${currentTotalMsv.value.toFixed(2)} mSv. The effective annual limit is ${doseLimit.value} mSv.
      - Patient Details: Age: ${age}, Gender: ${form.value.gender}, Medical History: ${form.value.medicalHistory || 'None'}, Current Symptoms: ${form.value.currentSymptoms || 'None'}, Pregnant: ${form.value.isPregnant ? 'Yes' : 'No'}, Previous Diagnostic Radiation: ${form.value.previousRadiationExposure || 'None'}.
      - Scan being considered: ${form.value.scanType}.
      - Doctor's Context: ${form.value.doctorAdditionalContext || 'No additional context provided.'}

      Tasks:
      1.  **Recommendation (recommendationText):** Write a professional recommendation. Justify if the scan is appropriate based on symptoms and history, or if an alternative (e.g., Ultrasound, MRI) or a lower-dose protocol should be considered.
      2.  **Dose Estimation (patientCalculatedMsv):** Estimate the patient's effective dose in mSv from this single scan.
      3.  **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's occupational dose in mSv from this procedure.
      4.  **Warning (Warning):** If the doctor's new total occupational dose will exceed their effective limit of ${doseLimit.value} mSv, this field MUST contain a clear warning message. Otherwise, it must be an empty string.

      The entire response MUST be valid JSON and in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    responseSchema = { type: 'OBJECT', properties: { recommendationText: { type: 'STRING' }, patientCalculatedMsv: { type: 'NUMBER' }, doctorOccupationalMsv: { type: 'NUMBER' }, Warning: { type: 'STRING' } }, required: ['recommendationText', 'patientCalculatedMsv', 'doctorOccupationalMsv', 'Warning'] }
  } else {
    prompt = `As a patient advocate, provide clear information about a potential medical scan.
      - My Current Status: My estimated radiation dose this year is ${currentTotalMsv.value.toFixed(2)} mSv. The recommended annual limit for the public is ${doseLimit.value} mSv.
      - My Details: Born on ${form.value.birthDate}, Gender: ${form.value.gender}, Medical History: ${form.value.medicalHistory || 'None'}, Symptoms: ${form.value.currentSymptoms || 'None'}, Pregnant: ${form.value.isPregnant ? 'Yes' : 'No'}.
      - Scan I am considering: ${form.value.scanType}.

      Tasks:
      1.  **Information (recommendationText):** Explain the purpose of this scan in simple terms. Provide general advice on discussing the risks and benefits with my doctor.
      2.  **Dose Estimation (patientCalculatedMsv):** Estimate my effective dose in mSv from this single scan.
      3.  **Warning (Warning):** If my new total dose for the year will exceed the ${doseLimit.value} mSv limit, this field MUST contain a clear warning message. Otherwise, it must be an empty string.

      The entire response MUST be valid JSON and in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    responseSchema = { type: 'OBJECT', properties: { recommendationText: { type: 'STRING' }, patientCalculatedMsv: { type: 'NUMBER' }, Warning: { type: 'STRING' } }, required: ['recommendationText', 'patientCalculatedMsv', 'Warning'] }
  }

  try {
    const payload = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', responseSchema: responseSchema } }
    const apiKey = import.meta.env.VITE_GEMINI_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)

    const result = await response.json()
    aiResponse.value = JSON.parse(result.candidates[0].content.parts[0].text)
  } catch (error) {
    console.error('Error getting recommendation:', error)
    errorMessage.value = `An error occurred: ${error.message}`
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

        <!-- Mode Switcher -->
        <div class="mode-switcher">
          <button :class="{ active: recommendationMode === 'personal' }" @click="recommendationMode = 'personal'">
            {{ currentLanguage === 'en' ? 'For Myself' : 'لنفسي' }}
          </button>
          <button :class="{ active: recommendationMode === 'general' }" @click="recommendationMode = 'general'">
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
            <input type="date" v-model="form.birthDate" required :disabled="recommendationMode === 'personal'" />
          </div>
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="form.gender" required :disabled="recommendationMode === 'personal'">
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>
          <div class="form-group" v-if="form.gender === 'female'">
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.isPregnant" />
              <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل هي حامل؟' }}</span>
            </label>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Relevant Medical History' : 'التاريخ الطبي ذو الصلة' }}</label>
            <textarea v-model="form.medicalHistory" rows="3" :disabled="recommendationMode === 'personal'"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Current Symptoms' : 'الأعراض الحالية' }}</label>
            <textarea v-model="form.currentSymptoms" rows="3"></textarea>
          </div>

          <div v-if="userRole === 'doctor'" class="doctor-exposure-section">
            <h3 class="section-title">{{ currentLanguage === 'en' ? 'Occupational Exposure Context' : 'سياق التعرض المهني' }}</h3>
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Your positioning, shielding, etc. (Optional)' : 'موقعك، التدريع المستخدم، إلخ (اختياري)' }}</label>
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
            {{ isLoading ? 'Getting Recommendations...' : 'Get Recommendation' }}
          </button>
        </form>

        <div v-if="errorMessage" class="message error-message">{{ errorMessage }}</div>

        <div v-if="aiResponse">
          <div v-if="aiResponse.Warning" class="message warning-message">
            <h4>{{ currentLanguage === 'en' ? 'Important Warning' : 'تحذير هام' }}</h4>
            <p>{{ aiResponse.Warning }}</p>
          </div>

          <div class="prediction-result">
            <h3>{{ currentLanguage === 'en' ? 'AI Powered Recommendation' : 'التوصية المدعومة بالذكاء الاصطناعي' }}</h3>
            <div class="msv-details-container">
              <div v-if="aiResponse.patientCalculatedMsv !== null" class="msv-details">
                <h4>{{ currentLanguage === 'en' ? 'Patient Dose' : 'جرعة المريض' }}</h4>
                <p><strong>{{ aiResponse.patientCalculatedMsv }} mSv</strong></p>
              </div>
              <div v-if="aiResponse.doctorOccupationalMsv !== null" class="msv-details doctor-dose">
                <h4>{{ currentLanguage === 'en' ? 'Doctor Dose' : 'جرعة الطبيب' }}</h4>
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
/* Styles remain unchanged */
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
.msv-details-container { display: flex; gap: 1rem; justify-content: center; }
.msv-details { text-align: center; padding: 1rem; border-radius: 8px; flex: 1; }
.msv-details h4 { margin: 0; font-size: 0.9em; color: #555; }
.msv-details p { margin: 0.5rem 0 0; font-size: 1.5em; }
.msv-details.doctor-dose { background-color: #fffbe6; }
.result-text { margin-top: 1.5rem; }
.switch-link-container { text-align: center; margin-top: 2rem; }
.switch-link-container a { color: #8d99ae; }
.loading-overlay { text-align: center; padding: 2rem; color: #8d99ae; }
.recommend-form { display: flex; flex-direction: column; gap: 15px; }
.patient-info-display { padding: 15px; border-radius: 8px; background-color: #e9ecef; text-align: start; }
.checkbox-label { display: flex; align-items: center; gap: 10px; font-weight: normal; }
.checkbox-label input { width: auto; }
.doctor-exposure-section { border-top: 1px dashed #d3dce6; padding: 20px 0; }
.section-title { text-align: center; font-weight: 600; color: #6a7483; }
</style>
