<script setup>
import { ref, inject, onMounted } from 'vue'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'

const props = defineProps({
  show: Boolean,
  userId: String, // The UID of the user whose profile is being edited
})

const emit = defineEmits(['close', 'save'])

const currentLanguage = inject('currentLanguage')
const firestore = getFirestore()
const appId = import.meta.env.VITE_APP_ID

const isLoading = ref(false)
const form = ref({
  role: null,
  birthDate: '',
  gender: '',
  isPregnant: false,
  allergies: '',
  medicalHistory: '',
})

// Load the user's current profile data when the modal opens
onMounted(async () => {
  if (props.show && props.userId) {
    isLoading.value = true
    try {
      const userRef = doc(firestore, 'artifacts', appId, 'users', props.userId)
      const userSnap = await getDoc(userRef)
      if (userSnap.exists()) {
        const data = userSnap.data()
        form.value = {
          role: data.role || null,
          birthDate: data.birthDate || '',
          gender: data.gender || '',
          isPregnant: data.isPregnant || false,
          allergies: data.allergies?.join(', ') || '',
          medicalHistory: data.medicalHistory?.join(', ') || '',
        }
      }
    } catch (err) {
      console.error('Failed to load profile:', err)
    } finally {
      isLoading.value = false
    }
  }
})

const saveProfile = async () => {
  isLoading.value = true
  try {
    const userRef = doc(firestore, 'artifacts', appId, 'users', props.userId)
    await updateDoc(userRef, {
      role: form.value.role,
      birthDate: form.value.birthDate,
      gender: form.value.gender,
      isPregnant: form.value.gender === 'female' ? form.value.isPregnant : false,
      allergies: form.value.allergies.split(',').map(s => s.trim()).filter(Boolean),
      medicalHistory: form.value.medicalHistory.split(',').map(s => s.trim()).filter(Boolean),
    })
    emit('save')
  } catch (err) {
    console.error('Failed to save profile:', err)
  } finally {
    isLoading.value = false
    emit('close')
  }
}
</script>

<template>
  <div v-if="show" class="modal-backdrop">
    <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
      <h2>{{ currentLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي' }}</h2>
      <form @submit.prevent="saveProfile">
        <div class="form-group">
          <label>{{ currentLanguage === 'en' ? 'Role' : 'الدور' }}</label>
          <select v-model="form.role" required>
            <option value="doctor">{{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}</option>
            <option value="patient">{{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}</option>
          </select>
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

        <div v-if="form.gender === 'female'" class="form-group">
          <label>
            <input type="checkbox" v-model="form.isPregnant" />
            {{ currentLanguage === 'en' ? 'Currently Pregnant' : 'حامل حاليًا' }}
          </label>
        </div>

        <div class="form-group">
          <label>{{ currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)' }}</label>
          <textarea v-model="form.allergies" rows="2"></textarea>
        </div>

        <div class="form-group">
          <label>{{ currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي (مفصول بفاصلة)' }}</label>
          <textarea v-model="form.medicalHistory" rows="2"></textarea>
        </div>

        <button type="submit" :disabled="isLoading">
          {{ isLoading ? (currentLanguage === 'en' ? 'Saving...' : 'جاري الحفظ...') : (currentLanguage === 'en' ? 'Save' : 'حفظ') }}
        </button>
        <button type="button" @click="emit('close')">{{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, select, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px;
  margin-right: 10px;
}
</style>
