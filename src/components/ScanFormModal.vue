<script setup>
// --- SCRIPT REMAINS THE SAME ---
import { reactive, watch, computed, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'

const props = defineProps({
  show: Boolean,
  scan: Object,
  isSaving: Boolean,
})
const emit = defineEmits(['close', 'save'])

const authStore = useAuthStore()
const currentLanguage = inject('currentLanguage')
const userRole = computed(() => authStore.role)

const form = reactive({
  id: null,
  patientName: '',
  sex: 'male',
  isPregnant: false,
  pregnancyMonth: null,
  scanType: 'X-ray',
  scanDate: '',
  dose: null, // Patient's dose
  doctorDose: null, // Doctor's dose
  reason: '',
  notes: '',
  doctorAdditionalContext: '',
})

watch(
  () => props.scan,
  (newScan) => {
    if (newScan) {
      form.id = newScan.id
      form.patientName = newScan.patientName
      form.sex = newScan.sex || 'male'
      form.isPregnant = newScan.isPregnant || false
      form.pregnancyMonth = newScan.pregnancyMonth || null
      form.scanType = newScan.scanType
      form.scanDate = newScan.scanDate
        ? typeof newScan.scanDate === 'string'
          ? newScan.scanDate
          : newScan.scanDate.toDate
            ? newScan.scanDate.toDate().toISOString().split('T')[0]
            : ''
        : ''
      form.dose = newScan.dose
      form.doctorDose = newScan.doctorDose || null // Handle new field
      form.reason = newScan.reason
      form.notes = newScan.notes
      form.doctorAdditionalContext = newScan.doctorAdditionalContext || ''
    } else {
      Object.assign(form, {
        id: null,
        patientName: '',
        sex: 'male',
        isPregnant: false,
        pregnancyMonth: null,
        scanType: 'X-ray',
        scanDate: '',
        dose: null,
        doctorDose: null, // Reset new field
        reason: '',
        notes: '',
        doctorAdditionalContext: '',
      })
    }
  },
)

watch(
  () => form.sex,
  (newSex) => {
    if (newSex !== 'female') form.isPregnant = false
  },
)
watch(
  () => form.isPregnant,
  (preg) => {
    if (!preg) form.pregnancyMonth = null
  },
)

const estimateDose = async (doseFor) => {
  let prompt = ''
  if (doseFor === 'patient') {
    prompt =
      currentLanguage.value === 'en'
        ? `Estimate the effective dose (in mSv) for a patient undergoing a ${form.scanType} scan.
Reason: ${form.reason || 'No reason provided'}
Symptoms: ${form.notes || 'No additional notes'}

Respond only with a number.`
        : `قدر الجرعة الفعالة (mSv) لمريض يخضع لفحص ${form.scanType}.
السبب: ${form.reason || 'لا يوجد سبب'}
ملاحظات إضافية: ${form.notes || 'لا يوجد'}

الرجاء الرد فقط بالرقم.`
  } else if (doseFor === 'doctor') {
    prompt =
      currentLanguage.value === 'en'
        ? `Estimate the effective occupational dose (in mSv) for a doctor during a patient's ${form.scanType} scan.
Doctor's context: ${form.doctorAdditionalContext || 'No additional context from doctor.'}

The typical occupational dose is a fraction of the patient dose. Respond only with a number.`
        : `قدر الجرعة المهنية الفعالة (mSv) لطبيب أثناء فحص ${form.scanType} لمريض.
سياق الطبيب: ${form.doctorAdditionalContext || 'لا يوجد سياق إضافي من الطبيب.'}

الجرعة المهنية عادة ما تكون جزءًا صغيرًا من جرعة المريض. الرجاء الرد فقط بالرقم.`
  }

  try {
    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: 'text/plain' },
    }
    const apiKey = import.meta.env.VITE_GEMINI_KEY
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) throw new Error(`Failed to estimate dose for ${doseFor}.`)

    const result = await res.json()
    const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || ''
    const estimated = parseFloat(aiText.match(/[\d.]+/))

    if (!isNaN(estimated)) {
      if (doseFor === 'patient') form.dose = estimated
      else if (doseFor === 'doctor') form.doctorDose = estimated
      return true // Success
    } else {
      alert(
        currentLanguage.value === 'en'
          ? `Could not estimate the ${doseFor} dose. Please provide it manually.`
          : `لم نتمكن من تقدير جرعة ${doseFor === 'patient' ? 'المريض' : 'الطبيب'}. يرجى إدخالها يدوياً.`,
      )
      return false // Failure
    }
  } catch (err) {
    console.error('Dose estimate failed:', err)
    alert(
      currentLanguage.value === 'en'
        ? `An error occurred while estimating the ${doseFor} dose.`
        : `حدث خطأ أثناء تقدير جرعة ${doseFor === 'patient' ? 'المريض' : 'الطبيب'}.`,
    )
    return false // Failure
  }
}

const handleSubmit = async () => {
  if (!form.patientName || !form.scanDate) {
    alert(
      currentLanguage.value === 'en'
        ? 'Please provide patient name and scan date.'
        : 'يرجى إدخال اسم المريض وتاريخ الفحص.',
    )
    return
  }

  if (form.dose == null || form.dose === '') {
    const patientDoseOk = await estimateDose('patient')
    if (!patientDoseOk) return
  }

  if (userRole.value === 'doctor' && (form.doctorDose == null || form.doctorDose === '')) {
    const doctorDoseOk = await estimateDose('doctor')
    if (!doctorDoseOk) return
  }

  emit('save', { ...form })
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3 class="modal-title">
          {{
            currentLanguage === 'en'
              ? props.scan
                ? 'Edit Scan Record'
                : 'Add New Scan Record'
              : props.scan
                ? 'تعديل سجل الفحص'
                : 'إضافة سجل فحص جديد'
          }}
        </h3>
        <form @submit.prevent="handleSubmit" class="scan-form">
          <!-- ... other form fields ... -->
          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Patient Name' : 'اسم المريض' }}
                <span class="required-asterisk">*</span>
              </label>
              <input type="text" v-model="form.patientName" required />
            </div>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Sex' : 'الجنس' }}
                <span class="required-asterisk">*</span>
              </label>
              <select v-model="form.sex" required>
                <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
                <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
              </select>
            </div>
          </div>

          <!-- --- FIXED: PREGNANCY SECTION --- -->
          <div v-if="form.sex === 'female'" class="form-row pregnancy-section">
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" v-model="form.isPregnant" />
                <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل المريضة حامل؟' }}</span>
              </label>
            </div>
            <!-- The "Month of Pregnancy" group is now always in the DOM. -->
            <!-- Its visibility is controlled by CSS classes. -->
            <div class="form-group">
              <div class="visibility-container" :class="{ 'is-visible': form.isPregnant }">
                <label>
                  {{ currentLanguage === 'en' ? 'Month of Pregnancy' : 'شهر الحمل' }}
                </label>
                <input
                  type="number"
                  v-model="form.pregnancyMonth"
                  min="1"
                  max="9"
                  placeholder="1-9"
                />
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}
                <span class="required-asterisk">*</span>
              </label>
              <select v-model="form.scanType" required>
                <option value="X-ray">
                  {{ currentLanguage === 'en' ? 'X-ray' : 'أشعة سينية' }}
                </option>
                <option value="CT">{{ currentLanguage === 'en' ? 'CT' : 'أشعة مقطعية' }}</option>
                <option value="X-ray and CT">
                  {{ currentLanguage === 'en' ? 'X-ray and CT' : 'أشعة سينية ومقطعية' }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}
                <span class="required-asterisk">*</span>
              </label>
              <input type="date" v-model="form.scanDate" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? "Patient's Dose (mSv)" : 'جرعة المريض (mSv)' }}
              </label>
              <input type="number" step="0.01" v-model="form.dose" />
            </div>
            <div v-if="userRole === 'doctor'" class="form-group">
              <label>
                {{ currentLanguage === 'en' ? "Doctor's Dose (mSv)" : 'جرعة الطبيب (mSv)' }}
              </label>
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
          <div v-if="userRole === 'doctor'" class="form-group">
            <label>
              {{
                currentLanguage === 'en'
                  ? 'Additional details affecting your exposure (optional)'
                  : 'تفاصيل إضافية على تعرضك (اختياري)'
              }}
            </label>
            <textarea
              v-model="form.doctorAdditionalContext"
              rows="2"
              :placeholder="
                currentLanguage === 'en'
                  ? 'e.g., Stood 2 meters from the machine, used a lead apron and thyroid shield...etc'
                  : 'مثال: وقفت على بعد 2 متر من الجهاز، استخدمت مريول رصاص وواقي للغدة الدرقية...إلخ'
              "
            ></textarea>
          </div>
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
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* --- STYLES --- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  padding: 50px 20px;
  box-sizing: border-box;
}
.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  position: relative;
  margin: auto 0;
  height: fit-content;
}
.required-asterisk {
  color: #dc2626;
  margin-inline-start: 2px;
}
.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em;
  cursor: pointer;
  line-height: 1;
}
.modal-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8em;
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
  /* --- FIXED: Ensure alignment in all grid rows --- */
  align-items: center;
}
.form-group {
  /* Let single items span the full width */
  grid-column: span 2 / span 2;
}
.form-row > .form-group {
  /* But items in a .form-row should take up one column */
  grid-column: span 1 / span 1;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
}
.action-button {
  padding: 12px 25px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background-color: #8d99ae;
  color: white;
}
.action-button.secondary {
  background-color: #6c757d;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.pregnancy-section {
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}
.checkbox-group label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
}
.checkbox-group input[type='checkbox'] {
  width: auto;
  margin-inline-end: 10px;
  appearance: none;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: grid;
  place-content: center;
}
.checkbox-group input[type='checkbox']::before {
  content: '';
  width: 12px;
  height: 12px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #8d99ae;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
.checkbox-group input[type='checkbox']:checked::before {
  transform: scale(1);
}

/* --- FIX: These classes control the visibility without affecting layout --- */
.visibility-container {
  /* Start invisible and non-interactive, but taking up space */
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.visibility-container.is-visible {
  /* Become visible and interactive when the class is applied */
  visibility: visible;
  opacity: 1;
}
</style>
