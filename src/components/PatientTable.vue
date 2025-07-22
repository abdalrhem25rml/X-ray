<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  patients: {
    type: Array,
    required: true,
  },
  isLoading: Boolean,
})

const emit = defineEmits(['view', 'edit', 'delete'])

const currentLanguage = inject('currentLanguage')

// Helper function to format dates, assuming timestamps from Firestore
const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleDateString()
}
</script>

<template>
  <div class="patient-table-container">
    <div v-if="isLoading" class="loading-state">
      <p>{{ currentLanguage === 'en' ? 'Loading patients...' : 'جاري تحميل المرضى...' }}</p>
    </div>
    <div v-else-if="patients.length === 0" class="empty-state">
      <p>{{ currentLanguage === 'en' ? 'No patients found.' : 'لم يتم العثور على مرضى.' }}</p>
    </div>
    <table v-else class="patient-table">
      <thead>
        <tr>
          <th>{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Birth Date' : 'تاريخ الميلاد' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td>
            <div class="patient-name-cell">
              <div class="avatar">{{ patient.name?.charAt(0).toUpperCase() || '#' }}</div>
              <span>{{ patient.name || 'Unnamed Patient' }}</span>
            </div>
          </td>
          <td>{{ formatDate(patient.birthDate) }}</td>
          <td>{{ patient.gender }}</td>
          <td>
            <div class="action-buttons">
              <button @click="$emit('view', patient)" class="action-btn view-btn">View</button>
              <button @click="$emit('edit', patient)" class="action-btn edit-btn">Edit</button>
              <button @click="$emit('delete', patient)" class="action-btn delete-btn">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Add your PatientTable styles here */
.patient-table-container { width: 100%; overflow-x: auto; }
.patient-table { width: 100%; border-collapse: collapse; }
.patient-table th, .patient-table td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #eee; }
.patient-table th { background-color: #f8f9fa; font-weight: 600; color: #666; }
.patient-name-cell { display: flex; align-items: center; gap: 10px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; background-color: #8d99ae; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
.action-buttons { display: flex; gap: 5px; }
.action-btn { padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer; }
.view-btn { background-color: #d1ecf1; }
.edit-btn { background-color: #fff3cd; }
.delete-btn { background-color: #f8d7da; }
.loading-state, .empty-state { text-align: center; padding: 40px; color: #888; }
</style>
