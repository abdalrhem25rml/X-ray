<script setup>
import { reactive, watch, inject } from 'vue'

const props = defineProps({
  show: Boolean,
  profileData: {
    type: Object,
    default: () => null,
  },
})

const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')

// ✅ UPDATED: Form now includes the 'weight' attribute
const form = reactive({
  role: '',
  birthDate: '',
  gender: 'male',
  weight: null, // Add the new weight field
  isPregnant: false,
  estimatedDueDate: '',
  allergies: '',
  medicalHistory: '',
})

// Watcher to populate the form when the modal is shown
watch(
  () => props.show,
  (isShown) => {
    if (isShown && props.profileData) {
      // ✅ UPDATED: Populate the weight field
      form.role = props.profileData.role || 'patient'
      form.birthDate = props.profileData.birthDate || ''
      form.gender = props.profileData.gender || 'male'
      form.weight = props.profileData.weight || null // Populate weight
      form.isPregnant = props.profileData.isPregnant || false
      form.estimatedDueDate = props.profileData.estimatedDueDate || ''
      form.allergies = Array.isArray(props.profileData.allergies)
        ? props.profileData.allergies.join(', ')
        : ''
      form.medicalHistory = Array.isArray(props.profileData.medicalHistory)
        ? props.profileData.medicalHistory.join(', ')
        : ''
    }
  },
  { immediate: true },
)

// Watchers for form logic (unchanged)
watch(
  () => form.gender,
  (newGender) => {
    if (newGender === 'male') {
      form.isPregnant = false
      form.estimatedDueDate = ''
    }
  },
)

watch(
  () => form.isPregnant,
  (isNowPregnant) => {
    if (!isNowPregnant) {
      form.estimatedDueDate = ''
    }
  },
)

const handleSaveChanges = () => {
  // Validation is unchanged
  if (!form.role || !form.birthDate || !form.gender) {
    alert('Role, Birth Date, and Gender are required.')
    return
  }
  if (form.isPregnant && !form.estimatedDueDate) {
    alert('Estimated due date is required for pregnant patients.')
    return
  }
  // ✅ The form object, which now includes 'weight', is emitted
  emit('save', form)
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-button" @click="emit('close')">&times;</button>
        <h3 class="modal-title">
          {{ currentLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي' }}
        </h3>

        <form @submit.prevent="handleSaveChanges" class="profile-form">
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Role' : 'الدور' }}</label>
            <select v-model="form.role" required>
              <option value="doctor">{{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}</option>
              <option value="patient">{{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}</option>
            </select>
          </div>

          <!-- ✅ ADDED: Weight input field -->
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Weight (kg)' : 'الوزن (كجم)' }}</label>
            <input type="number" step="0.1" v-model="form.weight" placeholder="e.g., 70.5" />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Birth Date' : 'تاريخ الميلاد' }}</label>
            <input type="date" v-model="form.birthDate" required />
          </div>
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</label>
            <select v-model="form.gender" required>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <!-- Pregnancy section is unchanged -->
          <div v-if="form.gender === 'female'" class="pregnancy-section">
            <div class="form-group checkbox-group">
              <label
                ><input type="checkbox" v-model="form.isPregnant" /><span>{{
                  currentLanguage === 'en' ? 'Currently Pregnant?' : 'هل أنت حامل حاليًا؟'
                }}</span></label
              >
            </div>
            <div v-if="form.isPregnant" class="form-group">
              <label>{{
                currentLanguage === 'en' ? 'Estimated Due Date' : 'تاريخ الولادة المتوقع'
              }}</label>
              <input type="date" v-model="form.estimatedDueDate" required />
            </div>
          </div>

          <!-- Other form fields are unchanged -->
          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)'
            }}</label>
            <textarea v-model="form.allergies" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>{{
              currentLanguage === 'en'
                ? 'Medical History (comma-separated)'
                : 'التاريخ الطبي (مفصول بفاصلة)'
            }}</label>
            <textarea v-model="form.medicalHistory" rows="2"></textarea>
          </div>
          <div class="modal-actions">
            <button type="button" @click="emit('close')" class="action-button secondary">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
            <button type="submit" class="action-button">
              {{ currentLanguage === 'en' ? 'Save Changes' : 'حفظ التغييرات' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* --- FIX: CSS for scrolling is now corrected --- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Changed from 'center' to allow top alignment */
  z-index: 1000;
  overflow-y: auto; /* This enables vertical scrolling for the whole overlay */
  padding: 3rem 1rem; /* Adds space so the modal doesn't stick to the edges */
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 550px;
  width: 100%;
  margin: auto 0; /* Ensures it stays centered horizontally */
  position: relative;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.modal-title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
.action-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background-color: #8d99ae;
  color: white;
}
.action-button.secondary {
  background-color: #f1f1f1;
  color: #555;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.pregnancy-section {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: normal;
}
.checkbox-group input {
  width: auto;
  height: auto;
}
</style>
