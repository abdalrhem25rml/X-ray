<script setup>Recom
import { ref, watch, computed, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'
import { Timestamp } from 'firebase/firestore'

// --- Pinia and Vue Router ---
const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()

// --- Injected global app states ---
const currentLanguage = inject('currentLanguage')
const currentTotalMsv = inject('currentMsv')
const doseLimit = inject('doseLimit')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

// --- Data for Dropdowns ---
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

const fallbackDoseEstimates = {
  patient: {
    'CT': {
      'Abdomen & Pelvis': 14,
      'Brain with contrast': 2,
      'Angiography CTA': 12,
      'Urography': 8,
      'Enterography': 8,
      'default': 6,
    },
    'X-ray': {
      'Barium Enema': 7,
      'IV Urogram (IVP)': 2.5,
      'HSG': 1.5,
      'VCUG': 1.0,
      'default': 0.5,
    }
  },
  doctor: {
    'CT': { 'default': 0.00001 },
    'X-ray': {
      'Barium Enema': 0.0001,
      'IV Urogram (IVP)': 0.00005,
      'HSG': 0.0002,
      'VCUG': 0.00015,
      'default': 0.00005
    }
  }
};

// --- Component local state ---
const recommendationMode = ref('personal')
const form = ref({
  patientId: null,
  patientName: '',
  birthDate: '',
  gender: 'male',
  weight: null,
  patientCumulativeDose: 0,
  medicalHistory: '',
  currentSymptoms: '',
  allergies: '',
  isPregnant: false,
  estimatedDueDate: '',
  scanType: 'CT',
  scanPlace: '',
  otherScanPlaceDescription: '',
  subScanType: '',
  otherScanDescription: '',
  numberOfScans: 1,
  doctorAdditionalContext: '',
})

// --- UI states ---
const isLoading = ref(false)
const isSaving = ref(false)
const isFetchingPatient = ref(false)
const aiResponse = ref(null)
const errorMessage = ref('')

// --- Computed Properties ---
const userRole = computed(() => authStore.role)
const isDoctorPersonalScan = computed(
  () => userRole.value === 'doctor' && recommendationMode.value === 'personal',
)
const currentScanSubtypes = computed(() => scanSubtypes[form.value.scanType] || [])
const showOtherInput = computed(() => form.value.subScanType === 'Other')
const showOtherScanPlaceInput = computed(() => form.value.scanPlace === 'other')
const patientDoseLabel = computed(() =>
  recommendationMode.value === 'personal'
    ? currentLanguage.value === 'en'
      ? 'Your Estimated Dose'
      : 'جرعتك المقدرة'
    : currentLanguage.value === 'en'
      ? 'Patient Dose'
      : 'جرعة المريض',
)
const doctorDoseLabel = computed(() =>
  currentLanguage.value === 'en' ? 'Occupational Dose' : 'الجرعة المهنية',
)
const showDoctorDoseBox = computed(() => {
  if (!aiResponse.value || aiResponse.value.doctorOccupationalMsv == null) return false
  return !(userRole.value === 'doctor' && recommendationMode.value === 'personal')
})

// --- Helpers ---
const clearForm = () => {
  form.value = {
    patientId: null,
    patientName: '',
    birthDate: '',
    gender: 'male',
    weight: null,
    patientCumulativeDose: 0,
    medicalHistory: '',
    currentSymptoms: '',
    allergies: '',
    isPregnant: false,
    estimatedDueDate: '',
    scanType: 'CT',
    scanPlace: '',
    otherScanPlaceDescription: '',
    subScanType: '',
    otherScanDescription: '',
    numberOfScans: 1,
    doctorAdditionalContext: '',
  }
}

const toDateString = (input) => {
  if (!input) return ''
  let d = typeof input.toDate === 'function' ? input.toDate() : new Date(input)
  return d.toISOString().split('T')[0]
}

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
            form.value.weight = patientData.weight || null
            form.value.gender = patientData.gender || 'male'
            form.value.isPregnant = patientData.isPregnant || false
            form.value.estimatedDueDate = toDateString(patientData.estimatedDueDate)
            form.value.medicalHistory = Array.isArray(patientData.medicalHistory) ? patientData.medicalHistory.join(', ') : ''
            form.value.allergies = Array.isArray(patientData.allergies) ? patientData.allergies.join(', ') : ''
            const scans = await databaseStore.fetchScansForPatient(id)
            if (scans) {
                const yearStart = new Date(new Date().getFullYear(), 0, 1)
                const getJsDate = (d) => (d ? (d.toDate ? d.toDate() : new Date(d)) : null)
                const scansThisYear = scans.filter((scan) => getJsDate(scan.scanDate) >= yearStart)
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

// --- Watchers ---
watch(recommendationMode, (newMode) => {
  aiResponse.value = null
  if (newMode === 'personal' && authStore.user) {
    loadPatientData(authStore.user.uid)
  } else if (!route.query.patientId) {
    clearForm()
  }
})

watch(
  () => route.query.patientId,
  (newId) => {
    if (newId) {
      recommendationMode.value = 'general'
      loadPatientData(newId)
    } else if (authStore.user) {
      recommendationMode.value = 'personal'
      loadPatientData(authStore.user.uid)
    }
  },
  { immediate: true },
)

watch(
  () => form.value.isPregnant,
  (isPregnant) => {
    if (!isPregnant) form.value.estimatedDueDate = ''
  },
)

watch(
  () => form.value.scanType,
  () => {
    form.value.subScanType = ''
    form.value.otherScanDescription = ''
    form.value.numberOfScans = 1
  },
)

// --- Main Recommendation Logic ---
const getFallbackDose = (doseFor) => {
  try {
    const finalScanDetail = form.value.subScanType === 'Other' ? 'default' : form.value.subScanType;
    const doseTable = fallbackDoseEstimates[doseFor];
    const scanTypeTable = doseTable[form.value.scanType];

    if (!scanTypeTable) return null;

    let baseDose = scanTypeTable[finalScanDetail] ?? scanTypeTable['default'];

    if (baseDose === undefined) return null;

    if (form.value.scanType === 'X-ray') {
      return baseDose * form.value.numberOfScans;
    }

    return baseDose;
  } catch (e) {
    console.error("Error retrieving fallback dose:", e);
    return null;
  }
};


// ✅ 3. FALLBACK MECHANISM: The getRecommendations function now uses the fallback on failure.
const getRecommendations = async () => {
  isLoading.value = true
  errorMessage.value = ''
  aiResponse.value = null

  // --- Form validation ---
  if (!form.value.birthDate || !form.value.scanPlace || (showOtherScanPlaceInput.value && !form.value.otherScanPlaceDescription) || !form.value.subScanType || (showOtherInput.value && !form.value.otherScanDescription)) { errorMessage.value = currentLanguage.value === 'en' ? 'Please complete all required fields.' : 'يرجى إكمال جميع الحقول المطلوبة.'; isLoading.value = false; return; }
  if (form.value.isPregnant && !form.value.estimatedDueDate) { errorMessage.value = currentLanguage.value === 'en' ? 'Estimated Due Date is required for pregnant patients.' : 'تاريخ الولادة المتوقع مطلوب للحامل.'; isLoading.value = false; return; }

  // --- Common context variables ---
  const age = new Date().getFullYear() - new Date(form.value.birthDate).getFullYear();
  const weightContext = form.value.weight ? `Weight: ${form.value.weight} kg.` : 'Weight: Not provided.';
  let pregnancyContext = `Not pregnant.`;
  if (form.value.isPregnant && form.value.estimatedDueDate) { pregnancyContext = `Pregnant with an estimated due date of ${form.value.estimatedDueDate}. The AI must carefully weigh risks, especially during the first trimester.` }
  const finalScanDetail = showOtherInput.value ? form.value.otherScanDescription : form.value.subScanType;
  const selectedPlaceObject = scanPlaces.find((opt) => opt.value === form.value.scanPlace);
  let scanPlaceContext = '';
  if (showOtherScanPlaceInput.value) { scanPlaceContext = form.value.otherScanPlaceDescription } else if (selectedPlaceObject) { scanPlaceContext = currentLanguage.value === 'en' ? selectedPlaceObject.en : selectedPlaceObject.ar }

  // ✅ FIX: Prompts now explicitly instruct the AI to return a non-zero value.
  let scanTaskText = '';
  if (form.value.scanType === 'X-ray' && form.value.numberOfScans > 1) {
      scanTaskText = `
        The scan being considered is a procedure involving ${form.value.numberOfScans} separate X-ray scans of the ${scanPlaceContext} with protocol "${finalScanDetail}".
        To calculate the dose:
        1. First, determine the typical effective dose for a SINGLE one of these X-rays.
        2. Then, multiply that single-scan dose by the number of scans (${form.value.numberOfScans}) to get the TOTAL dose.
        The final calculated dose values must be greater than zero.
      `;
  } else {
      scanTaskText = `The scan being considered is a single ${form.value.scanType} of the ${scanPlaceContext} with protocol "${finalScanDetail}". The estimated dose must be greater than zero.`;
  }

  let prompt = '';
  let responseSchema = {};

  if (userRole.value === 'doctor') {
    if (isDoctorPersonalScan.value) {
      // Prompt for Doctor who is also the patient
      prompt = `
As a medical radiation safety advisor, provide a recommendation for a doctor who is also the patient.
- Scenario Context: The doctor IS THE PATIENT.
- Doctor's State: My annual occupational dose is ${currentTotalMsv.value.toFixed(2)} mSv. The annual limit is ${doseLimit.value} mSv.
- Patient Details (My Details): Age: ${age}, Gender: ${form.value.gender}. ${weightContext}. Pregnancy Status: ${pregnancyContext}. My cumulative dose this year: ${form.value.patientCumulativeDose} mSv.
- Scan Details: ${scanTaskText}
- My Exposure Context: ${form.value.doctorAdditionalContext || 'No additional context provided.'}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for me.
2. **Patient Dose (patientCalculatedMsv):** Estimate my total effective dose in mSv from this procedure. The result must be greater than zero.
3. **Occupational Dose (doctorOccupationalMsv):** This MUST be 0 because I am the patient.
4. **Warning (Warning):** Warn if my new total dose (occupational + patient) exceeds any limits.
Respond ONLY with valid JSON in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    } else {
      // Prompt for Doctor treating a patient
      prompt = `
As a medical radiation safety advisor, provide a recommendation for a patient scan, adhering strictly to the ALARA principle.
- Scenario Context: A doctor is the PRACTITIONER for another patient.
- Doctor's State: The doctor's annual occupational dose is ${currentTotalMsv.value.toFixed(2)} mSv. The annual limit is ${doseLimit.value} mSv.
- Patient Details: Age: ${age}, Gender: ${form.value.gender}. ${weightContext}. Pregnancy Status: ${pregnancyContext}. Patient's cumulative dose this year: ${form.value.patientCumulativeDose} mSv.
- Scan Details: ${scanTaskText}
- Doctor's Exposure Context: ${form.value.doctorAdditionalContext || 'No additional context provided.'}
Tasks:
1. **Recommendation (recommendationText):** Justify if the scan is appropriate for the patient.
2. **Patient Dose (patientCalculatedMsv):** Estimate the patient's total effective dose in mSv from this procedure. The result must be greater than zero.
3. **Occupational Dose (doctorOccupationalMsv):** Estimate the doctor's total occupational dose in mSv from performing this procedure. The result must be greater than zero.
4. **Warning (Warning):** Warn if the patient's new total dose will exceed the public limit, OR if the doctor's new occupational dose exceeds their limit.
Respond ONLY with valid JSON in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    }
    responseSchema = { type: 'OBJECT', properties: { recommendationText: { type: 'STRING' }, patientCalculatedMsv: { type: 'NUMBER' }, doctorOccupationalMsv: { type: 'NUMBER' }, Warning: { type: 'STRING' } }, required: ['recommendationText', 'patientCalculatedMsv', 'doctorOccupationalMsv', 'Warning'] };
  } else {
    // Prompt for Patient
    prompt = `
As a patient advocate, explain a medical scan.
- My estimated radiation dose this year: ${form.value.patientCumulativeDose} mSv.
- My Details: Born on ${form.value.birthDate}, Gender: ${form.value.gender}, ${weightContext}, Pregnancy: ${pregnancyContext}.
- Scan Details: ${scanTaskText}
Tasks:
1. **Information (recommendationText):** Explain the purpose of this scan in simple terms.
2. **Dose Estimation (patientCalculatedMsv):** Estimate my total dose in mSv from this procedure. The result must be greater than zero.
3. **Warning (Warning):** If my new total dose exceeds 1 mSv, provide a clear warning.
Respond ONLY with valid JSON in ${currentLanguage.value === 'en' ? 'English' : 'Arabic'}.`
    responseSchema = { type: 'OBJECT', properties: { recommendationText: { type: 'STRING' }, patientCalculatedMsv: { type: 'NUMBER' }, Warning: { type: 'STRING' } }, required: ['recommendationText', 'patientCalculatedMsv', 'Warning'] };
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
    console.warn('AI recommendation failed. Attempting fallback. Error:', error)
    const patientFallback = getFallbackDose('patient');
    let doctorFallback = 0;
    if (userRole.value === 'doctor' && !isDoctorPersonalScan.value) {
        doctorFallback = getFallbackDose('doctor');
    }
    if (patientFallback !== null && doctorFallback !== null) {
        aiResponse.value = {
            recommendationText: currentLanguage.value === 'en' ? "The AI recommendation could not be generated. The typical dose for this procedure is shown above. Please use your clinical judgment to decide if this scan is appropriate." : "تعذر إنشاء توصية الذكاء الاصطناعي. الجرعة النموذجية لهذا الإجراء معروضة أعلاه. يرجى استخدام حكمك السريري لتقرير ما إذا كان هذا الفحص مناسبًا.",
            patientCalculatedMsv: patientFallback,
            doctorOccupationalMsv: doctorFallback,
            Warning: currentLanguage.value === 'en' ? "AI service failed. Using predefined typical dose values. Please review carefully as these are general estimates." : "فشلت خدمة الذكاء الاصطناعي. يتم استخدام قيم الجرعات النموذجية المحددة مسبقًا. يرجى المراجعة بعناية لأنها تقديرات عامة."
        };
    } else {
        errorMessage.value = currentLanguage.value === 'en' ? `An error occurred and no fallback value is available. Please try again later.` : `حدث خطأ ولا توجد قيمة بديلة متاحة. الرجاء معاودة المحاولة في وقت لاحق.`
    }
  } finally {
      isLoading.value = false
  }
}

const saveScanFromRecommendation = async () => {
    if (!aiResponse.value || !form.value.patientId) {
        alert('No recommendation data to save or patient ID is missing.')
        return
    }
    isSaving.value = true
    try {
        const finalScanPlaceValue = form.value.scanPlace === 'other' ? form.value.otherScanPlaceDescription : form.value.scanPlace
        const finalScanDetailValue = form.value.subScanType === 'Other' ? form.value.otherScanDescription : form.value.subScanType
        const scanToSave = {
            patientId: form.value.patientId,
            scanType: form.value.scanType,
            scanPlace: finalScanPlaceValue,
            scanDetail: finalScanDetailValue,
            numberOfScans: form.value.numberOfScans,
            scanDate: Timestamp.now(),
            patientDose: Number(aiResponse.value.patientCalculatedMsv) || 0,
            doctorDose: Number(aiResponse.value.doctorOccupationalMsv) || 0,
            reason: form.value.currentSymptoms || 'As per AI recommendation',
            notes: aiResponse.value.recommendationText,
            isPersonalScan: recommendationMode.value === 'personal'
        }
        const success = await databaseStore.createScan(scanToSave)
        if (success) {
            alert(currentLanguage.value === 'en' ? 'Scan record saved successfully!' : '!تم حفظ سجل الفحص بنجاح')
            if (triggerMsvRecalculation) {
                triggerMsvRecalculation()
            }
            aiResponse.value = null
        } else {
            throw new Error(databaseStore.error)
        }
    } catch (error) {
        console.error('Error saving scan from recommendation:', error)
        alert(currentLanguage.value === 'en' ? `Failed to save scan: ${error.message}` : `فشل حفظ الفحص: ${error.message}`)
    } finally {
        isSaving.value = false
    }
}
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
            currentLanguage === 'en'
              ? 'Get an AI-powered recommendation based on patient details and radiation safety principles.'
              : 'احصل على توصية مدعومة بالذكاء الاصطناعي بناءً على تفاصيل المريض ومبادئ السلامة من الإشعاع.'
          }}
        </p>

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
          <span>{{
            currentLanguage === 'en' ? 'Loading Patient Data...' : 'جاري تحميل بيانات المريض...'
          }}</span>
        </div>

        <div v-if="form.patientId && form.patientName" class="patient-info-display">
          {{ currentLanguage === 'en' ? 'Getting recommendation for:' : 'الحصول على توصية لـ:' }}
          <strong>{{ form.patientName }}</strong> ({{
            form.weight ? `${form.weight} kg` : 'Weight N/A'
          }})
        </div>

        <form @submit.prevent="getRecommendations" class="recommend-form">
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Weight (kg)' : 'الوزن (كجم)' }}
            </label>
            <input
              type="number"
              step="0.1"
              v-model="form.weight"
              :disabled="recommendationMode === 'personal'"
              placeholder="e.g. 70.5"
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
              :disabled="recommendationMode === 'personal'"
              required
            />
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
                <input
                  type="checkbox"
                  v-model="form.isPregnant"
                  :disabled="recommendationMode === 'personal'"
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
                :disabled="recommendationMode === 'personal'"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Relevant Medical History' : 'التاريخ الطبي ذو الصلة'
            }}</label>
            <textarea
              v-model="form.medicalHistory"
              rows="3"
              :disabled="recommendationMode === 'personal'"
            ></textarea>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Current Symptoms' : 'الأعراض الحالية' }}</label>
            <textarea v-model="form.currentSymptoms" rows="3"></textarea>
          </div>

          <div
            v-if="userRole === 'doctor' && recommendationMode === 'general'"
            class="doctor-exposure-section"
          >
            <h3 class="section-title">
              {{
                currentLanguage === 'en' ? 'Occupational Exposure Context' : 'سياق التعرض المهني'
              }}
            </h3>
            <div class="form-group">
              <label>
                {{
                  currentLanguage === 'en'
                    ? 'Your positioning, shielding, etc. (Optional)'
                    : 'موقعك، التدريع المستخدم، إلخ (اختياري)'
                }}
              </label>
              <textarea v-model="form.doctorAdditionalContext" rows="3"></textarea>
            </div>
          </div>

          <h3 class="section-title">
            {{ currentLanguage === 'en' ? 'Scan to Consider' : 'الفحص المقترح' }}
          </h3>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Place of Scan' : 'مكان الفحص' }}
              <span class="required-indicator">*</span>
            </label>
            <select v-model="form.scanPlace" required>
              <option disabled value="">
                {{ currentLanguage === 'en' ? 'Select...' : 'اختر...' }}
              </option>
              <option v-for="option in scanPlaces" :key="option.value" :value="option.value">
                {{ currentLanguage === 'en' ? option.en : option.ar }}
              </option>
            </select>
          </div>
          <div v-if="showOtherScanPlaceInput" class="form-group">
            <label>
              {{
                currentLanguage === 'en' ? 'Please specify other place' : 'يرجى تحديد المكان الآخر'
              }}
              <span class="required-indicator">*</span>
            </label>
            <input type="text" v-model="form.otherScanPlaceDescription" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Category' : 'فئة الفحص' }}
                <span class="required-indicator">*</span>
              </label>
              <select v-model="form.scanType" required>
                <option value="CT">
                  {{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}
                </option>
                <option value="X-ray">
                  {{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Protocol' : 'بروتوكول الفحص' }}
                <span class="required-indicator">*</span>
              </label>
              <select v-model="form.subScanType" required>
                <option disabled value="">
                  {{ currentLanguage === 'en' ? 'Select...' : 'اختر...' }}
                </option>
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
              {{
                currentLanguage === 'en'
                  ? 'Please specify scan protocol'
                  : 'يرجى تحديد بروتوكول الفحص'
              }}
              <span class="required-indicator">*</span>
            </label>
            <input
              type="text"
              v-model="form.otherScanDescription"
              :placeholder="
                currentLanguage === 'en' ? 'e.g., Chest X-ray' : 'مثال: أشعة سينية للصدر'
              "
              required
            />
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

        <div v-if="aiResponse" class="prediction-result-wrapper">
          <div v-if="aiResponse.Warning" class="message warning-message">
            <h4>{{ currentLanguage === 'en' ? 'Important Warning' : 'تحذير هام' }}</h4>
            <p>{{ aiResponse.Warning }}</p>
          </div>

          <div class="prediction-result">
            <h3>
              {{
                currentLanguage === 'en'
                  ? 'AI Powered Recommendation'
                  : 'التوصية المدعومة بالذكاء الاصطناعي'
              }}
            </h3>
            <div class="msv-details-container">
              <div v-if="aiResponse.patientCalculatedMsv !== null" class="msv-details">
                <h4>{{ patientDoseLabel }}</h4>
                <p>
                  <strong>{{ aiResponse.patientCalculatedMsv }} mSv</strong>
                </p>
              </div>
              <div v-if="showDoctorDoseBox" class="msv-details doctor-dose">
                <h4>{{ doctorDoseLabel }}</h4>
                <p>
                  <strong>{{ aiResponse.doctorOccupationalMsv }} mSv</strong>
                </p>
              </div>
            </div>
            <div class="result-text">
              <h4>{{ currentLanguage === 'en' ? 'Recommendation' : 'التوصية' }}</h4>
              <p>{{ aiResponse.recommendationText }}</p>
            </div>
          </div>

          <!-- ✅ NEW FEATURE: Save Recommendation as a Scan Button -->
          <div class="save-recommendation-section">
            <button
              @click="saveScanFromRecommendation"
              :disabled="isSaving"
              class="action-button save-button"
            >
              {{
                isSaving
                  ? (currentLanguage === 'en' ? 'Saving...' : '...جاري الحفظ')
                  : (currentLanguage === 'en' ? 'Save Recommendation as Scan' : 'حفظ التوصية كفحص')
              }}
            </button>
            <p class="save-note">
              {{ currentLanguage === 'en' ? 'This will create a new scan record with today\'s date using the estimated doses.' : 'سيؤدي هذا إلى إنشاء سجل فحص جديد بتاريخ اليوم باستخدام الجرعات المقدرة.'}}
            </p>
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
.mode-switcher {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}
.mode-switcher button {
  flex: 1;
  padding: 12px;
  border: none;
  background-color: #f8f9fa;
  cursor: pointer;
  font-weight: 600;
  color: #555;
  transition: background-color 0.2s;
}
.mode-switcher button.active {
  background-color: #8d99ae;
  color: white;
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
.msv-details.doctor-dose {
  background-color: #fffbe6;
}
.result-text {
  margin-top: 1.5rem;
}
.switch-link-container {
  text-align: center;
  margin-top: 2rem;
}
.switch-link-container a {
  color: #8d99ae;
}
.loading-overlay {
  text-align: center;
  padding: 2rem;
  color: #8d99ae;
}
.recommend-form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.patient-info-display {
  padding: 15px;
  border-radius: 8px;
  background-color: #e9ecef;
  text-align: start;
  margin-bottom: 1rem;
}
.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: normal;
}
.checkbox-group input {
  width: auto;
}
.doctor-exposure-section {
  border-top: 1px dashed #d3dce6;
  padding-top: 20px;
  margin-top: 10px;
}
.section-title {
  text-align: center;
  font-weight: 600;
  color: #6a7483;
  margin: 1.5rem 0 1rem;
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
.save-recommendation-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #8d99ae;
}
.save-button {
  background-color: #28a745;
}
.save-button:disabled {
  background-color: #94d3a2;
  cursor: not-allowed;
}
.save-note {
  text-align: center;
  font-size: 0.9em;
  color: #6c757d;
  margin-top: 0.75rem;
}
</style>
