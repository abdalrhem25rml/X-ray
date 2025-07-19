<script setup>
import { reactive, watch, computed, inject } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This modal receives props to control it from the parent
const props = defineProps({
  show: Boolean,
  patient: Object, // The patient to edit. Will be NULL if we are adding a new one.
  isSaving: Boolean,
})

// It tells the parent when to close or when to save the data.
const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')

// A local "draft" of the patient data.
const form = reactive({
  id: null,
  name: '',
  age: null,
  gender: '',
  medicalHistory: '',
  allergies: '',
  previousRadiationExposure: '',
})

// This is the key part: When the `patient` prop changes (i.e., the modal is opened),
// we fill our local form with its data. If the prop is null, we reset the form.
watch(() => props.patient, (newPatient) => {
  if (newPatient) { // Editing mode
    form.id = newPatient.id
    form.name = newPatient.name
    form.age = newPatient.age
    form.gender = newPatient.gender
    // Join arrays into comma-separated strings for the textareas
    form.medicalHistory = newPatient.medicalHistory?.join(', ') || ''
    form.allergies = newPatient.allergies?.join(', ') || ''
    form.previousRadiationExposure = newPatient.previousRadiationExposure?.join(', ') || ''
  } else { // Adding mode: reset everything
    form.id = null
    form.name = ''
    form.age = null
    form.gender = ''
    form.medicalHistory = ''
    form.allergies = ''
    form.previousRadiationExposure = ''
  }
})

// Computed properties to change the modal's text based on add/edit mode
const isEditing = computed(() => !!props.patient)
const title = computed(() => {
  const key = isEditing.value ? 'Edit Patient' : 'Add New Patient'
  return currentLanguage.value === 'en' ? key : { 'Edit Patient': 'تعديل بيانات المريض', 'Add New Patient': 'إضافة مريض جديد' }[key]
})

// When the form is submitted...
function handleSubmit() {
  // Package the data to send to the parent
  const patientDataToSave = {
    ...form,
    // Convert comma-separated strings back into arrays of strings
    medicalHistory: form.medicalHistory.split(',').map(s => s.trim()).filter(Boolean),
    allergies: form.allergies.split(',').map(s => s.trim()).filter(Boolean),
    previousRadiationExposure: form.previousRadiationExposure.split(',').map(s => s.trim()).filter(Boolean),
  }
  // Tell the parent to save this data
  emit('save', patientDataToSave)
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3 class="modal-title">{{ title }}</h3>

        <form @submit.prevent="handleSubmit" class="patient-form">
          <!-- The form now uses the local 'form' object -->
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }} <span class="text-red-600">*</span></label>
            <input type="text" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Age' : 'العمر' }} <span class="text-red-600">*</span></label>
            <input type="number" v-model="form.age" required min="0" />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }} <span class="text-red-600">*</span></label>
            <select v-model="form.gender" required>
              <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Gender' : 'اختر الجنس' }}</option>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
              <option value="other">{{ currentLanguage === 'en' ? 'Other' : 'آخر' }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي (مفصولة بفاصلة)' }}</label>
            <textarea v-model="form.medicalHistory" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)' }}</label>
            <textarea v-model="form.allergies" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Previous Radiation Exposure (comma-separated)' : 'التعرض السابق للإشعاع (مفصولة بفاصلة)' }}</label>
            <textarea v-model="form.previousRadiationExposure" rows="2"></textarea>
          </div>

        <button type="submit" class="action-button" :disabled="isSaving">
          <span v-if="isSaving">
            <font-awesome-icon icon="spinner" spin />
            {{ currentLanguage === 'en' ? 'Saving...' : 'جاري الحفظ...' }}
          </span>
          <span v-else>{{ currentLanguage === 'en' ? 'Save Patient' : 'حفظ المريض' }}</span>
        </button>
        <button type="button" @click="$emit('close')" class="action-button secondary mt-2">
          {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
        </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* All the styles for the modal overlay, content, form, and buttons */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 1000; padding: 20px; }
.modal-content { background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); max-width: 600px; width: 100%; position: relative; max-height: 90vh; overflow-y: auto; }
.close-modal-button { position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 2.5em; cursor: pointer; color: #8d99ae; transition: all 0.2s ease; }
.close-modal-button:hover { color: #555; transform: rotate(90deg); }
.modal-title { color: #8d99ae; margin-bottom: 25px; font-size: 1.8em; font-weight: 700; text-align: center; }
.patient-form { display: flex; flex-direction: column; gap: 15px; text-align: left; }
.form-group { margin-bottom: 10px; }
.form-group label { display: block; margin-bottom: 8px; color: #333; font-weight: 600; }
.text-red-600 { color: #d9534f; }
.form-group input, .form-group textarea, .form-group select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 1em; }
.form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: #8d99ae; box-shadow: 0 0 0 3px rgba(141,153,174,0.3); outline: none; }
.modal-actions { display: flex; justify-content: flex-end; gap: 15px; margin-top: 30px; }
.action-button { background-color: #8d99ae; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 1em; font-weight: 600; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 8px; }
.action-button:hover:not(:disabled) { transform: translateY(-2px); }
.action-button:disabled { background-color: #cccccc; cursor: not-allowed; transform: none; box-shadow: none; }
.action-button.secondary { background-color: #6c757d; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.4s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-content[dir="rtl"] .patient-form {
  text-align: right;
}
</style>
