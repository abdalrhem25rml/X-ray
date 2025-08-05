<script setup>
import { reactive, watch, inject, computed } from 'vue'
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
    { value: 'Barium Swallow', en: 'Barium Swallow', ar: 'بلع الباريوم' },
    { value: 'Barium Meal', en: 'Barium Meal', ar: 'وجبة الباريوم' },
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
const form = reactive({
  id: null,
  scanType: 'X-ray',
  subScanType: '',
  otherScanDescription: '',
  scanPlace: '', // New field
  otherScanPlaceDescription: '', // New field for "Other"
  scanDate: '',
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

const estimateDose = async () => {
  const userProfile = authStore.userProfile
  if (!userProfile) {
    alert('User profile not available. Cannot estimate dose.')
    return false
  }

  const age = userProfile.birthDate
    ? new Date().getFullYear() - userProfile.birthDate.toDate().getFullYear()
    : 'N/A'
  const weight = userProfile.weight || 70

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

  const prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a ${form.scanType} scan of the ${finalScanPlaceText} with the specific protocol: "${finalScanDetailText}". Patient Age: ${age}. Patient Weight: ${weight} kg. Reason for scan: "${form.reason || 'Not provided'}". Respond ONLY with a single number. Do not add any other text or units.`

  const validationRules = form.scanType === 'CT' ? { min: 0.5, max: 40 } : { min: 0.001, max: 10 }

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
    form.patientDose = estimated
    return true
  } catch (error) {
    console.error(`Dose estimation failed:`, error)
    alert(
      currentLanguage.value === 'en'
        ? 'AI estimation failed. Please enter the dose manually.'
        : 'فشل تقدير الذكاء الاصطناعي. يرجى إدخال الجرعة يدويًا.',
    )
    return false
  }
}

const handleSubmit = async () => {
  if (
    !form.scanDate ||
    !form.scanPlace ||
    (showOtherScanPlaceInput.value && !form.otherScanPlaceDescription) ||
    !form.subScanType ||
    (showOtherInput.value && !form.otherScanDescription)
  ) {
    alert(
      currentLanguage.value === 'en'
        ? 'Please fill all required scan details.'
        : 'يرجى ملء جميع تفاصيل الفحص المطلوبة.',
    )
    return
  }
  if (!form.patientDose && form.patientDose !== 0) {
    if (!(await estimateDose())) return
  }

  const finalScanDetailValue = showOtherInput.value ? form.otherScanDescription : form.subScanType
  const finalScanPlaceValue = showOtherScanPlaceInput.value
    ? form.otherScanPlaceDescription
    : form.scanPlace

  const dataToSave = {
    id: form.id,
    scanType: form.scanType,
    scanDetail: finalScanDetailValue,
    scanPlace: finalScanPlaceValue,
    scanDate: form.scanDate,
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

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}</label>
            <input type="date" v-model="form.scanDate" required />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Your Dose (mSv)' : 'جرعتك (mSv)' }}</label>
            <input
              type="number"
              step="0.01"
              v-model="form.patientDose"
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
/* All styles are unchanged */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 550px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.2rem;
  line-height: 1;
  color: #aaa;
  cursor: pointer;
}

.modal-content h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
}

.scan-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.action-button {
  padding: 12px 25px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.action-button[type='submit'] {
  background-color: #8d99ae;
  color: white;
}

.action-button.secondary {
  background-color: #e9ecef;
  color: #333;
}

.action-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
