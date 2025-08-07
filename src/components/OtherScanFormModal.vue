<script setup>
import { reactive, watch, inject, computed } from 'vue'
import { Timestamp } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'

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

// ✅ FIX: The fallback table now contains typical DOCTOR occupational doses, which are much lower.
const fallbackDoseEstimates = {
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
const form = reactive({
  id: null,
  scanPlace: '',
  otherScanPlaceDescription: '',
  scanType: 'X-ray',
  scanDetail: '',
  otherScanDetailDescription: '',
  numberOfScans: 1,
  date: new Date().toISOString().split('T')[0],
  dosage: null,
  // ✅ FIX: Added context field for more accurate estimation
  doctorAdditionalContext: '',
})

// --- Computed Properties & Watchers ---
const currentScanSubtypes = computed(() => scanSubtypes[form.scanType] || [])
const showOtherScanPlaceInput = computed(() => form.scanPlace === 'other')
const showOtherScanDetailInput = computed(() => form.scanDetail === 'Other')

watch(() => props.show, (isShown) => {
    if (isShown) {
        Object.assign(form, {
            id: null, scanPlace: '', otherScanPlaceDescription: '', scanType: 'X-ray',
            scanDetail: '', otherScanDetailDescription: '', numberOfScans: 1,
            date: new Date().toISOString().split('T')[0], dosage: null, doctorAdditionalContext: ''
        });
        if (props.scan) {
            form.id = props.scan.id;
            form.scanPlace = props.scan.scanPlace || '';
            form.scanType = props.scan.scanType || 'X-ray';
            form.scanDetail = props.scan.scanDetail || '';
            form.numberOfScans = props.scan.numberOfScans || 1;
            form.dosage = props.scan.dosage;
            form.date = props.scan.date?.toDate ? props.scan.date.toDate().toISOString().split('T')[0] : '';
            form.doctorAdditionalContext = props.scan.doctorAdditionalContext || '';
        }
    }
});

watch(() => form.scanType, () => {
    form.scanDetail = '';
    form.otherScanDetailDescription = '';
});

const getFallbackDose = () => {
  try {
    const finalScanDetail = form.scanDetail === 'Other' ? 'default' : form.scanDetail;
    // ✅ FIX: Using the 'doctor' dose table.
    const doseTable = fallbackDoseEstimates.doctor;
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

const estimateDose = async () => {
    if (!authStore.userProfile) {
        alert('User profile is not available. Cannot estimate dose.');
        return false;
    }
    const finalScanPlaceText = showOtherScanPlaceInput.value ? form.otherScanPlaceDescription : form.scanPlace;
    const finalScanDetailText = showOtherScanDetailInput.value ? form.otherScanDetailDescription : form.scanDetail;

    // ✅ FIX: The prompt is now primed with context and has stronger guardrails.
    let prompt = '';
    if (form.scanType === 'X-ray' && form.numberOfScans > 1) {
      // This is the new, more robust prompt for multiple scans.
      prompt = `
You are a highly experienced and board-certified radiologist and medical physicist with over 20 years of clinical expertise in diagnostic imaging, radiation protection, and occupational exposure assessment. You specialize in estimating radiation doses for both patients and healthcare workers in radiological procedures, including X-rays, CT scans, nuclear medicine, and interventional imaging.

You are deeply familiar with international radiation safety standards, such as those from the ICRP (International Commission on Radiological Protection) and the IAEA (International Atomic Energy Agency), and you strictly follow the ALARA principle (As Low As Reasonably Achievable).

When asked to estimate a radiation dose:
- Provide a clear, realistic value (in mSv) based on the given procedure and context.
- Take into account scan type, scan region, number of images, shielding, doctor position, and time of entry.
- Provide conservative and safety-aware estimates suitable for professional use.
- Never guess wildly or return values outside medically accepted ranges.
- Focus only on the number (unless explicitly asked for context or explanation).

Your goal is to help healthcare providers stay within occupational dose limits, optimize patient safety, and make informed decisions based on accurate dosimetry principles.
        A single occupational X-ray of an extremity typically results in a dose of about 0.00005 mSv.
        Based on this, calculate the TOTAL occupational dose in mSv for a doctor from a procedure involving ${form.numberOfScans} separate X-ray scans of the ${finalScanPlaceText} with the specific protocol: "${finalScanDetailText}".
        The final value should be the single scan dose multiplied by the number of scans.
        Doctor's additional context: "${form.doctorAdditionalContext || 'None'}".
        Respond ONLY with a single numeric value representing the total dose. Do NOT output the number of scans.
      `;
    } else {
      // The prompt for single scans or CTs remains the same.
      prompt = `You are a highly experienced and board-certified radiologist and medical physicist with over 20 years of clinical expertise in diagnostic imaging, radiation protection, and occupational exposure assessment. You specialize in estimating radiation doses for both patients and healthcare workers in radiological procedures, including X-rays, CT scans, nuclear medicine, and interventional imaging.

You are deeply familiar with international radiation safety standards, such as those from the ICRP (International Commission on Radiological Protection) and the IAEA (International Atomic Energy Agency), and you strictly follow the ALARA principle (As Low As Reasonably Achievable).

When asked to estimate a radiation dose:
- Provide a clear, realistic value (in mSv) based on the given procedure and context.
- Take into account scan type, scan region, number of images, shielding, doctor position, and time of entry.
- Provide conservative and safety-aware estimates suitable for professional use.
- Never guess wildly or return values outside medically accepted ranges.
- Focus only on the number (unless explicitly asked for context or explanation).

Your goal is to help healthcare providers stay within occupational dose limits, optimize patient safety, and make informed decisions based on accurate dosimetry principles.
Estimate the typical occupational dose (in mSv) for a doctor during a single patient's ${form.scanType} source/scan of the ${finalScanPlaceText} with the specific protocol: "${finalScanDetailText}". Doctor's additional context: "${form.doctorAdditionalContext || 'None'}". Respond ONLY with a single number.`;
    }

    try {
        // ✅ FIX: Validation rules are now much stricter for occupational doses to catch unrealistic values.
        const validationRules = { min: 0, max: 0.5 };
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
        form.dosage = estimated;
        return true;
    } catch (error) {
        console.warn(`AI dose estimation failed. Attempting fallback. Error:`, error);
        const fallbackDose = getFallbackDose();
        if (fallbackDose !== null) {
          form.dosage = fallbackDose;
          alert(
            currentLanguage.value === 'en'
              ? `AI estimation failed. A typical value of ${fallbackDose.toFixed(5)} mSv has been used. You can review and adjust this value.`
              : `فشل تقدير الذكاء الاصطناعي. تم استخدام قيمة نموذجية تبلغ ${fallbackDose.toFixed(5)} ملي سيفرت. يمكنك مراجعة هذه القيمة وتعديلها.`
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
};

const handleSubmit = async () => {
  if (!form.scanPlace || !form.scanType || !form.date) {
    alert('Please fill all required fields.')
    return
  }

  if (form.dosage === null) {
      const estimationSuccess = await estimateDose();
      if (!estimationSuccess) {
          return;
      }
  }

  const parts = form.date.split('-');
  const safeDate = new Date(Date.UTC(parts[0], parseInt(parts[1], 10) - 1, parts[2]));
  if (isNaN(safeDate.getTime())) {
    alert('Invalid date format. Please use YYYY-MM-DD.');
    return;
  }

  const dataToEmit = {
    id: form.id,
    scanPlace: showOtherScanPlaceInput.value ? form.otherScanPlaceDescription : form.scanPlace,
    scanType: form.scanType,
    scanDetail: showOtherScanDetailInput.value ? form.otherScanDetailDescription : form.scanDetail,
    numberOfScans: form.scanType === 'X-ray' ? Number(form.numberOfScans) : 1,
    date: Timestamp.fromDate(safeDate),
    dosage: Number(form.dosage),
    doctorAdditionalContext: form.doctorAdditionalContext,
  };

  emit('save', dataToEmit)
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3>{{ scan ? 'Edit Other Source' : 'Add Other Source' }}</h3>
        <p class="subtitle">For miscellaneous radiation sources like background radiation or occupational exposure.</p>

        <form @submit.prevent="handleSubmit" class="scan-form">
          <div class="form-group">
            <label>Place of Scan</label>
            <select v-model="form.scanPlace" required>
              <option disabled value="">Select...</option>
              <option v-for="option in scanPlaces" :key="option.value" :value="option.value">{{ currentLanguage === 'en' ? option.en : option.ar }}</option>
            </select>
          </div>
          <div v-if="showOtherScanPlaceInput" class="form-group">
            <label>Please specify place</label>
            <input type="text" v-model="form.otherScanPlaceDescription" required />
          </div>

          <div class="form-group">
            <label>Scan Type</label>
            <select v-model="form.scanType" required>
              <option value="X-ray">X-ray</option>
              <option value="CT">CT</option>
            </select>
          </div>

          <div class="form-group">
            <label>Scan Detail / Protocol</label>
            <select v-model="form.scanDetail" :disabled="!currentScanSubtypes.length">
                <option disabled value="">Select...</option>
                <option v-for="option in currentScanSubtypes" :key="option.value" :value="option.value">
                    {{ currentLanguage === 'en' ? option.en : option.ar }}
                </option>
            </select>
          </div>
          <div v-if="showOtherScanDetailInput" class="form-group">
            <label>Please specify detail</label>
            <input type="text" v-model="form.otherScanDetailDescription" required />
          </div>

          <div v-if="form.scanType === 'X-ray'" class="form-group">
            <label>Number of Scans</label>
            <input type="number" v-model.number="form.numberOfScans" min="1" required />
          </div>

          <div class="form-group">
            <label>History (Date)</label>
            <input type="date" v-model="form.date" required />
          </div>

        <div class="form-group">
          <label>{{ currentLanguage === 'en' ? 'Your Exposure Context (Optional)' : 'سياق تعرضك (اختياري)' }}</label>
          <textarea
            v-model="form.doctorAdditionalContext"
            rows="2"
            :placeholder="currentLanguage === 'en' ? 'e.g., shielding used, distance from source...' : 'مثال: التدريع المستخدم، المسافة من المصدر...'">
          </textarea>
        </div>

          <div class="form-group">
          <label>{{ currentLanguage === 'en' ? 'Occupational Dose (mSv)' : 'الجرعة المهنية (mSv)' }}</label>
            <input type="number" step="0.00005" v-model.number="form.dosage" placeholder="Leave blank for AI estimate" />
          </div>

          <div class="modal-actions">
            <button type="submit" class="action-button" :disabled="isSaving">{{ isSaving ? (currentLanguage === 'en' ? 'Saving...' : 'جاري الحفظ...') : (currentLanguage === 'en' ? 'Save' : 'حفظ') }}</button>
            <button type="button" @click="$emit('close')" class="action-button secondary">{{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}</button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Styles are unchanged */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); z-index: 4000; display: flex; justify-content: center; align-items: center; }
.modal-content { background: #fff; padding: 2rem; border-radius: 12px; max-width: 500px; width: 100%; position: relative; max-height: 90vh; overflow-y: auto; }
.close-modal-button { position: absolute; top: 10px; right: 15px; font-size: 2rem; border: none; background: none; cursor: pointer; }
h3 { text-align: center; margin-top: 0; margin-bottom: 0.5rem; }
.subtitle { text-align: center; margin-top: 0; margin-bottom: 2rem; color: #6c757d; }
.scan-form { display: flex; flex-direction: column; gap: 1rem; }
.form-group label { font-weight: 600; margin-bottom: 0.5rem; display: block; }
.form-group input, .form-group select { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ccc; box-sizing: border-box; }
.modal-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2rem; }
.action-button { padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; font-weight: 600; }
.action-button[type="submit"] { background-color: #8d99ae; color: white; }
.action-button.secondary { background-color: #e9ecef; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: inherit; /* Ensures textarea uses the same font */
  font-size: inherit;   /* Ensures textarea uses the same font size */
}
</style>
