<!-- views/RecommendView.vue -->
<script setup>
import { ref, inject, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { collection, addDoc, doc, getDoc } from 'firebase/firestore'

const router = useRouter()
const route = useRoute()
const currentLanguage = inject('currentLanguage')
const db = inject('db')
const currentUserId = inject('currentUserId')
const isAuthReady = inject('isAuthReady')
const VITE_APP_ID = import.meta.env.VITE_APP_ID

// Reactive state for form inputs
const age = ref(null)
const gender = ref('')
const medicalHistory = ref('')
const currentSymptoms = ref('')
const allergies = ref('')
const isPregnant = ref(false)
const previousRadiationExposure = ref('')
const scanType = ref('')

// Reactive state for AI response and UI feedback
const recommendationResult = ref('')
const factorDetails = ref(null)
const calculatedMsv = ref(null)
const isLoading = ref(false)
const errorMessage = ref('')

// Patient details from route params
const patientId = ref(route.params.patientId || '')
const patientName = ref('')
const patientAge = ref(null)
const patientGender = ref('')

// Function to fetch and pre-fill patient details
const fetchPatientDetails = async (id) => {
  if (!id || !db || !currentUserId.value) return

  const userIdVal = currentUserId.value
  const patientDocRef = doc(db, `artifacts/${VITE_APP_ID}/users/${userIdVal}/patients`, id)

  try {
    const patientSnap = await getDoc(patientDocRef)
    if (patientSnap.exists()) {
      const patientData = patientSnap.data()
      patientName.value = patientData.name
      patientAge.value = patientData.age
      patientGender.value = patientData.gender
      // Pre-fill form
      age.value = patientData.age
      gender.value = patientData.gender.toLowerCase()
      medicalHistory.value = patientData.medicalHistory?.join(', ') || ''
      allergies.value = patientData.allergies?.join(', ') || ''
      previousRadiationExposure.value = patientData.previousRadiationExposure?.join(', ') || ''
    } else {
      console.warn('Patient not found for ID:', id)
    }
  } catch (error) {
    console.error('Error fetching patient details:', error)
  }
}

// Watch for auth readiness and route changes
watch(
  [isAuthReady, () => route.params.patientId],
  ([ready, newPatientId]) => {
    patientId.value = newPatientId || ''
    // Clear form when patient changes or is cleared
    if (!patientId.value) {
        patientName.value = ''
        patientAge.value = null
        patientGender.value = ''
        age.value = null
        gender.value = ''
        medicalHistory.value = ''
        currentSymptoms.value = ''
        allergies.value = ''
        isPregnant.value = false
        previousRadiationExposure.value = ''
    } else if (ready) {
        fetchPatientDetails(patientId.value)
    }
  },
  { immediate: true },
)

const getRecommendations = async () => {
  isLoading.value = true
  errorMessage.value = ''
  recommendationResult.value = ''
  factorDetails.value = null
  calculatedMsv.value = null

  // ==================== CRITICAL FIX APPLIED HERE ====================
  // Validation now only checks for age and scanType.
  if (!age.value || !scanType.value) {
    errorMessage.value =
      currentLanguage.value === 'en'
        ? 'Please fill in the required fields (Age, Type of Scan).'
        : 'الرجاء تعبئة الحقول المطلوبة (العمر، نوع الفحص).'
    isLoading.value = false
    return
  }
  // ====================================================================

  const patientIdentifier = patientName.value || (currentLanguage.value === 'en' ? 'Unspecified Patient' : 'مريض غير محدد');

  // Prompt now handles optional fields gracefully by providing defaults.
  const prompt =
    currentLanguage.value === 'en'
      ? `Based on the following patient details, provide a medical recommendation for an X-ray or CT scan.
    Also, estimate the typical Tube Voltage (kV), Tube Current (mA), Exposure Time (ms) for the recommended scan, and the approximate Effective Dose (mSv).
    Patient Name: ${patientIdentifier}
    Age: ${age.value}
    Gender: ${gender.value || 'Not specified'}
    Medical History: ${medicalHistory.value || 'Not provided'}
    Current Symptoms: ${currentSymptoms.value || 'Not provided'}
    Allergies: ${allergies.value || 'None specified'}
    Is Pregnant: ${isPregnant.value ? 'Yes' : 'No'}
    Previous Radiation Exposure: ${previousRadiationExposure.value || 'None known'}
    Type of Scan to Consider: ${scanType.value}

    The recommendation should be concise and professional. You must provide a numerical estimate for all scan factors.
    Provide the response in a JSON format with keys: "recommendationText", "factorDetails" (with "tubeVoltageKv", "tubeCurrentMa", "exposureTimeMs"), and "calculatedMsv".`
      : `بناءً على تفاصيل المريض التالية، قدم توصية طبية ...
    اسم المريض: ${patientIdentifier}، العمر: ${age.value}، الجنس: ${gender.value || 'غير محدد'}، التاريخ الطبي: ${medicalHistory.value || 'لم يتم تقديمه'}، الأعراض الحالية: ${currentSymptoms.value || 'لم يتم تقديمها'}، الحساسية: ${allergies.value || 'غير محدد'}، هل هي حامل: ${isPregnant.value ? 'نعم' : 'لا'}، التعرض السابق للإشعاع: ${previousRadiationExposure.value || 'لا يوجد'}، نوع الفحص: ${scanType.value}.
    يجب أن تقدم تقديرًا رقميًا لجميع عوامل الفحص. قدم الاستجابة بتنسيق JSON.`;

  try {
    const chatHistory = [{ role: 'user', parts: [{ text: prompt }] }]
    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: {
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
              required: ['tubeVoltageKv', 'tubeCurrentMa', 'exposureTimeMs']
            },
            calculatedMsv: { type: 'NUMBER' },
          },
          required: ['recommendationText', 'factorDetails', 'calculatedMsv'],
        },
      },
    }

    const apiKey = import.meta.env.VITE_GEMINI_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`API request failed with status ${response.status}`)

    const result = await response.json()

    if (result.candidates && result.candidates[0]?.content?.parts?.[0]) {
      const jsonResponse = JSON.parse(result.candidates[0].content.parts[0].text)
      recommendationResult.value = jsonResponse.recommendationText
      factorDetails.value = jsonResponse.factorDetails
      calculatedMsv.value = jsonResponse.calculatedMsv

      if (db && currentUserId.value) {
        await addDoc(collection(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/recommendationHistory`), {
          patientId: patientId.value || null,
          patientName: patientName.value || null,
          age: age.value,
          gender: gender.value || null,
          medicalHistory: medicalHistory.value || null,
          currentSymptoms: currentSymptoms.value || null,
          allergies: allergies.value || null,
          isPregnant: isPregnant.value,
          previousRadiationExposure: previousRadiationExposure.value || null,
          scanType: scanType.value,
          recommendation: recommendationResult.value,
          factorDetails: factorDetails.value,
          calculatedMsv: calculatedMsv.value,
          timestamp: new Date(),
          language: currentLanguage.value,
        })
      }
    } else {
      errorMessage.value = currentLanguage.value === 'en' ? 'Could not get a valid recommendation.' : 'تعذر الحصول على توصية صالحة.'
    }
  } catch (error) {
    console.error('Error generating recommendation:', error)
    errorMessage.value = `An error occurred: ${error.message}`
  } finally {
    isLoading.value = false
  }
}

const goToDashboard = () => router.push('/dashboard')
const goToPatientList = () => router.push('/patients')
</script>

<template>
  <div class="recommend-page">
    <main class="recommend-main-content">
      <section class="recommend-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Medical Scan Recommendation' : 'توصية الفحص الطبي' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{
            currentLanguage === 'en'
              ? 'Enter patient details to receive recommendations for X-ray or CT scans.'
              : 'أدخل تفاصيل المريض لتلقي توصيات بشأن فحوصات الأشعة السينية أو الأشعة المقطعية.'
          }}
        </p>

        <div v-if="patientId && patientName" class="patient-info-display" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'For Patient:' : 'للمريض:' }}
          <strong>{{ patientName }}</strong>
        </div>
        <div v-else class="patient-info-display general-info" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <p>{{ currentLanguage === 'en' ? 'No patient selected. A general recommendation will be generated.' : 'لم يتم اختيار مريض. سيتم إنشاء توصية عامة.' }}</p>
        </div>

        <p class="text-sm font-semibold text-red-600 text-center mb-6" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Disclaimer: For informational purposes only. Not for clinical use.' : 'إخلاء مسؤولية: لأغراض إعلامية فقط. ليس للاستخدام السريري.' }}
        </p>

        <form @submit.prevent="getRecommendations" class="recommend-form">
          <div class="form-group">
            <label for="age" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{ 'text-right w-full': currentLanguage === 'ar' }">
              {{ currentLanguage === 'en' ? 'Age (Years)' : 'العمر (سنوات)' }}
              <span class="required-indicator">
                {{ currentLanguage === 'en' ? '(Required)' : '(مطلوب)' }}
              </span>
            </label>
            <input type="number" id="age" v-model="age" :placeholder="currentLanguage === 'en' ? 'e.g., 35' : 'مثال: 35'" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" required min="0" />
          </div>

          <div class="form-group">
            <label for="gender"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              :class="{ 'text-right w-full': currentLanguage === 'ar' }"
              required>
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              <span class="required-indicator">{{currentLanguage === 'en' ? Required : مطلوب}}</span>
            <span class="required-indicator">
              {{ currentLanguage === 'en' ? '(Required)' : '(مطلوب)' }}
            </span>
            </label>
            <select id="gender" v-model="gender" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              <option value="">{{ currentLanguage === 'en' ? 'Select Gender (Optional)' : 'اختر الجنس (اختياري)' }}</option>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
              <option value="other">{{ currentLanguage === 'en' ? 'Other' : 'آخر' }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="medicalHistory" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{ 'text-right w-full': currentLanguage === 'ar' }">
              {{ currentLanguage === 'en' ? 'Medical History' : 'التاريخ الطبي' }}
            </label>
            <textarea id="medicalHistory" v-model="medicalHistory" rows="3" :placeholder="currentLanguage === 'en' ? 'Optional: e.g., Diabetes' : 'اختياري: مثال: السكري'" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"></textarea>
          </div>

          <div class="form-group">
            <label for="currentSymptoms" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{ 'text-right w-full': currentLanguage === 'ar' }">
              {{ currentLanguage === 'en' ? 'Current Symptoms' : 'الأعراض الحالية' }}
            </label>
            <textarea id="currentSymptoms" v-model="currentSymptoms" rows="3" :placeholder="currentLanguage === 'en' ? 'Optional: e.g., Persistent cough' : 'اختياري: مثال: سعال مستمر'" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"></textarea>
          </div>

          <div class="form-group">
            <label for="allergies" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{ 'text-right w-full': currentLanguage === 'ar' }">
              {{ currentLanguage === 'en' ? 'Allergies' : 'الحساسية' }}
            </label>
            <textarea id="allergies" v-model="allergies" rows="2" :placeholder="currentLanguage === 'en' ? 'Optional: e.g., Iodine' : 'اختياري: مثال: اليود'" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"></textarea>
          </div>
  <div class="form-group" v-if="gender === 'female'">
    <div
      class="flex items-center w-full"
      :class="[
        currentLanguage === 'ar' ? 'flex-row-reverse justify-end text-right' : 'flex-row justify-start text-left'
      ]"
    >
      <!-- Label with conditional margin for spacing -->
      <label
          v-if="currentLanguage === 'en'"
        :class="currentLanguage === 'ar' ? 'ml-1 text-gray-700' : 'mr-1 text-gray-700'"
        for="isPregnant"
      >
        Is the patient pregnant?
      </label>

      <!-- Checkbox with fixed size and flex-none to prevent stretching -->
      <input
        type="checkbox"
        id="isPregnant"
        v-model="isPregnant"
        class="h-4 w-4 flex-none text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
          v-if="currentLanguage === 'ar'"
        :class="currentLanguage === 'ar' ? 'ml-1 text-gray-700' : 'mr-1 text-gray-700'"
        for="isPregnant"
      >
        هل المريضة حامل؟      </label>
    </div>
  </div>

          <div class="form-group">
            <label for="previousRadiationExposure" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{ 'text-right w-full': currentLanguage === 'ar' }">
              {{ currentLanguage === 'en' ? 'Previous Radiation Exposure' : 'التعرض السابق للإشعاع' }}
            </label>
            <input type="text" id="previousRadiationExposure" v-model="previousRadiationExposure" :placeholder="currentLanguage === 'en' ? 'Optional: e.g., Chest X-ray 6 months ago' : 'اختياري: مثال: أشعة للصدر قبل 6 أشهر'" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" />
          </div>

          <div class="form-group">
            <label for="scanType" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{ 'text-right w-full': currentLanguage === 'ar' }">
              {{ currentLanguage === 'en' ? 'Type of Scan to Consider' : 'نوع الفحص' }}
              <span class="required-indicator">
                {{ currentLanguage === 'en' ? '(Required)' : '(مطلوب)' }}
              </span>
            </label>
            <select id="scanType" v-model="scanType" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" required>
              <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Scan Type' : 'اختر نوع الفحص' }}</option>
              <option value="X-ray">{{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}</option>
              <option value="CT">{{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}</option>
              <option value="Both">{{ currentLanguage === 'en' ? 'Both (X-ray and CT)' : 'كلاهما' }}</option>
            </select>
          </div>

          <button type="submit" class="action-button primary recommend-button" :disabled="isLoading">
            <span v-if="isLoading">
              {{ currentLanguage === 'en' ? 'Getting Recommendations...' : 'جاري الحصول على التوصيات...' }}
            </span>
            <span v-else>
              {{ currentLanguage === 'en' ? 'Get Recommendations' : 'الحصول على التوصيات' }}
            </span>
          </button>
        </form>

        <div v-if="errorMessage" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ errorMessage }}
        </div>

        <div v-if="recommendationResult" class="prediction-result" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <h3>{{ currentLanguage === 'en' ? 'Recommendations:' : 'التوصيات:' }}</h3>
          <div v-if="factorDetails" class="factor-details mt-4">
            <h4>{{ currentLanguage === 'en' ? 'Predicted Scan Factors:' : 'عوامل الفحص المتوقعة:' }}</h4>
            <p><strong>{{ currentLanguage === 'en' ? 'Voltage:' : 'الجهد:' }}</strong> {{ factorDetails.tubeVoltageKv }} kV</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Current:' : 'التيار:' }}</strong> {{ factorDetails.tubeCurrentMa }} mA</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Time:' : 'الوقت:' }}</strong> {{ factorDetails.exposureTimeMs }} ms</p>
          </div>
          <div v-if="calculatedMsv !== null" class="msv-details mt-4">
            <h4>{{ currentLanguage === 'en' ? 'Effective Dose:' : 'الجرعة الفعالة:' }}</h4>
            <p><strong>{{ calculatedMsv }} mSv</strong></p>
          </div>
          <div class="result-text" v-html="recommendationResult"></div>
        </div>

        <p class="switch-link-container mt-8" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <a href="#" @click.prevent="goToDashboard">
            {{ currentLanguage === 'en' ? 'Back to Dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.recommend-page { display: flex; flex-direction: column; min-height: 100vh; width: 100%; }
.recommend-main-content { flex-grow: 1; display: flex; justify-content: center; align-items: center; padding: 30px; background-color: #f8f9fa; }
.recommend-card { background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); max-width: 700px; width: 100%; }
.recommend-card h2 { color: #8d99ae; margin-bottom: 20px; font-size: 2em; font-weight: 700; text-align: center; }
.recommend-card p { color: #555; margin-bottom: 30px; font-size: 1.1em; text-align: center; }
.patient-info-display { padding: 15px; border-radius: 8px; background-color: #e9ecef; text-align: start; margin-bottom: 20px; }
.patient-info-display.general-info { background-color: #f8f9fa; }
.required-indicator { color: #d32f2f; font-weight: normal; font-size: 0.9em; margin-left: 4px; }
[dir="rtl"] .required-indicator { margin-left: 0; margin-right: 4px; }
.recommend-form { display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px; }
.form-group { text-align: left; }
.form-group label { display: block; margin-bottom: 8px; color: #333; font-weight: 600; }
.form-group input:not([type="checkbox"]), .form-group textarea, .form-group select { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 8px; font-size: 1em; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
.form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline: none; border-color: #8d99ae; box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2); }
.action-button { background-color: #8d99ae; color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 1.15em; font-weight: 600; transition: all 0.3s ease; width: 100%; margin-top: 10px; }
.action-button:hover { background-color: #6a7483; transform: translateY(-2px); }
.action-button:disabled { background-color: #b0b0b0; cursor: not-allowed; }
.message { margin-top: 20px; padding: 10px 15px; border-radius: 8px; font-weight: 500; text-align: center; }
.error-message { background-color: #ffe0e0; color: #d32f2f; border: 1px solid #d32f2f; }
.prediction-result { margin-top: 30px; padding: 20px; background-color: #e6f7ff; border: 1px solid #91d5ff; border-radius: 8px;}
.prediction-result h3 { color: #1890ff; font-size: 1.4em; text-align: center; }
.prediction-result h4 { color: #40a9ff; font-size: 1.2em; text-align: center; }
.switch-link-container { margin-top: 25px; font-size: 0.95em; color: #666; text-align: center; }
.switch-link-container a { color: #8d99ae; text-decoration: none; font-weight: 600; }
/* Ensure checkboxes retain their normal appearance */
.form-group input[type="checkbox"] {
  width: auto; /* Override the 100% width for checkboxes */
  height: auto; /* Override if any global height is applied */
  margin: 10px;
  padding: 0;   /* Remove padding that doesn't belong on checkboxes */
  border: initial; /* Reset border if inherited from .form-group input */
  border-radius: initial; /* Reset border-radius if inherited */
}
</style>
