<script setup>
import { inject, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

defineProps({
  scans: Array,
  isLoading: Boolean,
  // This new prop makes the component more reusable and context-aware
  isPersonalView: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['edit', 'delete'])
const authStore = useAuthStore()
const currentLanguage = inject('currentLanguage')

const userRole = computed(() => authStore.role)

const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  if (isNaN(date)) return 'Invalid Date'
  return new Date(date).toLocaleDateString('en-GB') // Changed to GB format DD/MM/YYYY
}

const formatDose = (dose) => {
  return typeof dose === 'number' ? dose.toFixed(3) : 'N/A'
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
          <!-- Column is now conditional based on the view context -->
          <th v-if="!isPersonalView">{{ currentLanguage === 'en' ? 'Patient Name' : 'اسم المريض' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}</th>
          <th>{{ currentLanguage === 'en' ? 'Scan Date' : 'تاريخ الفحص' }}</th>
          <th class="reason-column">{{ currentLanguage === 'en' ? 'Reason' : 'السبب' }}</th>
          <th>{{ currentLanguage === 'en' ? "Patient's Dose" : 'جرعة المريض' }}</th>
          <!-- Column is now conditional based on the view context -->
          <th v-if="!isPersonalView">
            {{ currentLanguage === 'en' ? "Doctor's Dose" : 'جرعة الطبيب' }}
          </th>
          <th class="actions-column">
            {{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scan in scans" :key="scan.id">
          <!-- Column is now conditional -->
          <td v-if="!isPersonalView">{{ scan.patientName }}</td>
          <td>{{ scan.scanType }}</td>
          <td>{{ formatDate(scan.scanDate) }}</td>
          <td class="reason-column">{{ scan.reason || 'N/A' }}</td>
          <td>{{ formatDose(scan.patientDose) }}</td>
          <!-- Column is now conditional -->
          <td v-if="!isPersonalView">{{ formatDose(scan.doctorDose) }}</td>
          <td>
            <div class="action-buttons-wrapper">
              <button @click="$emit('edit', scan)" class="action-button-sm edit-button">
                {{ currentLanguage === 'en' ? 'Edit' : 'تعديل' }}
              </button>
              <button @click="$emit('delete', scan)" class="action-button-sm delete-button">
                {{ currentLanguage === 'en' ? 'Delete' : 'حذف' }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.history-table-container {
  margin-top: 20px;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}
.history-table {
  width: 100%;
  border-collapse: collapse;
  text-align: start;
}
.history-table th, .history-table td {
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
  white-space: nowrap;
}
.reason-column {
  white-space: normal;
  min-width: 200px;
  max-width: 350px;
}
.history-table th.actions-column {
  min-width: 150px;
  text-align: center;
}
.action-buttons-wrapper {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.action-button-sm {
  flex: 1 1 80px;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: white;
  text-align: center;
}
.loading-message, .no-items-message {
  padding: 40px;
  text-align: center;
  color: #6c757d;
  font-size: 1.2rem;
}
.history-table th {
  background-color: #f8f9fa;
  color: #495057;
  font-weight: 600;
}
.history-table tbody tr:hover {
  background-color: #f1f3f5;
}
.action-button-sm.edit-button { background-color: #f0ad4e; }
.action-button-sm.delete-button { background-color: #d9534f; }
</style>
