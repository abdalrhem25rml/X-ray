<script setup>
import { reactive, watch, inject, computed } from 'vue'
import { Timestamp } from 'firebase/firestore' // Import Timestamp

const props = defineProps({
  show: Boolean,
  scan: Object,
  isSaving: Boolean,
  patient: {
    type: Object,
    default: null,
  },
})
const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')

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

// --- Form State ---
const getTodayString = () => new Date().toISOString().split('T')[0]

const form = reactive({
  id: null,
  isPregnant: false,
  pregnancyMonth: null,
  scanType: 'X-ray',
  subScanType: '',
  otherScanDescription: '',
  scanPlace: '',
  otherScanPlaceDescription: '',
  numberOfScans: 1,
  scanDate: getTodayString(),
  dose: null,
  doctorDose: null,
  reason: '',
  notes: '',
  doctorAdditionalContext: '',
})

// --- Computed Properties ---
const currentScanSubtypes = computed(() => scanSubtypes[form.scanType] || [])
const showOtherInput = computed(() => form.subScanType === 'Other')
const showOtherScanPlaceInput = computed(() => form.scanPlace === 'other')

// --- Watchers ---
watch(
  () => props.show,
  (isShown) => {
    if (isShown) {
      Object.assign(form, {
        id: null,
        isPregnant: false,
        pregnancyMonth: null,
        scanType: 'X-ray',
        subScanType: '',
        otherScanDescription: '',
        scanPlace: '',
        otherScanPlaceDescription: '',
        numberOfScans: 1,
        scanDate: getTodayString(),
        dose: null,
        doctorDose: null,
        reason: '',
        notes: '',
        doctorAdditionalContext: '',
      })

      if (props.scan) {
        form.id = props.scan.id
        form.isPregnant = props.scan.isPregnant || false
        form.pregnancyMonth = props.scan.pregnancyMonth || null
        form.scanType = props.scan.scanType
        const date = props.scan.scanDate?.toDate
          ? props.scan.scanDate.toDate()
          : new Date(props.scan.scanDate)
        form.scanDate = !isNaN(date) ? date.toISOString().split('T')[0] : getTodayString()
        form.dose = props.scan.patientDose
        form.doctorDose = props.scan.doctorDose
        form.reason = props.scan.reason
        form.notes = props.scan.notes
        form.doctorAdditionalContext = props.scan.doctorAdditionalContext
        form.numberOfScans = props.scan.numberOfScans || 1

        const savedSubtype = props.scan.scanDetail
        const isStandardSubtype = (currentScanSubtypes.value || []).some(
          (opt) => opt.value === savedSubtype,
        )
        if (isStandardSubtype) {
          form.subScanType = savedSubtype
        } else if (savedSubtype) {
          form.subScanType = 'Other'
          form.otherScanDescription = savedSubtype
        }
        const savedPlace = props.scan.scanPlace
        const isStandardPlace = scanPlaces.some((opt) => opt.value === savedPlace)
        if (isStandardPlace) {
          form.scanPlace = savedPlace
        } else if (savedPlace) {
          form.scanPlace = 'other'
          form.otherScanPlaceDescription = savedPlace
        }
      }
    }
  },
)

watch(
  () => form.scanType,
  () => {
    form.subScanType = ''
    form.otherScanDescription = ''
  },
)

const estimateDose = async (doseFor) => {
  if (!props.patient) {
    alert('Cannot estimate dose without a patient context.')
    return false
  }
  const age = props.patient.birthDate
    ? new Date().getFullYear() - new Date(props.patient.birthDate.toDate()).getFullYear()
    : 'N/A'
  const weight = props.patient.weight || 70
  const selectedSubtypeObject = currentScanSubtypes.value.find(
    (opt) => opt.value === form.subScanType,
  )
  let finalScanDetailText = ''
  if (showOtherInput.value) {
    finalScanDetailText = form.otherScanDescription
  } else if (selectedSubtypeObject) {
    finalScanDetailText =
      currentLanguage.value === 'en' ? selectedSubtypeObject.en : selectedSubtypeObject.ar
  }
  const selectedPlaceObject = scanPlaces.find((opt) => opt.value === form.scanPlace)
  let finalScanPlaceText = ''
  if (showOtherScanPlaceInput.value) {
    finalScanPlaceText = form.otherScanPlaceDescription
  } else if (selectedPlaceObject) {
    finalScanPlaceText =
      currentLanguage.value === 'en' ? selectedPlaceObject.en : selectedPlaceObject.ar
  }
  let prompt = ''
  if (doseFor === 'patient') {
    prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a ${form.scanType} scan`
    if (form.scanType === 'X-ray' && form.numberOfScans > 1) {
      prompt += ` (number of scans: ${form.numberOfScans})`
    }
    prompt += ` of the ${finalScanPlaceText} with the specific protocol: "${finalScanDetailText}". Patient Age: ${age}. Patient Weight: ${weight} kg. Reason for scan: "${form.reason || 'Not provided'}". Respond ONLY with a single number.`
  } else {
    prompt = `Estimate the typical occupational dose (in mSv) for a doctor during a patient's ${form.scanType} scan`
    if (form.scanType === 'X-ray' && form.numberOfScans > 1) {
      prompt += ` (number of scans: ${form.numberOfScans})`
    }
    prompt += ` of the ${finalScanPlaceText} with protocol "${finalScanDetailText}". Doctor's additional context: "${form.doctorAdditionalContext || 'None'}". Respond ONLY with a single number.`
  }
  let validationRules = {}
  if (doseFor === 'patient') {
    validationRules = form.scanType === 'CT' ? { min: 0.5, max: 40 } : { min: 0.001, max: 10 }
  } else {
    validationRules = { min: 0, max: 2 }
  }
  try {
    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'text/plain' },
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
    const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || ''
    const estimated = parseFloat(aiText.match(/[\d.]+/))
    if (isNaN(estimated) || estimated < validationRules.min || estimated > validationRules.max)
      throw new Error('AI returned an invalid or out-of-range value.')
    if (doseFor === 'patient') form.dose = estimated
    else form.doctorDose = estimated
    return true
  } catch (error) {
    console.error(`Dose estimation failed for ${doseFor}:`, error)
    alert(
      currentLanguage.value === 'en'
        ? `AI estimation for the ${doseFor} failed. Please enter it manually.`
        : `فشل تقدير الذكاء الاصطناعي لـ ${doseFor === 'patient' ? 'المريض' : 'الطبيب'}. يرجى إدخاله يدويًا.`,
    )
    return false
  }
}

const handleSubmit = async () => {
  if (
    !form.scanDate || !form.scanPlace ||
    (showOtherScanPlaceInput.value && !form.otherScanPlaceDescription) ||
    !form.subScanType || (showOtherInput.value && !form.otherScanDescription)
  ) {
    alert('Please fill all required scan details.')
    return
  }

  if (form.scanType === 'X-ray' && (form.numberOfScans === null || form.numberOfScans < 1)) {
    alert(currentLanguage.value === 'en' ? 'Number of scans must be at least 1 for X-ray.' : 'عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.');
    return;
  }

  if ((form.dose === null || form.dose === '')) {
    if (!(await estimateDose('patient'))) return
  }

  if ((form.doctorDose === null || form.doctorDose === '')) {
    if (!(await estimateDose('doctor'))) return
  }

  // ✅ DEFINITIVE FIX: Manually parse the date to prevent all timezone/locale issues.
  if (!form.scanDate || !/^\d{4}-\d{2}-\d{2}$/.test(form.scanDate)) {
    alert('Invalid date format. Please select a valid date.');
    return;
  }

  // 1. Split "YYYY-MM-DD" into parts.
  const parts = form.scanDate.split('-'); // e.g., ["2025", "08", "06"]

  // 2. Create a Date object using UTC components. Month is 0-indexed (0-11).
  //    Using Date.UTC ensures it's timezone-agnostic.
  const safeDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], 12, 0, 0));

  const dataToSave = {
    id: form.id,
    isPregnant: form.isPregnant,
    pregnancyMonth: form.pregnancyMonth,
    scanType: form.scanType,
    scanDetail: form.subScanType === 'Other' ? form.otherScanDescription : form.subScanType,
    scanPlace: form.scanPlace === 'other' ? form.otherScanPlaceDescription : form.scanPlace,
    numberOfScans: form.scanType === 'X-ray' ? Number(form.numberOfScans) : 1,
    scanDate: Timestamp.fromDate(safeDate), // This will now receive a valid Date object.
    patientDose: form.dose,
    doctorDose: form.doctorDose,
    reason: form.reason,
    notes: form.notes,
    doctorAdditionalContext: form.doctorAdditionalContext,
  }
  console.log(dataToSave)

  emit('save', dataToSave)
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3>
          {{
            scan
              ? currentLanguage === 'en'
                ? 'Edit Scan Record'
                : 'تعديل سجل الفحص'
              : currentLanguage === 'en'
                ? 'Add New Scan Record'
                : 'إضافة سجل فحص جديد'
          }}
        </h3>
        <div v-if="patient" class="patient-context-display">
          {{ currentLanguage === 'en' ? 'For Patient' : 'للمريض' }}:
          <strong
            >{{ patient.name }} ({{
              patient.weight ? `${patient.weight} kg` : 'Weight N/A'
            }})</strong
          >
        </div>
        <form @submit.prevent="handleSubmit" class="scan-form">
          <div v-if="patient?.gender === 'female'" class="form-row pregnancy-section">
            <div class="form-group checkbox-group">
              <label
                ><input type="checkbox" v-model="form.isPregnant" /><span>{{
                  currentLanguage === 'en' ? 'Is Pregnant?' : 'هل المريضة حامل؟'
                }}</span></label
              >
            </div>
            <div class="form-group" v-if="form.isPregnant">
              <label>{{ currentLanguage === 'en' ? 'Month of Pregnancy' : 'شهر الحمل' }}</label>
              <input
                type="number"
                v-model.number="form.pregnancyMonth"
                min="1"
                max="9"
                placeholder="1-9"
              />
            </div>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Place of Scan' : 'مكان الفحص' }}</label>
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
            <label>{{
              currentLanguage === 'en' ? 'Please specify other place' : 'يرجى تحديد المكان الآخر'
            }}</label>
            <input type="text" v-model="form.otherScanPlaceDescription" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Scan Category' : 'فئة الفحص' }}</label>
              <select v-model="form.scanType" required>
                <option value="X-ray">
                  {{ currentLanguage === 'en' ? 'X-ray' : 'أشعة سينية' }}
                </option>
                <option value="CT">{{ currentLanguage === 'en' ? 'CT' : 'أشعة مقطعية' }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Scan Protocol' : 'بروتوكول الفحص' }}</label>
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
            <label>{{
              currentLanguage === 'en'
                ? 'Please specify scan protocol'
                : 'يرجى تحديد بروتوكول الفحص'
            }}</label>
            <input
              type="text"
              v-model="form.otherScanDescription"
              :placeholder="
                currentLanguage === 'en' ? 'e.g., Chest X-ray' : 'مثال: أشعة سينية للصدر'
              "
              required
            />
          </div>

          <!-- ✅ CORRECTED: Use v-model.number to ensure the value is a number -->
          <div v-if="form.scanType === 'X-ray'" class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Number of Scans' : 'عدد الفحوصات' }}</label>
            <input type="number" v-model.number="form.numberOfScans" min="1" required />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}</label>
            <input type="date" v-model="form.scanDate" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>{{
                currentLanguage === 'en' ? "Patient's Dose (mSv)" : 'جرعة المريض (mSv)'
              }}</label>
              <input
                type="number"
                step="0.01"
                v-model.number="form.dose"
                :placeholder="
                  currentLanguage === 'en'
                    ? 'Leave blank for AI estimate'
                    : 'اتركه فارغًا لتقدير الذكاء الاصطناعي'
                "
              />
            </div>
            <div class="form-group">
              <label>{{
                currentLanguage === 'en' ? "Doctor's Dose (mSv)" : 'جرعة الطبيب (mSv)'
              }}</label>
              <input
                type="number"
                step="0.01"
                v-model.number="form.doctorDose"
                :placeholder="
                  currentLanguage === 'en'
                    ? 'Leave blank for AI estimate'
                    : 'اتركه فارغًا لتقدير الذكاء الاصطناعي'
                "
              />
            </div>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Reason for Scan' : 'أسباب الفحص' }}</label>
            <textarea v-model="form.reason" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Additional Notes' : 'ملاحظات إضافية' }}</label>
            <textarea v-model="form.notes" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>{{
              currentLanguage === 'en'
                ? 'Details affecting your exposure (optional)'
                : 'تفاصيل إضافية على تعرضك (اختياري)'
            }}</label>
            <textarea v-model="form.doctorAdditionalContext" rows="2"></textarea>
          </div>
          <div class="modal-actions">
            <button type="submit" class="action-button" :disabled="isSaving">
              {{
                isSaving
                  ? currentLanguage === 'en'
                    ? 'Saving...'
                    : 'جار الحفظ...'
                  : currentLanguage === 'en'
                    ? 'Save'
                    : 'حفظ'
              }}
            </button>
            <button type="button" @click="$emit('close')" class="action-button secondary">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);z-index:3000;display:flex;justify-content:center;align-items:center;padding:20px;box-sizing:border-box}.modal-content{background-color:#fff;padding:30px;border-radius:12px;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;position:relative}.close-modal-button{position:absolute;top:15px;right:15px;background:none;border:none;font-size:2.5em;cursor:pointer;line-height:1}.modal-content h3{text-align:center;margin-bottom:25px;font-size:1.8em}.patient-context-display{background-color:#e9ecef;padding:10px 15px;border-radius:6px;margin-bottom:20px;text-align:center;font-size:1.1em}.scan-form{display:flex;flex-direction:column;gap:15px}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:15px;align-items:center}.form-group{grid-column:span 2 / span 2}.form-row>.form-group{grid-column:span 1 / span 1}.form-group label{display:block;margin-bottom:8px;font-weight:600}.form-group input,.form-group select,.form-group textarea{width:100%;padding:10px;border:1px solid #ccc;border-radius:8px;box-sizing:border-box}.modal-actions{display:flex;justify-content:flex-end;gap:15px;margin-top:20px}.action-button{padding:12px 25px;border-radius:8px;border:none;cursor:pointer;font-weight:600;background-color:#8d99ae;color:#fff}.action-button.secondary{background-color:#6c757d}.pregnancy-section{padding:15px;border-radius:8px;border:1px solid #e9ecef}.checkbox-group label{display:flex;align-items:center;cursor:pointer;font-weight:400}.checkbox-group input[type=checkbox]{width:auto;margin-inline-end:10px;height:20px;width:20px}
</style>
