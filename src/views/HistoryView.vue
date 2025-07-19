<script setup>
import { ref, inject, watch } from 'vue'
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'vue-router'

// Import the components we will create/reuse
import HistoryTable from '@/components/HistoryTable.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

// Injections and Setup
const appId = import.meta.env.VITE_APP_ID
const auth = inject('auth')
const currentLanguage = inject('currentLanguage')
const firestore = getFirestore()
const router = useRouter()

// State Management
const scans = ref([])
const isLoading = ref(true)
const isSaving = ref(false)

// Modal Control
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// --- Firebase Functions ---
const fetchScans = async () => {
  isLoading.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', auth.currentUser.uid, 'scans')
    const snapshot = await getDocs(scansCol)
    scans.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.scanDate?.toMillis() || 0) - (a.scanDate?.toMillis() || 0)) // Sort by most recent scan
  } catch (error) {
    console.error("Error fetching scan history:", error)
  } finally {
    isLoading.value = false
  }
}

const handleSaveScan = async (scanData) => {
  isSaving.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', auth.currentUser.uid, 'scans')
    // Convert date string back to a Date object for Firestore
    const dataToSave = { ...scanData, scanDate: new Date(scanData.scanDate), timestamp: serverTimestamp() }

    if (dataToSave.id) { // Editing
      const scanRef = doc(scansCol, dataToSave.id)
      await updateDoc(scanRef, dataToSave)
    } else { // Adding
      const { id, ...newScanData } = dataToSave
      await addDoc(scansCol, newScanData)
    }
    showScanFormModal.value = false
    await fetchScans()
  } catch (error) {
    console.error("Error saving scan:", error)
  } finally {
    isSaving.value = false
  }
}

const handleDeleteScan = async () => {
  if (!scanToDelete.value) return
  try {
    const scanRef = doc(firestore, 'artifacts', appId, 'users', auth.currentUser.uid, 'scans', scanToDelete.value.id)
    await deleteDoc(scanRef)
    showDeleteModal.value = false
    await fetchScans()
  } catch (error) {
    console.error("Error deleting scan:", error)
  }
}

// --- Modal Handlers ---
const openAddScanModal = () => {
  scanToEdit.value = null
  showScanFormModal.value = true
}

const openEditScanModal = (scan) => {
  scanToEdit.value = scan
  showScanFormModal.value = true
}

const openConfirmDelete = (scan) => {
  scanToDelete.value = scan
  showDeleteModal.value = true
}

// Watch for user auth state to fetch data
watch(() => auth.currentUser, (user) => {
  if (user) {
    fetchScans()
  } else {
    scans.value = []
  }
}, { immediate: true })
</script>

<template>
  <div class="history-page">
    <div class="history-main-content">
      <div class="history-card">
        <h2>{{ currentLanguage === 'en' ? 'Scan History' : 'سجل الفحوصات' }}</h2>
        <p>{{ currentLanguage === 'en' ? 'Review, add, and manage all past scans.' : 'مراجعة وإضافة وإدارة جميع الفحوصات السابقة.' }}</p>
        <button @click="openAddScanModal" class="action-button">
          {{ currentLanguage === 'en' ? 'Add New Scan' : 'إضافة فحص جديد' }}
        </button>

        <HistoryTable
          :scans="scans"
          :is-loading="isLoading"
          @edit="openEditScanModal"
          @delete="openConfirmDelete"
        />
        <div class="switch-link-container">
          <a href="#" @click="router.push('/dashboard')">
            {{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </div>
      </div>
    </div>

    <ScanFormModal
      :show="showScanFormModal"
      :scan="scanToEdit"
      :is-saving="isSaving"
      @close="showScanFormModal = false"
      @save="handleSaveScan"
    />

    <ConfirmDeleteModal
      :show="showDeleteModal"
      :title="currentLanguage === 'en' ? 'Delete Scan' : 'حذف الفحص'"
      :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete the scan for' : 'هل أنت متأكد من حذف فحص المريض'} ${scanToDelete?.patientName}?`"
      @close="showDeleteModal = false"
      @confirm="handleDeleteScan"
    />
  </div>
</template>

<style scoped>
/* Page layout styles, similar to PatientListView */
.history-page { display: flex; flex-direction: column; min-height: calc(100vh - 80px); width: 100%; }
.history-main-content { flex-grow: 1; display: flex; justify-content: center; align-items: flex-start; padding: 30px; background-color: #f8f9fa; }
.history-card { background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); text-align: center; max-width: 1200px; width: 100%; border: 1px solid #eee; margin-top: 30px; }
.history-card h2 { color: #8d99ae; margin-bottom: 20px; font-size: 2em; font-weight: 700; }
.history-card p { color: #555; margin-bottom: 30px; font-size: 1.1em; }
.action-button { margin-bottom: 30px; background-color: #8d99ae; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 1.05em; font-weight: 600; transition: all 0.2s ease; }
.action-button:hover { background-color: #6a7483; transform: translateY(-2px); }
.switch-link-container{
  margin: 25px;
}
a{
    color: #8d99ae;
    text-decoration: none;
    font-weight: 600;
    transition: color .3s ease;
    font-size: 16.5px;
}

</style>
