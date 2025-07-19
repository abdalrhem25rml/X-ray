<script setup>
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
  dose: null,
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
    // Estimate dose using AI
    try {
      const prompt =
        currentLanguage.value === 'en'
          ? `Estimate the effective dose (in mSv) for a ${form.scanType} scan.
Reason: ${form.reason || 'No reason provided'}
Symptoms: ${form.notes || 'No additional notes'}

Respond only with a number.`
          : `قدر الجرعة الفعالة (mSv) لفحص ${form.scanType}.
السبب: ${form.reason || 'لا يوجد سبب'}
ملاحظات إضافية: ${form.notes || 'لا يوجد'}

الرجاء الرد فقط بالرقم.`

      const payload = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'text/plain',
        },
      }

      const apiKey = import.meta.env.VITE_GEMINI_KEY
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to estimate dose.')

      const result = await res.json()
      const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || ''
      const estimated = parseFloat(aiText.match(/[\d.]+/)) // extract number

      if (!isNaN(estimated)) {
        form.dose = estimated
      } else {
        alert(
          currentLanguage.value === 'en'
            ? 'Could not estimate the dose. Please provide it manually.'
            : 'لم نتمكن من تقدير الجرعة. يرجى إدخالها يدوياً.',
        )
        return
      }
    } catch (err) {
      console.error('Dose estimate failed:', err)
      alert(
        currentLanguage.value === 'en'
          ? 'An error occurred while estimating dose.'
          : 'حدث خطأ أثناء تقدير الجرعة.',
      )
      return
    }
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
          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Patient Name' : 'اسم المريض' }}
                <span class="text-red-600">*</span>
              </label>
              <input type="text" v-model="form.patientName" required />
            </div>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Sex' : 'الجنس' }}
                <span class="text-red-600">*</span>
              </label>
              <select v-model="form.sex" required>
                <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
                <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
              </select>
            </div>
          </div>
          <div v-if="form.sex === 'female'" class="form-row pregnancy-section">
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
          <div class="form-row">
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}
                <span class="text-red-600">*</span>
              </label>
              <select v-model="form.scanType" required>
                <option value="X-ray">
                  {{ currentLanguage === 'en' ? 'X-ray' : 'أشعة سينية' }}
                </option>
                <option value="CT">{{ currentLanguage === 'en' ? 'CT' : 'أشعة مقطعية' }}</option>
                <option value="CT">
                  {{ currentLanguage === 'en' ? 'X-ray and CT' : 'أشعة سينية ومقطعية' }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>
                {{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}
                <span class="text-red-600">*</span>
              </label>
              <input type="date" v-model="form.scanDate" required />
            </div>
          </div>
          <div class="form-group">
            <label>
              {{ currentLanguage === 'en' ? 'Dose (mSv)' : 'الجرعة (mSv)' }}
            </label>
            <input type="number" step="0.01" v-model="form.dose" />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Reason for Scan' : 'أسباب الفحص' }}</label>
            <textarea v-model="form.reason" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Additional Notes' : 'ملاحظات إضافية' }}</label>
            <textarea v-model="form.notes" rows="3"></textarea>
          </div>
          <!-- Doctor-only field -->
          <div v-if="userRole === 'doctor'" class="form-group">
            <label>
              {{
                currentLanguage === 'en'
                  ? 'Additional details affecting your exposure (optional)'
                  : 'تفاصيل إضافية  على تعرضك (اختياري)'
              }}
            </label>
            <textarea
              v-model="form.doctorAdditionalContext"
              rows="2"
              :placeholder="
                currentLanguage === 'en'
                  ? 'e.g., Stood 2 meters from the machine, used a lead apron and thyroid shield...etc'
                  : 'مثال: وقفت على  بعد 2 متر من الجهاز، استخدمت مريول رصاص وواقي للغدة الدرقية...إلخ'
              "
            >
              ></textarea
            >
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
/* Reusing styles from PatientFormModal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
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
  align-items: center;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
}

.checkbox-group input[type='checkbox'] {
  width: auto;
  margin-right: 10px;
  /* For better styling, you can hide the default and use a custom one */
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
.visibility-container {
  /* Start invisible and non-interactive, but taking up space */
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.visibility-container.is-visible {
  /* Become visible when the class is applied */
  visibility: visible;
  opacity: 1;
}
</style>
