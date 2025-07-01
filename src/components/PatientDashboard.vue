<!-- PatientDashboard.vue -->
<script setup>
import { ref, computed, inject } from 'vue'; // Import inject

// Inject the globally provided language state
const currentLanguage = inject('currentLanguage');

// Dummy patient data
const patientName = ref('Ahmed Al-Saud'); // Example patient name

// Dummy scan history data
const scanHistory = ref([
  {
    id: 1,
    type: 'Chest X-Ray',
    date: '2024-05-10',
    dose_mSv: 0.1,
    details: 'Routine check-up, single posterior-anterior view.',
    hospital: 'King Faisal Specialist Hospital',
    radiologist: 'Dr. Fatima Khan'
  },
  {
    id: 2,
    type: 'CT Abdomen',
    date: '2024-02-15',
    dose_mSv: 8.5,
    details: 'Investigating abdominal pain. Multiple slices taken.',
    hospital: 'Al-Noor Hospital',
    radiologist: 'Dr. Omar Abdullah'
  },
  {
    id: 3,
    type: 'Dental X-Ray',
    date: '2023-11-22',
    dose_mSv: 0.005,
    details: 'Periapical view of molar #30.',
    hospital: 'Elite Dental Clinic',
    radiologist: 'Dr. Sara Ali'
  },
  {
    id: 4,
    type: 'Spine X-Ray',
    date: '2023-09-01',
    dose_mSv: 0.3,
    details: 'Lumbar spine series for back pain evaluation.',
    hospital: 'National Medical Center',
    radiologist: 'Dr. Khaled Ibrahim'
  },
  {
    id: 5,
    type: 'CT Head',
    date: '2023-06-20',
    dose_mSv: 2.0,
    details: 'Follow-up for previous concussion. Non-contrast.',
    hospital: 'City General Hospital',
    radiologist: 'Dr. Amina Hassan'
  }
]);

// Calculate accumulated exposure
const accumulatedExposure = computed(() => {
  return scanHistory.value.reduce((sum, scan) => sum + scan.dose_mSv, 0);
});

// Determine exposure level and color
const exposureLevel = computed(() => {
  const total = accumulatedExposure.value;
  // These are arbitrary numbers for demonstration
  if (total < 5) return { status: 'Low', color: '#4CAF50' }; // Green
  if (total >= 5 && total < 10) return { status: 'Medium', color: '#FFEB3B' }; // Yellow
  return { status: 'High', color: '#F44336' }; // Red
});

// State for scan details modal
const showScanDetailsModal = ref(false);
const selectedScan = ref(null);

const openScanDetails = (scan) => {
  selectedScan.value = scan;
  showScanDetailsModal.value = true;
};

const closeScanDetails = () => {
  showScanDetailsModal.value = false;
  selectedScan.value = null;
};
</script>

<template>
  <div class="patient-dashboard-container">
    <!-- The global header is now in App.vue -->

    <header class="dashboard-local-header">
      <h2 class="patient-name" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        {{ currentLanguage === 'en' ? 'Welcome, ' : 'أهلاً بك، ' }} {{ patientName }}
      </h2>
      <div class="exposure-indicator" :style="{ backgroundColor: exposureLevel.color }">
        <span class="exposure-label">
          {{ currentLanguage === 'en' ? 'Accumulated Exposure:' : 'التعرض التراكمي:' }}
        </span>
        <span class="exposure-value">{{ accumulatedExposure.toFixed(2) }} mSv</span>
        <span class="exposure-status">
          ({{ currentLanguage === 'en' ? exposureLevel.status : (exposureLevel.status === 'Low' ? 'منخفض' : (exposureLevel.status === 'Medium' ? 'متوسط' : 'مرتفع')) }})
        </span>
      </div>
    </header>

    <main class="dashboard-content">
      <section class="scan-history-section card">
        <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Scan History' : 'سجل الفحوصات' }}
        </h3>
        <p v-if="scanHistory.length === 0" class="no-scans-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'No scan history available.' : 'لا يوجد سجل فحوصات متاح.' }}
        </p>
        <div v-else class="table-container">
          <table>
            <thead>
              <tr>
                <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Date' : 'التاريخ' }}</th>
                <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Scan Type' : 'نوع الفحص' }}</th>
                <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Dose (mSv)' : 'الجرعة (mSv)' }}</th>
                <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Hospital' : 'المستشفى' }}</th>
                <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="scan in scanHistory" :key="scan.id">
                <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ scan.date }}</td>
                <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{ currentLanguage === 'en' ? scan.type : (scan.type === 'Chest X-Ray' ? 'أشعة سينية على الصدر' : (scan.type === 'CT Abdomen' ? 'أشعة مقطعية على البطن' : (scan.type === 'Dental X-Ray' ? 'أشعة أسنان' : (scan.type === 'Spine X-Ray' ? 'أشعة سينية على العمود الفقري' : (scan.type === 'CT Head' ? 'أشعة مقطعية على الرأس' : scan.type))))) }}
                </td>
                <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ scan.dose_mSv.toFixed(3) }}</td>
                <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ scan.hospital }}</td>
                <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  <button @click="openScanDetails(scan)" class="details-button">
                    {{ currentLanguage === 'en' ? 'View Details' : 'عرض التفاصيل' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Transition name="modal-fade">
        <div v-if="showScanDetailsModal" class="modal-overlay" @click.self="closeScanDetails">
          <div class="modal-content">
            <button class="close-modal-button" @click="closeScanDetails">&times;</button>
            <h3 class="modal-title" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Scan Details (ID: ' : 'تفاصيل الفحص (المعرف: ' }} {{ selectedScan?.id }})
            </h3>
            <div v-if="selectedScan" class="scan-details-grid" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              <div class="detail-item"><strong>{{ currentLanguage === 'en' ? 'Scan Type:' : 'نوع الفحص:' }}</strong> <span>
                {{ currentLanguage === 'en' ? selectedScan.type : (selectedScan.type === 'Chest X-Ray' ? 'أشعة سينية على الصدر' : (selectedScan.type === 'CT Abdomen' ? 'أشعة مقطعية على البطن' : (selectedScan.type === 'Dental X-Ray' ? 'أشعة أسنان' : (selectedScan.type === 'Spine X-Ray' ? 'أشعة سينية على العمود الفقري' : (selectedScan.type === 'CT Head' ? 'أشعة مقطعية على الرأس' : selectedScan.type))))) }}
              </span></div>
              <div class="detail-item"><strong>{{ currentLanguage === 'en' ? 'Date:' : 'التاريخ:' }}</strong> <span>{{ selectedScan.date }}</span></div>
              <div class="detail-item"><strong>{{ currentLanguage === 'en' ? 'Dose:' : 'الجرعة:' }}</strong> <span>{{ selectedScan.dose_mSv.toFixed(3) }} mSv</span></div>
              <div class="detail-item"><strong>{{ currentLanguage === 'en' ? 'Hospital:' : 'المستشفى:' }}</strong> <span>{{ selectedScan.hospital }}</span></div>
              <div class="detail-item"><strong>{{ currentLanguage === 'en' ? 'Radiologist:' : 'أخصائي الأشعة:' }}</strong> <span>{{ selectedScan.radiologist }}</span></div>
              <div class="detail-item full-width"><strong>{{ currentLanguage === 'en' ? 'Details:' : 'التفاصيل:' }}</strong> <p>{{ selectedScan.details }}</p></div>
            </div>
            <p v-else :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'No scan selected.' : 'لم يتم اختيار فحص.' }}
            </p>
          </div>
        </div>
      </Transition>
    </main>
  </div>
</template>

<style scoped>
.patient-dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust height to account for global header */
  width: 100%;
  background-color: #f8f9fa; /* Light background for the main content area */
}

.dashboard-local-header {
  /* This header is specific to the dashboard, below the global App.vue header */
  background-color: #8D99AE; /* Using the accent color for dashboard header */
  padding: 20px 40px;
  display: flex;
  justify-content: space-between; /* Space out items */
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-height: 70px;
  flex-wrap: wrap; /* Allow wrapping on small screens */
  gap: 15px; /* Space between elements on wrap */
  color: white; /* Text color for this header */
}

.patient-name {
  color: white; /* White text for contrast */
  font-size: 2.2em;
  font-weight: 700;
  margin: 0; /* Remove default margin */
}

.exposure-indicator {
  padding: 10px 20px;
  border-radius: 8px;
  color: #333; /* Dark text for contrast on colored background */
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

.exposure-label {
  font-size: 0.9em; /* Slightly smaller label */
}

.exposure-value {
  font-size: 1.1em; /* More prominent value */
}

.exposure-status {
  font-style: italic;
  font-size: 0.85em;
}

.dashboard-content {
  flex-grow: 1;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align content to the top */
  width: 100%;
}

.card {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px; /* Max width for content card */
  width: 100%;
  border: 1px solid #eee;
}

.scan-history-section h3 {
  color: #8D99AE;
  font-size: 2em;
  margin-bottom: 25px;
  text-align: center;
}

.no-scans-message {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 30px;
}

.table-container {
  overflow-x: auto; /* Enable horizontal scrolling for tables on small screens */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #8D99AE; /* Accent color for table header */
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}

tr:nth-child(even) {
  background-color: #f9f9f9; /* Zebra striping for readability */
}

tr:hover {
  background-color: #f0f0f0; /* Hover effect */
}

.details-button {
  background-color: #8D99AE;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #6a7483;
}

/* Modal Styles (reused/adapted from SignupView) */
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
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  max-width: 600px; /* Adjust max-width for scan details */
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: fadeInScale 0.4s ease-out forwards;
}

.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em;
  cursor: pointer;
  color: #8D99AE;
  transition: color 0.3s ease, transform 0.2s ease;
}

.close-modal-button:hover {
  color: #555;
  transform: rotate(90deg);
}

.modal-title {
  text-align: center;
  color: #8D99AE;
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: 700;
}

.scan-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 15px 25px; /* Row and column gap */
}

.detail-item {
  display: flex;
  flex-direction: column; /* Stack label and value */
  margin-bottom: 10px;
}

.detail-item strong {
  color: #555;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.detail-item span, .detail-item p {
  color: #333;
  font-size: 1.05em;
  line-height: 1.5;
}

.detail-item p {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
}

.full-width {
  grid-column: 1 / -1; /* Span across all columns */
}

/* Animations (reused from SignupView) */
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.modal-fade-enter-from .modal-content {
  transform: scale(0.95);
  opacity: 0;
}
.modal-fade-leave-to .modal-content {
  transform: scale(0.95);
  opacity: 0;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .dashboard-local-header {
    flex-direction: column;
    align-items: flex-start; /* Align content to left on small screens */
    padding: 15px 20px;
  }

  .patient-name {
    font-size: 1.8em;
    text-align: left;
    width: 100%; /* Take full width */
    order: 1; /* Place below exposure indicator */
  }

  .exposure-indicator {
    font-size: 1em;
    padding: 8px 15px;
    width: 100%; /* Take full width */
    justify-content: center; /* Center content within indicator */
    order: 2; /* Place above patient name */
  }

  .dashboard-content {
    padding: 20px;
  }

  .card {
    padding: 25px;
  }

  .scan-history-section h3 {
    font-size: 1.8em;
  }

  th, td {
    padding: 10px;
    font-size: 0.9em;
  }

  .details-button {
    padding: 6px 10px;
    font-size: 0.8em;
  }

  .modal-content {
    padding: 25px;
  }

  .modal-title {
    font-size: 1.8em;
  }

  .scan-details-grid {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
}

@media (max-width: 480px) {
  .dashboard-local-header {
    padding: 10px 15px;
  }

  .patient-name {
    font-size: 1.5em;
  }

  .exposure-indicator {
    font-size: 0.9em;
  }

  .card {
    padding: 15px;
  }

  .scan-history-section h3 {
    font-size: 1.5em;
  }
}
</style>
