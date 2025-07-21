<script setup>
import { ref, onMounted, computed, watch, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'

// Component Imports
import ProfileFormModal from '@/components/ProfileFormModal.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'
import HistoryTable from '@/components/HistoryTable.vue'

// --- Pinia Stores ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()
const currentLanguage = inject('currentLanguage')

// --- State Management ---
const userProfile = ref(null)
const personalScans = ref([])
const isLoading = ref(true)

// Modal States
const showProfileFormModal = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// Computed property for the current user's ID
const userId = computed(() => authStore.user?.uid)

// --- ** FIX #1: Robust Data Fetching & Date Handling ** ---
const fetchFullProfile = async () => {
  if (!userId.value) return
  isLoading.value = true
  try {
    const patientData = await databaseStore.fetchPatientProfile(userId.value)

    let birthDateString = ''
    if (patientData?.birthDate) {
      // Check if it's a Firestore Timestamp (which has a toDate method)
      if (typeof patientData.birthDate.toDate === 'function') {
        birthDateString = patientData.birthDate.toDate().toISOString().split('T')[0]
      } else {
        // Otherwise, assume it's already a Date object or a string
        birthDateString = new Date(patientData.birthDate).toISOString().split('T')[0]
      }
    }

    userProfile.value = {
      displayName: authStore.user.displayName,
      email: authStore.user.email,
      role: authStore.role,
      birthDate: birthDateString,
      gender: patientData?.gender || '',
      allergies: patientData?.allergies || [],
      medicalHistory: patientData?.medicalHistory || [],
    }
  } catch (error) {
    console.error('Error fetching combined user profile:', error)
  } finally {
    isLoading.value = false
  }
}

const fetchScans = async () => {
  if (!userId.value) return
  const scans = await databaseStore.fetchScansForPatient(userId.value)
  if (scans) {
    personalScans.value = scans
  }
}

// --- CRUD Functions ---
const onProfileSaved = async (formData) => {
  if (!userId.value) return

  await databaseStore.createUserProfile(
    userId.value,
    authStore.user.email,
    authStore.user.displayName,
    formData.role,
  )
  authStore.role = formData.role

  const patientUpdates = {
    displayName: authStore.user.displayName,
    birthDate: new Date(formData.birthDate),
    gender: formData.gender,
    allergies: formData.allergies
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    medicalHistory: formData.medicalHistory
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
  }
  await databaseStore.createPatientProfile(userId.value, patientUpdates)

  showProfileFormModal.value = false
  await fetchFullProfile()
}

// --- ** FIX #2: Add Missing Modal Functions ** ---
const openAddScanModal = () => {
  scanToEdit.value = null
  showScanFormModal.value = true
}
const openEditScanModal = (scan) => {
  scanToEdit.value = scan
  showScanFormModal.value = true
}
const openDeleteConfirmation = (scan) => {
  scanToDelete.value = scan
  showDeleteModal.value = true
}

// --- Lifecycle Hook ---
onMounted(() => {
  watch(
    () => authStore.isAuthReady,
    (isReady) => {
      if (isReady && userId.value) {
        fetchFullProfile()
        fetchScans()
      }
    },
    { immediate: true },
  )
})
</script>

<template>
  <div class="profile-page" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <div class="profile-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'My Profile' : 'ملفي الشخصي' }}</h2>
        <button @click="showProfileFormModal = true" class="action-button edit-profile-button">
          {{ currentLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي' }}
        </button>
      </div>
      <div v-if="isLoading" class="loading-state">Loading profile...</div>
      <div v-else-if="userProfile" class="profile-details">
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Name:' : 'اﻹسم:' }}</strong>
          {{ userProfile.displayName }}
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Email:' : 'البريد اﻹلكتروني:' }}</strong>
          {{ userProfile.email }}
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Role' : 'الدور' }}:</strong>
          <!-- Check for Doctor -->
          <span class="role-tag" v-if="userProfile.role === 'doctor' && currentLanguage === 'en'">
            Doctor
          </span>
          <span
            class="role-tag"
            v-else-if="userProfile.role === 'doctor' && currentLanguage === 'ar'"
          >
            طبيب
          </span>
          <!-- Check for Patient -->
          <span
            class="role-tag"
            v-else-if="userProfile.role === 'patient' && currentLanguage === 'en'"
          >
            Patient
          </span>
          <span
            class="role-tag"
            v-else-if="userProfile.role === 'patient' && currentLanguage === 'ar'"
          >
            مريض
          </span>
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Birth Date:' : 'تاريخ الميلاد:' }}</strong>
          {{ userProfile.birthDate }}
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Gender: ' : 'الجنس: ' }}</strong>
          <span v-if="userProfile.gender === 'male'">
            {{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}
          </span>
          <span v-else-if="userProfile.gender === 'female'">
            {{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}
          </span>
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'التحسسات:' }}</strong>
          {{ userProfile.allergies?.join(', ') || 'None' }}
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ المرضي:' }}</strong>
          {{ userProfile.medicalHistory?.join(', ') || 'None' }}
        </p>
      </div>
      <div v-else class="loading-state">
        {{
          currentLanguage === 'en'
            ? 'Could not load profile data.'
            : 'تعذر تحميل بيانات الملف الشخصي.'
        }}
      </div>
    </div>

    <div class="history-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'Personal Scan History' : 'تاريخ الفحوصات الشخصية' }}</h2>
        <button @click="openAddScanModal" class="action-button add-scan-button">
          {{ currentLanguage === 'en' ? 'Add Personal Scan' : 'أضف فحوصات شخصية' }}
        </button>
      </div>
      <HistoryTable
        :scans="personalScans"
        :is-loading="databaseStore.loading"
        @edit="openEditScanModal"
        @delete="openDeleteConfirmation"
      />
    </div>

    <ProfileFormModal
      :show="showProfileFormModal"
      :profile-data="userProfile"
      @close="showProfileFormModal = false"
      @save="onProfileSaved"
    />

    <ScanFormModal
      :show="showScanFormModal"
      :scan="scanToEdit"
      @close="showScanFormModal = false"
    />
    <ConfirmDeleteModal :show="showDeleteModal" @close="showDeleteModal = false" />
  </div>
</template>

<style scoped>
.profile-page {
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;
}
.card-header h2 {
  color: #8d99ae;
  font-size: 1.8em;
  margin: 0;
}
.loading-state {
  text-align: center;
  color: #888;
  padding: 40px;
  font-size: 1.2em;
}
.profile-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px 30px;
}
.profile-details p {
  margin: 0;
  font-size: 1.1em;
  color: #495057;
  line-height: 1.6;
}
.profile-details strong {
  color: #343a40;
  margin-right: 8px;
}
.role-tag {
  background-color: #e0e6ed;
  color: #6a7483;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: 600;
  text-transform: capitalize;
}
.action-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 600;
  transition: all 0.2s ease;
}
.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}
.edit-profile-button,
.add-scan-button {
  background-color: #8d99ae;
}
.edit-profile-button:hover,
.add-scan-button:hover {
  background-color: #6a7483;
}
</style>
