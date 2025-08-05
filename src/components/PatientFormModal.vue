<script setup>
import { reactive, watch, inject } from 'vue'

const props = defineProps({
  show: Boolean,
  patient: Object,
  isSaving: Boolean,
})
const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')

// ✅ UPDATED: Form now includes weight
const form = reactive({
  id: null,
  name: '',
  birthDate: '',
  gender: 'male',
  weight: null, // Add weight field
  isPregnant: false,
  estimatedDueDate: '',
  medicalHistory: '',
  allergies: '',
})

// Watch for the modal to open or the patient data to change
watch(
  () => props.show,
  (isShown) => {
    if (!isShown) return

    if (props.patient) {
      // --- Edit mode ---
      form.id = props.patient.id
      form.name = props.patient.name
      form.gender = props.patient.gender
      form.weight = props.patient.weight || null // Populate weight
      form.isPregnant = props.patient.isPregnant || false
      form.birthDate = props.patient.birthDate?.toDate
        ? props.patient.birthDate.toDate().toISOString().split('T')[0]
        : ''
      form.estimatedDueDate = props.patient.estimatedDueDate?.toDate
        ? props.patient.estimatedDueDate.toDate().toISOString().split('T')[0]
        : ''
      form.medicalHistory = Array.isArray(props.patient.medicalHistory)
        ? props.patient.medicalHistory.join(', ')
        : ''
      form.allergies = Array.isArray(props.patient.allergies)
        ? props.patient.allergies.join(', ')
        : ''
    } else {
      // --- Add mode: Reset form ---
      Object.assign(form, {
        id: null,
        name: '',
        birthDate: '',
        gender: 'male',
        weight: null,
        isPregnant: false,
        estimatedDueDate: '',
        medicalHistory: '',
        allergies: '',
      })
    }
  },
  { immediate: true },
)

watch(
  () => form.isPregnant,
  (isPregnant) => {
    if (!isPregnant) {
      form.estimatedDueDate = ''
    }
  },
)

const handleSubmit = () => {
  if (!form.name || !form.birthDate) {
    alert('Name and Date of Birth are required.')
    return
  }
  if (form.isPregnant && !form.estimatedDueDate) {
    alert('Please provide the estimated due date for the pregnancy.')
    return
  }
  if (form.gender === 'male' || !form.isPregnant) {
    form.isPregnant = false
    form.estimatedDueDate = null
  }

  // ✅ UPDATED: Include weight in the object to be saved
  const dataToSave = {
    ...form,
    weight: Number(form.weight) || null, // Ensure weight is a number or null
    birthDate: new Date(form.birthDate),
    estimatedDueDate: form.estimatedDueDate ? new Date(form.estimatedDueDate) : null,
    medicalHistory: form.medicalHistory
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    allergies: form.allergies
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
  }

  emit('save', dataToSave)
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button @click="$emit('close')" class="close-button">&times;</button>
        <h3 class="modal-title">
          {{ patient ? 'Edit Patient' : 'Add New Patient' }}
        </h3>
        <form @submit.prevent="handleSubmit" class="patient-form">
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}</label>
            <input type="text" v-model="form.name" required />
          </div>

          <!-- ✅ ADDED: Weight input field -->
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Weight (kg)' : 'الوزن (كجم)' }}</label>
            <input type="number" step="0.1" v-model="form.weight" placeholder="e.g., 70.5" />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Date of Birth' : 'تاريخ الميلاد' }}</label>
            <input type="date" v-model="form.birthDate" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</label>
            <select v-model="form.gender">
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <!-- --- Pregnancy Section --- -->
          <div v-if="form.gender === 'female'" class="pregnancy-section">
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" v-model="form.isPregnant" />
                <span>{{
                  currentLanguage === 'en' ? 'Currently Pregnant?' : 'هل هي حامل حاليًا؟'
                }}</span>
              </label>
            </div>
            <!-- Show due date field only if pregnant is checked -->
            <div v-if="form.isPregnant" class="form-group">
              <label>{{
                currentLanguage === 'en' ? 'Estimated Due Date' : 'تاريخ الولادة المتوقع'
              }}</label>
              <input type="date" v-model="form.estimatedDueDate" required />
            </div>
          </div>

          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي'
            }}</label>
            <textarea v-model="form.medicalHistory" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية'
            }}</label>
            <textarea v-model="form.allergies" rows="3"></textarea>
          </div>
          <div class="modal-actions">
            <button type="submit" class="action-button" :disabled="isSaving">
              {{ isSaving ? 'Saving...' : 'Save' }}
            </button>
            <button type="button" @click="$emit('close')" class="action-button secondary">
              Cancel
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
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  overflow-y: auto;
  padding: 3rem 1rem;
  box-sizing: border-box;
}
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;
  margin: auto;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  color: #aaa;
}
.modal-title {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.5rem;
  font-weight: 600;
}
.patient-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}
.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;
}
.checkbox-group input[type='checkbox'] {
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #8d99ae;
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
  gap: 10px;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}
.action-button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  color: white;
  background-color: #8d99ae;
}
.action-button.secondary {
  background-color: #6c757d;
}
.action-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.pregnancy-section {
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
