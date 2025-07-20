<script setup>
import { ref, watch, inject } from 'vue'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import HistoryTable from '@/components/HistoryTable.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

const props = defineProps({
  show: Boolean,
  patient: Object,
})
const emit = defineEmits(['close'])

const firestore = getFirestore()
const authStore = useAuthStore()
const appId = import.meta.env.VITE_APP_ID
const triggerMsvRecalculation = inject('triggerMsvRecalculation')
const currentLanguage = inject('currentLanguage')

const patientScans = ref([])
const isLoading = ref(false)
const isSaving = ref(false)

// State for the nested modals
const showScanForm = ref(false)
const showDeleteScanModal = ref(false)
const scanToEdit = ref(null)
const scanToDelete = ref(null)

// Fetches scans ONLY for the specific patient being viewed
const fetchPatientScans = async () => {
  if (!props.patient || !props.patient.id) {
    patientScans.value = []
    return
  }
  isLoading.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const q = query(scansCol, where('patientId', '==', props.patient.id))
    const snapshot = await getDocs(q)
    patientScans.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.scanDate?.toMillis() || 0) - (a.scanDate?.toMillis() || 0))
  } catch (err) {
    console.error('Error fetching patient scans:', err)
  } finally {
    isLoading.value = false
  }
}

// Handles both ADDING and EDITING a scan for this patient
const handleSavePatientScan = async (scanData) => {
  isSaving.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const dataToSave = {
      ...scanData,
      patientId: props.patient.id,
      patientName: props.patient.name,
      gender: props.patient.gender,
      scanDate: new Date(scanData.scanDate),
      timestamp: serverTimestamp(),
    }

    if (scanData.id) {
      // Editing existing scan
      await updateDoc(doc(scansCol, scanData.id), dataToSave)
    } else {
      // Adding new scan
      const { id, ...docToAdd } = dataToSave
      await addDoc(scansCol, docToAdd)
    }

    showScanForm.value = false
    await fetchPatientScans()
    await triggerMsvRecalculation()
  } catch (error) {
    console.error('Error saving patient scan:', error)
  } finally {
    isSaving.value = false
  }
}

// Handles deleting a specific scan from the patient's record
const handleDeletePatientScan = async () => {
  if (!scanToDelete.value) return
  isSaving.value = true
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

    showDeleteScanModal.value = false
    await fetchPatientScans()
    await triggerMsvRecalculation()
  } catch (error) {
    console.error('Error deleting patient scan:', error)
  } finally {
    isSaving.value = false
  }
}

// Functions to open the nested modals
const openAddScanForPatient = () => {
  scanToEdit.value = null
  showScanForm.value = true
}

const openEditScanForPatient = (scan) => {
  scanToEdit.value = scan
  showScanForm.value = true
}

const openConfirmDeleteScan = (scan) => {
  scanToDelete.value = scan
  showDeleteScanModal.value = true
}

watch(
  () => props.show,
  (isShown) => {
    if (isShown) {
      fetchPatientScans()
    }
  },
)
</script>

<template>
  <div>
    <Transition name="modal-fade">
      <div
        v-if="show"
        class="modal-overlay"
        @click.self="$emit('close')"
        :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
      >
        <div class="modal-content">
          <button @click="$emit('close')" class="close-button">&times;</button>
          <div v-if="patient">
            <h2 class="patient-name">{{ patient.name }}</h2>
            <div class="patient-details-grid">
              <p>
                <strong>{{ currentLanguage === 'en' ? 'Age' : 'العمر' }}:</strong> {{ patient.age }}
              </p>
              <p>
                <strong>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}:</strong>
                {{ patient.gender }}
              </p>
              <p>
                <strong
                  >{{ currentLanguage === 'en' ? 'Medical History' : 'التاريخ الطبي' }}:</strong
                >
                {{ patient.medicalHistory?.join(', ') || 'N/A' }}
              </p>
              <p>
                <strong>{{ currentLanguage === 'en' ? 'Allergies' : 'الحساسية' }}:</strong>
                {{ patient.allergies?.join(', ') || 'N/A' }}
              </p>
            </div>
            <hr class="divider" />
            <div class="history-section">
              <div class="history-header">
                <h3>{{ currentLanguage === 'en' ? 'Scan History' : 'سجل الفحوصات' }}</h3>
                <button @click="openAddScanForPatient" class="add-scan-button">
                  {{ currentLanguage === 'en' ? 'Add Scan Record' : 'إضافة سجل فحص' }}
                </button>
              </div>
              <HistoryTable
                :scans="patientScans"
                :is-loading="isLoading"
                @edit="openEditScanForPatient"
                @delete="openConfirmDeleteScan"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <ScanFormModal
      :show="showScanForm"
      :is-saving="isSaving"
      :patient="patient"
      :scan="scanToEdit"
      @close="showScanForm = false"
      @save="handleSavePatientScan"
    />

    <ConfirmDeleteModal
      :show="showDeleteScanModal"
      :title="currentLanguage === 'en' ? 'Delete Scan Record' : 'حذف سجل الفحص'"
      :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete this scan dated' : 'هل أنت متأكد من حذف هذا الفحص بتاريخ'} ${scanToDelete?.scanDate?.toDate().toLocaleDateString()}?`"
      @close="showDeleteScanModal = false"
      @confirm="handleDeletePatientScan"
    />
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.modal-content {
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}
.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2.5em;
  cursor: pointer;
}
.patient-name {
  text-align: center;
  font-size: 2.2em;
  color: #333;
  margin-bottom: 15px;
}
.patient-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  margin: 20px 0;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}
.patient-details-grid p {
  margin: 0;
}
.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 25px 0;
}
.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.history-header h3 {
  font-size: 1.5em;
  margin: 0;
}
.add-scan-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
}
.add-scan-button:hover {
  background-color: #218838;
}
</style>
