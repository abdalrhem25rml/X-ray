<script setup>
import { inject, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

defineProps({
  scans: Array,
  isLoading: Boolean,
})

const emit = defineEmits(['edit', 'delete'])
const authStore = useAuthStore()
const currentLanguage = inject('currentLanguage')

const userRole = computed(() => authStore.role)

const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  if (isNaN(date)) return 'Invalid Date'
  return new Date(date).toLocaleDateString('en-UK')
}

const formatDose = (dose) => {
  return typeof dose === 'number' ? dose.toFixed(2) : 'N/A'
}
</script>

<template>
  <!-- ✅ FIX: The container now handles horizontal scrolling -->
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
          <th class="reason-column">{{ currentLanguage === 'en' ? 'Reason' : 'السبب' }}</th>
          <th>{{ currentLanguage === 'en' ? "Patient's Dose" : 'جرعة المريض' }}</th>
          <th v-if="userRole === 'doctor'">
            {{ currentLanguage === 'en' ? "Doctor's Dose" : 'جرعة الطبيب' }}
          </th>
          <th class="actions-column">
            {{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scan in scans" :key="scan.id">
          <td>{{ scan.patientName }}</td>
          <td>{{ scan.scanType }}</td>
          <td>{{ formatDate(scan.scanDate) }}</td>
          <td class="reason-column">{{ scan.reason || 'N/A' }}</td>
          <td>{{ formatDose(scan.dose) }}</td>
          <td v-if="userRole === 'doctor'">{{ formatDose(scan.doctorDose) }}</td>
          <td>
            <!-- ✅ FIX: Added a wrapper for the buttons to apply flexbox -->
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
/* --- MODIFIED STYLES --- */

/* This container ensures the table can scroll horizontally on small screens */
/* without causing the whole page to scroll. */
.history-table-container {
  margin-top: 20px;
  overflow-x: auto; /* This is the key for horizontal scrolling */
  border-radius: 8px; /* Optional: for a nicer look */
  border: 1px solid #e9ecef; /* Optional: for a nicer look */
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  text-align: start; /* Use logical property for RTL/LTR support */
}

.history-table th,
.history-table td {
  padding: 16px 20px;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
  /* ✅ FIX: Allow text to wrap by default for better responsiveness */
  white-space: normal;
}
/* ✅ NEW: Special styles for the reason column to handle long text */
.reason-column {
  min-width: 200px; /* Give it some minimum space */
  max-width: 350px; /* Prevent it from taking over the table */
}
/* Give the actions column a minimum width so it doesn't get too squished */
.history-table th.actions-column {
  min-width: 200px;
  text-align: center; /* Center the "Actions" header text */
}

/* This is the new flex container for the buttons */
.action-buttons-wrapper {
  display: flex;
  flex-wrap: wrap; /* Allows buttons to stack vertically if needed */
  gap: 8px; /* Cleanly adds space between buttons, horizontally or vertically */
  justify-content: center; /* Centers buttons within the cell */
}

.action-button-sm {
  /* This flex property is the magic for responsive width. */
  /* flex-grow: 1 (allow growing), flex-shrink: 1 (allow shrinking), flex-basis: 80px (ideal starting width) */
  flex: 1 1 80px;

  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: white;
  text-align: center;
  /* margin is removed, as 'gap' on the parent is a better approach */
}

/* --- UNCHANGED STYLES --- */

.loading-message,
.no-items-message {
  padding: 40px;
  text-align: center;
  color: #6c757d;
  font-size: 1.2rem;
}

.history-table th {
  background-color: #f8f9fa;
  color: #495057;
}

.history-table tbody tr:hover {
  background-color: #f1f3f5;
}

.action-button-sm.edit-button {
  background-color: #f0ad4e;
}

.action-button-sm.delete-button {
  background-color: #d9534f;
}
table {
  table-layout: fixed;
  width: 100%;
}
</style>
