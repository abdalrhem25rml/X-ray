<script setup>
import { ref, watch, computed, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Timestamp } from 'firebase/firestore'

// --- Pinia and Vue Router ---
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

// --- Injected global app states ---
const currentLanguage = inject('currentLanguage')
const doseLimit = inject('doseLimit')

// --- Local state ---
const isGuest = computed(() => !authStore.user)

// Form model for guest inputs and scan details
const form = ref({
  weight: null,
  birthDate: '',
  gender: 'male',
  medicalHistory: '',
  previousYearDose: 0,  // patients can fill their previous cumulative mSv exposure
  isPregnant: false,
  estimatedDueDate: '',
  scanType: 'CT',
  scanPlace: '',
  otherScanPlaceDescription: '',
  subScanType: '',
  otherScanDescription: '',
  numberOfScans: 1,
  currentSymptoms: '',
})

const scanSubtypes = {
  CT: [
    { value: 'Abdomen & Pelvis', en: 'Abdomen & Pelvis', ar: 'البطن والحوض' },
    { value: 'Brain with contrast', en: 'Brain with contrast', ar: 'الدماغ بمادة تباين' },
    { value: 'Angiography CTA', en: 'Angiography CTA', ar: 'تصوير الأوعية CTA' },
    { value: 'Urography', en: 'Urography', ar: 'تصوير المسالك البولية' },
    { value: 'Enterography', en: 'Enterography', ar: 'تصوير الأمعاء' },
    { value: 'Other', en: 'Other...', ar: 'أخرى...' },
  ],
  'X-ray': [
    { value: 'Barium Enema', en: 'Barium Enema', ar: 'حقنة الباريوم الشرجية' },
    { value: 'IV Urogram (IVP)', en: 'IV Urogram (IVP)', ar: 'أشعة المسالك البولية (IVP)' },
    { value: 'HSG', en: 'HSG', ar: 'أشعة الرحم (HSG)' },
    { value: 'VCUG', en: 'VCUG', ar: 'دراسة المثانة بالصبغة (VCUG)' },
    { value: 'Other', en: 'Other...', ar: 'أخرى...' },
  ],
}
const scanPlaces = [
  { value: 'head', en: 'Head', ar: 'الرأس' },
  { value: 'neck', en: 'Neck', ar: 'الرقبة' },
  { value: 'chest', en: 'Chest', ar: 'الصدر' },
  { value: 'abdomen', en: 'Abdomen', ar: 'البطن' },
  { value: 'pelvis', en: 'Pelvis', ar: 'الحوض' },
  { value: 'spine', en: 'Spine', ar: 'العمود الفقري' },
  { value: 'upper_extremity', en: 'Upper Extremity', ar: 'الطرف العلوي' },
  { value: 'lower_extremity', en: 'Lower Extremity', ar: 'الطرف السفلي' },
  { value: 'other', en: 'Other', ar: 'أخرى' },
]

// Dose fallback estimates table
const fallbackDoseEstimates = {
  patient: {
    'CT': { 'Abdomen & Pelvis': 14, 'Brain with contrast': 2, 'Angiography CTA': 12, 'Urography': 8, 'Enterography': 8, 'default': 6 },
    'X-ray': { 'Barium Enema': 7, 'IV Urogram (IVP)': 2.5, 'HSG': 1.5, 'VCUG': 1.0, 'default': 0.5 }
  }
}

const currentScanSubtypes = computed(() => scanSubtypes[form.value.scanType] || [])
const showOtherInput = computed(() => form.value.subScanType === 'Other')
const showOtherScanPlaceInput = computed(() => form.value.scanPlace === 'other')

const isLoading = ref(false)
const errorMessage = ref('')
const aiResponse = ref(null)
const renderedRecommendation = computed(() => {
  if (aiResponse.value && aiResponse.value.recommendationText) {
    return md.render(aiResponse.value.recommendationText);
  }
  return '';
});

// Compute patient cumulative dose (previous + current scan estimate)
const patientDoseEstimate = computed(() => {
  const baseDose = getFallbackDose('patient')
  if (baseDose === null) return null
  return (parseFloat(form.value.previousYearDose) || 0) + baseDose
})

// Determine if patient is overdosed based on injected doseLimit
const isOverdose = computed(() => {
  if (patientDoseEstimate.value === null) return false
  return patientDoseEstimate.value > doseLimit.value
})

// Get fallback dose based on scan info and fallback table
function getFallbackDose(doseFor) {
  try {
    const scanDetailKey = form.value.subScanType === 'Other' ? 'default' : form.value.subScanType
    const doseTable = fallbackDoseEstimates[doseFor]
    if (!doseTable) return null
    const scanTypeTable = doseTable[form.value.scanType]
    if (!scanTypeTable) return null
    let dose = scanTypeTable[scanDetailKey] ?? scanTypeTable['default']
    if (dose === undefined) return null
    // Multiply by number of scans if X-ray
    if (form.value.scanType === 'X-ray') {
      dose = dose * (form.value.numberOfScans || 1)
    }
    return dose
  } catch {
    return null
  }
}

function toDateString(input) {
  if (!input) return ''
  let d = typeof input?.toDate === 'function' ? input.toDate() : new Date(input)
  return d.toISOString().split('T')[0]
}

watch(() => form.value.gender, (newVal) => {
  if (newVal !== 'female') {
    form.value.isPregnant = false
    form.value.estimatedDueDate = ''
  }
})

watch(() => form.value.scanType, () => {
  form.value.subScanType = ''
  form.value.otherScanDescription = ''
  form.value.numberOfScans = 1
})

// The core function to get AI recommendation
async function getRecommendations() {
  isLoading.value = true
  errorMessage.value = ''
  aiResponse.value = null

  // Validate required fields
  if (!form.value.birthDate) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Date of Birth is required.' : 'تاريخ الميلاد مطلوب.'
    isLoading.value = false
    return
  }

  const hasScanDetails = form.value.scanPlace && form.value.scanType && form.value.subScanType
  // Dose calculation and fallback
  let patientDose = null
  if (hasScanDetails) {
    patientDose = getFallbackDose('patient')
    if (patientDose === null) {
      errorMessage.value = currentLanguage.value === 'en' ? 'Unable to estimate dose for the selected scan.' : 'تعذر تقدير الجرعة للفحص المحدد.'
      isLoading.value = false
      return
    }
  }

  // --- New Prompt Definition ---
  const lang = currentLanguage.value;
  const fullSystemPrompt = `You are an expert medical radiation physicist and AI assistant specialized in radiological protection and dosimetry.
You are assisting in a medical radiation exposure tracking system for X-ray and CT imaging.

Use the following input fields to generate customized recommendations:

- User type: [Doctor / Patient]
- Examination type: [X-ray / CT / Dental / Chest / Abdomen / Limbs / etc.]
- Number of scans: [integer]
- Exposure time: [seconds]
- Patient parameters: [age, sex, pregnancy status, body thickness]
- Distance from source: [cm]
- Shielding availability: [Lead apron / thyroid collar / gonadal shield / none]
- Estimated dose (mSv): [value from AI estimation model]

Now, based on these inputs:

If the user is Patient:
1. Explain the expected radiation dose and its percentage relative to the annual recommended public limit (1 mSv/year).
2. Indicate the risk level qualitatively (e.g., negligible / low / moderate / high).
3. Provide safety tips before and after the scan (e.g., avoid repeated imaging unnecessarily).
4. Advise consulting the doctor about radiation-free alternatives (e.g., ultrasound, MRI) if appropriate for the case.
5. Offer educational notes about radiation safety, purpose of shields, and importance of medical justification.
6. Encourage saving and tracking dose history in the app for cumulative exposure monitoring.

Always provide the output in clear, human-friendly language and reference international safety standards (ICRP 103, IAEA GSR Part 3, WHO 2016).
`;

  // --- Dynamic Prompt Construction ---
  const finalScanDetail = hasScanDetails ? (showOtherInput.value ? form.value.otherScanDescription : form.value.subScanType) : 'N/A';
  const finalScanPlace = hasScanDetails ? (showOtherScanPlaceInput.value ? form.value.otherScanPlaceDescription : form.value.scanPlace) : 'N/A';
  const examinationType = hasScanDetails ? `${form.value.scanType} of the ${finalScanPlace}, protocol: "${finalScanDetail}"` : 'Not specified';

  const prompt = `
    ${fullSystemPrompt}

    ---
    **GENERATE RECOMMENDATION BASED ON THE FOLLOWING DATA. YOU ARE ADDRESSING A PATIENT.**
    ---
    - **User type:** Patient
    - **Examination type:** ${examinationType}
    - **Number of scans:** ${form.value.numberOfScans}
    - **Exposure time:** "Not provided"
    - **Patient parameters:** "age: ${new Date().getFullYear() - new Date(form.value.birthDate).getFullYear()}, sex: ${form.value.gender}, pregnancy status: ${form.value.isPregnant ? `Yes, due around ${form.value.estimatedDueDate}` : 'No'}, body thickness: ${form.value.weight ? `${form.value.weight}kg` : 'Not provided'}"
    - **Distance from source:** "Not provided"
    - **Shielding availability:** "Not provided"
    - **Estimated dose (mSv) for this scan:** ${patientDose !== null ? patientDose.toFixed(3) : 'N/A'}
    - **Patient Cumulative Dose (This Year, including this scan):** ${patientDoseEstimate.value !== null ? patientDoseEstimate.value.toFixed(3) : 'N/A'}
    - **Reason / Symptoms / Medical History:** "${form.value.currentSymptoms || 'Not provided'}. History: ${form.value.medicalHistory || 'None'}"
    - **Language for response:** ${lang === 'en' ? 'English' : 'Arabic'}

    **Your Instructions:**
    1.  **recommendationText:** Fulfill all the requirements for the **Patient** user type above.
    Combine all points into a single, comprehensive, well-structured response, **Use Markdown for
    formatting** (e.g., **bold** for emphasis, and unordered lists with -)
    2.  **Warning:** Write a clear, actionable warning if any high-risk factors are present (e.g., pregnancy, high cumulative dose, etc.). If none, state that clearly.
  `;

  const responseSchema = {
    type: 'OBJECT',
    properties: {
      recommendationText: { type: 'STRING' },
      Warning: { type: 'STRING' }
    },
    required: ['recommendationText', 'Warning'],
  }

  try {
    const apiKey = import.meta.env.VITE_GEMINI_KEY
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'application/json', responseSchema }
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) throw new Error(`API error: ${response.statusText}`)

    const result = await response.json()
    const aiContent = JSON.parse(result.candidates[0].content.parts[0].text)

    aiResponse.value = {
      ...aiContent,
      patientCalculatedMsv: patientDoseEstimate.value,
    }
  } catch (error) {
    console.error('AI generation failed:', error)
    aiResponse.value = {
      recommendationText: lang === 'en' ? 'Unable to get AI advice at the moment. Please consult your doctor.' : 'غير قادر على الحصول على نصيحة الذكاء الاصطناعي الآن. يرجى استشارة طبيبك.',
      Warning: lang === 'en' ? 'Review your inputs carefully.' : 'يرجى مراجعة مدخلاتك بعناية.',
      patientCalculatedMsv: patientDoseEstimate.value,
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="recommend-page" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <main class="recommend-main-content">
      <section class="recommend-card">
        <h2>
          {{ currentLanguage === 'en' ? 'Medical Scan Advisor for Guests' : 'مستشار الفحص الطبي للضيوف' }}
        </h2>
        <p>
          {{
            currentLanguage === 'en'
              ? 'Fill in your details to get simple AI-powered advice. Scan details are optional.'
              : 'املأ تفاصيلك للحصول على نصيحة بسيطة مدعومة بالذكاء الاصطناعي. تفاصيل الفحص اختيارية.'
          }}
        </p>

        <form @submit.prevent="getRecommendations" class="recommend-form" novalidate>
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Weight (kg)' : 'الوزن (كجم)' }}
            </label>
            <input
              type="number"
              step="0.1"
              v-model="form.weight"
              placeholder="e.g. 70.5"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              min="1"
            />
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Date of Birth' : 'تاريخ الميلاد' }}
              <span class="required-indicator">*</span>
            </label>
            <input
              type="date"
              v-model="form.birthDate"
              required
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            />
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="form.gender" required :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <div v-if="form.gender === 'female'" class="pregnancy-section">
            <div class="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  v-model="form.isPregnant"
                />
                <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل هي حامل؟' }}</span>
              </label>
            </div>
            <div v-if="form.isPregnant" class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Estimated Due Date' : 'تاريخ الولادة المتوقع' }}
                <span class="required-indicator">*</span>
              </label>
              <input
                type="date"
                v-model="form.estimatedDueDate"
                required
                :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              />
            </div>
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Relevant Medical History (optional)' : 'التاريخ الطبي ذو الصلة (اختياري)' }}
            </label>
            <textarea v-model="form.medicalHistory" rows="3"></textarea>
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Estimated Radiation Exposure in Past Year (mSv) - optional' : 'الجرعة المقدرة للإشعاع في السنة الماضية (mSv) - اختياري' }}
            </label>
            <input
              type="number"
              step="0.001"
              min="0"
              v-model.number="form.previousYearDose"
              placeholder="e.g. 2.5"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            />
          </div>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Current Symptoms (optional)' : 'الأعراض الحالية (اختياري)' }}
            </label>
            <textarea v-model="form.currentSymptoms" rows="3"></textarea>
          </div>

          <h3 class="section-title">
            {{ currentLanguage === 'en' ? 'Scan to Consider (optional)' : 'الفحص المقترح (اختياري)' }}
          </h3>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Place of Scan' : 'مكان الفحص' }}
            </label>
            <select v-model="form.scanPlace" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              <option value="" disabled selected>{{ currentLanguage === 'en' ? 'Select...' : 'اختر...' }}</option>
              <option v-for="option in scanPlaces" :key="option.value" :value="option.value">
                {{ currentLanguage === 'en' ? option.en : option.ar }}
              </option>
            </select>
          </div>

          <div v-if="showOtherScanPlaceInput" class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Please specify other place' : 'يرجى تحديد المكان الآخر' }}
            </label>
            <input type="text" v-model="form.otherScanPlaceDescription" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Category' : 'فئة الفحص' }}
              </label>
              <select v-model="form.scanType" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                <option value="CT">{{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}</option>
                <option value="X-ray">{{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}</option>
              </select>
            </div>

            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Protocol' : 'بروتوكول الفحص' }}
              </label>
              <select v-model="form.subScanType" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                <option value="" disabled selected>{{ currentLanguage === 'en' ? 'Select...' : 'اختر...' }}</option>
                <option
                  v-for="option in currentScanSubtypes"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ currentLanguage === 'en' ? option.en : option.ar }}
                </option>
              </select>
            </div>
          </div>

          <div v-if="showOtherInput" class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Please specify scan protocol' : 'يرجى تحديد بروتوكول الفحص' }}
            </label>
            <input
              type="text"
              v-model="form.otherScanDescription"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            />
          </div>

          <button type="submit" class="action-button" :disabled="isLoading">
            {{
              isLoading
                ? currentLanguage === 'en'
                  ? 'Getting Advice...'
                  : 'جاري الحصول على النصيحة...'
                : currentLanguage === 'en'
                  ? 'Get Advice'
                  : 'الحصول على نصيحة'
            }}
          </button>
        </form>

        <div v-if="errorMessage" class="message error-message">{{ errorMessage }}</div>

        <div v-if="aiResponse" class="prediction-result-wrapper">
          <div v-if="aiResponse.Warning" class="message warning-message">
            <h4>{{ currentLanguage === 'en' ? 'Important Note' : 'ملاحظة هامة' }}</h4>
            <p style="white-space: pre-wrap;">{{ aiResponse.Warning }}</p>
          </div>

          <div class="prediction-result">
            <div v-if="aiResponse.patientCalculatedMsv !== null" class="msv-details-container">
              <div class="msv-details">
                <h4>{{ currentLanguage === 'en' ? 'Total Estimated Dose This Year' : 'الجرعة المقدرة الكلية لهذا العام' }}</h4>
                <p><strong>{{ aiResponse.patientCalculatedMsv.toFixed(3) }} mSv</strong></p>
              </div>
              <div class="msv-details overdose-status" :class="{ overdosed: isOverdose }">
                <h4>{{ currentLanguage === 'en' ? 'Dose Safety Status' : 'حالة أمان الجرعة' }}</h4>
                <p>
                  {{ isOverdose
                    ? (currentLanguage === 'en'
                      ? 'Above recommended safety limit! Proceed with caution.'
                      : 'فوق الحد الآمن الموصى به! يرجى توخي الحذر.')
                    : (currentLanguage === 'en'
                      ? 'Within safe limits.'
                      : 'ضمن الحدود الآمنة.') }}
                </p>
              </div>
            </div>

            <div class="result-text">
              <h4>{{ currentLanguage === 'en' ? 'AI-Powered Advice' : 'نصيحة مدعومة بالذكاء الاصطناعي' }}</h4>
                <div v-html="renderedRecommendation"></div>
            </div>
          </div>
        </div>

        <p class="switch-link-container">
          <a href="#" @click.prevent="router.push('/signin')">
            {{ currentLanguage === 'en' ? 'Back to Sign In' : 'العودة لتسجيل الدخول' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.recommend-page {
  padding: 30px;
  background-color: #f8f9fa;
}

.recommend-card {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: auto;
}

.recommend-card h2 {
  text-align: center;
  color: #8d99ae;
}
.recommend-card p {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form-group input:disabled,
.form-group textarea:disabled,
.form-group select:disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
}

.required-indicator {
  color: #d32f2f;
}

.action-button {
  width: 100%;
  padding: 15px;
  margin-top: 1rem;
  font-size: 1.1em;
  background-color: #8d99ae;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.action-button:disabled {
  background-color: #ccc;
}

.message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
}

.warning-message {
  background-color: #fff3e0;
  color: #e65100;
}

.prediction-result {
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.msv-details-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.msv-details {
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  min-width: 150px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
}

.msv-details h4 {
  margin: 0;
  font-size: 0.9em;
  color: #555;
}

.msv-details p {
  margin: 0.5rem 0 0;
  font-size: 1.5em;
}

.msv-details.overdose-status {
  background-color: #fffbe6;
  color: #8a6d3b;
}

.msv-details.overdose-status.overdosed {
  background-color: #ffebe9;
  color: #d32f2f;
}

.result-text {
  margin-top: 1.5rem;
}

.pregnancy-section {
  border: 1px solid #eef2f7;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.switch-link-container {
  text-align: center;
  margin-top: 2rem;
}

.switch-link-container a {
  color: #8d99ae;
}
</style>
