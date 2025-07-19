<script setup>
import { ref, inject, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute() // Get the current route object
const authStore = useAuthStore()

const currentLanguage = inject('currentLanguage')
const db = inject('db')
const VITE_APP_ID = import.meta.env.VITE_APP_ID
const currentTotalMsv = inject('currentMsv')
const yearlyLimit = inject('yearlyLimit')

// --- ✅ FIX: Use route.query instead of route.params ---
const patientId = ref(route.query.patientId || null)

// --- Reactive State ---
const patientName = ref('')
const age = ref(null)
const gender = ref('')
const medicalHistory = ref('')
const currentSymptoms = ref('')
const allergies = ref('')
const isPregnant = ref(false)
const previousRadiationExposure = ref('')
const scanType = ref('')
const doctorAdditionalContext = ref('')

// UI and AI State
const recommendationResult = ref('')
const factorDetails = ref(null)
const patientCalculatedMsv = ref(null)
const doctorOccupationalMsv = ref(null)
const isLoading = ref(false)
const errorMessage = ref('')
const warningMessage = ref('')

const userRole = computed(() => authStore.role)

const fetchPatientDetails = async (id) => {
  if (!id || !db || !authStore.user) return
  isLoading.value = true
  try {
    const patientDocRef = doc(
      db,
      `artifacts/${VITE_APP_ID}/users/${authStore.user.uid}/patients`,
      id,
    )
    const patientSnap = await getDoc(patientDocRef)
    if (patientSnap.exists()) {
      const patientData = patientSnap.data()
      patientName.value = patientData.name
      age.value = patientData.age
      gender.value = patientData.gender.toLowerCase()
      medicalHistory.value = patientData.medicalHistory?.join(', ') || ''
      allergies.value = patientData.allergies?.join(', ') || ''
      previousRadiationExposure.value = patientData.previousRadiationExposure?.join(', ') || ''
    }
  } catch (e) {
    console.error('Error fetching patient details:', e)
  } finally {
    isLoading.value = false
  }
}

// --- ✅ FIX: Watch route.query.patientId for changes ---
watch(
  () => route.query.patientId,
  (newId) => {
    patientId.value = newId
    if (newId) {
      fetchPatientDetails(newId)
    }
  },
  { immediate: true },
)

const getRecommendations = async () => {
  isLoading.value = true
  errorMessage.value = ''
  recommendationResult.value = ''
  patientCalculatedMsv.value = null
  doctorOccupationalMsv.value = null
  factorDetails.value = null
  warningMessage.value = ''

  if (!age.value || !scanType.value) {
    errorMessage.value =
      currentLanguage.value === 'en'
        ? 'Age and Scan Type are required.'
        : 'العمر ونوع الفحص حقول مطلوبة.'
    isLoading.value = false
    return
  }

  let prompt = ''
  let responseSchema = {}

  if (userRole.value === 'doctor') {
    prompt = `A doctor is requesting a recommendation for a patient scan.
      User's Current State: The doctor's current total annual occupational dose is ${currentTotalMsv.value.toFixed(
        2,
      )} mSv. The recommended yearly limit for a doctor is ${yearlyLimit.value} mSv.
      Patient Details: Age: ${age.value}, Gender: ${gender.value}, Medical History: ${
        medicalHistory.value || 'None'
      }, Symptoms: ${currentSymptoms.value || 'None'}, Pregnant: ${
        isPregnant.value ? 'Yes' : 'No'
      }, Previous Radiation: ${
        previousRadiationExposure.value || 'None'
      }, Scan Type to consider: ${scanType.value}.
      Doctor's Additional Context for Occupational Exposure: ${
        doctorAdditionalContext.value || 'No additional context provided.'
      }
      Tasks: 1. Provide a concise professional recommendation for the patient. 2. Estimate the scan factors (tubeVoltageKv, tubeCurrentMa, exposureTimeMs). 3. Estimate the patient's effective dose (patientCalculatedMsv). 4. Estimate the doctor's occupational dose (doctorOccupationalMsv) from this single procedure. 5. Based on the doctor's current dose and the estimated occupational dose from this scan, add a specific, clear "Warning" field in your response if their new total will exceed the ${
        yearlyLimit.value
      } mSv limit. This field MUST contain a warning message. If it does not exceed the limit, this field should be an empty string.
      The entire response MUST be in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`

    responseSchema = {
      type: 'OBJECT',
      properties: {
        recommendationText: { type: 'STRING' },
        factorDetails: {
          type: 'OBJECT',
          properties: {
            tubeVoltageKv: { type: 'NUMBER' },
            tubeCurrentMa: { type: 'NUMBER' },
            exposureTimeMs: { type: 'NUMBER' },
          },
        },
        patientCalculatedMsv: { type: 'NUMBER' },
        doctorOccupationalMsv: { type: 'NUMBER' },
        Warning: { type: 'STRING' },
      },
      required: [
        'recommendationText',
        'factorDetails',
        'patientCalculatedMsv',
        'doctorOccupationalMsv',
        'Warning',
      ],
    }
  } else {
    // Patient prompt
    prompt = `A patient is requesting information about a potential scan.
      User's Current State: The patient's current total annual dose is ${currentTotalMsv.value.toFixed(
        2,
      )} mSv. The recommended yearly limit is ${yearlyLimit.value} mSv.
      Patient Details: Age: ${age.value}, Gender: ${gender.value}, Medical History: ${
        medicalHistory.value || 'None'
      }, Symptoms: ${currentSymptoms.value || 'None'}, Pregnant: ${
        isPregnant.value ? 'Yes' : 'No'
      }, Previous Radiation: ${
        previousRadiationExposure.value || 'None'
      }, Scan Type to consider: ${scanType.value}.
      Tasks: 1. Provide a simple, easy-to-understand recommendation. 2. Give general advice regarding radiation exposure. 3. Estimate the patient's effective dose (patientCalculatedMsv) from this single procedure. 4. Based on the patient's current dose and the estimated dose from this scan, add a specific, clear "Warning" field in your response if their new total will exceed the ${
        yearlyLimit.value
      } mSv limit. This field MUST contain a warning message. If it does not exceed the limit, this field should be an empty string.
      The entire response MUST be in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`

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
      generationConfig: { responseMimeType: 'application/json', responseSchema: responseSchema },
    }
    const apiKey = import.meta.env.VITE_GEMINI_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)

    const result = await response.json()
    const jsonResponse = JSON.parse(result.candidates[0].content.parts[0].text)

    recommendationResult.value = jsonResponse.recommendationText
    patientCalculatedMsv.value = jsonResponse.patientCalculatedMsv
    if (jsonResponse.doctorOccupationalMsv !== undefined) {
      doctorOccupationalMsv.value = jsonResponse.doctorOccupationalMsv
    }
    if (jsonResponse.factorDetails) {
      factorDetails.value = jsonResponse.factorDetails
    }
    if (jsonResponse.Warning) {
      warningMessage.value = jsonResponse.Warning
    }
  } catch (error) {
    console.error('Error getting recommendation:', error)
    errorMessage.value = `An error occurred: ${error.message}`
  } finally {
    isLoading.value = false
  }
}

const goToDashboard = () => router.push('/dashboard')
</script>

<template>
  <div class="recommend-page" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <main class="recommend-main-content">
      <section class="recommend-card">
        <h2>
          {{ currentLanguage === 'en' ? 'Medical Scan Recommendation' : 'توصية الفحص الطبي' }}
        </h2>
        <p>
          {{
            userRole === 'doctor'
              ? currentLanguage === 'en'
                ? 'Enter patient and your exposure details for a recommendation.'
                : 'أدخل تفاصيل المريض وتفاصيل تعرضك للحصول على توصية.'
              : currentLanguage === 'en'
                ? 'Enter your details to receive information about a potential scan.'
                : 'أدخل تفاصيلك لتلقي معلومات حول فحص محتمل.'
          }}
        </p>

        <div v-if="patientId && patientName" class="patient-info-display">
          {{ currentLanguage === 'en' ? 'For Patient:' : 'للمريض:' }}
          <strong>{{ patientName }}</strong>
        </div>

        <form @submit.prevent="getRecommendations" class="recommend-form">
          <!-- Common Patient Fields -->
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Age (Years)' : 'العمر (سنوات)' }}
              <span class="required-indicator">*</span>
            </label>
            <input type="number" v-model="age" required />
          </div>
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="gender" required>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>
          <div class="form-group" v-if="gender === 'female'">
            <label class="checkbox-label">
              <input type="checkbox" v-model="isPregnant" />
              <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل هي حامل؟' }}</span>
            </label>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Medical History' : 'التاريخ الطبي' }}</label>
            <textarea v-model="medicalHistory" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Current Symptoms' : 'الأعراض الحالية' }}</label>
            <textarea v-model="currentSymptoms" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Previous Radiation Exposure' : 'التعرض السابق للإشعاع'
            }}</label>
            <input type="text" v-model="previousRadiationExposure" />
          </div>

          <div v-if="userRole === 'doctor'" class="doctor-exposure-section">
            <h3 class="section-title">
              {{
                currentLanguage === 'en'
                  ? 'Doctor Occupational Exposure Details'
                  : 'تفاصيل التعرض المهني للطبيب'
              }}
            </h3>
            <div class="form-group">
              <label>
                {{
                  currentLanguage === 'en'
                    ? 'Additional details affecting your exposure (optional)'
                    : 'تفاصيل إضافية تؤثر على تعرضك (اختياري)'
                }}
              </label>
              <textarea
                v-model="doctorAdditionalContext"
                rows="3"
                :placeholder="
                  currentLanguage === 'en'
                    ? 'e.g., Stood 2 meters from the machine, used a lead apron and thyroid shield...etc'
                    : 'مثال: وقفت على  بعد 2 متر من الجهاز، استخدمت مريول رصاص وواقي للغدة الدرقية...إلخ'
                "
              >
              </textarea>
            </div>
          </div>

          <!-- Scan Type and Submit Button -->
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Type of Scan to Consider' : 'نوع الفحص' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="scanType" required>
              <option value="" disabled>
                {{ currentLanguage === 'en' ? 'Select Scan Type' : 'اختر نوع الفحص' }}
              </option>
              <option value="X-ray">
                {{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}
              </option>
              <option value="CT">
                {{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}
              </option>
            </select>
          </div>
          <button type="submit" :disabled="isLoading" class="action-button">
            {{
              isLoading
                ? currentLanguage === 'en'
                  ? 'Getting Recommendations...'
                  : 'جاري الحصول على التوصيات...'
                : currentLanguage === 'en'
                  ? 'Get Recommendation'
                  : 'الحصول على توصية'
            }}
          </button>
        </form>

        <div v-if="errorMessage" class="message error-message">{{ errorMessage }}</div>

        <div v-if="warningMessage" class="message warning-message">
          <h4>{{ currentLanguage === 'en' ? 'Important Warning' : 'تحذير هام' }}</h4>
          <p>{{ warningMessage }}</p>
        </div>

        <div v-if="recommendationResult" class="prediction-result">
          <h3>
            {{
              currentLanguage === 'en'
                ? 'AI Powered Recommendation'
                : 'التوصية المدعومة بالذكاء الاصطناعي'
            }}
          </h3>
          <div v-if="patientCalculatedMsv !== null" class="msv-details">
            <h4>
              {{ currentLanguage === 'en' ? 'Patient Effective Dose' : 'الجرعة الفعالة للمريض' }}
            </h4>
            <p>
              <strong>{{ patientCalculatedMsv }} mSv</strong>
            </p>
          </div>
          <div v-if="doctorOccupationalMsv !== null" class="msv-details doctor-dose">
            <h4>
              {{ currentLanguage === 'en' ? 'Doctor Occupational Dose' : 'الجرعة المهنية للطبيب' }}
            </h4>
            <p>
              <strong>{{ doctorOccupationalMsv }} mSv</strong>
            </p>
          </div>
          <div v-if="factorDetails" class="factor-details">
            <h4>
              {{ currentLanguage === 'en' ? 'Estimated Scan Factors' : 'عوامل الفحص المقدرة' }}
            </h4>
            <p>
              <strong>Voltage:</strong> {{ factorDetails.tubeVoltageKv }} kV |
              <strong>Current:</strong> {{ factorDetails.tubeCurrentMa }} mA |
              <strong>Time:</strong> {{ factorDetails.exposureTimeMs }} ms
            </p>
          </div>
          <div class="result-text">
            <h4>{{ currentLanguage === 'en' ? 'Recommendation' : 'التوصية' }}</h4>
            <div v-html="recommendationResult"></div>
          </div>
        </div>

        <p class="switch-link-container">
          <a href="#" @click.prevent="goToDashboard">
            {{ currentLanguage === 'en' ? 'Back to Dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.recommend-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}
.recommend-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}
.recommend-card {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
}
.recommend-card h2 {
  color: #8d99ae;
  margin-bottom: 10px;
  font-size: 2em;
  text-align: center;
}
.recommend-card p {
  color: #555;
  margin-bottom: 20px;
  text-align: center;
}
.patient-info-display {
  padding: 15px;
  border-radius: 8px;
  background-color: #e9ecef;
  margin-bottom: 20px;
  text-align: start;
}
.required-indicator {
  color: #d32f2f;
  margin-inline-start: 4px;
}
.recommend-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  box-sizing: border-box;
}
.form-group .checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: normal;
}
.form-group .checkbox-label input[type='checkbox'] {
  width: auto;
}
.action-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  width: 100%;
  margin-top: 10px;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}
.action-button:hover:not(:disabled) {
  background-color: #6a7483;
  transform: translateY(-2px);
}
.action-button:disabled {
  background-color: #b0b0b0;
  cursor: not-allowed;
}
.message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid;
}
.error-message {
  background-color: #ffebee;
  color: #c62828;
  border-color: #ef9a9a;
}
.warning-message {
  background-color: #fff3e0;
  color: #e65100;
  border-color: #ffcc80;
}
.warning-message h4 {
  margin-top: 0;
  font-weight: 700;
}
.prediction-result {
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
.prediction-result h3 {
  text-align: center;
  color: #8d99ae;
}
.prediction-result h4 {
  font-weight: 600;
  margin-top: 15px;
}
.msv-details {
  padding: 10px;
  border-radius: 6px;
  background-color: #e6f7ff;
  text-align: center;
  margin-top: 10px;
}
.msv-details.doctor-dose {
  background-color: #fffbe6;
}
.factor-details p {
  font-size: 0.9em;
  text-align: center;
}
.result-text {
  margin-top: 15px;
}
.doctor-exposure-section {
  border-top: 1px dashed #d3dce6;
  border-bottom: 1px dashed #d3dce6;
  padding: 20px 10px;
  margin: 20px 0;
}
.section-title {
  font-size: 1.2em;
  font-weight: 600;
  color: #6a7483;
  text-align: center;
  margin-bottom: 15px;
}
.switch-link-container {
  text-align: center;
  margin-top: 25px;
}
.switch-link-container a {
  color: #8d99ae;
  font-weight: 600;
  text-decoration: none;
}
</style>
