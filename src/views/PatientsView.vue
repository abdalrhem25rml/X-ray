<script setup>
import { ref, watch, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'

// Import FontAwesome for table icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import all necessary components
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

// --- Functions ---
const fetchPatients = async () => {
  const fetchedPatients = await databaseStore.fetchPatientsForDoctor()
  if (fetchedPatients) {
    patients.value = fetchedPatients
  }
}

const handleSavePatient = async (patientDataFromModal) => {
  const { id, ...dataToSave } = patientDataFromModal
  let success = false
  if (id) {
    success = await databaseStore.updatePatientProfile(id, dataToSave)
  } else {
    const newPatientId = await databaseStore.addNewPatient(dataToSave)
    success = !!newPatientId
  }

  if (success) {
    showPatientFormModal.value = false
    await fetchPatients()
  } else {
    alert(`Failed to save patient. Error: ${databaseStore.error}`)
  }
}

const handleDeletePatient = async () => {
  if (!patientToDelete.value?.id) return
  const success = await databaseStore.deletePatientProfile(patientToDelete.value.id)
  if (success) {
    showDeleteModal.value = false
    await fetchPatients()
  } else {
    alert(`Failed to delete patient. Error: ${databaseStore.error}`)
  }
}

// --- Modal Control & Action Functions ---
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

// ✅ FIX: This function now navigates to the Recommend page with the patient's ID.
function handleRecommend(patientId) {
  if (!patientId) return
  // Use the router to push to the 'recommend' route, passing the patient's ID as a query parameter.
  router.push({
    name: 'recommend',
    query: { patientId: patientId }
  })
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
        <p>
          {{
            currentLanguage === 'en'
              ? 'Add new patients or view existing records'
              : 'أضف مرضى جدد أو اطلع على السجلات الحالية.'
          }}
        </p>
        <button @click="openAddModal" class="add-new-patient-button">
          {{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}
        </button>

        <div class="patient-list-section" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <h3>
            {{ currentLanguage === 'en' ? 'Existing Patients' : 'المرضى الحاليون' }}
          </h3>
          <div v-if="databaseStore.loading" class="loading-message">
            <font-awesome-icon icon="spinner" spin />
            {{ currentLanguage === 'en' ? 'Loading patients...' : 'جاري تحميل المرضى...' }}
          </div>
          <div v-else-if="!patients || patients.length === 0" class="no-patients-message">
            {{ currentLanguage === 'en' ? 'No patients added yet.' : 'لم يتم إضافة أي مرضى بعد.' }}
          </div>
          <div v-else class="patient-table-container">
            <table class="patient-table">
              <thead>
                <tr>
                  <th>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}</th>
                  <th>{{ currentLanguage === 'en' ? 'Age' : 'العمر' }}</th>
                  <th>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</th>
                  <th class="details-column">
                    {{ currentLanguage === 'en' ? 'Medical History' : 'التاريخ الطبي' }}
                  </th>
                  <th class="details-column">
                    {{ currentLanguage === 'en' ? 'Allergies' : 'الحساسية' }}
                  </th>
                  <th>{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="patient in patients" :key="patient.id">
                  <td>{{ patient.name ?? 'N/A' }}</td>
                  <td>{{ patient.age ?? 'N/A' }}</td>
                  <td>
                    {{
                      currentLanguage === 'en'
                        ? (patient.gender?.charAt(0).toUpperCase() ?? '') + (patient.gender?.slice(1) ?? 'N/A')
                        : patient.gender === 'male'
                          ? 'ذكر'
                          : 'أنثى'
                    }}
                  </td>
                  <td class="details-column">
                    {{
                      patient.medicalHistory?.join(', ') ||
                      (currentLanguage === 'en' ? 'None' : 'لا يوجد')
                    }}
                  </td>
                  <td class="details-column">
                    {{
                      patient.allergies?.join(', ') ||
                      (currentLanguage === 'en' ? 'None' : 'لا يوجد')
                    }}
                  </td>
                  <td>
                    <div class="action-buttons-wrapper">
                      <button
                        @click="openDetailsModal(patient)"
                        class="action-button-sm view-button"
                        :title="currentLanguage === 'en' ? 'View Scan History' : 'عرض سجل الفحوصات'"
                      >
                        <font-awesome-icon icon="eye" />
                      </button>
                      <button
                        @click="openEditModal(patient)"
                        class="action-button-sm edit-button"
                        :title="currentLanguage === 'en' ? 'Edit Patient Details' : 'تعديل تفاصيل المريض'"
                      >
                        <font-awesome-icon icon="edit" />
                      </button>
                      <button
                        @click="openConfirmDeleteModal(patient)"
                        class="action-button-sm delete-button"
                        :title="currentLanguage === 'en' ? 'Delete Patient' : 'حذف المريض'"
                      >
                        <font-awesome-icon icon="trash-alt" />
                      </button>
                      <button
                        @click="handleRecommend(patient.id)"
                        class="action-button-sm recommend-button"
                        :title="currentLanguage === 'en' ? 'Get Recommendation' : 'الحصول على توصية'"
                      >
                        <font-awesome-icon icon="file-medical" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="switch-link-container">
          <a href="#" @click.prevent="router.push('/dashboard')">{{
            currentLanguage === 'en' ? 'Back to dashboard' : 'العودة إلى لوحة التحكم'
          }}</a>
        </div>
      </div>
    </div>
    <PatientFormModal
      :show="showPatientFormModal"
      :patient="patientToEdit"
      :is-saving="databaseStore.loading"
      @close="showPatientFormModal = false"
      @save="handleSavePatient"
    />
    <PatientDetailsModal
      :show="showDetailsModal"
      :patient="selectedPatient"
      @close="showDetailsModal = false"
    />
    <ConfirmDeleteModal
      :show="showDeleteModal"
      :title="currentLanguage === 'en' ? 'Delete Patient' : 'حذف المريض'"
      :message="`${currentLanguage === 'en' ? 'Are you sure you want to delete' : 'هل أنت متأكد من الحذف'} ${patientToDelete?.name ?? 'this patient'}?`"
      @close="showDeleteModal = false"
      @confirm="handleDeletePatient"
    />
  </div>
</template>

<style scoped>
/* All your previous styles remain the same */
.patient-list-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
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
.switch-link-container {
  margin-top: 25px;
}
.patient-list-card a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 16.5px;
}
.patient-list-section {
  margin-top: 2rem;
}
.patient-list-section h3 {
  color: #8d99ae;
  font-size: 1.6em;
  margin-bottom: 25px;
  font-weight: 600;
}
.loading-message,
.no-patients-message {
  text-align: center;
  font-size: 1.2em;
  color: #8d99ae;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.patient-table-container {
  overflow-x: auto;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: white;
}
.patient-table {
  width: 100%;
  border-collapse: collapse;
}
.patient-table th,
.patient-table td {
  padding: 15px;
  text-align: start;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}
.details-column {
  white-space: normal;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.patient-table th {
  background-color: #f7f7f7;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
  white-space: nowrap;
}
.patient-table tbody tr:hover {
  background-color: #f0f4f8;
}
.action-buttons-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
}
.action-button-sm {
  background: none;
  border: none;
  color: #8d99ae;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2em;
  transition: all 0.2s ease;
}
.action-button-sm:hover {
  transform: translateY(-1px);
}
.action-button-sm.view-button:hover {
  color: #5bc0de;
}
.action-button-sm.edit-button:hover {
  color: #f0ad4e;
}
.action-button-sm.delete-button:hover {
  color: #d9534f;
}
.action-button-sm.recommend-button:hover {
  color: #28a745;
}
</style>
