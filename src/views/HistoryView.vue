<script setup>
import { ref, inject, watch } from 'vue'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  serverTimestamp,
  runTransaction,
} from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HistoryTable from '@/components/HistoryTable.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

const appId = import.meta.env.VITE_APP_ID
const authStore = useAuthStore()
const currentLanguage = inject('currentLanguage')
const firestore = getFirestore()
const router = useRouter()

const scans = ref([])
const isLoading = ref(true)
const isSaving = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// --- Update user's total mSv ---
const updateUserMsv = async (delta) => {
  if (!authStore.user) return
  const userDocRef = doc(firestore, 'artifacts', appId, 'users', authStore.user.uid)
  await runTransaction(firestore, async (tx) => {
    const snapshot = await tx.get(userDocRef)
    if (!snapshot.exists()) {
      // Set initial attribute if missing
      tx.set(userDocRef, { totalMsv: Math.max(0, delta) }, { merge: true })
    } else {
      const current = snapshot.data().totalMsv || 0
      tx.update(userDocRef, { totalMsv: Math.max(0, current + delta) })
    }
  })
}

const fetchScans = async () => {
  isLoading.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const snapshot = await getDocs(scansCol)
    scans.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort(
        (a, b) =>
          (b.scanDate?.toMillis?.() || new Date(b.scanDate).getTime() || 0) -
          (a.scanDate?.toMillis?.() || new Date(a.scanDate).getTime() || 0),
      )
  } catch (error) {
    console.error('Error fetching scans:', error)
  } finally {
    isLoading.value = false
  }
}

const handleSaveScan = async (scanData) => {
  isSaving.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const dataToSave = {
      ...scanData,
      scanDate: new Date(scanData.scanDate),
      timestamp: serverTimestamp(),
    }

    let msvChange = 0

    if (dataToSave.id) {
      // Editing: Find the old scan's dose for delta calculation
      const origDocRef = doc(scansCol, dataToSave.id)
      const origSnap = await getDoc(origDocRef)
      const origDose =
        origSnap.exists() && typeof origSnap.data().dose === 'number' ? origSnap.data().dose : 0
      msvChange = Number(dataToSave.dose) - Number(origDose)
      await updateDoc(origDocRef, dataToSave)
    } else {
      msvChange = Number(dataToSave.dose)
      const { id, ...docToAdd } = dataToSave
      await addDoc(scansCol, docToAdd)
    }

    await updateUserMsv(msvChange)
    showScanFormModal.value = false
    await fetchScans()
  } catch (error) {
    console.error('Error saving scan:', error)
  } finally {
    isSaving.value = false
  }
}

const handleDeleteScan = async () => {
  if (!scanToDelete.value) return
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const scanRef = doc(scansCol, scanToDelete.value.id)
    const scanDose = typeof scanToDelete.value.dose === 'number' ? scanToDelete.value.dose : 0

    await deleteDoc(scanRef)
    await updateUserMsv(-scanDose)
    showDeleteModal.value = false
    await fetchScans()
  } catch (error) {
    console.error('Error deleting scan:', error)
  }
}

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

watch(
  () => authStore.user,
  (user) => {
    if (user) fetchScans()
    else scans.value = []
  },
  { immediate: true },
)
</script>

<template>
  <div class="history-page">
    <div class="history-main-content">
      <div class="history-card">
        <h2>{{ currentLanguage === 'en' ? 'Scan History' : 'سجل الفحوصات' }}</h2>
        <p>
          {{
            currentLanguage === 'en'
              ? 'Review, add, and manage all past scans.'
              : 'مراجعة وإضافة وإدارة جميع الفحوصات السابقة.'
          }}
        </p>
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
.history-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
}
.history-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  background-color: #f8f9fa;
}
.history-card {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1200px;
  width: 100%;
  border: 1px solid #eee;
  margin-top: 30px;
}
.history-card h2 {
  color: #8d99ae;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}
.history-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}
.action-button {
  margin-bottom: 30px;
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05em;
  font-weight: 600;
  transition: all 0.2s ease;
}
.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}
.switch-link-container {
  margin: 25px;
}
a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 16.5px;
}
</style>
