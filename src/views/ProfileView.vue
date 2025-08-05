<script setup>
import { ref, computed, watch, inject, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'
import { useRouter } from 'vue-router'
import { Timestamp } from 'firebase/firestore'

// Component Imports
import ProfileFormModal from '@/components/ProfileFormModal.vue'
import PersonalScanFormModal from '@/components/PersonalScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'
import HistoryTable from '@/components/HistoryTable.vue'

// --- Pinia Stores and Injections ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()
const router = useRouter()
const currentLanguage = inject('currentLanguage')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

// --- State Management ---
const personalScans = ref([])

// Modal States
const showProfileFormModal = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

const userId = computed(() => authStore.user?.uid)

const userProfile = computed(() => {
  if (!authStore.userProfile) {
    return {
      displayName: authStore.user?.displayName || '',
      email: authStore.user?.email || '',
    }
  }

  const toDateString = (firestoreDate) => {
    if (!firestoreDate) return ''
    const dateObj = firestoreDate.toDate ? firestoreDate.toDate() : new Date(firestoreDate)
    return !isNaN(dateObj) ? dateObj.toISOString().split('T')[0] : ''
  }

  return {
    ...authStore.userProfile,
    displayName: authStore.user?.displayName,
    email: authStore.user?.email,
    birthDate: toDateString(authStore.userProfile.birthDate),
    estimatedDueDate: toDateString(authStore.userProfile.estimatedDueDate),
  }
})

// --- Data Fetching ---
const fetchScans = async () => {
  if (!userId.value) return
  const scans = await databaseStore.fetchScansForPatient(userId.value)
  if (scans) {
    personalScans.value = scans
  }
}

// --- CRUD Handlers ---
const onProfileSaved = async (formData) => {
  if (!userId.value) return

  const profileToSave = {
    ...authStore.userProfile,
    displayName: authStore.user.displayName,
    email: authStore.user.email,
    role: formData.role,
    birthDate: Timestamp.fromDate(new Date(formData.birthDate)),
    gender: formData.gender,
    weight: Number(formData.weight) || null, // Make sure weight is a number
    isPregnant: formData.isPregnant,
    estimatedDueDate: formData.isPregnant && formData.estimatedDueDate ? Timestamp.fromDate(new Date(formData.estimatedDueDate)) : null,
    allergies: Array.isArray(formData.allergies) ? formData.allergies : formData.allergies.split(',').map((s) => s.trim()).filter(Boolean),
    medicalHistory: Array.isArray(formData.medicalHistory) ? formData.medicalHistory : formData.medicalHistory.split(',').map((s) => s.trim()).filter(Boolean),
  }

  const success = await databaseStore.setUserProfile(userId.value, profileToSave)

  if (success) {
    authStore.setUserProfile(profileToSave)
    showProfileFormModal.value = false
    if (triggerMsvRecalculation) {
      triggerMsvRecalculation()
    }
  } else {
    alert(`Failed to save profile. Error: ${databaseStore.error}`)
  }
}

const handleSaveScan = async (scanDataFromModal) => {
  if (!userId.value) return
  const dataToSave = {
    patientId: userId.value,
    scanType: scanDataFromModal.scanType,
    scanPlace: scanDataFromModal.scanPlace, // Include place
    scanDetail: scanDataFromModal.scanDetail, // Include detail
    scanDate: Timestamp.fromDate(new Date(scanDataFromModal.scanDate)),
    patientDose: Number(scanDataFromModal.patientDose),
    doctorDose: 0, // Personal scans have no doctor dose
    reason: scanDataFromModal.reason,
    notes: scanDataFromModal.notes,
  }
  const success = scanDataFromModal.id
    ? await databaseStore.updateScan(scanDataFromModal.id, dataToSave)
    : await databaseStore.createScan(dataToSave)

  if (success) {
    showScanFormModal.value = false
    await fetchScans()
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to save scan: ${databaseStore.error}`)
  }
}

const handleDeleteScan = async () => {
  if (!scanToDelete.value?.id) return
  const success = await databaseStore.deleteScan(scanToDelete.value.id)
  if (success) {
    showDeleteModal.value = false
    await fetchScans()
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to delete scan: ${databaseStore.error}`)
  }
}

// --- Modal Opening Functions ---
// ✅ CORRECTED: This now correctly sets up the modals for adding or editing
const openAddScanModal = () => {
  scanToEdit.value = null // Clear the scan to ensure "Add Mode"
  showScanFormModal.value = true
}
const openEditScanModal = (scan) => {
  scanToEdit.value = scan // Set the scan to be edited
  showScanFormModal.value = true
}
const openDeleteConfirmation = (scan) => {
  scanToDelete.value = scan
  showDeleteModal.value = true
}

// --- Lifecycle Hook ---
onMounted(() => {
  watch(() => authStore.isAuthReady, (isReady) => {
      if (isReady && userId.value) {
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
        <button @click="showProfileFormModal = true" class="action-button">{{ currentLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي' }}</button>
      </div>
      <div v-if="authStore.isProfileLoading" class="loading-state">Loading profile...</div>
      <div v-else-if="userProfile" class="profile-details">
        <p><strong>{{ currentLanguage === 'en' ? 'Name:' : 'اﻹسم:' }}</strong><span>{{ userProfile.displayName }}</span></p>
        <p><strong>{{ currentLanguage === 'en' ? 'Email:' : 'البريد اﻹلكتروني:' }}</strong><span>{{ userProfile.email }}</span></p>
        <p><strong>{{ currentLanguage === 'en' ? 'Role' : 'الدور' }}:</strong><span class="role-tag" v-if="userProfile.role === 'doctor'">{{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}</span><span class="role-tag" v-else>{{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}</span></p>
        <p><strong>{{ currentLanguage === 'en' ? 'Birth Date:' : 'تاريخ الميلاد:' }}</strong><span>{{ userProfile.birthDate || 'Not set' }}</span></p>

        <!-- Displays Weight in the profile -->
        <p><strong>{{ currentLanguage === 'en' ? 'Weight:' : 'الوزن:' }}</strong><span>{{ userProfile.weight ? `${userProfile.weight} kg` : 'Not set' }}</span></p>

        <p><strong>{{ currentLanguage === 'en' ? 'Gender: ' : 'الجنس: ' }}</strong><span v-if="userProfile.gender === 'male'">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</span><span v-else-if="userProfile.gender === 'female'">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</span><span v-else>Not set</span></p>
        <p v-if="userProfile.gender === 'female'"><strong>{{ currentLanguage === 'en' ? 'Pregnant: ' : 'حامل: ' }}</strong><span v-if="userProfile.isPregnant">{{ currentLanguage === 'en' ? 'Yes' : 'نعم' }} ({{ currentLanguage === 'en' ? 'Due:' : 'المتوقع:' }} {{ userProfile.estimatedDueDate }})</span><span v-else>{{ currentLanguage === 'en' ? 'No' : 'لا' }}</span></p>
        <p><strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'الحساسية:' }}</strong><span>{{ userProfile.allergies?.join(', ') || 'None' }}</span></p>
        <p><strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ الطبي:' }}</strong><span>{{ userProfile.medicalHistory?.join(', ') || 'None' }}</span></p>
      </div>
    </div>

    <div class="history-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'Personal Scan History' : 'تاريخ الفحوصات الشخصية' }}</h2>
        <button @click="openAddScanModal" class="action-button">{{ currentLanguage === 'en' ? 'Add Personal Scan' : 'إضافة فحص شخصي' }}</button>
      </div>
      <!-- ✅ The HistoryTable component itself is correct and emits the right events -->
      <HistoryTable
        :scans="personalScans"
        :is-loading="databaseStore.loading"
        :is-personal-view="true"
        @edit="openEditScanModal"
        @delete="openDeleteConfirmation"
      />
    </div>

    <!-- ✅ This section correctly passes the scan data for editing -->
    <ProfileFormModal :show="showProfileFormModal" :profile-data="userProfile" @close="showProfileFormModal = false" @save="onProfileSaved" />
    <PersonalScanFormModal
      :show="showScanFormModal"
      :scan="scanToEdit"
      :is-saving="databaseStore.loading"
      @close="showScanFormModal = false"
      @save="handleSaveScan"
    />
    <ConfirmDeleteModal
      :show="showDeleteModal"
      :title="'Delete Scan'"
      :message="'Are you sure you want to delete this scan?'"
      @close="showDeleteModal = false"
      @confirm="handleDeleteScan"
    />

    <div class="switch-link-container">
      <a href="#" @click.prevent="router.push('/dashboard')">{{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}</a>
    </div>
  </div>
</template>

<style scoped>
/* All styles are unchanged */
.profile-page {
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1rem;
}

.card-header h2 {
  color: #343a40;
  font-size: 1.5em;
  margin: 0;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.profile-details p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
  padding: 0.75rem 0;
  margin: 0;
  font-size: 1rem;
}

.profile-details p:last-child {
  border-bottom: none;
}

.profile-details strong {
  color: #495057;
  padding-right: 1rem;
}

.profile-details span {
  text-align: right;
  color: #212529;
  word-break: break-word;
}

.role-tag {
  background-color: #e0e6ed;
  color: #6a7483;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: 600;
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

.switch-link-container {
  text-align: center;
  padding: 1rem 0;
}

a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 767px) {
  .profile-page { padding: 1rem; gap: 1.5rem; }
  .card { padding: 1.25rem; }
  .card-header { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  .card-header h2 { font-size: 1.35em; }
  .action-button { width: 100%; padding: 12px; font-size: 1em; text-align: center; }
  .profile-details { grid-template-columns: 1fr; padding: 1rem; }
  .profile-details p { flex-direction: column; align-items: flex-start; padding: 0.5rem 0; }
  .profile-details strong { padding-right: 0; margin-bottom: 0.25rem; }
  .profile-details span { text-align: left; }
  .switch-link-container { margin-top: 20px; }
}
</style>
