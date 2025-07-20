<script setup>
import { reactive, watch, inject } from 'vue'

const props = defineProps({
  show: Boolean,
  patient: Object, // If a patient is passed, we're in "edit" mode
  isSaving: Boolean,
})
const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')

// The form's structure
const form = reactive({
  id: null,
  name: '',
  age: null,
  gender: 'male',
  medicalHistory: [],
  allergies: [],
})

// When the modal is shown, populate the form if we are editing
watch(
  () => props.patient,
  (newPatient) => {
    if (newPatient) {
      // Edit mode: populate form
      form.id = newPatient.id
      form.name = newPatient.name
      form.age = newPatient.age
      form.gender = newPatient.gender
      form.medicalHistory = Array.isArray(newPatient.medicalHistory)
        ? newPatient.medicalHistory.join(', ')
        : ''
      form.allergies = Array.isArray(newPatient.allergies) ? newPatient.allergies.join(', ') : ''
    } else {
      // Add mode: reset form
      form.id = null
      form.name = ''
      form.age = null
      form.gender = 'male'
      form.medicalHistory = ''
      form.allergies = ''
    }
  },
  { immediate: true },
)

const handleSubmit = () => {
  if (!form.name || !form.age) {
    alert(
      currentLanguage.value === 'en' ? 'Name and Age are required.' : 'الاسم والعمر حقول مطلوبة.',
    )
    return
  }

  // Convert comma-separated strings back to arrays
  const dataToSave = {
    ...form,
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
          {{
            patient
              ? currentLanguage === 'en'
                ? 'Edit Patient'
                : 'تعديل بيانات المريض'
              : currentLanguage === 'en'
                ? 'Add New Patient'
                : 'إضافة مريض جديد'
          }}
        </h3>
        <form @submit.prevent="handleSubmit" class="patient-form">
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}</label>
            <input type="text" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Age' : 'العمر' }}</label>
            <input type="number" v-model="form.age" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</label>
            <select v-model="form.gender">
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>{{
              currentLanguage === 'en'
                ? 'Medical History (comma-separated)'
                : 'التاريخ الطبي (مفصول بفاصلة)'
            }}</label>
            <textarea v-model="form.medicalHistory" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)'
            }}</label>
            <textarea v-model="form.allergies" rows="3"></textarea>
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
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  position: relative;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
}
.modal-title {
  text-align: center;
  margin-bottom: 25px;
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
</style>
