<script setup>
import { inject } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// This component receives the full patient object to display.
defineProps({
  show: Boolean,
  patient: Object,
})

// It tells the parent what action the user took.
const emit = defineEmits([
  'close',
  'generateNewRecommendation',
  'viewRecommendation',
  'deleteRecommendation',
])

const currentLanguage = inject('currentLanguage')

// Helper function to format dates nicely.
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return 'N/A'
  return new Date(timestamp.toDate()).toLocaleDateString('en-UK')
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div v-if="patient" class="modal-content patient-details-modal">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h3 class="modal-title">
          {{ currentLanguage === 'en' ? 'Patient Details' : 'تفاصيل المريض' }}
        </h3>

        <!-- Patient Info Grid -->
        <div class="patient-details-grid">
          <p>
            <strong>{{ currentLanguage === 'en' ? 'Name:' : 'الاسم:' }}</strong> {{ patient.name }}
          </p>
          <p>
            <strong>{{ currentLanguage === 'en' ? 'Age:' : 'العمر:' }}</strong> {{ patient.age }}
          </p>
          <p>
            <strong>{{ currentLanguage === 'en' ? 'Gender:' : 'الجنس:' }}</strong>
            {{ patient.gender }}
          </p>
          <p class="full-width">
            <strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ الطبي:' }}</strong>
            {{ patient.medicalHistory?.join(', ') || 'N/A' }}
          </p>
          <p class="full-width">
            <strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'الحساسية:' }}</strong>
            {{ patient.allergies?.join(', ') || 'N/A' }}
          </p>
        </div>

        <!-- Recommendation History Section -->
        <div class="recommendation-history-section">
          <h4 class="history-title">
            {{ currentLanguage === 'en' ? 'Scan History' : 'سجل الفحوصات' }}
          </h4>
          <button
            @click="$emit('generateNewRecommendation', patient.id)"
            class="action-button generate-new-recommendation-button"
          >
            {{ currentLanguage === 'en' ? 'Get New Recommendation' : 'الحصول على توصية جديدة' }}
          </button>

          <div
            v-if="!patient.recommendations || patient.recommendations.length === 0"
            class="no-history-message"
          >
            {{ currentLanguage === 'en' ? 'No scan history found.' : 'لا يوجد سجل فحوصات.' }}
          </div>
          <div v-else class="recommendation-list">
            <div v-for="rec in patient.recommendations" :key="rec.id" class="recommendation-item">
              <p class="recommendation-date">
                <strong>{{ currentLanguage === 'en' ? 'Date:' : 'التاريخ:' }}</strong>
                {{ formatDate(rec.timestamp) }}
              </p>
              <p>
                <strong>{{ currentLanguage === 'en' ? 'Scan Type:' : 'نوع الفحص:' }}</strong>
                {{ rec.scanType }}
              </p>
              <p>
                <strong>{{ currentLanguage === 'en' ? 'Calculated Dose:' : 'الجرعة:' }}</strong>
                {{ rec.calculatedMsv }} mSv
              </p>
              <div class="recommendation-actions">
                <button
                  @click="$emit('viewRecommendation', rec)"
                  class="action-button-sm view-button"
                >
                  <font-awesome-icon icon="eye" /> {{ currentLanguage === 'en' ? 'View' : 'عرض' }}
                </button>
                <button
                  @click="$emit('deleteRecommendation', { patientId: patient.id, recId: rec.id })"
                  class="action-button-sm delete-button"
                >
                  <font-awesome-icon icon="trash-alt" />
                  {{ currentLanguage === 'en' ? 'Delete' : 'حذف' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* All styles for the patient details modal and its contents */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}
.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  position: relative;
}
.patient-details-modal {
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em;
  cursor: pointer;
  color: #8d99ae;
  transition: all 0.2s ease;
}
.close-modal-button:hover {
  color: #555;
  transform: rotate(90deg);
}
.modal-title {
  color: #8d99ae;
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 700;
  text-align: center;
}
.patient-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fefefe;
}
.patient-details-grid p {
  margin: 0;
  color: #333;
}
.patient-details-grid strong {
  color: #6a7483;
}
.patient-details-grid .full-width {
  grid-column: 1 / -1;
}
.recommendation-history-section {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 25px;
}
.history-title {
  color: #8d99ae;
  font-size: 1.6em;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}
.action-button {
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
}
.generate-new-recommendation-button {
  display: block;
  margin: 0 auto 25px auto;
  background-color: #28a745;
  color: white;
}
.generate-new-recommendation-button:hover {
  background-color: #218838;
}
.no-history-message {
  color: #777;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
.recommendation-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.recommendation-item {
  background-color: #eef2f6;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.recommendation-item p {
  margin-bottom: 8px;
  color: #495057;
}
.recommendation-date {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 15px;
  border-bottom: 1px dashed #cfd8e3;
  padding-bottom: 5px;
}
.recommendation-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
}
.action-button-sm {
  background: none;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  gap: 5px;
}
.action-button-sm.view-button {
  color: #5bc0de;
}
.action-button-sm.delete-button {
  color: #d9534f;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
