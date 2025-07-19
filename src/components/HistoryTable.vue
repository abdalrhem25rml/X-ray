<script setup>
import { inject } from 'vue'

defineProps({
  scans: Array,
  isLoading: Boolean,
})

const emit = defineEmits(['edit', 'delete'])

const currentLanguage = inject('currentLanguage')

const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return 'N/A'
  return new Date(timestamp.toDate()).toLocaleDateString('en-UK')
}
</script>

<template>
  <div class="history-table-container">
    <div v-if="isLoading" class="loading-message">...</div>
    <div v-else-if="scans.length === 0" class="no-items-message">
      {{ currentLanguage === 'en' ? 'No scan history found.' : 'لم يتم العثور على سجل فحوصات.' }}
    </div>
    <table v-else class="history-table">
      <thead>
        <tr>
          <th>{{ currentLanguage === 'en' ? 'Patient Name' : 'اسم المريض' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Dose (mSv)' : 'الجرعة (mSv)' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scan in scans" :key="scan.id">
          <td>{{ scan.patientName }}</td>
          <td>{{ scan.scanType }}</td>
          <td>{{ formatDate(scan.scanDate) }}</td>
          <td>{{ scan.dose }}</td>
          <td>
            <button @click="$emit('edit', scan)" class="action-button-sm edit-button">Edit</button>
            <button @click="$emit('delete', scan)" class="action-button-sm delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Adapted styles from PatientTable */
.history-table-container { margin-top: 20px; }
.loading-message, .no-items-message { padding: 40px; text-align: center; color: #6c757d; font-size: 1.2rem; }
.history-table { width: 100%; border-collapse: collapse; text-align: left; }
.history-table th, .history-table td { padding: 16px 20px; border-bottom: 1px solid #e9ecef; }
.history-table th { background-color: #f8f9fa; color: #495057; }
.history-table tbody tr:hover { background-color: #f1f3f5; }
.action-button-sm { padding: 8px 12px; border-radius: 6px; border: none; font-weight: 600; cursor: pointer; color: white; margin: 0 5px; }
.action-button-sm.edit-button { background-color: #f0ad4e; }
.action-button-sm.delete-button { background-color: #d9534f; }
</style>
