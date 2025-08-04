<script setup>
import { reactive, watch, inject, computed } from 'vue'

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

// --- Scan subtype options with translations ---
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

// --- Form State ---
const form = reactive({
  id: null,
  isPregnant: false,
  pregnancyMonth: null,
  scanType: 'X-ray',
  subScanType: '',
  otherScanDescription: '',
  scanDate: '',
  dose: null,
  doctorDose: null,
  reason: '',
  notes: '',
  doctorAdditionalContext: '',
})

// --- Computed Properties ---
const currentScanSubtypes = computed(() => scanSubtypes[form.scanType] || [])
const showOtherInput = computed(() => form.subScanType === 'Other')

// --- Watchers ---
watch(() => props.show, (isShown) => {
  if (isShown) {
    Object.assign(form, {
      id: null, isPregnant: false, pregnancyMonth: null, scanType: 'X-ray',
      subScanType: '', otherScanDescription: '', scanDate: '', dose: null,
      doctorDose: null, reason: '', notes: '', doctorAdditionalContext: '',
    })
    if (props.scan) {
      form.id = props.scan.id
      form.isPregnant = props.scan.isPregnant || false
      form.pregnancyMonth = props.scan.pregnancyMonth || null
      form.scanType = props.scan.scanType
      const date = props.scan.scanDate?.toDate ? props.scan.scanDate.toDate() : new Date(props.scan.scanDate)
      form.scanDate = date.toISOString().split('T')[0] || ''
      form.dose = props.scan.patientDose // Note: prop might be `dose` or `patientDose`
      form.doctorDose = props.scan.doctorDose
      form.reason = props.scan.reason
      form.notes = props.scan.notes
      form.doctorAdditionalContext = props.scan.doctorAdditionalContext

      const savedSubtype = props.scan.scanDetail
      const isStandardSubtype = currentScanSubtypes.value.some(opt => opt.value === savedSubtype)
      if (isStandardSubtype) {
        form.subScanType = savedSubtype
      } else if (savedSubtype) {
        form.subScanType = 'Other'
        form.otherScanDescription = savedSubtype
      }
    }
  }
})

watch(() => form.scanType, () => {
  form.subScanType = ''
  form.otherScanDescription = ''
})

watch(() => form.isPregnant, (preg) => {
  if (!preg) form.pregnancyMonth = null
})

// ✅ FIXED: The estimateDose function now correctly uses the descriptive labels.
const estimateDose = async (doseFor) => {
  const selectedSubtypeObject = currentScanSubtypes.value.find(opt => opt.value === form.subScanType)

  let finalScanDetailText = ''
  if (showOtherInput.value) {
    finalScanDetailText = form.otherScanDescription
  } else if (selectedSubtypeObject) {
    finalScanDetailText = currentLanguage.value === 'en' ? selectedSubtypeObject.en : selectedSubtypeObject.ar
  }

  let prompt = ''
  if (doseFor === 'patient') {
    prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a ${form.scanType} scan with the specific protocol: "${finalScanDetailText}". Patient Age: ${props.patient?.age || 'N/A'}. Reason for scan: "${form.reason || 'Not provided'}". Respond ONLY with a single number.`
  } else { // doseFor === 'doctor'
    prompt = `Estimate the typical occupational dose (in mSv) for a doctor during a patient's ${form.scanType} scan with protocol "${finalScanDetailText}". Doctor's additional context: "${form.doctorAdditionalContext || 'None'}". Respond ONLY with a single number.`
  }

  let validationRules = {}
  if (doseFor === 'patient') {
    validationRules = form.scanType === 'CT' ? { min: 0.5, max: 40 } : { min: 0.001, max: 10 }
  } else {
    validationRules = { min: 0, max: 2 }
  }

  try {
    const payload = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'text/plain' } };
    const apiKey = import.meta.env.VITE_GEMINI_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    const result = await response.json();
    const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const estimated = parseFloat(aiText.match(/[\d.]+/));
    if (isNaN(estimated) || estimated < validationRules.min || estimated > validationRules.max) throw new Error('AI returned an invalid or out-of-range value.');

    if (doseFor === 'patient') form.dose = estimated;
    else form.doctorDose = estimated;

    return true;
  } catch (error) {
    console.error(`Dose estimation failed for ${doseFor}:`, error);
    alert(currentLanguage.value === 'en' ? `AI estimation for the ${doseFor} failed. Please enter it manually.` : `فشل تقدير الذكاء الاصطناعي لـ ${doseFor === 'patient' ? 'المريض' : 'الطبيب'}. يرجى إدخاله يدويًا.`);
    return false;
  }
}

const handleSubmit = async () => {
  if (!form.scanDate || !form.subScanType || (form.subScanType === 'Other' && !form.otherScanDescription)) {
    alert(currentLanguage.value === 'en' ? 'Please fill all required scan details.' : 'يرجى ملء جميع تفاصيل الفحص المطلوبة.');
    return;
  }
  if (props.patient && (form.dose === null || form.dose === '')) {
    if (!await estimateDose('patient')) return;
  }
  if (form.doctorDose === null || form.doctorDose === '') {
    if (!await estimateDose('doctor')) return;
  }

  const finalScanDetailValue = showOtherInput.value ? form.otherScanDescription : form.subScanType

  const dataToSave = {
    id: form.id,
    isPregnant: form.isPregnant,
    pregnancyMonth: form.pregnancyMonth,
    scanType: form.scanType,
    scanDetail: finalScanDetailValue,
    scanDate: form.scanDate,
    patientDose: form.dose,
    doctorDose: form.doctorDose,
    reason: form.reason,
    notes: form.notes,
    doctorAdditionalContext: form.doctorAdditionalContext,
    patientId: props.patient?.id,
  };

  emit('save', dataToSave);
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3>
          {{ scan ? (currentLanguage === 'en' ? 'Edit Scan Record' : 'تعديل سجل الفحص') : (currentLanguage === 'en' ? 'Add New Scan Record' : 'إضافة سجل فحص جديد') }}
        </h3>
        <div v-if="patient" class="patient-context-display">
          {{ currentLanguage === 'en' ? 'For Patient' : 'للمريض' }}: <strong>{{ patient.name }}</strong>
        </div>
        <form @submit.prevent="handleSubmit" class="scan-form">
          <!-- Pregnancy Section remains the same -->
          <div v-if="patient?.gender === 'female'" class="form-row pregnancy-section">
            <div class="form-group checkbox-group">
              <label><input type="checkbox" v-model="form.isPregnant" /><span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل المريضة حامل؟' }}</span></label>
            </div>
            <div class="form-group" v-if="form.isPregnant">
              <label>{{ currentLanguage === 'en' ? 'Month of Pregnancy' : 'شهر الحمل' }}</label>
              <input type="number" v-model="form.pregnancyMonth" min="1" max="9" placeholder="1-9" />
            </div>
          </div>

          <!-- ✅ MODIFIED: Scan Type and Subtype selection -->
          <div class="form-row">
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Scan Category' : 'فئة الفحص' }}</label>
              <select v-model="form.scanType" required>
                <option value="X-ray">{{ currentLanguage === 'en' ? 'X-ray' : 'أشعة سينية' }}</option>
                <option value="CT">{{ currentLanguage === 'en' ? 'CT' : 'أشعة مقطعية' }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Scan Protocol' : 'بروتوكول الفحص' }}</label>
              <select v-model="form.subScanType" required>
                <option disabled value="">{{ currentLanguage === 'en' ? 'Select...' : 'اختر...' }}</option>
                <option v-for="option in currentScanSubtypes" :key="option.value" :value="option.value">
                  {{ currentLanguage === 'en' ? option.en : option.ar }}
                </option>
              </select>
            </div>
          </div>

          <div v-if="showOtherInput" class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Please specify scan protocol' : 'يرجى تحديد بروتوكول الفحص' }}</label>
            <input type="text" v-model="form.otherScanDescription" :placeholder="currentLanguage === 'en' ? 'e.g., Chest X-ray' : 'مثال: أشعة سينية للصدر'" required />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}</label>
            <input type="date" v-model="form.scanDate" required />
          </div>

          <!-- Other form fields remain the same -->
          <div class="form-row">
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? "Patient's Dose (mSv)" : 'جرعة المريض (mSv)' }}</label>
              <input type="number" step="0.01" v-model="form.dose" />
            </div>
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? "Doctor's Dose (mSv)" : 'جرعة الطبيب (mSv)' }}</label>
              <input type="number" step="0.01" v-model="form.doctorDose" />
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
            <label>{{ currentLanguage === 'en' ? 'Details affecting your exposure (optional)' : 'تفاصيل إضافية على تعرضك (اختياري)' }}</label>
            <textarea v-model="form.doctorAdditionalContext" rows="2"></textarea>
          </div>
          <div class="modal-actions">
            <button type="submit" class="action-button" :disabled="isSaving">{{ isSaving ? (currentLanguage === 'en' ? 'Saving...' : 'جار الحفظ...') : (currentLanguage === 'en' ? 'Save' : 'حفظ') }}</button>
            <button type="button" @click="$emit('close')" class="action-button secondary">{{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); z-index: 3000; display: flex; justify-content: center; align-items: center; padding: 20px; box-sizing: border-box; }
.modal-content { background-color: white; padding: 30px; border-radius: 12px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; }
.close-modal-button { position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 2.5em; cursor: pointer; line-height: 1; }
.modal-content h3 { text-align: center; margin-bottom: 25px; font-size: 1.8em; }
.patient-context-display { background-color: #e9ecef; padding: 10px 15px; border-radius: 6px; margin-bottom: 20px; text-align: center; font-size: 1.1em; }
.scan-form { display: flex; flex-direction: column; gap: 15px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; align-items: center; }
.form-group { grid-column: span 2 / span 2; }
.form-row > .form-group { grid-column: span 1 / span 1; }
.form-group label { display: block; margin-bottom: 8px; font-weight: 600; }
.form-group input, .form-group textarea, .form-group select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 8px; box-sizing: border-box; }
.modal-actions { display: flex; justify-content: flex-end; gap: 15px; margin-top: 20px; }
.action-button { padding: 12px 25px; border-radius: 8px; border: none; cursor: pointer; font-weight: 600; background-color: #8d99ae; color: white; }
.action-button.secondary { background-color: #6c757d; }
.pregnancy-section { padding: 15px; border-radius: 8px; border: 1px solid #e9ecef; }
.checkbox-group label { display: flex; align-items: center; cursor: pointer; font-weight: normal; }
.checkbox-group input[type='checkbox'] { width: auto; margin-inline-end: 10px; height: 20px; width: 20px; }
</style>
