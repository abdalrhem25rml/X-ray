<script setup>
import { ref, watch, inject } from 'vue'
import { useDatabaseStore } from '@/stores/database' // Import the database store

// Import child components
import ScanFormModal from './ScanFormModal.vue'
import HistoryTable from './HistoryTable.vue'

const props = defineProps({
  show: Boolean,
  patient: {
    type: Object,
    default: () => null,
  },
})

const emit = defineEmits(['close', 'scanAdded'])

const databaseStore = useDatabaseStore() // Initialize the store
const currentLanguage = inject('currentLanguage')

// Local State
const showScanFormModal = ref(false)
const patientScans = ref([])
const isLoadingScans = ref(false)
const scanToEdit = ref(null) // For editing functionality

// --- DATA FETCHING ---
const fetchPatientScans = async () => {
  if (!props.patient?.id) {
    patientScans.value = []
    return
  }
  isLoadingScans.value = true
  try {
    // We can re-use the existing store action here
    const scans = await databaseStore.fetchScansForPatient(props.patient.id)
    if (scans) {
      patientScans.value = scans
    }
  } catch (error) {
    console.error('Error fetching patient scans:', error)
  } finally {
    isLoadingScans.value = false
  }
}

// --- FIX: This is the corrected save logic ---
const handleSavePatientScan = async (scanDataFromModal) => {
  if (!props.patient?.id) {
    alert('Cannot save scan: Patient ID is missing.')
    return
  }

  // 1. Prepare the data object with the correct patientId
  const dataToSave = {
    ...scanDataFromModal,
    patientId: props.patient.id, // Ensure the patientId is always set
  }

  // 2. Call the centralized database store action
  let success = false;
  if (scanDataFromModal.id) {
    // Editing an existing scan
    success = await databaseStore.updateScan(scanDataFromModal.id, dataToSave);
  } else {
    // Creating a new scan
    const newScanId = await databaseStore.createScan(dataToSave);
    success = !!newScanId;
  }

  // 3. Handle the result
  if (success) {
    showScanFormModal.value = false
    await fetchPatientScans() // Refresh the scan list in the modal
    emit('scanAdded') // Notify the parent view if needed
  } else {
    console.error('Error saving patient scan:', databaseStore.error)
    alert(`Failed to save scan. Error: ${databaseStore.error}`)
  }
}

// --- Modal Controls ---
const openAddScanModal = () => {
  scanToEdit.value = null
  showScanFormModal.value = true
}

const openEditScanModal = (scan) => {
  scanToEdit.value = scan
  showScanFormModal.value = true
}

// When the modal is shown, fetch the patient's scan history
watch(() => props.show, (isShown) => {
    if (isShown) {
        fetchPatientScans()
    }
})

// Helper function to format dates
const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  return timestamp.toDate ? timestamp.toDate().toLocaleDateString() : new Date(timestamp).toLocaleDateString()
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-button" @click="$emit('close')">&times;</button>

        <div v-if="patient">
          <h3 class="modal-title">{{ patient.displayName }}</h3>
          <div class="patient-details-grid">
            <p><strong>Birth Date:</strong> {{ formatDate(patient.birthDate) }}</p>
            <p><strong>Gender:</strong> {{ patient.gender }}</p>
            <p><strong>Allergies:</strong> {{ patient.allergies?.join(', ') || 'None' }}</p>
            <p><strong>History:</strong> {{ patient.medicalHistory?.join(', ') || 'None' }}</p>
          </div>

          <div class="scan-history-section">
            <div class="section-header">
              <h4>Scan History</h4>
              <button @click="openAddScanModal" class="action-button primary">Add Scan</button>
            </div>
            <HistoryTable
              :scans="patientScans"
              :is-loading="isLoadingScans"
              :is-personal-view="false"
              @edit="openEditScanModal"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Nested Scan Form Modal -->
  <ScanFormModal
    :show="showScanFormModal"
    :scan="scanToEdit"
    :is-saving="databaseStore.loading"
    @close="showScanFormModal = false"
    @save="handleSavePatientScan"
  />
</template>

<style scoped>
/* All modal styles remain the same */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: flex-start; z-index: 1000; overflow-y: auto; padding: 3rem 1rem; }
.modal-content { background: white; padding: 2rem; border-radius: 12px; max-width: 800px; width: 100%; margin: auto 0; position: relative; }
.close-button { position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
.modal-title { text-align: center; margin-bottom: 1.5rem; font-size: 1.8rem; }
.patient-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; background: #f8f9fa; padding: 1rem; border-radius: 8px; }
.patient-details-grid p { margin: 0; }
.scan-history-section { margin-top: 2rem; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.action-button.primary { background-color: #8d99ae; color: white; padding: 8px 15px; border-radius: 6px; border: none; cursor: pointer; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
</style>
