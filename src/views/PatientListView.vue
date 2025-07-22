<script setup>
import { ref, watch, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'

// Import all necessary components
import PatientTable from '@/components/PatientTable.vue'
import PatientFormModal from '@/components/PatientFormModal.vue'
import PatientDetailsModal from '@/components/PatientDetailsModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

// Pinia Stores and Router
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()
const router = useRouter()
const currentLanguage = inject('currentLanguage')

// State management
const patients = ref([])
const patientToDelete = ref(null)
const selectedPatient = ref(null)
const patientToEdit = ref(null)

// Modal state
const showPatientFormModal = ref(false)
const showDetailsModal = ref(false)
const showDeleteModal = ref(false)

const doctorId = computed(() => authStore.user?.uid)

// --- Functions using the corrected Pinia Store actions ---
const fetchPatients = async () => {
  const fetchedPatients = await databaseStore.fetchPatientsForDoctor()
  if (fetchedPatients) {
    patients.value = fetchedPatients
  }
}

const handleSavePatient = async (patientDataFromModal) => {
  // Destructure to remove the 'id' field from the data we save,
  // as Firestore handles it. We only use it to check for existence.
  const { id, ...dataToSave } = patientDataFromModal;

  let success = false;
  if (id) {
    // If an ID exists, we are EDITING.
    success = await databaseStore.updatePatientProfile(id, dataToSave);
  } else {
    // If no ID, we are CREATING a new patient.
    const newPatientId = await databaseStore.createPatientProfile(dataToSave);
    success = !!newPatientId; // Convert the returned ID to a boolean
  }

  if (success) {
    showPatientFormModal.value = false;
    await fetchPatients(); // Refresh the list
  } else {
    alert(`Failed to save patient. Error: ${databaseStore.error}`);
  }
}

const handleDeletePatient = async () => {
  if (!patientToDelete.value?.id) return;
  const success = await databaseStore.deletePatientProfile(patientToDelete.value.id);
  if (success) {
    showDeleteModal.value = false;
    await fetchPatients(); // Refresh the list
  } else {
    alert(`Failed to delete patient. Error: ${databaseStore.error}`);
  }
}

// --- Modal Control Functions ---
function openAddModal() {
  patientToEdit.value = null
  showPatientFormModal.value = true
}
function openEditModal(patient) {
  patientToEdit.value = patient
  showPatientFormModal.value = true
}
function openDetailsModal(patient) {
  selectedPatient.value = patient
  showDetailsModal.value = true
}
function openConfirmDeleteModal(patient) {
  patientToDelete.value = patient
  showDeleteModal.value = true
}

// Watch for the doctor's user ID to be available, then fetch their patients
watch(
  doctorId,
  (id) => {
    if (id) {
      fetchPatients()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="patient-list-page">
    <div class="patient-list-main-content">
      <div class="patient-list-card">
        <h2>{{ currentLanguage === 'en' ? 'Manage Patients' : 'إدارة المرضى' }}</h2>
        <p>{{ currentLanguage === 'en' ? 'Add new patients or view existing records' : 'أضف مرضى جدد أو اطلع على السجلات الحالية.' }}</p>
        <button @click="openAddModal" class="add-new-patient-button">{{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}</button>
        <PatientTable :patients="patients" :is-loading="databaseStore.loading" @view="openDetailsModal" @edit="openEditModal" @delete="openConfirmDeleteModal" />
        <div class="switch-link-container">
          <a href="#" @click.prevent="router.push('/dashboard')">{{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}</a>
        </div>
      </div>
    </div>
    <PatientFormModal :show="showPatientFormModal" :patient="patientToEdit" :is-saving="databaseStore.loading" @close="showPatientFormModal = false" @save="handleSavePatient" />
    <PatientDetailsModal :show="showDetailsModal" :patient="selectedPatient" @close="showDetailsModal = false" />
    <ConfirmDeleteModal :show="showDeleteModal" :title="currentLanguage === 'en' ? 'Delete Patient' : 'حذف المريض'" :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete' : 'هل أنت متأكد من الحذف'} ${patientToDelete?.displayName}?`" @close="showDeleteModal = false" @confirm="handleDeletePatient" />
  </div>
</template>

<style scoped>
/* Styles remain the same */
.patient-list-page { display: flex; flex-direction: column; min-height: calc(100vh - 80px); width: 100%; }
.patient-list-main-content { flex-grow: 1; display: flex; justify-content: center; align-items: flex-start; padding: 30px; background-color: #f8f9fa; }
.patient-list-card { background-color: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); text-align: center; max-width: 1000px; width: 100%; border: 1px solid #eee; margin-top: 30px; }
.patient-list-card h2 { color: #8d99ae; margin-bottom: 20px; font-size: 2em; font-weight: 700; }
.patient-list-card p { color: #555; margin-bottom: 30px; font-size: 1.1em; }
.add-new-patient-button { margin-bottom: 30px; background-color: #8d99ae; color: white; border: none; padding: 12px 25px; border-radius: 8px; cursor: pointer; font-size: 1.05em; font-weight: 600; transition: all 0.2s ease; }
.add-new-patient-button:hover { background-color: #6a7483; transform: translateY(-2px); }
.switch-link-container { margin-top: 25px; }
.patient-list-card a { color: #8d99ae; text-decoration: none; font-weight: 600; transition: color 0.3s ease; font-size: 16.5px; }
</style>
