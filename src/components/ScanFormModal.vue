<script setup>
import { reactive, watch, inject } from 'vue'

const props = defineProps({
  show: Boolean,
  scan: Object,
  isSaving: Boolean,
  patient: {
    // This is optional.
    type: Object,
    default: null,
  },
})
const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')

// The form is simplified. Patient info is handled by the parent.
const form = reactive({
  id: null,
  isPregnant: false,
  pregnancyMonth: null,
  scanType: 'X-ray',
  scanDate: '',
  dose: null,
  doctorDose: null,
  reason: '',
  notes: '',
  doctorAdditionalContext: '',
})

watch(
  () => props.show,
  (isShown) => {
    if (isShown) {
      // Reset the form every time it's opened
      Object.assign(form, {
        id: null,
        isPregnant: false,
        pregnancyMonth: null,
        scanType: 'X-ray',
        scanDate: '',
        dose: null,
        doctorDose: null,
        reason: '',
        notes: '',
        doctorAdditionalContext: '',
      })

      // If we are editing an existing scan, populate the fields
      if (props.scan) {
        form.id = props.scan.id
        form.isPregnant = props.scan.isPregnant || false
        form.pregnancyMonth = props.scan.pregnancyMonth || null
        form.scanType = props.scan.scanType
        form.scanDate = props.scan.scanDate?.toDate()?.toISOString().split('T')[0] || ''
        form.dose = props.scan.dose
        form.doctorDose = props.scan.doctorDose
        form.reason = props.scan.reason
        form.notes = props.scan.notes
        form.doctorAdditionalContext = props.scan.doctorAdditionalContext
      }
    }
  },
)

// Reset pregnancy month if not pregnant
watch(
  () => form.isPregnant,
  (preg) => {
    if (!preg) form.pregnancyMonth = null
  },
)

// ✅ NEW: Reusable AI dose estimation function
const estimateDose = async (doseFor) => {
  let prompt = ''
  let validationRules = {}

  // 1. Better Prompt Engineering & Defining Validation Rules
  if (doseFor === 'patient') {
    if (form.scanType === 'CT') {
      prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic CT scan.
Context: Age: ${props.patient?.age || 'N/A'}, Reason: ${form.reason || 'Not provided'}.
IMPORTANT: The plausible range for a single diagnostic CT is 1-30 mSv. Respond ONLY with a number in this range.`
      validationRules = { min: 0.5, max: 40 } // Allow a slightly wider buffer for validation
    } else {
      // X-ray
      prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic X-ray.
Context: Age: ${props.patient?.age || 'N/A'}, Reason: ${form.reason || 'Not provided'}.
IMPORTANT: The plausible range for a single diagnostic X-ray is 0.01-5 mSv. Respond ONLY with a number in this range.`
      validationRules = { min: 0.001, max: 10 }
    }
  } else if (doseFor === 'doctor') {
    prompt = `Estimate the typical occupational dose (in mSv) for a doctor during a patient's ${form.scanType} scan.
Context: ${form.doctorAdditionalContext || 'No shielding or distance context provided.'}
IMPORTANT: Occupational dose is a small fraction of the patient dose, typically under 0.5 mSv. Respond ONLY with a number.`
    validationRules = { min: 0, max: 2 } // Hard limit for a single occupational dose
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

    if (isNaN(estimated)) {
      throw new Error('AI did not return a valid number.')
    }

    // 2. Client-Side Validation Guardrail
    if (estimated < validationRules.min || estimated > validationRules.max) {
      throw new Error(
        `AI returned an out-of-range value: ${estimated}. Expected between ${validationRules.min} and ${validationRules.max}.`,
      )
    }

    // If validation passes, update the form
    if (doseFor === 'patient') form.dose = estimated
    else if (doseFor === 'doctor') form.doctorDose = estimated
    return true
  } catch (error) {
    console.error(`Dose estimation failed for ${doseFor}:`, error)
    alert(
      currentLanguage.value === 'en'
        ? `The AI returned an unlikely value for the ${doseFor} dose. Please review and enter it manually.`
        : `أعاد الذكاء الاصطناعي قيمة غير محتملة لجرعة ${doseFor === 'patient' ? 'المريض' : 'الطبيب'}. يرجى مراجعتها وإدخالها يدويًا.`,
    )
    return false
  }
}

const handleSubmit = async () => {
  if (!form.scanDate) {
    alert(
      currentLanguage.value === 'en' ? 'Please provide the scan date.' : 'يرجى إدخال تاريخ الفحص.',
    )
    return
  }

  // Check if patient dose needs estimation
  if (props.patient && (form.dose === null || form.dose === '')) {
    const success = await estimateDose('patient')
    if (!success) return // Stop submission if estimation fails
  }

  // Check if doctor dose needs estimation
  if (form.doctorDose === null || form.doctorDose === '') {
    const success = await estimateDose('doctor')
    if (!success) return // Stop submission if estimation fails
  }

  // If all checks pass, emit the save event with the completed form
  emit('save', { ...form })
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

        <!-- If a patient prop is passed, display their name as context -->
        <div v-if="patient" class="patient-context-display">
          {{ currentLanguage === 'en' ? 'For Patient' : 'للمريض' }}:
          <strong>{{ patient.name }}</strong>
        </div>

        <form @submit.prevent="handleSubmit" class="scan-form">
          <!-- The Patient selection dropdown is now gone -->

          <!-- Pregnancy section only shown if the patient prop exists and gender is female -->
          <div v-if="patient?.gender === 'female'" class="form-row pregnancy-section">
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" v-model="form.isPregnant" />
                <span>{{ currentLanguage === 'en' ? 'Is Pregnant?' : 'هل المريضة حامل؟' }}</span>
              </label>
            </div>
            <div class="form-group">
              <label v-if="form.isPregnant">
                {{ currentLanguage === 'en' ? 'Month of Pregnancy' : 'شهر الحمل' }}
              </label>
              <input
                v-if="form.isPregnant"
                type="number"
                v-model="form.pregnancyMonth"
                min="1"
                max="9"
                placeholder="1-9"
              />
            </div>
          </div>

          <!-- The rest of the form -->
          <div class="form-row">
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}</label>
              <select v-model="form.scanType" required>
                <option value="X-ray">
                  {{ currentLanguage === 'en' ? 'X-ray' : 'أشعة سينية' }}
                </option>
                <option value="CT">{{ currentLanguage === 'en' ? 'CT' : 'أشعة مقطعية' }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>{{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}</label>
              <input type="date" v-model="form.scanDate" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>{{
                currentLanguage === 'en' ? "Patient's Dose (mSv)" : 'جرعة المريض (mSv)'
              }}</label>
              <input type="number" step="0.01" v-model="form.dose" />
            </div>
            <div class="form-group">
              <label>{{
                currentLanguage === 'en' ? "Doctor's Dose (mSv)" : 'جرعة الطبيب (mSv)'
              }}</label>
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
            <label>
              {{
                currentLanguage === 'en'
                  ? 'Additional details affecting your exposure (optional)'
                  : 'تفاصيل إضافية على تعرضك (اختياري)'
              }}
            </label>
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
  max-width: 600px;
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
  font-size: 2.5em;
  cursor: pointer;
  line-height: 1;
}
.modal-content h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8em;
}
.patient-context-display {
  background-color: #e9ecef;
  padding: 10px 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.1em;
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
  align-items: center;
}
.form-group {
  grid-column: span 2 / span 2;
}
.form-row > .form-group {
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
  height: 20px;
  width: 20px;
}
</style>
