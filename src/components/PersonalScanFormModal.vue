<script setup>
import { reactive, watch, inject, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { Timestamp } from 'firebase/firestore'

const props = defineProps({
  show: Boolean,
  scan: Object,
  isSaving: Boolean,
})
const emit = defineEmits(['close', 'save'])

const authStore = useAuthStore()
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
    'CT': { 'default': 0.00001  },
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
const form = reactive({
  id: null,
  scanType: 'X-ray',
  subScanType: '',
  otherScanDescription: '',
  scanPlace: '',
  otherScanPlaceDescription: '',
  numberOfScans: 1,
  scanDate: new Date().toISOString().split('T')[0],
  patientDose: null,
  reason: '',
  notes: '',
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
        scanType: 'X-ray',
        subScanType: '',
        otherScanDescription: '',
        scanPlace: '',
        otherScanPlaceDescription: '',
        numberOfScans: 1,
        scanDate: new Date().toISOString().split('T')[0],
        patientDose: null,
        reason: '',
        notes: '',
      })

      if (props.scan) {
        form.id = props.scan.id
        form.scanType = props.scan.scanType
        form.scanDate = props.scan.scanDate?.toDate()?.toISOString().split('T')[0] || ''
        form.patientDose = props.scan.patientDose
        form.reason = props.scan.reason
        form.notes = props.scan.notes
        form.numberOfScans = props.scan.numberOfScans || 1

        const savedSubtype = props.scan.scanDetail
        const isStandardSubtype = currentScanSubtypes.value.some(
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

const getFallbackDose = () => {
  try {
    const finalScanDetail = form.subScanType === 'Other' ? 'default' : form.subScanType;
    const doseTable = fallbackDoseEstimates.patient;
    const scanTypeTable = doseTable[form.scanType];

    if (!scanTypeTable) return null;

    let baseDose = scanTypeTable[finalScanDetail] ?? scanTypeTable['default'];

    if (baseDose === undefined) return null;

    if (form.scanType === 'X-ray') {
      return baseDose * form.numberOfScans;
    }

    return baseDose;
  } catch (e) {
    console.error("Error retrieving fallback dose:", e);
    return null;
  }
};

// ✅ 3. FALLBACK MECHANISM: The estimateDose function now uses the fallback on failure.
const estimateDose = async () => {
  const userProfile = authStore.userProfile
  if (!userProfile) {
    alert('User profile not available. Cannot estimate dose.')
    return false
  }

  const age = userProfile.birthDate ? new Date().getFullYear() - userProfile.birthDate.toDate().getFullYear() : 'N/A';
  const weight = userProfile.weight || 70;
  let finalScanDetailText = showOtherInput.value ? form.otherScanDescription : form.subScanType;
  let finalScanPlaceText = showOtherScanPlaceInput.value ? form.otherScanPlaceDescription : form.scanPlace;

  // ✅ FIX: Prompts now explicitly instruct the AI to return a non-zero value.
  let prompt = '';
  if (form.scanType === 'X-ray' && form.numberOfScans > 1) {
    prompt = `You are a highly experienced and board-certified radiologist and medical physicist with over 20 years of clinical expertise in diagnostic imaging, radiation protection, and occupational exposure assessment. You specialize in estimating radiation doses for both patients and healthcare workers in radiological procedures, including X-rays, CT scans, nuclear medicine, and interventional imaging.

You are deeply familiar with international radiation safety standards, such as those from the ICRP (International Commission on Radiological Protection) and the IAEA (International Atomic Energy Agency), and you strictly follow the ALARA principle (As Low As Reasonably Achievable).

When asked to estimate a radiation dose:
- Provide a clear, realistic value (in mSv) based on the given procedure and context.
- Take into account scan type, scan region, number of images, shielding, doctor position, and time of entry.
- Provide conservative and safety-aware estimates suitable for professional use.
- Never guess wildly or return values outside medically accepted ranges.
- Focus only on the number (unless explicitly asked for context or explanation).

Your goal is to help healthcare providers stay within occupational dose limits, optimize patient safety, and make informed decisions based on accurate dosimetry principles.

      Task: Calculate the TOTAL effective dose in mSv for a patient from a procedure involving multiple X-rays.
      Step 1: First, determine the typical effective dose for a SINGLE X-ray of the ${finalScanPlaceText} with protocol "${finalScanDetailText}".
      Step 2: Multiply that single-scan dose by the number of scans, which is ${form.numberOfScans}.
      Patient Context: Age: ${age}, Weight: ${weight} kg. Reason for scan: "${form.reason || 'Not provided'}".
      Respond ONLY with the final numeric value from Step 2. The result must be greater than zero.
    `;
  } else {
    prompt = `You are a highly experienced and board-certified radiologist and medical physicist with over 20 years of clinical expertise in diagnostic imaging, radiation protection, and occupational exposure assessment. You specialize in estimating radiation doses for both patients and healthcare workers in radiological procedures, including X-rays, CT scans, nuclear medicine, and interventional imaging.

You are deeply familiar with international radiation safety standards, such as those from the ICRP (International Commission on Radiological Protection) and the IAEA (International Atomic Energy Agency), and you strictly follow the ALARA principle (As Low As Reasonably Achievable).

When asked to estimate a radiation dose:
- Provide a clear, realistic value (in mSv) based on the given procedure and context.
- Take into account scan type, scan region, number of images, shielding, doctor position, and time of entry.
- Provide conservative and safety-aware estimates suitable for professional use.
- Never guess wildly or return values outside medically accepted ranges.
- Focus only on the number (unless explicitly asked for context or explanation).

Your goal is to help healthcare providers stay within occupational dose limits, optimize patient safety, and make informed decisions based on accurate dosimetry principles.
Estimate the typical effective dose (in mSv) for a patient undergoing a single ${form.scanType} scan of the ${finalScanPlaceText} with the specific protocol: "${finalScanDetailText}". Patient Age: ${age}. Patient Weight: ${weight} kg. Reason for scan: "${form.reason || 'Not provided'}". The value must be greater than zero. Respond ONLY with a single number.`;
  }

  try {
    const validationRules = form.scanType === 'CT' ? { min: 0.5, max: 40 } : { min: 0.0001, max: 10 };
    const payload = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'text/plain' } };
    const apiKey = import.meta.env.VITE_GEMINI_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    const result = await response.json();
    const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const estimated = parseFloat(aiText.match(/[\d.]+/));
    if (isNaN(estimated) || estimated < validationRules.min || estimated > validationRules.max) {
        throw new Error(`AI returned an invalid or out-of-range value. Got: ${estimated}`);
    }
    form.patientDose = estimated;
    return true;

  } catch (error) {
    console.warn(`AI dose estimation failed. Attempting fallback. Error:`, error);
    const fallbackDose = getFallbackDose();
    if (fallbackDose !== null) {
      form.patientDose = fallbackDose;
      alert(
        currentLanguage.value === 'en'
          ? `AI estimation failed. A typical value of ${fallbackDose.toFixed(3)} mSv has been used. You can review and adjust this value.`
          : `فشل تقدير الذكاء الاصطناعي. تم استخدام قيمة نموذجية تبلغ ${fallbackDose.toFixed(3)} ملي سيفرت. يمكنك مراجعة هذه القيمة وتعديلها.`
      );
      return true;
    } else {
      alert(
        currentLanguage.value === 'en'
          ? `AI estimation failed and no fallback value is available. Please enter the dose manually.`
          : `فشل تقدير الذكاء الاصطناعي ولا توجد قيمة بديلة. يرجى إدخال الجرعة يدويًا.`
      );
      return false;
    }
  }
}

const handleSubmit = async () => {
  if (
    !form.scanDate || !form.scanPlace ||
    (showOtherScanPlaceInput.value && !form.otherScanPlaceDescription) ||
    !form.subScanType || (showOtherInput.value && !form.otherScanDescription)
  ) {
    alert(
      currentLanguage.value === 'en'
        ? 'Please fill all required scan details.'
        : 'يرجى ملء جميع تفاصيل الفحص المطلوبة.',
    )
    return
  }

  if (form.scanType === 'X-ray' && (form.numberOfScans === null || form.numberOfScans < 1)) {
    alert(currentLanguage.value === 'en' ? 'Number of scans must be at least 1 for X-ray.' : 'عدد الفحوصات لأشعة إكس يجب أن يكون 1 على الأقل.');
    return;
  }

  if (!form.patientDose && form.patientDose !== 0) {
    const estimationSuccess = await estimateDose();
    if (!estimationSuccess) {
      return;
    }
  }

  // Use robust date parsing
  const parts = form.scanDate.split('-');
  const safeDate = new Date(Date.UTC(parts[0], parseInt(parts[1], 10) - 1, parts[2]));
  if (isNaN(safeDate.getTime())) {
    alert('Invalid date. Please select a valid date.');
    return;
  }

  const finalScanDetailValue = showOtherInput.value ? form.otherScanDescription : form.subScanType;
  const finalScanPlaceValue = showOtherScanPlaceInput.value ? form.otherScanPlaceDescription : form.scanPlace;

  const dataToSave = {
    id: form.id,
    scanType: form.scanType,
    scanDetail: finalScanDetailValue,
    scanPlace: finalScanPlaceValue,
    numberOfScans: form.scanType === 'X-ray' ? Number(form.numberOfScans) : 1,
    scanDate: Timestamp.fromDate(safeDate),
    patientDose: form.patientDose,
    reason: form.reason,
    notes: form.notes,
    isPersonalScan: true,
  }

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
                ? 'Edit Personal Scan'
                : 'تعديل الفحص الشخصي'
              : currentLanguage === 'en'
                ? 'Add Personal Scan'
                : 'إضافة فحص شخصي'
          }}
        </h3>
        <form @submit.prevent="handleSubmit" class="scan-form">
          <div class="form-row">
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
                currentLanguage === 'en' ? 'e.g., Left Hand X-ray' : 'مثال: أشعة سينية لليد اليسرى'
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

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Your Dose (mSv)' : 'جرعتك (mSv)' }}</label>
            <input
              type="number"
              step="0.00005"
              v-model.number="form.patientDose"
              :placeholder="
                currentLanguage === 'en'
                  ? 'Leave blank for AI estimate'
                  : 'اتركه فارغًا لتقدير الذكاء الاصطناعي'
              "
            />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Reason for Scan' : 'أسباب الفحص' }}</label>
            <textarea v-model="form.reason" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Additional Notes' : 'ملاحظات إضافية' }}</label>
            <textarea v-model="form.notes" rows="3"></textarea>
          </div>

          <div class="modal-actions">
            <button type="button" @click="$emit('close')" class="action-button secondary">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
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
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);z-index:3000;display:flex;justify-content:center;align-items:center;padding:20px;box-sizing:border-box}.modal-content{background-color:#fff;padding:30px;border-radius:12px;max-width:550px;width:100%;max-height:90vh;overflow-y:auto;position:relative}.close-modal-button{position:absolute;top:15px;right:15px;background:none;border:none;font-size:2.2rem;line-height:1;color:#aaa;cursor:pointer}.modal-content h3{text-align:center;margin-bottom:25px;font-size:1.6rem;font-weight:600;color:#333}.scan-form{display:flex;flex-direction:column;gap:15px}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:15px}.form-group label{display:block;margin-bottom:8px;font-weight:500;color:#555}.form-group input,.form-group select,.form-group textarea{width:100%;padding:12px;border:1px solid #ccc;border-radius:8px;box-sizing:border-box;font-size:1rem}.form-group input::placeholder,.form-group textarea::placeholder{color:#999}.modal-actions{display:flex;justify-content:flex-end;gap:1rem;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid #eee}.action-button{padding:12px 25px;border-radius:8px;border:none;cursor:pointer;font-weight:600;font-size:1rem;transition:all .2s ease}.action-button[type=submit]{background-color:#8d99ae;color:#fff}.action-button.secondary{background-color:#e9ecef;color:#333}.action-button:disabled{background-color:#ccc;cursor:not-allowed}
</style>
