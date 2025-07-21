<script setup>
import { reactive, watch, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'

// --- Component Definition ---
const props = defineProps({
  show: Boolean,
  scan: Object, // The scan object to edit, if any
  isSaving: Boolean,
})
const emit = defineEmits(['close', 'save'])

// --- Pinia Stores ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore() // To get the user's detailed profile
const currentLanguage = inject('currentLanguage')

// --- Reactive Form State ---
const form = reactive({
  id: null,
  scanType: 'X-ray',
  scanDate: '',
  patientDose: null, // This is the user's own dose
  reason: '',
  notes: '',
})

// --- Logic ---

/**
 * Populates the form when editing an existing scan, or resets it for a new one.
 */
watch(
  () => props.show,
  (isShown) => {
    if (isShown) {
      // Reset the form to its default state
      Object.assign(form, {
        id: null,
        scanType: 'X-ray',
        scanDate: new Date().toISOString().split('T')[0], // Default to today
        patientDose: null,
        reason: '',
        notes: '',
      })

      // If we are editing, populate the fields from the passed 'scan' prop
      if (props.scan) {
        form.id = props.scan.id
        form.scanType = props.scan.scanType
        form.scanDate = props.scan.scanDate?.toDate()?.toISOString().split('T')[0] || ''
        form.patientDose = props.scan.patientDose // Use the correct field name
        form.reason = props.scan.reason
        form.notes = props.scan.notes
      }
    }
  },
  { immediate: true },
)

/**
 * Uses AI to estimate the user's dose based on scan type and reason.
 */
const estimateDose = async () => {
  // Fetch the user's full profile for better AI context
  const userProfile = await databaseStore.fetchPatientProfile(authStore.user.uid)
  const age = userProfile?.birthDate
    ? new Date().getFullYear() - userProfile.birthDate.toDate().getFullYear()
    : 'N/A'

  let prompt = ''
  let validationRules = {}

  if (form.scanType === 'CT') {
    prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic CT scan.
Context: Age: ${age}, Reason: ${form.reason || 'Not provided'}.
IMPORTANT: The plausible range for a single diagnostic CT is 1-30 mSv. Respond ONLY with a number in this range.`
    validationRules = { min: 0.5, max: 40 }
  } else {
    // X-ray
    prompt = `Estimate the typical effective dose (in mSv) for a patient undergoing a single diagnostic X-ray.
Context: Age: ${age}, Reason: ${form.reason || 'Not provided'}.
IMPORTANT: The plausible range for a single diagnostic X-ray is 0.01-5 mSv. Respond ONLY with a number in this range.`
    validationRules = { min: 0.001, max: 10 }
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
    if (estimated < validationRules.min || estimated > validationRules.max) {
      throw new Error(`AI returned an out-of-range value: ${estimated}.`)
    }

    form.patientDose = estimated
    return true
  } catch (error) {
    console.error(`Dose estimation failed:`, error)
    alert('The AI returned an unlikely value. Please review and enter the dose manually.')
    return false
  }
}

/**
 * Validates the form, estimates dose if needed, and emits the 'save' event.
 */
const handleSubmit = async () => {
  if (!form.scanDate) {
    alert('Please provide the scan date.')
    return
  }

  // If the user's dose is not filled in, try to estimate it.
  if (form.patientDose === null || form.patientDose === '') {
    const success = await estimateDose()
    if (!success) return // Stop submission if AI estimation fails validation
  }

  // If all checks pass, emit the save event with the form data.
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

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Your Dose (mSv)' : 'جرعتك (mSv)' }}</label>
            <input type="number" step="0.01" v-model="form.patientDose"
                  :placeholder="currentLanguage === 'en' ? 'Leave blank to estimate with AI'
                                : 'اتركه فارغًا لجعل الذكاء الصناعي يقدر التعرض'" />
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
              <span v-if="isSaving">
                {{ currentLanguage === 'en' ? 'Saving...' : 'جار الحفظ...' }}
              </span>
              <span v-else>{{ currentLanguage === 'en' ? 'Save' : 'حفظ' }}</span>
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

/* Animation for the modal fade-in */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
