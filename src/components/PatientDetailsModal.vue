<script setup>
import { ref, watch, inject, computed } from 'vue'
import { useDatabaseStore } from '@/stores/database'

// Component Imports
import ScanFormModal from './ScanFormModal.vue'
import ConfirmDeleteModal from './ConfirmDeleteModal.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  show: Boolean,
  patient: Object,
})

// ✅ FIX 1: Declare the 'scan-saved' event that this component will emit.
const emit = defineEmits(['close', 'scan-saved'])

const databaseStore = useDatabaseStore()
const currentLanguage = inject('currentLanguage')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

// --- Local State ---
const scans = ref([])
const scanToEdit = ref(null)
const scanToDelete = ref(null)
const showScanFormModal = ref(false)
const showConfirmDeleteModal = ref(false)

const patientId = computed(() => props.patient?.id)

// --- Data Fetching ---
const fetchScans = async () => {
  if (!patientId.value) {
    scans.value = []
    return
  }
  const fetchedScans = await databaseStore.fetchScansForPatient(patientId.value)
  scans.value = fetchedScans || []
}

watch(() => props.show, (isShown) => {
    if (isShown && patientId.value) {
      fetchScans()
    }
  },
)

// ✅ FIX 2: This function now correctly handles both creating AND updating scans.
const handleSavePatientScan = async (scanDataFromModal) => {
  if (!props.patient?.id) {
    alert('Error: No patient selected to save this scan for.');
    return;
  }

  const dataToSave = {
    ...scanDataFromModal,
    patientId: props.patient.id,
  };

  const success = dataToSave.id
    ? await databaseStore.updateScan(dataToSave.id, dataToSave)
    : await databaseStore.createScan(dataToSave);

  if (success) {
    showScanFormModal.value = false;
    await fetchScans(); // Refresh the list inside this modal
    emit('scan-saved'); // ✅ FIX 3: Notify the parent to refresh its own data
    if (triggerMsvRecalculation) triggerMsvRecalculation();
  } else {
    alert(`Error saving patient scan: ${databaseStore.error}`);
  }
};

const handleDeleteScan = async () => {
  if (!scanToDelete.value?.id) return
  const success = await databaseStore.deleteScan(scanToDelete.value.id)
  if (success) {
    showConfirmDeleteModal.value = false
    await fetchScans() // Refresh the list inside this modal
    emit('scan-saved')   // ✅ FIX 3: Notify the parent to refresh its own data
    if (triggerMsvRecalculation) triggerMsvRecalculation()
  } else {
    alert(`Failed to delete scan: ${databaseStore.error}`)
  }
}

// --- Modal Control Functions ---
function openAddScanModal() {
  scanToEdit.value = null
  showScanFormModal.value = true
}

function openEditScanModal(scan) {
  scanToEdit.value = scan
  showScanFormModal.value = true
}

function openConfirmDeleteScanModal(scan) {
  scanToDelete.value = scan
  showConfirmDeleteModal.value = true
}

const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return 'N/A'
  return timestamp.toDate().toLocaleDateString(currentLanguage.value === 'ar' ? 'ar-EG' : 'en-US');
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content-details" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <div v-if="patient">
          <h3>{{ currentLanguage === 'en' ? 'Scan History for' : 'سجل الفحوصات لـ' }} <strong>{{ patient.name }}</strong></h3>
          <p>{{ currentLanguage === 'en' ? 'Review past scans or add a new record.' : 'مراجعة الفحوصات السابقة أو إضافة سجل جديد.' }}</p>

          <div class="patient-details-grid">
            <div class="detail-item">
              <span class="detail-label">{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</span>
              <span class="detail-value">{{ patient.gender || 'N/A' }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">{{ currentLanguage === 'en' ? 'Weight' : 'الوزن' }}</span>
              <span class="detail-value">{{ patient.weight ? `${patient.weight} kg` : 'N/A' }}</span>
            </div>
          </div>
          <button @click="openAddScanModal" class="add-scan-button">
            <font-awesome-icon icon="plus" />
            {{ currentLanguage === 'en' ? 'Add New Scan' : 'إضافة فحص جديد' }}
          </button>
          <div class="scans-list-container">
            <div v-if="databaseStore.loading" class="loading-message">
              <font-awesome-icon icon="spinner" spin />
              {{ currentLanguage === 'en' ? 'Loading scans...' : 'جاري تحميل الفحوصات...' }}
            </div>
            <div v-else-if="scans.length === 0" class="no-scans-message">
              {{ currentLanguage === 'en' ? 'No scans recorded for this patient yet.' : 'لا توجد فحوصات مسجلة لهذا المريض بعد.' }}
            </div>
            <ul v-else class="scans-list">
              <!-- ✅ CORRECTED: The list now displays the scanPlace -->
              <li v-for="scan in scans" :key="scan.id" class="scan-item">
                <div class="scan-info">
                  <span class="scan-type-place">
                    <span class="scan-type">{{ scan.scanType }}</span>
                    <span class="scan-place">of the {{ scan.scanPlace || 'N/A' }}</span>
                  </span>
                  <span class="scan-date">{{ formatDate(scan.scanDate) }}</span>
                  <span class="scan-dose">{{ currentLanguage === 'en' ? 'Dose:' : 'الجرعة:' }} {{ scan.patientDose }} mSv</span>
                </div>
                <div class="scan-actions">
                  <button @click="openEditScanModal(scan)" class="action-button-icon edit-button">
                    <font-awesome-icon icon="edit" />
                  </button>
                  <button @click="openConfirmDeleteScanModal(scan)" class="action-button-icon delete-button">
                    <font-awesome-icon icon="trash-alt" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- This section passes all the necessary props to the child modals -->
  <ScanFormModal :show="showScanFormModal" :patient="patient" :scan="scanToEdit" :is-saving="databaseStore.loading" @close="showScanFormModal = false" @save="handleSavePatientScan" />
  <ConfirmDeleteModal :show="showConfirmDeleteModal" :title="currentLanguage === 'en' ? 'Delete Scan' : 'حذف الفحص'" :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete this scan from' : 'هل أنت متأكد من حذف هذا الفحص بتاريخ'} ${formatDate(scanToDelete?.scanDate)}?`" @close="showConfirmDeleteModal = false" @confirm="handleDeleteScan" />
</template>

<style scoped>
/* All existing styles are unchanged... */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px; }
.modal-content-details { background-color: white; padding: 30px 40px; border-radius: 12px; max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); }
.close-modal-button { position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 2.5em; line-height: 1; cursor: pointer; color: #aaa; }
h3 { text-align: center; margin-bottom: 10px; font-size: 1.8em; color: #333; }
p { text-align: center; margin-bottom: 30px; color: #666; font-size: 1.1em; }
.add-scan-button { display: block; margin: 0 auto 30px auto; background-color: #8d99ae; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 1.05em; font-weight: 600; }
.scans-list-container { min-height: 150px; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; background-color: #f8f9fa; }
.loading-message, .no-scans-message { display: flex; justify-content: center; align-items: center; height: 100px; color: #8d99ae; font-size: 1.2em; }
.scans-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.scan-item { display: flex; justify-content: space-between; align-items: center; padding: 15px; background-color: white; border-radius: 6px; border: 1px solid #dee2e6; }
.scan-info { display: flex; align-items: center; gap: 20px; font-size: 1.1em; }
.scan-date { color: #6c757d; }
.scan-dose { color: #d9534f; font-weight: 500; }
.scan-actions { display: flex; gap: 10px; }
.action-button-icon { background: none; border: none; color: #adb5bd; font-size: 1.3em; cursor: pointer; padding: 5px; }
.patient-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 2rem; border: 1px solid #e9ecef; padding: 1rem; }
.detail-item { display: flex; flex-direction: column; text-align: center; }
.detail-label { font-size: 0.9em; font-weight: 600; color: #6c757d; margin-bottom: 0.25rem; }
.detail-value { font-size: 1.2em; font-weight: 500; color: #343a40; }

/* ✅ ADDED: Styles for the combined type and place display */
.scan-type-place { display: flex; flex-direction: column; min-width: 150px; }
.scan-type { font-weight: 600; color: #495057; }
.scan-place { font-size: 0.9em; color: #6c757d; text-transform: capitalize; }
</style>
