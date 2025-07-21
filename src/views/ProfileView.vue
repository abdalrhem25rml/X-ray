<script setup>
import { ref, onMounted, computed, watch, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'
import { useRouter } from 'vue-router'

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
const userProfile = ref(null)
const personalScans = ref([])
const isLoading = ref(true)

// Modal States
const showProfileFormModal = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

const userId = computed(() => authStore.user?.uid)

// --- Data Fetching ---
const fetchFullProfile = async () => {
  if (!userId.value) return
  isLoading.value = true
  try {
    const patientData = await databaseStore.fetchPatientProfile(userId.value)
    let birthDateString = ''
    if (patientData?.birthDate) {
      birthDateString = typeof patientData.birthDate.toDate === 'function'
        ? patientData.birthDate.toDate().toISOString().split('T')[0]
        : new Date(patientData.birthDate).toISOString().split('T')[0]
    }
    userProfile.value = {
      displayName: authStore.user.displayName, email: authStore.user.email, role: authStore.role,
      birthDate: birthDateString, gender: patientData?.gender || '',
      allergies: patientData?.allergies || [], medicalHistory: patientData?.medicalHistory || [],
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

// --- CRUD Handlers ---
const onProfileSaved = async (formData) => {
  if (!userId.value) return
  // Logic for profile saving...
  await fetchFullProfile()
}

const handleSaveScan = async (scanDataFromModal) => {
  if (!userId.value) return

  const dataToSave = {
    patientId: userId.value,
    scanType: scanDataFromModal.scanType,
    scanDate: new Date(scanDataFromModal.scanDate),
    patientDose: Number(scanDataFromModal.patientDose),
    doctorDose: 0,
    reason: scanDataFromModal.reason,
    notes: scanDataFromModal.notes,
  }

  let success = false;
  if (scanDataFromModal.id) {
    // Editing an existing scan
    success = await databaseStore.updateScan(scanDataFromModal.id, dataToSave);
  } else {
    // Creating a new scan
    const newScanId = await databaseStore.createScan(dataToSave);
    success = !!newScanId; // Convert returned ID to boolean
  }

  if (success) {
    showScanFormModal.value = false;
    await fetchScans();
    if (triggerMsvRecalculation) {
      triggerMsvRecalculation();
    }
  } else {
    alert(`Failed to save scan: ${databaseStore.error}`);
  }
}

const handleDeleteScan = async () => {
  if (!scanToDelete.value?.id) return

  const success = await databaseStore.deleteScan(scanToDelete.value.id);

  if (success) {
    showDeleteModal.value = false;
    await fetchScans();
    if (triggerMsvRecalculation) {
      triggerMsvRecalculation();
    }
  } else {
    alert(`Failed to delete scan: ${databaseStore.error}`);
  }
}

// --- Modal Opening Functions ---
const openAddScanModal = () => { scanToEdit.value = null; showScanFormModal.value = true }
const openEditScanModal = (scan) => { scanToEdit.value = scan; showScanFormModal.value = true }
const openDeleteConfirmation = (scan) => { scanToDelete.value = scan; showDeleteModal.value = true }

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
          <span class="role-tag" v-if="userProfile.role === 'doctor'">
            {{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}
          </span>
          <span class="role-tag" v-else-if="userProfile.role === 'patient'">
            {{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}
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
          <strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'الحساسية:' }}</strong>
          {{ userProfile.allergies?.join(', ') || 'None' }}
        </p>
        <p>
          <strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ الطبي:' }}</strong>
          {{ userProfile.medicalHistory?.join(', ') || 'None' }}
        </p>
      </div>
      <div v-else class="loading-state">
        {{ currentLanguage === 'en' ? 'Could not load profile data.' : 'تعذر تحميل بيانات الملف الشخصي.' }}
      </div>
    </div>

    <div class="history-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'Personal Scan History' : 'تاريخ الفحوصات الشخصية' }}</h2>
        <button @click="openAddScanModal" class="action-button add-scan-button">
          {{ currentLanguage === 'en' ? 'Add Personal Scan' : 'إضافة فحص شخصي' }}
        </button>
      </div>
      <HistoryTable
        :scans="personalScans"
        :is-loading="databaseStore.loading"
        :is-personal-view="true"
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

    <PersonalScanFormModal
      :show="showScanFormModal"
      :scan="scanToEdit"
      :is-saving="databaseStore.loading"
      @close="showScanFormModal = false"
      @save="handleSaveScan"
    />

    <ConfirmDeleteModal
      :show="showDeleteModal"
      :title="currentLanguage === 'en' ? 'Delete Scan' : 'حذف الفحص'"
      :message="currentLanguage === 'en' ? 'Are you sure you want to delete this scan?' : 'هل أنت متأكد من رغبتك في حذف هذا الفحص؟'"
      @close="showDeleteModal = false"
      @confirm="handleDeleteScan"
    />

    <div class="switch-link-container">
      <a href="#" @click.prevent="router.push('/dashboard')">
        {{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}
      </a>
    </div>
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
  margin: 10px;
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
.switch-link-container {
  text-align: center;
  padding-bottom: 1rem;
}
a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 16.5px;
}
</style>
