<script setup>
import { ref, inject, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  arrayRemove,
} from 'firebase/firestore'

// Import components
import PatientTable from '@/components/PatientTable.vue'
import PatientFormModal from '@/components/PatientFormModal.vue'
import PatientDetailsModal from '@/components/PatientDetailsModal.vue'
import ConfirmDeleteModal from '@/components/ConfirmDeleteModal.vue'

// Injections and Router
const appId = import.meta.env.VITE_APP_ID
const auth = inject('auth')
const currentLanguage = inject('currentLanguage')
const router = useRouter()
const firestore = getFirestore()

// State management
const patients = ref([])
const isLoadingPatients = ref(true)
const isSavingPatient = ref(false)

// Modal state
const showAddEditModal = ref(false)
const showDetailsModal = ref(false)
const showDeletePatientModal = ref(false)
const showDeleteRecModal = ref(false)

const patientToEdit = ref(null)
const selectedPatient = ref(null)
const patientToDelete = ref(null)
const recToDelete = ref(null)

// --- Firebase Functions ---
const fetchPatients = async () => {
  isLoadingPatients.value = true
  try {
    const patientsCol = collection(
      firestore,
      'artifacts',
      appId,
      'users',
      auth.currentUser.uid,
      'patients',
    )
    const snapshot = await getDocs(patientsCol)
    patients.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (b.timestamp?.toMillis() || 0) - (a.timestamp?.toMillis() || 0))
  } catch (error) {
    console.error('Error fetching patients:', error)
  } finally {
    isLoadingPatients.value = false
  }
}

const handleSavePatient = async (patientData) => {
  isSavingPatient.value = true
  try {
    const patientsCol = collection(
      firestore,
      'artifacts',
      appId,
      'users',
      auth.currentUser.uid,
      'patients',
    )
    if (patientData.id) {
      const patientRef = doc(patientsCol, patientData.id)
      await updateDoc(patientRef, { ...patientData, timestamp: serverTimestamp() })
    } else {
      const { id, ...dataToSave } = patientData // Don't save the null id
      await addDoc(patientsCol, { ...dataToSave, timestamp: serverTimestamp() })
    }
    showAddEditModal.value = false
    await fetchPatients()
  } catch (error) {
    console.error('Error saving patient:', error)
  } finally {
    isSavingPatient.value = false
  }
}

const handleDeletePatient = async () => {
  if (!patientToDelete.value) return
  try {
    const patientRef = doc(
      firestore,
      'artifacts',
      appId,
      'users',
      auth.currentUser.uid,
      'patients',
      patientToDelete.value.id,
    )
    await deleteDoc(patientRef)
    showDeletePatientModal.value = false
    await fetchPatients()
  } catch (error) {
    console.error('Error deleting patient:', error)
  }
}

const handleDeleteRecommendation = async () => {
  if (!recToDelete.value) return
  try {
    const { patientId, recId } = recToDelete.value
    // Find the recommendation to remove it from the patient's array
    const patientWithRec = patients.value.find((p) => p.id === patientId)
    const recommendationObject = patientWithRec?.recommendations.find((r) => r.id === recId)

    if (patientId && recommendationObject) {
      const patientRef = doc(
        firestore,
        'artifacts',
        appId,
        'users',
        auth.currentUser.uid,
        'patients',
        patientId,
      )
      await updateDoc(patientRef, {
        recommendations: arrayRemove(recommendationObject),
      })
      showDeleteRecModal.value = false
      await fetchPatients() // Refresh data
    }
  } catch (error) {
    console.error('Error deleting recommendation:', error)
  }
}

// --- Modal Control Functions ---
function handleOpenAddModal() {
  patientToEdit.value = null
  showAddEditModal.value = true
}

function handleOpenEditModal(patient) {
  patientToEdit.value = patient
  showAddEditModal.value = true
}

function handleOpenDetailsModal(patient) {
  selectedPatient.value = patient
  showDetailsModal.value = true
}

function handleConfirmDeletePatient(patient) {
  patientToDelete.value = patient
  showDeletePatientModal.value = true
}

function handleConfirmDeleteRec(recData) {
  recToDelete.value = recData
  showDeleteRecModal.value = true
}

function handleGoToRecommend(patientId) {
  router.push(`/recommend?patientId=${patientId}`)
}
// This watcher will run immediately and whenever the auth state changes.
watch(
  () => auth.currentUser, // The reactive source to track
  (user) => {
    // This callback runs when the user's state changes
    if (user) {
      // If there is a logged-in user, fetch their patients
      fetchPatients()
    } else {
      // If the user logs out, clear the patient list
      patients.value = []
    }
  },
  { immediate: true }, // This option makes the watcher run immediately on component load
)
</script>

<template>
  <div class="patient-list-page">
    <div class="patient-list-main-content">
      <div class="patient-list-card">
        <h2>{{ currentLanguage === 'en' ? 'Manage Patients' : 'إدارة المرضى' }}</h2>
        <p>
          {{
            currentLanguage === 'en'
              ? 'Add new patients or view existing records'
              : 'أضف مرضى جدد أو اطلع على السجلات الحالية.'
          }}
        </p>
        <button @click="handleOpenAddModal" class="add-new-patient-button">
          {{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}
        </button>

        <!-- Use the PatientTable component, listening to all its events -->
        <PatientTable
          :patients="patients"
          :is-loading="isLoadingPatients"
          @view="handleOpenDetailsModal"
          @edit="handleOpenEditModal"
          @delete="handleConfirmDeletePatient"
          @recommend="handleGoToRecommend"
        />
        <div class="switch-link-container">
          <a href="#" @click="router.push('/dashboard')">
            {{ currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </div>
      </div>
    </div>

    <!-- Render all the modals, controlled by the parent's state -->
    <PatientFormModal
      :show="showAddEditModal"
      :patient="patientToEdit"
      :is-saving="isSavingPatient"
      @close="showAddEditModal = false"
      @save="handleSavePatient"
    />

    <PatientDetailsModal
      :show="showDetailsModal"
      :patient="selectedPatient"
      @close="showDetailsModal = false"
      @generateNewRecommendation="handleGoToRecommend"
      @deleteRecommendation="handleConfirmDeleteRec"
    />

    <!-- A modal for deleting a PATIENT -->
    <ConfirmDeleteModal
      :show="showDeletePatientModal"
      :title="currentLanguage === 'en' ? 'Delete Patient' : 'حذف المريض'"
      :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete' : 'هل أنت متأكد من الحذف'} ${patientToDelete?.name}?`"
      @close="showDeletePatientModal = false"
      @confirm="handleDeletePatient"
    />

    <!-- The SAME modal, reused for deleting a RECOMMENDATION -->
    <ConfirmDeleteModal
      :show="showDeleteRecModal"
      :title="currentLanguage === 'en' ? 'Delete Recommendation' : 'حذف التوصية'"
      :message="
        currentLanguage === 'en'
          ? 'Are you sure you want to delete this scan record?'
          : 'هل أنت متأكد من حذف سجل الفحص هذا؟'
      "
      @close="showDeleteRecModal = false"
      @confirm="handleDeleteRecommendation"
    />
  </div>
</template>

<style scoped>
/* The parent component now only needs styles for the main page layout */
.patient-list-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust for your header */
  width: 100%;
}
.patient-list-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  background-color: #f8f9fa;
}
.patient-list-card {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1000px;
  width: 100%;
  border: 1px solid #eee;
  margin-top: 30px;
}
.patient-list-card h2 {
  color: #8d99ae;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}
.patient-list-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}
.add-new-patient-button {
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
.add-new-patient-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.patient-list-card a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 16.5px;
}
.switch-link-container {
  margin: 25px;
}
</style>
