<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { inject } from 'vue'

const props = defineProps({
  scans: { type: Array, required: true },
  isLoading: { type: Boolean, default: false },
})
const emit = defineEmits(['edit', 'delete'])

const currentLanguage = inject('currentLanguage')

const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return 'N/A'
  return timestamp.toDate().toLocaleDateString(currentLanguage.value === 'ar' ? 'ar-EG' : 'en-US')
}
</script>

<template>
  <div class="history-table-wrapper" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">

    <!-- ✅ UPDATED: The loading state now matches HistoryTable.vue -->
    <div v-if="isLoading" class="loading-state">
      <font-awesome-icon icon="spinner" spin />
      <span>{{ currentLanguage === 'en' ? 'Loading other sources...' : 'جاري تحميل المصادر الأخرى...' }}</span>
    </div>

    <div v-else-if="!scans || scans.length === 0" class="empty-state">
      <p>{{ currentLanguage === 'en' ? 'No other scan records found.' : 'لم يتم العثور على سجلات فحوصات أخرى.' }}</p>
    </div>

    <div v-else class="table-container">
      <table class="history-table">
        <thead>
          <tr>
            <th>{{ currentLanguage === 'en' ? 'Place' : 'المكان' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Type' : 'النوع' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Detail' : 'التفاصيل' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Date' : 'التاريخ' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Dosage' : 'الجرعة' }} (mSv)</th>
            <th>{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="scan in scans" :key="scan.id">
            <td>{{ scan.scanPlace || 'N/A' }}</td>
            <td>{{ scan.scanType || 'N/A' }}</td>
            <td>{{ scan.scanDetail || 'N/A' }}</td>
            <td>{{ formatDate(scan.date) }}</td>
            <td>{{ scan.dosage ?? 'N/A' }}</td>
            <td>
              <div class="action-buttons">
                <button @click="$emit('edit', scan)" class="action-button-icon edit-button" :title="currentLanguage === 'en' ? 'Edit' : 'تعديل'">
                  <font-awesome-icon icon="edit" />
                </button>
                <button @click="$emit('delete', scan)" class="action-button-icon delete-button" :title="currentLanguage === 'en' ? 'Delete' : 'حذف'">
                  <font-awesome-icon icon="trash-alt" />
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
.history-table-wrapper {
  width: 100%;
}

/* ✅ UPDATED: Styles for loading and empty states now match HistoryTable.vue */
.loading-state,
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 3rem;
  color: #6c757d;
  font-size: 1.1em;
}

.table-container {
  overflow-x: auto;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  text-align: start;
}

.history-table th,
.history-table td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
}

.history-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}

.action-buttons {
  display: flex;
  gap: 0.75rem;
}

.action-button-icon {
  background: none;
  border: none;
  color: #8d99ae;
  font-size: 1.2em;
  cursor: pointer;
}
.action-button-icon.edit-button:hover {
  color: #f0ad4e;
}
.action-button-icon.delete-button:hover {
  color: #d9534f;
}
</style>
