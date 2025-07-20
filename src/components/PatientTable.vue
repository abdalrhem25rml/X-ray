<script setup>
import { inject } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  patients: Array,
  isLoading: Boolean,
})

const emit = defineEmits(['view', 'edit', 'delete', 'recommend'])

const currentLanguage = inject('currentLanguage')
</script>

<template>
  <div class="patient-list-section mt-8" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <h3>
      {{ currentLanguage === 'en' ? 'Existing Patients' : 'المرضى الحاليون' }}
    </h3>
    <div v-if="isLoading" class="loading-message">
      <font-awesome-icon icon="spinner" spin />
      {{ currentLanguage === 'en' ? 'Loading patients...' : 'جاري تحميل المرضى...' }}
    </div>
    <div v-else-if="patients.length === 0" class="no-patients-message">
      {{ currentLanguage === 'en' ? 'No patients added yet.' : 'لم يتم إضافة أي مرضى بعد.' }}
    </div>
    <div v-else class="patient-table-container">
      <table class="patient-table">
        <thead>
          <tr>
            <th>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Age' : 'العمر' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</th>
            <!-- ✅ NEW: Headers for Medical History and Allergies -->
            <th class="details-column">{{ currentLanguage === 'en' ? 'Medical History' : 'التاريخ الطبي' }}</th>
            <th class="details-column">{{ currentLanguage === 'en' ? 'Allergies' : 'الحساسية' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.name }}</td>
            <td>{{ patient.age }}</td>
            <td>
              {{
                currentLanguage === 'en'
                  ? patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1)
                  : patient.gender === 'male'
                    ? 'ذكر'
                    : 'أنثى'
              }}
            </td>
            <!-- ✅ NEW: Cells to display the new data -->
            <td class="details-column">
              {{ patient.medicalHistory?.join(', ') || (currentLanguage === 'en' ? 'None' : 'لا يوجد') }}
            </td>
            <td class="details-column">
              {{ patient.allergies?.join(', ') || (currentLanguage === 'en' ? 'None' : 'لا يوجد') }}
            </td>
            <td>
              <div class="action-buttons-wrapper">
                <!-- This button opens the Scan History (PatientDetailsModal) -->
                <button @click="$emit('view', patient)" class="action-button-sm view-button" :title="currentLanguage === 'en' ? 'View Scan History' : 'عرض سجل الفحوصات'">
                  <font-awesome-icon icon="eye" />
                </button>
                <!-- This button opens the Patient Details Editor (PatientFormModal) -->
                <button @click="$emit('edit', patient)" class="action-button-sm edit-button" :title="currentLanguage === 'en' ? 'Edit Patient Details' : 'تعديل تفاصيل المريض'">
                  <font-awesome-icon icon="edit" />
                </button>
                <!-- This button opens the Delete Confirmation -->
                <button @click="$emit('delete', patient)" class="action-button-sm delete-button" :title="currentLanguage === 'en' ? 'Delete Patient' : 'حذف المريض'">
                  <font-awesome-icon icon="trash-alt" />
                </button>
                <!-- This button opens the Recommendation page -->
                <button @click="$emit('recommend', patient.id)" class="action-button-sm recommend-button" :title="currentLanguage === 'en' ? 'Get Recommendation' : 'الحصول على توصية'">
                  <font-awesome-icon icon="file-medical" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
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

/* ✅ NEW: Styling to handle long text in the new columns */
.details-column {
  white-space: normal; /* Allow text to wrap */
  max-width: 250px; /* Prevent column from getting too wide */
  overflow: hidden;
  text-overflow: ellipsis; /* Add '...' if content still overflows */
}

.patient-table th {
  background-color: #f7f7f7;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
  white-space: nowrap; /* Keep headers on one line */
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
