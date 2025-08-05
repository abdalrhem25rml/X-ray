<script setup>
import { ref, watch, inject, computed } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { Timestamp } from 'firebase/firestore'

import ScanFormModal from './ScanFormModal.vue'
import ConfirmDeleteModal from './ConfirmDeleteModal.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

console.log('[PatientDetailsModal] Script setup started.');

const props = defineProps({
  show: Boolean,
  patient: Object,
})

const emit = defineEmits(['close'])

const databaseStore = useDatabaseStore()
const currentLanguage = inject('currentLanguage')
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

const scans = ref([])
const scanToEdit = ref(null)
const scanToDelete = ref(null)
const showScanFormModal = ref(false)
const showConfirmDeleteModal = ref(false)

const patientId = computed(() => {
  const id = props.patient?.id;
  console.log(`[PatientDetailsModal] Computed patientId is now: ${id}`);
  return id;
})

// --- Data Fetching ---
const fetchScans = async () => {
  console.log(`[PatientDetailsModal] ==> fetchScans called with patientId: ${patientId.value}`);
  if (!patientId.value) {
    scans.value = []
    console.warn('[PatientDetailsModal] fetchScans aborted: patientId is invalid.');
    return
  }
  const fetchedScans = await databaseStore.fetchScansForPatient(patientId.value)
  if (fetchedScans) {
    scans.value = fetchedScans;
    console.log('[PatientDetailsModal] <== fetchScans SUCCESS. Scans:', JSON.parse(JSON.stringify(fetchedScans)));
  } else {
    console.error('[PatientDetailsModal] <== fetchScans FAILED or returned no data.');
  }
}

watch(() => props.show, (isShown) => {
    console.log(`[PatientDetailsModal] WATCH props.show changed to: ${isShown}`);
    if (isShown) {
        console.log('[PatientDetailsModal] Modal is now visible. Patient prop data:', JSON.parse(JSON.stringify(props.patient)));
    }
    if (isShown && patientId.value) {
      fetchScans()
    }
  },
)

// --- Action Handlers ---
const handleSavePatientScan = async (scanDataFromForm) => {
  console.log('%c[PatientDetailsModal] ==> handleSavePatientScan called.', 'color: orange; font-weight: bold;');
  console.log('[PatientDetailsModal] Data received from form (@save event):', JSON.parse(JSON.stringify(scanDataFromForm)));

  if (!props.patient?.id) {
    console.error('[PatientDetailsModal] SAVE FAILED: props.patient.id is missing.', JSON.parse(JSON.stringify(props.patient)));
    alert('Critical error: Patient context was lost.')
    return
  }
  console.log(`[PatientDetailsModal] Patient context is valid. ID: ${props.patient.id}`);

  if (!scanDataFromForm.scanDate || isNaN(new Date(scanDataFromForm.scanDate))) {
    console.error(`[PatientDetailsModal] SAVE FAILED: Invalid date value received: "${scanDataFromForm.scanDate}"`);
    alert(`Invalid or missing scan date: "${scanDataFromForm.scanDate}"`);
    return;
  }
  console.log(`[PatientDetailsModal] Date is valid: "${scanDataFromForm.scanDate}"`);

  const payload = {
    ...scanDataFromForm,
    patientId: props.patient.id,
    scanDate: Timestamp.fromDate(new Date(scanDataFromForm.scanDate)),
    patientDose: typeof scanDataFromForm.dose === 'number' ? scanDataFromForm.dose : null,
    doctorDose: typeof scanDataFromForm.doctorDose === 'number' ? scanDataFromForm.doctorDose : null,
  }
  delete payload.dose

  console.log('%c[PatientDetailsModal] Final payload being sent to DB store:', 'color: blue; font-weight: bold;', JSON.parse(JSON.stringify(payload)));

  try {
    const success = payload.id
      ? await databaseStore.updateScan(payload.id, payload)
      : await databaseStore.createScan(payload)

    if (success) {
      console.log('[PatientDetailsModal] <== handleSavePatientScan SUCCESS.');
      showScanFormModal.value = false
      await fetchScans()
      if (triggerMsvRecalculation) triggerMsvRecalculation()
    } else {
      console.error('[PatientDetailsModal] <== handleSavePatientScan FAILED. DB store error:', databaseStore.error);
      alert(`Error saving patient scan: ${databaseStore.error}`);
    }
  } catch (error) {
    console.error('%c[PatientDetailsModal] <== handleSavePatientScan CRITICAL ERROR.', 'color: red; font-weight: bold;', error);
    alert(`A critical error occurred: ${error.message}`);
  }
}

const handleDeleteScan = async () => {
  console.log('[PatientDetailsModal] ==> handleDeleteScan called.');
  if (!scanToDelete.value?.id) {
    console.warn('[PatientDetailsModal] Aborted delete: scanToDelete has no ID.');
    return
  }
  console.log('[PatientDetailsModal] Deleting scan:', JSON.parse(JSON.stringify(scanToDelete.value)));
  // ... rest of function
}

// --- Modal Control Functions ---
function openAddScanModal() {
  console.log('[PatientDetailsModal] openAddScanModal called. Preparing for new scan.');
  scanToEdit.value = null
  showScanFormModal.value = true
}

function openEditScanModal(scan) {
  console.log('[PatientDetailsModal] openEditScanModal called with scan:', JSON.parse(JSON.stringify(scan)));
  const scanForForm = { ...scan, dose: scan.patientDose };
  scanToEdit.value = scanForForm
  showScanFormModal.value = true
}

function openConfirmDeleteScanModal(scan) {
  console.log('[PatientDetailsModal] openConfirmDeleteScanModal called with scan:', JSON.parse(JSON.stringify(scan)));
  scanToDelete.value = scan
  showConfirmDeleteModal.value = true
}

const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return 'N/A'
  return timestamp.toDate().toLocaleDateString()
}
</script>

<template>
  <!-- The entire template is correct and does not need to be changed. -->
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content-details" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <div v-if="patient">
          <h3>{{ currentLanguage === 'en' ? 'Scan History for' : 'سجل الفحوصات لـ' }} <strong>{{ patient.name }}</strong></h3>
          <p>{{ currentLanguage === 'en' ? 'Review past scans or add a new record.' : 'مراجعة الفحوصات السابقة أو إضافة سجل جديد.' }}</p>
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
              <li v-for="scan in scans" :key="scan.id" class="scan-item">
                <div class="scan-info">
                  <span class="scan-type">{{ scan.scanType }}</span>
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
  <ScanFormModal :show="showScanFormModal" :patient="patient" :scan="scanToEdit" :is-saving="databaseStore.loading" @close="showScanFormModal = false" @save="handleSavePatientScan" />
  <ConfirmDeleteModal :show="showConfirmDeleteModal" :title="currentLanguage === 'en' ? 'Delete Scan' : 'حذف الفحص'" :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete this scan from' : 'هل أنت متأكد من حذف هذا الفحص بتاريخ'} ${formatDate(scanToDelete?.scanDate)}?`" @close="showConfirmDeleteModal = false" @confirm="handleDeleteScan" />
</template>

<style scoped>
/* The styles are correct and do not need to be changed. */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px; }
.modal-content-details { background-color: white; padding: 30px 40px; border-radius: 12px; max-width: 800px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); }
.close-modal-button { position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 2.5em; line-height: 1; cursor: pointer; color: #aaa; }
.close-modal-button:hover { color: #333; }
h3 { text-align: center; margin-bottom: 10px; font-size: 1.8em; color: #333; }
h3 strong { color: #8d99ae; font-weight: 700; }
p { text-align: center; margin-bottom: 30px; color: #666; font-size: 1.1em; }
.add-scan-button { display: block; margin: 0 auto 30px auto; background-color: #8d99ae; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 1.05em; font-weight: 600; transition: all 0.2s ease; }
.add-scan-button:hover { background-color: #6a7483; }
.add-scan-button .svg-inline--fa { margin-inline-end: 8px; }
.scans-list-container { min-height: 150px; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; background-color: #f8f9fa; }
.loading-message, .no-scans-message { display: flex; justify-content: center; align-items: center; height: 100px; color: #8d99ae; font-size: 1.2em; }
.scans-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.scan-item { display: flex; justify-content: space-between; align-items: center; padding: 15px; background-color: white; border-radius: 6px; border: 1px solid #dee2e6; transition: box-shadow 0.2s; }
.scan-item:hover { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); }
.scan-info { display: flex; align-items: center; gap: 20px; font-size: 1.1em; }
.scan-type { font-weight: 600; color: #495057; min-width: 80px; }
.scan-date { color: #6c757d; }
.scan-dose { color: #d9534f; font-weight: 500; }
.scan-actions { display: flex; gap: 10px; }
.action-button-icon { background: none; border: none; color: #adb5bd; font-size: 1.3em; cursor: pointer; padding: 5px; transition: color 0.2s; }
.action-button-icon.edit-button:hover { color: #f0ad4e; }
.action-button-icon.delete-button:hover { color: #d9534f; }
</style>
