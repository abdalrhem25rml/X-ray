<script setup>
import { ref, watch, inject } from 'vue'
import { useDatabaseStore } from '@/stores/database'

const props = defineProps({
  show: Boolean,
  profileData: {
    type: Object,
    default: () => null,
  },
})

const emit = defineEmits(['close', 'save'])

const databaseStore = useDatabaseStore()
const currentLanguage = inject('currentLanguage')

const form = ref({
  role: '',
  birthDate: '',
  gender: '',
  allergies: '',
  medicalHistory: '',
})

// --- THIS IS THE KEY TO AUTO-FILLING THE FORM ---
// We watch for changes in the incoming 'profileData' prop AND when the modal becomes visible.
watch(
  [() => props.profileData, () => props.show],
  ([newProfile, isVisible]) => {
    // We only update the form if the modal is visible AND we have valid profile data.
    if (isVisible && newProfile) {
      console.log('ProfileFormModal: Received profile data, populating form.', newProfile)
      form.value = {
        role: newProfile.role || '',
        // The parent view formats the date to 'YYYY-MM-DD' which is needed for the input
        birthDate: newProfile.birthDate || '',
        gender: newProfile.gender || '',
        // The parent view provides arrays, which we join into a string for the textarea
        allergies: newProfile.allergies?.join(', ') || '',
        medicalHistory: newProfile.medicalHistory?.join(', ') || '',
      }
    }
  },
  {
    // 'immediate: true' ensures this watcher runs as soon as the component is created.
    immediate: true,
  },
)

const handleSaveChanges = () => {
  // Emit the raw form data for the parent (ProfileView) to process and save.
  emit('save', form.value)
}
</script>

<template>
  <div v-if="show" class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
      <h2>{{ currentLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي' }}</h2>
      <form @submit.prevent="handleSaveChanges">
        <!-- Role (from 'users' collection) -->
        <div class="form-group">
          <label>{{ currentLanguage === 'en' ? 'Role' : 'الدور' }}</label>
          <select v-model="form.role" required>
            <option value="doctor">{{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}</option>
            <option value="patient">{{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}</option>
          </select>
        </div>

        <!-- Medical Details (from 'patients' collection) -->
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
          <button type="button" @click="emit('close')">
            {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
          </button>
          <button type="submit" :disabled="databaseStore.loading">
            <span v-if="databaseStore.loading">{{
              currentLanguage === 'en' ? 'Saving...' : 'جاري الحفظ...'
            }}</span>
            <span v-else>{{ currentLanguage === 'en' ? 'Save' : 'حفظ' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Using the same robust styles from before */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
  box-sizing: border-box;
}

.modal-content {
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 550px;
  width: 100%;
  margin: auto;
  text-align: start;
}

.modal-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
  font-size: 0.95rem;
}

.form-group input[type='date'],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #8d99ae;
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 1.5rem;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

button[type='submit'] {
  background-color: #8d99ae;
  color: white;
}

button[type='button'] {
  background-color: #f1f1f1;
  color: #555;
  border: 1px solid #ddd;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
