<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { inject } from 'vue'

const props = defineProps({
  scans: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isPersonalView: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['edit', 'delete'])

const currentLanguage = inject('currentLanguage')

// Helper function to format Firestore Timestamps into a readable date string
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) {
    return 'N/A'
  }
  return timestamp.toDate().toLocaleDateString()
}
</script>

<template>
  <div class="history-table-wrapper" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
    <div v-if="isLoading" class="loading-state">
      <font-awesome-icon icon="spinner" spin />
      <span>{{ currentLanguage === 'en' ? 'Loading history...' : 'جاري تحميل السجل...' }}</span>
    </div>

    <div v-else-if="!scans || scans.length === 0" class="empty-state">
      <p>
        {{
          currentLanguage === 'en' ? 'No scan records found.' : 'لم يتم العثور على سجلات فحوصات.'
        }}
      </p>
    </div>

    <div v-else class="table-container">
      <table class="history-table">
        <thead>
          <tr>
            <th>{{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}</th>

            <!-- ✅ ADDED: Place of Scan Header -->
            <th class="details-column">
              {{ currentLanguage === 'en' ? 'Place of Scan' : 'مكان الفحص' }}
            </th>

            <th class="details-column">
              {{ currentLanguage === 'en' ? 'Scan Protocol' : 'بروتوكول الفحص' }}
            </th>
            <th>{{ currentLanguage === 'en' ? 'Date' : 'التاريخ' }}</th>
            <th>{{ currentLanguage === 'en' ? 'Patient Dose' : 'جرعة المريض' }} (mSv)</th>
            <th class="details-column">
              {{ currentLanguage === 'en' ? 'Reason for Scan' : 'سبب الفحص' }}
            </th>
            <th class="details-column">
              {{ currentLanguage === 'en' ? 'Additional Notes' : 'ملاحظات إضافية' }}
            </th>
            <th>{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="scan in scans" :key="scan.id">
            <td>{{ scan.scanType || 'N/A' }}</td>

            <!-- ✅ ADDED: Place of Scan Data -->
            <td class="details-column">{{ scan.scanPlace || 'N/A' }}</td>

            <td class="details-column">{{ scan.scanDetail || 'N/A' }}</td>
            <td>{{ formatDate(scan.scanDate) }}</td>
            <td>{{ scan.patientDose ?? 'N/A' }}</td>
            <td class="details-column">{{ scan.reason || 'N/A' }}</td>
            <td class="details-column">{{ scan.notes || 'N/A' }}</td>
            <td>
              <div class="action-buttons">
                <button
                  @click="$emit('edit', scan)"
                  class="action-button-icon edit-button"
                  :title="currentLanguage === 'en' ? 'Edit' : 'تعديل'"
                >
                  <font-awesome-icon icon="edit" />
                </button>
                <button
                  @click="$emit('delete', scan)"
                  class="action-button-icon delete-button"
                  :title="currentLanguage === 'en' ? 'Delete' : 'حذف'"
                >
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
  white-space: nowrap;
}
.history-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
  font-size: 0.9em;
  text-transform: uppercase;
}
.history-table tbody tr:last-child td {
  border-bottom: none;
}
.history-table tbody tr:hover {
  background-color: #f1f3f5;
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
  transition: color 0.2s ease;
}
.action-button-icon.edit-button:hover {
  color: #f0ad4e;
}
.action-button-icon.delete-button:hover {
  color: #d9534f;
}

.details-column {
  white-space: normal;
  min-width: 150px;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* On smaller screens, hide the less critical details columns */
@media (max-width: 1200px) {
  .details-column {
    display: none;
  }
}
</style>
