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
  <!-- ✅ FIX: 'dir' is now on the top-level container to apply to all children -->
  <div class="patient-list-section mt-8" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <!-- Redundant 'dir' attributes removed from children -->
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
                  ? patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1) // Capitalize
                  : patient.gender === 'male'
                    ? 'ذكر'
                    : 'أنثى'
              }}
            </td>
            <td>
              <button @click="$emit('view', patient)" class="action-button-sm view-button">
                <font-awesome-icon icon="eye" />
              </button>
              <button @click="$emit('edit', patient)" class="action-button-sm edit-button">
                <font-awesome-icon icon="edit" />
              </button>
              <button @click="$emit('delete', patient)" class="action-button-sm delete-button">
                <font-awesome-icon icon="trash-alt" />
              </button>
              <button
                @click="$emit('recommend', patient.id)"
                class="action-button-sm recommend-button"
              >
                <font-awesome-icon icon="file-medical" />
              </button>
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
  /* ✅ FIX: Use 'start' for proper RTL/LTR text alignment */
  text-align: start;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}
.patient-table th {
  background-color: #f7f7f7;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}
.patient-table tbody tr:hover {
  background-color: #f0f4f8;
}
.action-button-sm {
  background: none;
  border: none;
  color: #8d99ae;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2em;
  margin: 0 4px;
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
