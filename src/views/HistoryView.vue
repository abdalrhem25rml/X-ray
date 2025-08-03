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
  serverTimestamp,
  query,
  where, // Import 'where' for filtering
} from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import HistoryTable from '@/components/HistoryTable.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

const appId = import.meta.env.VITE_APP_ID
const authStore = useAuthStore()
const currentLanguage = inject('currentLanguage')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')
const firestore = getFirestore()
const router = useRouter()

const scans = ref([])
const isLoading = ref(true)
const isSaving = ref(false)
const showScanFormModal = ref(false)
const showDeleteModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// ✅ FIX: Fetches only personal scans (where no patient is associated)
const fetchScans = async () => {
  isLoading.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    // This query finds documents where patientId is null, effectively finding "personal" scans.
    const q = query(scansCol, where('patientId', '==', null))
    const snapshot = await getDocs(q)
    scans.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.scanDate?.toMillis() || 0) - (a.scanDate?.toMillis() || 0))
  } catch (error) {
    console.error('Error fetching personal scans:', error)
  } finally {
    isLoading.value = false
  }
}

// ✅ FIX: This function now saves scans without a patientId
const handleSaveScan = async (scanData) => {
  isSaving.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const dataToSave = {
      ...scanData,
      patientId: null, // Explicitly set patientId to null
      patientName: 'Personal', // Or any other identifier
      scanDate: new Date(scanData.scanDate),
      timestamp: serverTimestamp(),
    }

    if (dataToSave.id) {
      await updateDoc(doc(scansCol, dataToSave.id), dataToSave)
    } else {
      const { id, ...docToAdd } = dataToSave
      await addDoc(scansCol, docToAdd)
    }

    showScanFormModal.value = false
    await fetchScans()
    await triggerMsvRecalculation()
  } catch (error) {
    console.error('Error saving personal scan:', error)
  } finally {
    isSaving.value = false
  }
}

// Delete logic remains largely the same
const handleDeleteScan = async () => {
  if (!scanToDelete.value) return
  try {
    const scanRef = doc(
      firestore,
      'artifacts',
      appId,
      'users',
      authStore.user.uid,
      'scans',
      scanToDelete.value.id,
    )
    await deleteDoc(scanRef)
    showDeleteModal.value = false
    await fetchScans()
    await triggerMsvRecalculation()
  } catch (error) {
    console.error('Error deleting personal scan:', error)
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
    if (user) {
      fetchScans()
    } else {
      scans.value = []
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="history-page">
    <div class="history-main-content">
      <div class="history-card">
        <!-- ✅ FIX: UI text updated to reflect the new purpose -->
        <h2>{{ currentLanguage === 'en' ? 'Personal Exposure Log' : 'سجل التعرض الشخصي' }}</h2>
        <p>
          {{
            currentLanguage === 'en'
              ? 'Log and manage personal radiation exposure events not associated with a patient.'
              : 'سجل وأدر أحداث التعرض للإشعاع الشخصية غير المرتبطة بمريض.'
          }}
        </p>
        <button @click="openAddScanModal" class="action-button">
          {{ currentLanguage === 'en' ? 'Add Personal Exposure' : 'إضافة تعرض شخصي' }}
        </button>

        <HistoryTable
          :scans="scans"
          :is-loading="isLoading"
          @edit="openEditScanModal"
          @delete="openConfirmDelete"
        />

        <div class="switch-link-container">
          <a href="#" @click.prevent="router.push('/dashboard')">
            {{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </div>
      </div>
    </div>

    <!-- ✅ FIX: The modal is now opened in "personal" mode (no patient prop passed) -->
    <ScanFormModal
      :show="showScanFormModal"
      :scan="scanToEdit"
      :is-saving="isSaving"
      @close="showScanFormModal = false"
      @save="handleSaveScan"
    />

    <ConfirmDeleteModal
      :show="showDeleteModal"
      :title="currentLanguage === 'en' ? 'Delete Event' : 'حذف الحدث'"
      :message="
        currentLanguage === 'en'
          ? 'Are you sure you want to delete this exposure event?'
          : 'هل أنت متأكد من حذف حدث التعرض هذا؟'
      "
      @close="showDeleteModal = false"
      @confirm="handleDeleteScan"
    />
  </div>
</template>

<style scoped>
/* All styles remain the same */
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
