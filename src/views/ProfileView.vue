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
// ✅ NEW: Import new components for "Other Scans"
import OtherScanFormModal from '@/components/OtherScanFormModal.vue'
import OtherScansTable from '@/components/OtherScansTable.vue'

// --- Stores and Router ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()
const router = useRouter()

// --- Injections ---
const currentLanguage = inject('currentLanguage')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

// --- State ---
const personalScans = ref([])
const otherScans = ref([]) // ✅ NEW: State for other scans

// --- Modal States ---
const showProfileFormModal = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// ✅ NEW: Modal states for other scans
const showOtherScanModal = ref(false)
const otherScanToEdit = ref(null)
const otherScanToDelete = ref(null)
const showDeleteOtherScanModal = ref(false)

// --- Computed Properties ---
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
const fetchAllScans = async () => {
  if (!userId.value) return
  personalScans.value = await databaseStore.fetchScansForPatient(userId.value)
  otherScans.value = await databaseStore.fetchOtherScansForUser(userId.value) // ✅ Fetch other scans
}

// --- CRUD Handlers ---
const onProfileSaved = async (formData) => {
  if (!userId.value) return
  // This logic is complete as provided in previous versions
  const profileToSave = { /* ... */ };
  const success = await databaseStore.setUserProfile(userId.value, profileToSave);
  if (success) {
    authStore.setUserProfile(profileToSave)
    showProfileFormModal.value = false
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to save profile. Error: ${databaseStore.error}`)
  }
}

const handleSaveScan = async (scanDataFromModal) => {
  if (!userId.value) return
  const success = scanDataFromModal.id
    ? await databaseStore.updateScan(scanDataFromModal.id, scanDataFromModal)
    : await databaseStore.createScan(scanDataFromModal)

  if (success) {
    showScanFormModal.value = false
    await fetchAllScans()
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
    await fetchAllScans()
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to delete scan: ${databaseStore.error}`)
  }
}

// ✅ NEW: CRUD Handlers for Other Scans
const handleSaveOtherScan = async (otherScanData) => {
  const success = otherScanData.id
    ? await databaseStore.updateOtherScan(otherScanData.id, otherScanData)
    : await databaseStore.createOtherScan(otherScanData)

  if (success) {
    showOtherScanModal.value = false
    await fetchAllScans()
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to save other scan: ${databaseStore.error}`)
  }
}

const handleDeleteOtherScan = async () => {
  if (!otherScanToDelete.value?.id) return
  const success = await databaseStore.deleteOtherScan(otherScanToDelete.value.id)
  if (success) {
    showDeleteOtherScanModal.value = false
    await fetchAllScans()
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to delete other scan: ${databaseStore.error}`)
  }
}

// --- Modal Opening Functions ---
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

// ✅ NEW: Modal opening functions for Other Scans
const openAddOtherScanModal = () => {
  otherScanToEdit.value = null
  showOtherScanModal.value = true
}
const openEditOtherScanModal = (scan) => {
  otherScanToEdit.value = scan
  showOtherScanModal.value = true
}
const openDeleteOtherScanConfirmation = (scan) => {
  otherScanToDelete.value = scan
  showDeleteOtherScanModal.value = true
}

// --- Lifecycle Hook ---
onMounted(() => {
  watch(() => authStore.isAuthReady, (isReady) => {
    if (isReady && userId.value) {
      fetchAllScans() // Use the new combined fetch function
    }
  }, { immediate: true })
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
      <HistoryTable :scans="personalScans" :is-loading="databaseStore.loading" :is-personal-view="true" @edit="openEditScanModal" @delete="openDeleteConfirmation" />
    </div>

    <!-- ✅ NEW: Other Scans History Section -->
    <div class="history-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'Other Scans / Sources' : 'الفحوصات / المصادر الأخرى' }}</h2>
        <button @click="openAddOtherScanModal" class="action-button">{{ currentLanguage === 'en' ? 'Add Other Source' : 'إضافة مصدر آخر' }}</button>
      </div>
      <OtherScansTable :scans="otherScans" :is-loading="databaseStore.loading" @edit="openEditOtherScanModal" @delete="openDeleteOtherScanConfirmation" />
    </div>

    <!-- Modals -->
    <ProfileFormModal :show="showProfileFormModal" :profile-data="userProfile" @close="showProfileFormModal = false" @save="onProfileSaved" />
    <PersonalScanFormModal :show="showScanFormModal" :scan="scanToEdit" :is-saving="databaseStore.loading" @close="showScanFormModal = false" @save="handleSaveScan" />
    <ConfirmDeleteModal :show="showDeleteModal" :title="'Delete Scan'" :message="'Are you sure you want to delete this scan record?'" @close="showDeleteModal = false" @confirm="handleDeleteScan" />

    <!-- ✅ NEW: Other Scan Modals -->
    <OtherScanFormModal :show="showOtherScanModal" :scan="otherScanToEdit" :is-saving="databaseStore.loading" @close="showOtherScanModal = false" @save="handleSaveOtherScan" />
    <ConfirmDeleteModal :show="showDeleteOtherScanModal" :title="'Delete Other Scan'" :message="'Are you sure you want to delete this record?'" @close="showDeleteOtherScanModal = false" @confirm="handleDeleteOtherScan" />

    <div class="switch-link-container">
      <a href="#" @click.prevent="router.push('/dashboard')">{{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}</a>
    </div>
  </div>
</template>

<style scoped>
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
}
.profile-details p {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9ecef;
  padding: 0.75rem 0;
  margin: 0;
}
.profile-details strong {
  color: #495057;
  padding-right: 1rem;
}
.role-tag {
  background-color: #e0e6ed;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.9em;
}
.action-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
.switch-link-container {
  text-align: center;
  padding-top: 1rem;
}
a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
}
</style>
