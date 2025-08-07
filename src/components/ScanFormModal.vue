<script setup>
import { reactive, watch, inject, computed } from 'vue'
import { Timestamp } from 'firebase/firestore'

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
  patientDose: null,
  doctorDose: null,
  reason: '',
  notes: '',
  doctorAdditionalContext: '',
})

// --- Computed Properties & Watchers ---
const currentScanSubtypes = computed(() => scanSubtypes[form.scanType] || [])
const showOtherInput = computed(() => form.subScanType === 'Other')
const showOtherScanPlaceInput = computed(() => form.scanPlace === 'other')

watch(() => props.show, (isShown) => {
    if (isShown) {
      Object.assign(form, {
        id: null, isPregnant: false, pregnancyMonth: null, scanType: 'X-ray',
        subScanType: '', otherScanDescription: '', scanPlace: '', otherScanPlaceDescription: '',
        numberOfScans: 1, scanDate: getTodayString(), patientDose: null, doctorDose: null,
        reason: '', notes: '', doctorAdditionalContext: '',
      });
      if (props.scan) {
        form.id = props.scan.id;
        form.isPregnant = props.scan.isPregnant || false;
        form.pregnancyMonth = props.scan.pregnancyMonth || null;
        form.scanType = props.scan.scanType;
        const date = props.scan.scanDate?.toDate ? props.scan.scanDate.toDate() : new Date(props.scan.scanDate);
        form.scanDate = !isNaN(date) ? date.toISOString().split('T')[0] : getTodayString();
        form.patientDose = props.scan.patientDose;
        form.doctorDose = props.scan.doctorDose;
        form.reason = props.scan.reason;
        form.notes = props.scan.notes;
        form.doctorAdditionalContext = props.scan.doctorAdditionalContext;
        form.numberOfScans = props.scan.numberOfScans || 1;
        const savedSubtype = props.scan.scanDetail;
        const isStandardSubtype = (currentScanSubtypes.value || []).some((opt) => opt.value === savedSubtype);
        if (isStandardSubtype) { form.subScanType = savedSubtype; } else if (savedSubtype) { form.subScanType = 'Other'; form.otherScanDescription = savedSubtype; }
        const savedPlace = props.scan.scanPlace;
        const isStandardPlace = scanPlaces.some((opt) => opt.value === savedPlace);
        if (isStandardPlace) { form.scanPlace = savedPlace; } else if (savedPlace) { form.scanPlace = 'other'; form.otherScanPlaceDescription = savedPlace; }
      }
    }
  },
);

watch(() => form.scanType, (newType, oldType) => {
    if (newType !== oldType) {
        form.subScanType = '';
        form.otherScanDescription = '';
    }
});

// --- Dose Calculation Logic ---
const getFallbackDose = (doseFor) => {
    try {
        const finalScanDetail = form.subScanType === 'Other' ? 'default' : form.subScanType;
        const doseTable = fallbackDoseEstimates[doseFor];
        const scanTypeTable = doseTable[form.scanType];
        if (!scanTypeTable) return null;
        let baseDose = scanTypeTable[finalScanDetail] ?? scanTypeTable['default'];
        if (baseDose === undefined) return null;
        if (form.scanType === 'X-ray') {
            return baseDose * form.numberOfScans;
        }
        return baseDose;
    } catch (e) {
        console.error("Error retrieving dose from table:", e);
        return null;
    }
};

// --- Form Submission ---
const handleSubmit = () => {
  // Validation
  if (!form.scanDate || !form.scanPlace || (showOtherScanPlaceInput.value && !form.otherScanPlaceDescription) || !form.subScanType || (showOtherInput.value && !form.otherScanDescription)) {
    alert('Please fill all required scan details.');
    return;
  }
  if (form.scanType === 'X-ray' && (form.numberOfScans === null || form.numberOfScans < 1)) {
    alert(currentLanguage.value === 'en' ? 'Number of scans must be at least 1 for X-ray.' : 'عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.');
    return;
  }

  // Populate dose fields using fixed values if they are empty
  if (form.patientDose === null || form.patientDose === '') {
    form.patientDose = getFallbackDose('patient');
  }
  if (form.doctorDose === null || form.doctorDose === '') {
    form.doctorDose = getFallbackDose('doctor');
  }

  // Check if a dose value could be found
  if (form.patientDose === null || form.doctorDose === null) {
      alert(currentLanguage.value === 'en'
          ? 'Could not find a typical dose value for the selected scan. Please enter the dose manually.'
          : 'تعذر العثور على قيمة جرعة نموذجية للفحص المحدد. يرجى إدخال الجرعة يدويًا.');
      return;
  }

  // Date Parsing
  const parts = form.scanDate.split('-');
  const safeDate = new Date(Date.UTC(parts[0], parseInt(parts[1], 10) - 1, parseInt(parts[2], 10), 12, 0, 0));
  if (isNaN(safeDate.getTime())) {
    alert('Invalid date format. Please select a valid date.');
    return;
  }

  // Emit the final data object
  const dataToSave = {
    id: form.id,
    isPregnant: form.isPregnant,
    pregnancyMonth: form.pregnancyMonth,
    scanType: form.scanType,
    scanDetail: form.subScanType === 'Other' ? form.otherScanDescription : form.subScanType,
    scanPlace: form.scanPlace === 'other' ? form.otherScanPlaceDescription : form.scanPlace,
    numberOfScans: form.scanType === 'X-ray' ? Number(form.numberOfScans) : 1,
    scanDate: Timestamp.fromDate(safeDate),
    patientDose: Number(form.patientDose),
    doctorDose: Number(form.doctorDose),
    reason: form.reason,
    notes: form.notes,
    doctorAdditionalContext: form.doctorAdditionalContext,
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
                step="0.0001"
                v-model.number="form.patientDose"
                :placeholder="
                  currentLanguage === 'en'
                    ? 'Leave blank for typical value'
                    : 'اتركه فارغًا لتقدير للقيمة القياسسية'
                "
              />
            </div>
            <div class="form-group">
              <label>{{
                currentLanguage === 'en' ? "Doctor's Dose (mSv)" : 'جرعة الطبيب (mSv)'
              }}</label>
              <input
                type="number"
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
