<script setup>
import { ref, inject, onMounted } from 'vue'
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'

// Component Imports
import ProfileFormModal from '@/components/ProfileFormModal.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'
import HistoryTable from '@/components/HistoryTable.vue'

// Injections and Setup
const firestore = getFirestore()
const auth = inject('auth')
const appId = import.meta.env.VITE_APP_ID
const triggerMsvRecalculation = inject('triggerMsvRecalculation')
const currentLanguage = inject('currentLanguage')

// --- State Management ---
const userProfile = ref(null)
const personalScans = ref([])
const isLoadingProfile = ref(true)
const isLoadingScans = ref(true)

// Modal States
const showProfileFormModal = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// --- Data Fetching ---
const fetchUserProfile = async () => {
  if (!auth.currentUser) return
  isLoadingProfile.value = true
  try {
    const userDocRef = doc(firestore, 'artifacts', appId, 'users', auth.currentUser.uid)
    const docSnap = await getDoc(userDocRef)
    if (docSnap.exists()) {
      userProfile.value = { id: docSnap.id, ...docSnap.data() }
    }
  } catch (error) {
    console.error('Error fetching user profile:', error)
  } finally {
    isLoadingProfile.value = false
  }
}

const fetchPersonalScans = async () => {
  if (!auth.currentUser) return
  isLoadingScans.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', auth.currentUser.uid, 'scans')
    const q = query(scansCol, where('patientId', '==', null)) // Personal scans have a null patientId
    const snapshot = await getDocs(q)
    personalScans.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.scanDate?.toMillis() || 0) - (a.scanDate?.toMillis() || 0))
  } catch (error) {
    console.error('Error fetching personal scans:', error)
  } finally {
    isLoadingScans.value = false
  }
}

// --- CRUD Functions for Profile & Scans ---
const onProfileSaved = () => {
  showProfileFormModal.value = false
  fetchUserProfile() // Re-fetch the profile to show updated data
}

const handleSaveScan = async (scanData) => {
  if (!auth.currentUser) return
  const scansCol = collection(firestore, 'artifacts', appId, 'users', auth.currentUser.uid, 'scans')
  const dataToSave = {
    ...scanData,
    patientId: null, // Ensure it's a personal scan
    patientName: 'Personal',
    scanDate: new Date(scanData.scanDate),
    timestamp: serverTimestamp(),
  }

  try {
    if (dataToSave.id) {
      const scanRef = doc(scansCol, dataToSave.id)
      await updateDoc(scanRef, dataToSave)
    } else {
      const { id, ...docToAdd } = dataToSave
      await addDoc(scansCol, docToAdd)
    }
    showScanFormModal.value = false
    await fetchPersonalScans()
    await triggerMsvRecalculation()
  } catch (error) {
    console.error('Error saving personal scan:', error)
  }
}

const handleDeleteScan = async () => {
  if (!scanToDelete.value) return
  try {
    const scanRef = doc(firestore, 'artifacts', appId, 'users', auth.currentUser.uid, 'scans', scanToDelete.value.id)
    await deleteDoc(scanRef)
    showDeleteModal.value = false
    await fetchPersonalScans()
    await triggerMsvRecalculation()
  } catch (error) {
    console.error('Error deleting personal scan:', error)
  }
}

// --- Modal Opening Functions ---
const openEditProfileModal = () => (showProfileFormModal.value = true)
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

onMounted(() => {
  fetchUserProfile()
  fetchPersonalScans()
})
</script>

<template>
  <div class="profile-page">
    <!-- Profile Information Card -->
    <div class="profile-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'My Profile' : 'ملفي الشخصي' }}</h2>
        <button @click="openEditProfileModal" class="action-button edit-profile-button">
          {{ currentLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي' }}
        </button>
      </div>
      <div v-if="isLoadingProfile" class="loading-state">Loading profile...</div>
      <div v-else-if="userProfile" class="profile-details">
        <p><strong>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}:</strong> {{ userProfile.displayName }}</p>
        <p><strong>{{ currentLanguage === 'en' ? 'Email' : 'البريد الإلكتروني' }}:</strong> {{ userProfile.email }}</p>
        <p><strong>{{ currentLanguage === 'en' ? 'Role' : 'الدور' }}:</strong> <span class="role-tag">{{ userProfile.role }}</span></p>
        <p><strong>{{ currentLanguage === 'en' ? 'Birth Date' : 'تاريخ الميلاد' }}:</strong> {{ userProfile.birthDate }}</p>
        <p><strong>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}:</strong> {{ userProfile.gender }}</p>
        <p v-if="userProfile.gender === 'female'"><strong>{{ currentLanguage === 'en' ? 'Pregnant' : 'حامل' }}:</strong> {{ userProfile.isPregnant ? 'Yes' : 'No' }}</p>
        <p><strong>{{ currentLanguage === 'en' ? 'Allergies' : 'الحساسية' }}:</strong> {{ userProfile.allergies?.join(', ') || 'None' }}</p>
        <p><strong>{{ currentLanguage === 'en' ? 'Medical History' : 'التاريخ الطبي' }}:</strong> {{ userProfile.medicalHistory?.join(', ') || 'None' }}</p>
      </div>
    </div>

    <!-- Personal Scan History Card -->
    <div class="history-section card">
      <div class="card-header">
        <h2>{{ currentLanguage === 'en' ? 'Personal Scan History' : 'سجل الفحوصات الشخصية' }}</h2>
        <button @click="openAddScanModal" class="action-button add-scan-button">
          {{ currentLanguage === 'en' ? 'Add Personal Scan' : 'إضافة فحص شخصي' }}
        </button>
      </div>
      <HistoryTable
        :scans="personalScans"
        :is-loading="isLoadingScans"
        @edit="openEditScanModal"
        @delete="openDeleteConfirmation"
      />
    </div>

    <!-- Modals -->
    <ProfileFormModal
      :show="showProfileFormModal"
      :user-id="auth.currentUser?.uid"
      @close="showProfileFormModal = false"
      @save="onProfileSaved"
    />
    <ScanFormModal
      :show="showScanFormModal"
      :scan="scanToEdit"
      @close="showScanFormModal = false"
      @save="handleSaveScan"
    />
    <ConfirmDeleteModal
      :show="showDeleteModal"
      :title="currentLanguage === 'en' ? 'Delete Scan' : 'حذف الفحص'"
      :message="currentLanguage === 'en' ? 'Are you sure you want to delete this scan record?' : 'هل أنت متأكد من حذف سجل الفحص هذا؟'"
      @close="showDeleteModal = false"
      @confirm="handleDeleteScan"
    />
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px 30px;
}
.profile-details p {
  margin: 0;
  font-size: 1.1em;
  color: #495057;
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
.edit-profile-button {
  background-color: #f0ad4e;
}
.edit-profile-button:hover {
  background-color: #eea236;
}
</style>
