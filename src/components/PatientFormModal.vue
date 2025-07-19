<script setup>
import { ref, watch, inject } from 'vue'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import HistoryTable from '@/components/HistoryTable.vue'
import ScanFormModal from '@/components/ScanFormModal.vue'

const props = defineProps({
  show: Boolean,
  patient: Object,
})
const emit = defineEmits(['close', 'generateNewRecommendation', 'deleteRecommendation'])

const firestore = getFirestore()
const authStore = useAuthStore()
const appId = import.meta.env.VITE_APP_ID
const triggerMsvRecalculation = inject('triggerMsvRecalculation')

const patientScans = ref([])
const isLoading = ref(false)
const isSaving = ref(false)
const showScanForm = ref(false)

// ✅ NEW: Fetches scans ONLY for the specific patient being viewed
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

// ✅ NEW: Saves a scan record with the patient's ID pre-filled
const handleSavePatientScan = async (scanData) => {
  isSaving.value = true
  try {
    const scansCol = collection(firestore, 'artifacts', appId, 'users', authStore.user.uid, 'scans')
    const dataToSave = {
      ...scanData,
      patientId: props.patient.id, // This is the key change
      patientName: props.patient.name,
      scanDate: new Date(scanData.scanDate),
      timestamp: serverTimestamp(),
    }
    const { id, ...docToAdd } = dataToSave
    await addDoc(scansCol, docToAdd)

    showScanForm.value = false
    await fetchPatientScans() // Refresh the modal's list
    await triggerMsvRecalculation() // Refresh the global counter
  } catch (error) {
    console.error('Error saving patient scan:', error)
  } finally {
    isSaving.value = false
  }
}

// When the modal is shown, fetch the scans for the selected patient
watch(() => props.show, (isShown) => {
  if (isShown) {
    fetchPatientScans()
  }
})
</script>

<template>
  <div>
    <Transition name="modal-fade">
      <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content">
          <button @click="$emit('close')" class="close-button">&times;</button>
          <div v-if="patient">
            <h2 class="patient-name">{{ patient.name }}</h2>
            <div class="patient-details-grid">
              <p><strong>Age:</strong> {{ patient.age }}</p>
              <p><strong>Gender:</strong> {{ patient.gender }}</p>
              <p><strong>Medical History:</strong> {{ patient.medicalHistory?.join(', ') || 'N/A' }}</p>
              <p><strong>Allergies:</strong> {{ patient.allergies?.join(', ') || 'N/A' }}</p>
            </div>
            <hr class="divider" />
            <div class="history-section">
              <h3>Scan History</h3>
              <button @click="showScanForm = true" class="add-scan-button">
                Add Scan to Patient Record
              </button>
              <HistoryTable :scans="patientScans" :is-loading="isLoading" />
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- This is the nested modal for adding a scan TO THIS PATIENT -->
    <ScanFormModal
      :show="showScanForm"
      :is-saving="isSaving"
      :patient="patient"
      @close="showScanForm = false"
      @save="handleSavePatientScan"
    />
  </div>
</template>

<style scoped>
/* All the styles for the modal overlay, content, form, and buttons */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}
.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  max-width: 600px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}
.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em;
  cursor: pointer;
  color: #8d99ae;
  transition: all 0.2s ease;
}
.close-modal-button:hover {
  color: #555;
  transform: rotate(90deg);
}
.modal-title {
  color: #8d99ae;
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 700;
  text-align: center;
}
.patient-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
}
.form-group {
  margin-bottom: 10px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
}
.text-red-600 {
  color: #d9534f;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #8d99ae;
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.3);
  outline: none;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
}
.action-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.action-button:hover:not(:disabled) {
  transform: translateY(-2px);
}
.action-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
.action-button.secondary {
  background-color: #6c757d;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-content[dir='rtl'] .patient-form {
  text-align: right;
}
.patient-name {
  text-align: center;
  font-size: 2.2em;
  color: #333;
}
.patient-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  margin: 20px 0;
}
.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 25px 0;
}
.history-section h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
}
.add-scan-button {
  /* Style for the new button */
  display: block;
  margin-left: auto;
  margin-bottom: 15px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
