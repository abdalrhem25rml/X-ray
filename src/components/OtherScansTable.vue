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
  // Using toLocaleDateString is good for internationalization
  return timestamp.toDate().toLocaleDateString(currentLanguage.value === 'ar' ? 'ar-EG' : 'en-US')
}
</script>

<template>
  <div class="history-table-wrapper" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <div v-if="isLoading" class="loading-state">
      <!-- You can put a loading spinner component here -->
      <p>Loading...</p>
    </div>
    <div v-else-if="!scans || scans.length === 0" class="empty-state">
      <p>{{ currentLanguage === 'en' ? 'No other scan records found.' : 'لم يتم العثور على سجلات فحوصات أخرى.' }}</p>
    </div>
    <div v-else class="table-container">
      <table class="history-table">
        <thead>
          <!-- ✅ UPDATED: Table headers now reflect the new detailed data structure -->
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
          <!-- ✅ UPDATED: Table cells now display the new fields from the scan object -->
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
/* Styles remain unchanged as they are robust */
.history-table-wrapper { width: 100%; }
.table-container { overflow-x: auto; border: 1px solid #e9ecef; border-radius: 8px; }
.history-table { width: 100%; border-collapse: collapse; text-align: start; }
.history-table th, .history-table td { padding: 1rem; border-bottom: 1px solid #e9ecef; vertical-align: middle; }
.history-table th { background-color: #f8f9fa; font-weight: 600; text-transform: uppercase; font-size: 0.9em; }
.action-buttons { display: flex; gap: 0.75rem; }
.action-button-icon { background: none; border: none; color: #8d99ae; font-size: 1.2em; cursor: pointer; }
.empty-state, .loading-state { text-align: center; padding: 2rem; color: #6c757d; }
</style>
