<script setup>
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
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

// --- Injected global app states ---
const currentLanguage = inject('currentLanguage')
const currentTotalMsv = inject('currentMsv')
const doseLimit = inject('doseLimit')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

// --- Data for Dropdowns and Dose Calculation ---
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
    'CT': { 'Abdomen & Pelvis': 14, 'Brain with contrast': 2, 'Angiography CTA': 12, 'Urography': 8, 'Enterography': 8, 'default': 6 },
    'X-ray': { 'Barium Enema': 7, 'IV Urogram (IVP)': 2.5, 'HSG': 1.5, 'VCUG': 1.0, 'default': 0.5 }
  },
  doctor: {
    'CT': { 'default': 0.00001 },
    'X-ray': { 'Barium Enema': 0.0001, 'IV Urogram (IVP)': 0.00005, 'HSG': 0.0002, 'VCUG': 0.00015, 'default': 0.00005 }
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
const renderedRecommendation = computed(() => {
  if (aiResponse.value && aiResponse.value.recommendationText) {
    return md.render(aiResponse.value.recommendationText);
  }
  return '';
});
const errorMessage = ref('')

// --- Computed Properties ---
const userRole = computed(() => authStore.role)
const isDoctorPersonalScan = computed(
  () => userRole.value === 'doctor' && recommendationMode.value === 'personal',
)
const areScanDetailsRequired = computed(
  () => userRole.value === 'doctor' && recommendationMode.value === 'general',
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
  if (!aiResponse.value || aiResponse.value.doctorOccupationalMsv === null) return false
  return areScanDetailsRequired.value;
})

// --- Helpers ---
const clearForm = () => {
  form.value = {
    patientId: null, patientName: '', birthDate: '', gender: 'male', weight: null, patientCumulativeDose: 0,
    medicalHistory: '', currentSymptoms: '', allergies: '', isPregnant: false, estimatedDueDate: '',
    scanType: 'CT', scanPlace: '', otherScanPlaceDescription: '', subScanType: '', otherScanDescription: '',
    numberOfScans: 1, doctorAdditionalContext: '',
  }
}

const toDateString = (input) => {
  if (!input) return ''
  let d = typeof input.toDate === 'function' ? input.toDate() : new Date(input)
  return d.toISOString().split('T')[0]
}

// --- Data Loading ---
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

const getRecommendations = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  aiResponse.value = null;

  // --- Form validation ---
  if (!form.value.birthDate) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Date of Birth is a required field.' : 'تاريخ الميلاد حقل مطلوب.';
    isLoading.value = false;
    return;
  }
  const hasScanDetails = form.value.scanPlace && form.value.scanType && form.value.subScanType;
  if (areScanDetailsRequired.value && !hasScanDetails) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Please complete all required scan details.' : 'يرجى إكمال جميع تفاصيل الفحص المطلوبة.';
    isLoading.value = false;
    return;
  }

  // --- Dose Calculation (only if details are provided) ---
  let patientDose = null;
  let doctorDose = null;
  if (hasScanDetails) {
    patientDose = getFallbackDose('patient');
    if (areScanDetailsRequired.value) {
      doctorDose = getFallbackDose('doctor');
    }
    if (patientDose === null) {
      errorMessage.value = currentLanguage.value === 'en' ? 'Could not determine a dose for the selected scan.' : 'تعذر تحديد جرعة للفحص المختار.';
      isLoading.value = false;
      return;
    }
  }

  // --- Prompt Definition ---
  const lang = currentLanguage.value;
  const userTypeForPrompt = (userRole.value === 'patient' || isDoctorPersonalScan.value) ? 'Patient' : 'Doctor';

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

If the user is Doctor:
1. Suggest the optimal exposure factors (kVp, mAs, distance, and filtration) according to the examination type.
2. Recommend the appropriate shielding devices (lead apron, thyroid shield, gonadal shield) and where to place them on the patient.
3. Provide the expected dose for the patient and compare it to the international reference levels (ICRP/IAEA guidelines).
4. Remind about occupational exposure limits and advise on distance/time/shielding optimization for staff.
5. Display protocols recommended by WHO and ICRP for that specific examination.
6. If exposure is close to the limit, suggest protocol adjustments or additional shielding.

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
    **GENERATE RECOMMENDATION BASED ON THE FOLLOWING DATA. FOLLOW THE RULES FOR THE SPECIFIED USER TYPE ABOVE.**
    ---
    - **User type:** ${userTypeForPrompt}
    - **Examination type:** ${examinationType}
    - **Number of scans:** ${form.value.numberOfScans}
    - **Exposure time:** "Not provided"
    - **Patient parameters:** "age: ${new Date().getFullYear() - new Date(form.value.birthDate).getFullYear()}, sex: ${form.value.gender}, pregnancy status: ${form.value.isPregnant ? `Yes, due around ${form.value.estimatedDueDate}` : 'No'}, body thickness: ${form.value.weight ? `${form.value.weight}kg` : 'Not provided'}"
    - **Distance from source:** "Not provided"
    - **Shielding availability:** "Not provided"
    - **Estimated dose (mSv):** ${patientDose !== null ? patientDose.toFixed(3) : 'N/A'}
    - **Patient Cumulative Dose (This Year):** ${form.value.patientCumulativeDose.toFixed(3)} mSv
    - **Doctor Cumulative Dose (This Year):** ${currentTotalMsv.value.toFixed(3)} mSv
    - **Reason / Symptoms / Medical History:** "${form.value.currentSymptoms || 'Not provided'}. History: ${form.value.medicalHistory || 'None'}"
    - **Doctor's Additional Context on Positioning/Shielding:** "${form.value.doctorAdditionalContext || 'None'}"
    - **Language for response:** ${lang === 'en' ? 'English' : 'Arabic'}

    **Your Instructions:**
    1.  **recommendationText:** Fulfill all the requirements for the **Patient** user type above.
    Combine all points into a single, comprehensive, well-structured response, **Use Markdown for formatting** (e.g., **bold** for emphasis, and unordered lists with -)
    2.  **Warning:** Write a clear, actionable warning if any high-risk factors are present (e.g., pregnancy, high cumulative dose, etc.). If none, state that clearly.
  `;

  const responseSchema = {
      type: 'OBJECT',
      properties: {
          recommendationText: { type: 'STRING' },
          Warning: { type: 'STRING' },
      },
      required: ['recommendationText', 'Warning'],
  };

  // --- API Call & Response Handling ---
  try {
      const payload = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', responseSchema } }
      const apiKey = import.meta.env.VITE_GEMINI_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

      const result = await response.json();
      const aiContent = JSON.parse(result.candidates[0].content.parts[0].text);

      aiResponse.value = {
          ...aiContent,
          patientCalculatedMsv: patientDose,
          doctorOccupationalMsv: isDoctorPersonalScan.value ? 0 : doctorDose,
      };

  } catch (error) {
    console.error("AI advice generation failed. Using fallback.", error);
    aiResponse.value = {
      recommendationText: lang === 'en' ? 'AI service failed. Please use clinical judgment.' : 'فشلت خدمة الذكاء الاصطناعي. يرجى استخدام الحكم السريري.',
      Warning: lang === 'en' ? 'Review inputs carefully.' : 'راجع المدخلات بعناية.',
      patientCalculatedMsv: patientDose,
      doctorOccupationalMsv: isDoctorPersonalScan.value ? 0 : doctorDose,
    };
  } finally {
      isLoading.value = false;
  }
}

const saveScanFromRecommendation = async () => {
    if (!aiResponse.value || !form.value.patientId) {
        alert('No recommendation data to save or patient ID is missing.')
        return
    }
    // Do not allow saving if no scan details were provided
    if (aiResponse.value.patientCalculatedMsv === null) {
        alert(currentLanguage.value === 'en' ? 'Cannot save a record without specific scan details.' : 'لا يمكن حفظ سجل بدون تفاصيل فحص محددة.');
        return;
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
          {{ currentLanguage === 'en' ? 'Medical Scan Advisor' : 'مستشار الفحص الطبي' }}
        </h2>
        <p>
          {{
            currentLanguage === 'en'
              ? 'Fill in the details to get AI-powered advice. Scan details are optional for patients.'
              : 'املأ التفاصيل للحصول على نصيحة مدعومة بالذكاء الاصطناعي. تفاصيل الفحص اختيارية للمرضى.'
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
            {{ currentLanguage === 'en' ? 'Scan to Consider (Optional for Patients)' : 'الفحص المقترح (اختياري للمرضى)' }}
          </h3>

          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Place of Scan' : 'مكان الفحص' }}
              <span v-if="areScanDetailsRequired" class="required-indicator">*</span>
            </label>
            <select v-model="form.scanPlace" :required="areScanDetailsRequired">
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
              <span v-if="areScanDetailsRequired" class="required-indicator">*</span>
            </label>
            <input type="text" v-model="form.otherScanPlaceDescription" :required="areScanDetailsRequired" />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Category' : 'فئة الفحص' }}
                <span v-if="areScanDetailsRequired" class="required-indicator">*</span>
              </label>
              <select v-model="form.scanType" :required="areScanDetailsRequired">
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
                <span v-if="areScanDetailsRequired" class="required-indicator">*</span>
              </label>
              <select v-model="form.subScanType" :required="areScanDetailsRequired">
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
              <span v-if="areScanDetailsRequired" class="required-indicator">*</span>
            </label>
            <input
              type="text"
              v-model="form.otherScanDescription"
              :required="areScanDetailsRequired"
            />
          </div>

          <button type="submit" :disabled="isLoading" class="action-button">
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
                <h4>{{ patientDoseLabel }}</h4>
                <p><strong>{{ aiResponse.patientCalculatedMsv }} mSv</strong></p>
              </div>
              <div v-if="showDoctorDoseBox" class="msv-details doctor-dose">
                <h4>{{ doctorDoseLabel }}</h4>
                <p><strong>{{ aiResponse.doctorOccupationalMsv.toFixed(5) }} mSv</strong></p>
              </div>
            </div>
            <div class="result-text">
              <h4>{{ currentLanguage === 'en' ? 'AI-Powered Advice' : 'نصيحة مدعومة بالذكاء الاصطناعي' }}</h4>
                <div v-html="renderedRecommendation"></div>
            </div>
          </div>

          <div v-if="aiResponse.patientCalculatedMsv !== null" class="save-recommendation-section">
            <button @click="saveScanFromRecommendation" :disabled="isSaving" class="action-button save-button">
              {{
                isSaving
                  ? (currentLanguage === 'en' ? 'Saving...' : '...جاري الحفظ')
                  : (currentLanguage === 'en' ? 'Save as Scan Record' : 'حفظ كسجل فحص')
              }}
            </button>
            <p class="save-note">
              {{ currentLanguage === 'en' ? 'This will create a new scan record with the estimated doses.' : 'سيؤدي هذا إلى إنشاء سجل فحص جديد بالجرعات المقدرة.'}}
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
