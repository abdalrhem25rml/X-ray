<!-- views/PatientListView.vue -->
<script setup>
import { ref, inject, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, query, orderBy, where } from 'firebase/firestore';

const router = useRouter();
const currentLanguage = inject('currentLanguage');
const db = inject('db'); // Inject Firestore instance
const auth = inject('auth'); // Inject Auth instance
const isAuthReady = inject('isAuthReady'); // Reactive auth readiness state
const currentUserId = inject('currentUserId'); // Inject reactive userId

// Access VITE_APP_ID directly from environment variables for Firestore path construction
const VITE_APP_ID = import.meta.env.VITE_APP_ID;

const patients = ref([]);
const isLoadingPatients = ref(false);
const showMessage = ref(false);
const messageType = ref('');
const message = ref('');

// State for Add Patient Modal
const showAddPatientModal = ref(false);
const newPatientName = ref('');
const newPatientAge = ref('');
const newPatientGender = ref('');
const newPatientMedicalHistory = ref('');
const newPatientAllergies = ref('');
const newPatientPreviousRadiationExposure = ref('');
const isAddingPatient = ref(false);

// State for Patient Details/Edit/Delete Modals
const selectedPatient = ref(null); // Patient currently selected for details/edit/delete
const showPatientDetailsModal = ref(false); // Controls patient details modal visibility
const showEditPatientModal = ref(false); // Controls edit patient modal visibility
const showDeletePatientConfirmation = ref(false); // Controls delete patient confirmation modal
const editedPatient = ref(null); // Copy of patient data for editing

// State for Recommendation History
const recommendationHistory = ref([]); // History for the selected patient
let unsubscribeRecommendations = null; // To store the unsubscribe function for real-time history listener

// State for Individual Recommendation Details/Edit/Delete Modals
const selectedRecommendation = ref(null); // Recommendation currently selected for details/edit/delete
const showRecommendationDetailsModal = ref(false); // Controls individual recommendation details modal
const showEditRecommendationModal = ref(false); // Controls edit recommendation modal
const showDeleteRecommendationConfirmation = ref(false); // Controls delete recommendation confirmation modal
const editedRecommendation = ref(null); // Copy of recommendation data for editing

// Declare authReadyWatcher as a ref to ensure it's always initialized
const authReadyWatcher = ref(null);

// Utility function to display messages
const displayMessage = (type, text) => {
  messageType.value = type;
  message.value = text;
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 5000); // Message disappears after 5 seconds
};

// Function to reset the add patient form fields
const resetAddPatientForm = () => {
  newPatientName.value = '';
  newPatientAge.value = '';
  newPatientGender.value = '';
  newPatientMedicalHistory.value = '';
  newPatientAllergies.value = '';
  newPatientPreviousRadiationExposure.value = '';
};

// --- Patient Management Functions ---

// Fetch patients from Firestore in real-time
const fetchPatients = () => {
  if (!db || !currentUserId.value) {
    console.warn("Firestore or User ID not ready for fetching patients.");
    isLoadingPatients.value = false;
    return;
  }

  isLoadingPatients.value = true;
  const patientsCollectionRef = collection(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/patients`);
  const q = query(patientsCollectionRef, orderBy('timestamp', 'desc')); // Order by creation date, latest first

  // onSnapshot provides real-time updates
  onSnapshot(q, (snapshot) => {
    const patientsList = [];
    snapshot.forEach((doc) => {
      patientsList.push({ id: doc.id, ...doc.data() });
    });
    patients.value = patientsList;
    isLoadingPatients.value = false;
  }, (error) => {
    console.error("Error fetching patients:", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to load patients.' : 'فشل تحميل قائمة المرضى.');
    isLoadingPatients.value = false;
  });
};

// Add a new patient to Firestore
const addPatient = async () => {
  displayMessage('', ''); // Clear previous messages
  if (!newPatientName.value || !newPatientAge.value || !newPatientGender.value || !newPatientMedicalHistory.value) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Please fill in all required fields.' : 'الرجاء ملء جميع الحقول المطلوبة.');
    return;
  }

  if (!isAuthReady.value || !currentUserId.value) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Authentication not ready. Please wait and try again.' : 'المصادقة غير جاهزة. يرجى الانتظار والمحاولة مرة أخرى.');
    console.error("Firestore operation attempted before authentication was ready.");
    return;
  }

  isAddingPatient.value = true;
  try {
    const patientData = {
      name: newPatientName.value,
      age: parseInt(newPatientAge.value),
      gender: newPatientGender.value,
      medicalHistory: newPatientMedicalHistory.value.split(',').map(item => item.trim()).filter(item => item),
      allergies: newPatientAllergies.value.split(',').map(item => item.trim()).filter(item => item),
      previousRadiationExposure: newPatientPreviousRadiationExposure.value.split(',').map(item => item.trim()).filter(item => item),
      timestamp: new Date()
    };
    const patientCollectionRef = collection(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/patients`);
    await addDoc(patientCollectionRef, patientData);
    displayMessage('success', currentLanguage.value === 'en' ? 'Patient added successfully!' : 'تمت إضافة المريض بنجاح!');
    showAddPatientModal.value = false;
    resetAddPatientForm();
  } catch (error) {
    console.error("Error adding patient: ", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to add patient.' : 'فشل إضافة المريض.');
  } finally {
    isAddingPatient.value = false;
  }
};

// Open Patient Details Modal
const openPatientDetails = (patient) => {
  selectedPatient.value = patient;
  showPatientDetailsModal.value = true;
  fetchRecommendationHistory(patient.id); // Fetch history when details modal opens
};

// Close Patient Details Modal
const closePatientDetails = () => {
  showPatientDetailsModal.value = false;
  selectedPatient.value = null;
  if (unsubscribeRecommendations) {
    unsubscribeRecommendations(); // Unsubscribe from history when modal closes
  }
};

// Open Edit Patient Modal
const openEditPatientModal = (patient) => {
  selectedPatient.value = patient;
  // Create a deep copy for editing to avoid direct mutation
  editedPatient.value = {
    ...patient,
    medicalHistory: patient.medicalHistory ? patient.medicalHistory.join(', ') : '',
    allergies: patient.allergies ? patient.allergies.join(', ') : '',
    previousRadiationExposure: patient.previousRadiationExposure ? patient.previousRadiationExposure.join(', ') : ''
  };
  showEditPatientModal.value = true;
};

// Update Patient
const updatePatient = async () => {
  displayMessage('', ''); // Clear previous messages
  if (!editedPatient.value.name || !editedPatient.value.age || !editedPatient.value.gender) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Please fill in all required fields.' : 'الرجاء ملء جميع الحقول المطلوبة.');
    return;
  }

  if (!isAuthReady.value || !currentUserId.value || !editedPatient.value.id) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Authentication or patient ID not ready.' : 'المصادقة أو معرف المريض غير جاهز.');
    console.error("Firestore update attempted before authentication was ready or without patient ID.");
    return;
  }

  isLoadingPatients.value = true; // Use this for general loading feedback
  try {
    const patientDocRef = doc(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/patients`, editedPatient.value.id);
    await updateDoc(patientDocRef, {
      name: editedPatient.value.name,
      age: parseInt(editedPatient.value.age),
      gender: editedPatient.value.gender,
      medicalHistory: editedPatient.value.medicalHistory.split(',').map(item => item.trim()).filter(item => item),
      allergies: editedPatient.value.allergies.split(',').map(item => item.trim()).filter(item => item),
      previousRadiationExposure: editedPatient.value.previousRadiationExposure.split(',').map(item => item.trim()).filter(item => item),
      // Do NOT update timestamp here unless you want to change the order
    });
    displayMessage('success', currentLanguage.value === 'en' ? 'Patient updated successfully!' : 'تم تحديث بيانات المريض بنجاح!');
    showEditPatientModal.value = false;
    selectedPatient.value = null; // Clear selected patient after update
  } catch (error) {
    console.error("Error updating patient: ", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to update patient.' : 'فشل تحديث بيانات المريض.');
  } finally {
    isLoadingPatients.value = false;
  }
};

// Open Delete Patient Confirmation Modal
const confirmDeletePatient = (patient) => {
  selectedPatient.value = patient;
  showDeletePatientConfirmation.value = true;
};

// Delete Patient
const deletePatient = async () => {
  displayMessage('', ''); // Clear previous messages
  if (!isAuthReady.value || !currentUserId.value || !selectedPatient.value?.id) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Authentication or patient ID not ready for deletion.' : 'المصادقة أو معرف المريض غير جاهز للحذف.');
    console.error("Firestore delete attempted before authentication was ready or without patient ID.");
    return;
  }

  isLoadingPatients.value = true;
  try {
    const patientDocRef = doc(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/patients`, selectedPatient.value.id);
    await deleteDoc(patientDocRef);
    displayMessage('success', currentLanguage.value === 'en' ? 'Patient deleted successfully!' : 'تم حذف المريض بنجاح!');
    showDeletePatientConfirmation.value = false;
    selectedPatient.value = null; // Clear selected patient after deletion
  } catch (error) {
    console.error("Error deleting patient: ", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to delete patient.' : 'فشل حذف المريض.');
  } finally {
    isLoadingPatients.value = false;
  }
};

// --- Recommendation History Functions ---

// Fetch recommendation history for a specific patient in real-time
const fetchRecommendationHistory = (patientIdToFetch) => {
  // Unsubscribe from previous listener if active
  if (unsubscribeRecommendations) {
    unsubscribeRecommendations();
  }

  if (!db || !currentUserId.value || !patientIdToFetch) {
    recommendationHistory.value = [];
    return;
  }

  const recommendationsCollectionRef = collection(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/recommendationHistory`);
  const q = query(
    recommendationsCollectionRef,
    where('patientId', '==', patientIdToFetch), // Filter by patientId
    orderBy('timestamp', 'desc') // Order by latest first
  );

  unsubscribeRecommendations = onSnapshot(q, (snapshot) => {
    const historyList = [];
    snapshot.forEach((doc) => {
      historyList.push({ id: doc.id, ...doc.data() });
    });
    recommendationHistory.value = historyList;
    console.log("Fetched recommendation history:", recommendationHistory.value);
  }, (error) => {
    console.error("Error fetching recommendation history:", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to load recommendation history.' : 'فشل تحميل سجل التوصيات.');
    recommendationHistory.value = [];
  });
};

// Open Individual Recommendation Details Modal
const openRecommendationDetails = (recommendation) => {
  selectedRecommendation.value = recommendation;
  showRecommendationDetailsModal.value = true;
};

// Close Individual Recommendation Details Modal
const closeRecommendationDetails = () => {
  showRecommendationDetailsModal.value = false;
  selectedRecommendation.value = null;
};

// Open Edit Recommendation Modal
const openEditRecommendationModal = (recommendation) => {
  selectedRecommendation.value = recommendation;
  // Create a deep copy for editing
  editedRecommendation.value = { ...recommendation };
  showEditRecommendationModal.value = true;
};

// Update Recommendation
const updateRecommendation = async () => {
  displayMessage('', ''); // Clear previous messages
  if (!editedRecommendation.value.recommendation || !editedRecommendation.value.scanType) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Recommendation text and scan type cannot be empty.' : 'لا يمكن أن يكون نص التوصية ونوع الفحص فارغين.');
    return;
  }

  if (!isAuthReady.value || !currentUserId.value || !editedRecommendation.value.id) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Authentication or recommendation ID not ready.' : 'المصادقة أو معرف التوصية غير جاهز.');
    console.error("Firestore update attempted before authentication was ready or without recommendation ID.");
    return;
  }

  isLoadingPatients.value = true; // Use this for general loading feedback
  try {
    const recommendationDocRef = doc(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/recommendationHistory`, editedRecommendation.value.id);
    await updateDoc(recommendationDocRef, {
      recommendation: editedRecommendation.value.recommendation,
      scanType: editedRecommendation.value.scanType,
      doseValue: editedRecommendation.value.doseValue,
      reason: editedRecommendation.value.reason,
      // You might also update factorDetails and calculatedMsv if they are editable
      factorDetails: editedRecommendation.value.factorDetails,
      calculatedMsv: editedRecommendation.value.calculatedMsv,
      // Do NOT update timestamp here unless you want to change the order
    });
    displayMessage('success', currentLanguage.value === 'en' ? 'Recommendation updated successfully!' : 'تم تحديث التوصية بنجاح!');
    showEditRecommendationModal.value = false;
    selectedRecommendation.value = null;
  } catch (error) {
    console.error("Error updating recommendation: ", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to update recommendation.' : 'فشل تحديث التوصية.');
  } finally {
    isLoadingPatients.value = false;
  }
};

// Open Delete Recommendation Confirmation Modal
const confirmDeleteRecommendation = (recommendation) => {
  selectedRecommendation.value = recommendation;
  showDeleteRecommendationConfirmation.value = true;
};

// Delete Recommendation
const deleteRecommendation = async () => {
  displayMessage('', ''); // Clear previous messages
  if (!isAuthReady.value || !currentUserId.value || !selectedRecommendation.value?.id) {
    displayMessage('error', currentLanguage.value === 'en' ? 'Authentication or recommendation ID not ready for deletion.' : 'المصادقة أو معرف التوصية غير جاهز للحذف.');
    console.error("Firestore delete attempted before authentication was ready or without recommendation ID.");
    return;
  }

  isLoadingPatients.value = true;
  try {
    const recommendationDocRef = doc(db, `artifacts/${VITE_APP_ID}/users/${currentUserId.value}/recommendationHistory`, selectedRecommendation.value.id);
    await deleteDoc(recommendationDocRef);
    displayMessage('success', currentLanguage.value === 'en' ? 'Recommendation deleted successfully!' : 'تم حذف التوصية بنجاح!');
    showDeleteRecommendationConfirmation.value = false;
    selectedRecommendation.value = null;
  } catch (error) {
    console.error("Error deleting recommendation: ", error);
    displayMessage('error', currentLanguage.value === 'en' ? 'Failed to delete recommendation.' : 'فشل حذف التوصية.');
  } finally {
    isLoadingPatients.value = false;
  }
};

// Function to convert basic Markdown to HTML (reused from RecommendView)
const markdownToHtml = (markdown) => {
  if (!markdown) return '';

  let html = markdown;

  // Convert headings (e.g., ## Heading)
  html = html.replace(/^###\s*(.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s*(.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s*(.*)$/gm, '<h1>$1</h1>');

  // Convert bold: **text** or __text__ to <strong>text</strong>
  html = html.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '<strong>$1$2</strong>');
  // Convert italics: *text* or _text_ to <em>text</em>
  html = html.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)|(?<!_)_(?!_)(.*?)(?<!_)_(?!_)/g, '<em>$1$2</em>');

  // Convert ordered lists (1. Item)
  html = html.replace(/^(\d+\.\s.*)$/gm, '<li>$1</li>');
  // Convert unordered lists (- Item or * Item)
  html = html.replace(/^[*-]\s*(.*)$/gm, '<li>$1</li>');

  // Wrap list items in ul/ol tags if they exist
  const lines = html.split('\n'); // Split by actual newlines for markdown parsing
  let inList = false;
  let listType = '';
  let processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.match(/^\d+\.\s/) || line.match(/^[*-]\s/)) { // Check for list item start
      if (!inList) {
        listType = line.match(/^\d+\./) ? 'ol' : 'ul';
        processedLines.push(`<${listType}>`);
        inList = true;
      }
      processedLines.push(line);
    } else {
      if (inList) {
        processedLines.push(`</${listType}>`);
        inList = false;
      }
      processedLines.push(line);
    }
  }
  if (inList) { // Close last list if still open
    processedLines.push(`</${listType}>`);
  }
  html = processedLines.join('\n'); // Join with newlines for further processing

  // Convert remaining newlines to <br> (after list processing)
  html = html.replace(/\n/g, '<br>');

  return html;
};


// --- Navigation ---
const goToRecommendPage = (patientId) => {
  router.push({ name: 'recommend', params: { patientId: patientId } });
};

const goToDashboard = () => {
  router.push('/dashboard');
};

// --- Lifecycle Hooks ---
onMounted(() => {
  // Assign the watcher's unsubscribe function to the ref
  authReadyWatcher.value = watch(isAuthReady, (ready) => {
    if (ready && currentUserId.value) {
      fetchPatients();
      // No need to unsubscribe here, as onUnmounted will handle it if the component is destroyed.
      // If you want it to run only once, you can call authReadyWatcher.value() here.
      // However, for fetching patients, you usually want it to be reactive.
    }
  }, { immediate: true }); // Run immediately to catch initial state
});

onUnmounted(() => {
  // Safely call the unsubscribe function if it exists
  if (authReadyWatcher.value) {
    authReadyWatcher.value();
  }
  // Clean up Firestore history listener as well
  if (unsubscribeRecommendations) {
    unsubscribeRecommendations();
  }
});
</script>

<template>
  <div class="patient-list-page">
    <main class="patient-list-main-content">
      <section class="patient-list-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Patient Management' : 'إدارة المرضى' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Add new patients or view existing records.' : 'أضف مرضى جدد أو اطلع على السجلات الحالية.' }}
        </p>

        <!-- Button to open the Add Patient Modal -->
        <button
          @click="showAddPatientModal = true; resetAddPatientForm();"
          class="action-button primary add-new-patient-button"
          :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
        >
          {{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}
        </button>

        <div v-if="showMessage" :class="['message', messageType]" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ message }}
        </div>

        <!-- Patient List -->
        <div class="patient-list-section mt-8">
          <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            {{ currentLanguage === 'en' ? 'Existing Patients' : 'المرضى الحاليون' }}
          </h3>
          <div v-if="isLoadingPatients" class="loading-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
<font-awesome-icon icon="spinner" spin />
            {{ currentLanguage === 'en' ? 'Loading patients...' : 'جاري تحميل المرضى...' }}
          </div>
          <div v-else-if="patients.length === 0" class="no-patients-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            {{ currentLanguage === 'en' ? 'No patients added yet.' : 'لم يتم إضافة أي مرضى بعد.' }}
          </div>
          <div v-else class="patient-table-container">
            <table class="patient-table">
              <thead>
                <tr>
                  <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}</th>
                  <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Age' : 'العمر' }}</th>
                  <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</th>
                  <th :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? 'Actions' : 'الإجراءات' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="patient in patients" :key="patient.id">
                  <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ patient.name }}</td>
                  <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ patient.age }}</td>
                  <td :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">{{ currentLanguage === 'en' ? patient.gender : (patient.gender === 'male' ? 'ذكر' : (patient.gender === 'female' ? 'أنثى' : 'آخر')) }}</td>
                  <td>
                    <button @click="openPatientDetails(patient)" class="action-button-sm view-button" aria-label="View patient details">
    <font-awesome-icon icon="eye" />
                    </button>
                    <button @click="openEditPatientModal(patient)" class="action-button-sm edit-button" aria-label="Edit patient">
<font-awesome-icon icon="edit" />
                    </button>
                    <button @click="confirmDeletePatient(patient)" class="action-button-sm delete-button" aria-label="Delete patient">
<font-awesome-icon icon="trash-alt" />
                    </button>
                    <button @click="goToRecommendPage(patient.id)" class="action-button-sm recommend-button" aria-label="Generate new recommendation">
<font-awesome-icon icon="file-medical" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p class="switch-link-container mt-8" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <a href="#" @click.prevent="goToDashboard">
            {{ currentLanguage === 'en' ? 'Back to Dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </p>
      </section>
    </main>

    <!-- Add Patient Modal -->
    <Transition name="modal-fade">
      <div v-if="showAddPatientModal" class="modal-overlay" @click.self="showAddPatientModal = false; resetAddPatientForm();">
        <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <button class="close-modal-button" @click="showAddPatientModal = false; resetAddPatientForm();">&times;</button>
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}
          </h3>
          <form @submit.prevent="addPatient" class="patient-form">
            <div class="form-group">
              <label for="modalNewPatientName" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}
              </label>
              <input type="text" id="modalNewPatientName" v-model="newPatientName" required />
            </div>
            <div class="form-group">
              <label for="modalNewPatientAge" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Age' : 'العمر' }}
              </label>
              <input type="number" id="modalNewPatientAge" v-model="newPatientAge" required min="0" />
            </div>
            <div class="form-group">
              <label for="modalNewPatientGender" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              </label>
              <select id="modalNewPatientGender" v-model="newPatientGender" required>
                <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Gender' : 'اختر الجنس' }}</option>
                <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
                <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
                <option value="other">{{ currentLanguage === 'en' ? 'Other' : 'آخر' }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="modalNewPatientMedicalHistory" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي (مفصولة بفاصلة)' }}
              </label>
              <textarea id="modalNewPatientMedicalHistory" v-model="newPatientMedicalHistory" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="modalNewPatientAllergies" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)' }}
              </label>
              <textarea id="modalNewPatientAllergies" v-model="newPatientAllergies" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="modalNewPatientPreviousRadiationExposure" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Previous Radiation Exposure (comma-separated)' : 'التعرض السابق للإشعاع (مفصولة بفاصلة)' }}
              </label>
              <textarea id="modalNewPatientPreviousRadiationExposure" v-model="newPatientPreviousRadiationExposure" rows="2"></textarea>
            </div>

            <button type="submit" class="action-button primary" :disabled="isAddingPatient">
              <span v-if="isAddingPatient">
<font-awesome-icon icon="spinner" spin />
                {{ currentLanguage === 'en' ? 'Adding Patient...' : 'جاري إضافة المريض...' }}
              </span>
              <span v-else>
                {{ currentLanguage === 'en' ? 'Add Patient' : 'إضافة مريض' }}
              </span>
            </button>
            <button type="button" @click="showAddPatientModal = false; resetAddPatientForm();" class="action-button secondary mt-2">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Patient Details Modal (Includes Recommendation History) -->
    <Transition name="modal-fade">
      <div v-if="showPatientDetailsModal && selectedPatient" class="modal-overlay" @click.self="closePatientDetails">
        <div class="modal-content patient-details-modal" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <button class="close-modal-button" @click="closePatientDetails">&times;</button>
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Patient Details:' : 'تفاصيل المريض:' }} {{ selectedPatient.name }}
          </h3>
          <div class="patient-details-grid">
            <p><strong>{{ currentLanguage === 'en' ? 'Name:' : 'الاسم:' }}</strong> {{ selectedPatient.name }}</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Age:' : 'العمر:' }}</strong> {{ selectedPatient.age }}</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Gender:' : 'الجنس:' }}</strong> {{ currentLanguage === 'en' ? selectedPatient.gender : (selectedPatient.gender === 'male' ? 'ذكر' : (selectedPatient.gender === 'female' ? 'أنثى' : 'آخر')) }}</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Added On:' : 'تاريخ الإضافة:' }}</strong> {{ selectedPatient.timestamp?.toDate().toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'ar-SA') || 'N/A' }}</p>
            <p class="full-width"><strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ الطبي:' }}</strong> {{ selectedPatient.medicalHistory?.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}</p>
            <p class="full-width"><strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'الحساسية:' }}</strong> {{ selectedPatient.allergies?.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}</p>
            <p class="full-width"><strong>{{ currentLanguage === 'en' ? 'Previous Radiation Exposure:' : 'التعرض السابق للإشعاع:' }}</strong> {{ selectedPatient.previousRadiationExposure?.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}</p>
          </div>

          <div class="recommendation-history-section">
            <h4 class="history-title">
              {{ currentLanguage === 'en' ? 'Recommendation History' : 'سجل التوصيات' }}
            </h4>
            <button @click="goToRecommendPage(selectedPatient.id)" class="action-button primary generate-new-recommendation-button">
<font-awesome-icon icon="plus" />
              {{ currentLanguage === 'en' ? 'Generate New Recommendation' : 'إنشاء توصية جديدة' }}
            </button>

            <div v-if="recommendationHistory.length === 0" class="no-history-message">
              {{ currentLanguage === 'en' ? 'No recommendations found for this patient yet.' : 'لم يتم العثور على توصيات لهذا المريض بعد.' }}
            </div>
            <div v-else class="recommendation-list">
              <div v-for="rec in recommendationHistory" :key="rec.id" class="recommendation-item">
                <p class="recommendation-date">
                  <strong>{{ currentLanguage === 'en' ? 'Date:' : 'التاريخ:' }}</strong>
                  {{ rec.timestamp?.toDate().toLocaleString(currentLanguage === 'en' ? 'en-US' : 'ar-SA') || 'N/A' }}
                </p>
                <p><strong>{{ currentLanguage === 'en' ? 'Scan Type:' : 'نوع الفحص:' }}</strong> {{ rec.scanType || 'N/A' }}</p>
                <p><strong>{{ currentLanguage === 'en' ? 'Dose Value:' : 'قيمة الجرعة:' }}</strong> {{ rec.doseValue !== undefined ? rec.doseValue + ' mSv' : 'N/A' }}</p>
                <p><strong>{{ currentLanguage === 'en' ? 'Reason:' : 'السبب:' }}</strong> {{ rec.reason || 'N/A' }}</p>
                <div class="recommendation-actions">
                  <button @click="openRecommendationDetails(rec)" class="action-button-sm view-button">
                    <i class="fas fa-eye"></i> <!-- View Icon -->
                  </button>
                  <button @click="openEditRecommendationModal(rec)" class="action-button-sm edit-button">
                    <i class="fas fa-edit"></i> <!-- Edit Icon -->
                  </button>
                  <button @click="confirmDeleteRecommendation(rec)" class="action-button-sm delete-button">
                    <i class="fas fa-trash-alt"></i> <!-- Delete Icon -->
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Edit Patient Modal -->
    <Transition name="modal-fade">
      <div v-if="showEditPatientModal && editedPatient" class="modal-overlay" @click.self="showEditPatientModal = false">
        <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <button class="close-modal-button" @click="showEditPatientModal = false">&times;</button>
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Edit Patient' : 'تعديل بيانات المريض' }}
          </h3>
          <form @submit.prevent="updatePatient" class="patient-form">
            <div class="form-group">
              <label for="editPatientName" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}
              </label>
              <input type="text" id="editPatientName" v-model="editedPatient.name" required />
            </div>
            <div class="form-group">
              <label for="editPatientAge" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Age' : 'العمر' }}
              </label>
              <input type="number" id="editPatientAge" v-model="editedPatient.age" required min="0" />
            </div>
            <div class="form-group">
              <label for="editPatientGender" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
              </label>
              <select id="editPatientGender" v-model="editedPatient.gender" required>
                <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
                <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
                <option value="other">{{ currentLanguage === 'en' ? 'Other' : 'آخر' }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="editPatientMedicalHistory" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي (مفصولة بفاصلة)' }}
              </label>
              <textarea id="editPatientMedicalHistory" v-model="editedPatient.medicalHistory" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="editPatientAllergies" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)' }}
              </label>
              <textarea id="editPatientAllergies" v-model="editedPatient.allergies" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="editPatientPreviousRadiationExposure" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Previous Radiation Exposure (comma-separated)' : 'التعرض السابق للإشعاع (مفصولة بفاصلة)' }}
              </label>
              <textarea id="editPatientPreviousRadiationExposure" v-model="editedPatient.previousRadiationExposure" rows="2"></textarea>
            </div>

            <button type="submit" class="action-button primary" :disabled="isLoadingPatients">
              <span v-if="isLoadingPatients">
<font-awesome-icon icon="spinner" spin />
                {{ currentLanguage === 'en' ? 'Updating...' : 'جاري التحديث...' }}
              </span>
              <span v-else>
                {{ currentLanguage === 'en' ? 'Update Patient' : 'تحديث المريض' }}
              </span>
            </button>
            <button type="button" @click="showEditPatientModal = false" class="action-button secondary mt-2">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Delete Patient Confirmation Modal -->
    <Transition name="modal-fade">
      <div v-if="showDeletePatientConfirmation && selectedPatient" class="modal-overlay" @click.self="showDeletePatientConfirmation = false">
        <div class="modal-content delete-confirm-modal" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Confirm Delete Patient' : 'تأكيد حذف المريض' }}
          </h3>
          <p>
            {{ currentLanguage === 'en' ? 'Are you sure you want to delete patient' : 'هل أنت متأكد أنك تريد حذف المريض' }}
            <strong>{{ selectedPatient.name }}</strong>?
            {{ currentLanguage === 'en' ? 'This action cannot be undone.' : 'لا يمكن التراجع عن هذا الإجراء.' }}
          </p>
          <div class="modal-actions">
            <button @click="deletePatient" class="action-button delete-button-confirm" :disabled="isLoadingPatients">
              <span v-if="isLoadingPatients">
<font-awesome-icon icon="spinner" spin />
                {{ currentLanguage === 'en' ? 'Deleting...' : 'جاري الحذف...' }}
              </span>
              <span v-else>
                {{ currentLanguage === 'en' ? 'Delete' : 'حذف' }}
              </span>
            </button>
            <button type="button" @click="showDeletePatientConfirmation = false" class="action-button secondary">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Individual Recommendation Details Modal -->
    <Transition name="modal-fade">
      <div v-if="showRecommendationDetailsModal && selectedRecommendation" class="modal-overlay" @click.self="closeRecommendationDetails">
        <div class="modal-content recommendation-details-modal" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <button class="close-modal-button" @click="closeRecommendationDetails">&times;</button>
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Recommendation Details' : 'تفاصيل التوصية' }}
          </h3>
          <div class="details-grid">
            <p><strong>{{ currentLanguage === 'en' ? 'Patient Name:' : 'اسم المريض:' }}</strong> {{ selectedRecommendation.patientName || 'N/A' }}</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Scan Type:' : 'نوع الفحص:' }}</strong> {{ selectedRecommendation.scanType || 'N/A' }}</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Dose Value:' : 'قيمة الجرعة:' }}</strong> {{ selectedRecommendation.doseValue !== undefined ? selectedRecommendation.doseValue + ' mSv' : 'N/A' }}</p>
            <p><strong>{{ currentLanguage === 'en' ? 'Reason:' : 'السبب:' }}</strong> {{ selectedRecommendation.reason || 'N/A' }}</p>
            <p class="full-width"><strong>{{ currentLanguage === 'en' ? 'Date:' : 'التاريخ:' }}</strong> {{ selectedRecommendation.timestamp?.toDate().toLocaleString(currentLanguage === 'en' ? 'en-US' : 'ar-SA') || 'N/A' }}</p>

            <div v-if="selectedRecommendation.factorDetails" class="factor-details full-width">
              <h4>{{ currentLanguage === 'en' ? 'Predicted Scan Factors:' : 'عوامل الفحص المتوقعة:' }}</h4>
              <p>
                <strong>{{ currentLanguage === 'en' ? 'Tube Voltage:' : 'جهد الأنبوب:' }}</strong> {{ selectedRecommendation.factorDetails.tubeVoltageKv || 'N/A' }} kV<br/>
                <strong>{{ currentLanguage === 'en' ? 'Tube Current:' : 'تيار الأنبوب:' }}</strong> {{ selectedRecommendation.factorDetails.tubeCurrentMa || 'N/A' }} mA<br/>
                <strong>{{ currentLanguage === 'en' ? 'Exposure Time:' : 'وقت التعرض:' }}</strong> {{ selectedRecommendation.factorDetails.exposureTimeMs || 'N/A' }} ms
              </p>
            </div>

            <div v-if="selectedRecommendation.calculatedMsv !== null" class="msv-details full-width">
              <h4>{{ currentLanguage === 'en' ? 'Calculated Effective Dose:' : 'الجرعة الفعالة المحسوبة:' }}</h4>
              <p>
                {{ currentLanguage === 'en' ? 'Approximate Effective Dose:' : 'الجرعة الفعالة التقريبية:' }}
                <strong>{{ selectedRecommendation.calculatedMsv }} mSv</strong>
              </p>
            </div>

            <div class="recommendation-text-output full-width">
              <p><strong>{{ currentLanguage === 'en' ? 'Recommendation:' : 'التوصية:' }}</strong></p>
              <div v-html="markdownToHtml(selectedRecommendation.recommendation)"></div>
            </div>
          </div>
          <button type="button" @click="closeRecommendationDetails" class="action-button primary mt-4">
            {{ currentLanguage === 'en' ? 'Close' : 'إغلاق' }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- Edit Recommendation Modal -->
    <Transition name="modal-fade">
      <div v-if="showEditRecommendationModal && editedRecommendation" class="modal-overlay" @click.self="showEditRecommendationModal = false">
        <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <button class="close-modal-button" @click="showEditRecommendationModal = false">&times;</button>
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Edit Recommendation' : 'تعديل التوصية' }}
          </h3>
          <form @submit.prevent="updateRecommendation" class="patient-form">
            <div class="form-group">
              <label for="editRecScanType" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Scan Type:' : 'نوع الفحص:' }}
              </label>
              <input type="text" id="editRecScanType" v-model="editedRecommendation.scanType" required />
            </div>
            <div class="form-group">
              <label for="editRecDoseValue" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Dose Value (mSv):' : 'قيمة الجرعة (ملي سيفرت):' }}
              </label>
              <input type="number" id="editRecDoseValue" v-model.number="editedRecommendation.doseValue" step="0.001" />
            </div>
            <div class="form-group">
              <label for="editRecReason" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Reason:' : 'السبب:' }}
              </label>
              <textarea id="editRecReason" v-model="editedRecommendation.reason" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="editRecText" :class="{'text-right w-full': currentLanguage === 'ar'}">
                {{ currentLanguage === 'en' ? 'Recommendation Text:' : 'نص التوصية:' }}
              </label>
              <textarea id="editRecText" v-model="editedRecommendation.recommendation" rows="5" required></textarea>
            </div>
            <button type="submit" class="action-button primary" :disabled="isLoadingPatients">
              <span v-if="isLoadingPatients">
<font-awesome-icon icon="spinner" spin />
                {{ currentLanguage === 'en' ? 'Updating...' : 'جاري التحديث...' }}
              </span>
              <span v-else>
                {{ currentLanguage === 'en' ? 'Update Recommendation' : 'تحديث التوصية' }}
              </span>
            </button>
            <button type="button" @click="showEditRecommendationModal = false" class="action-button secondary mt-2">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Delete Recommendation Confirmation Modal -->
    <Transition name="modal-fade">
      <div v-if="showDeleteRecommendationConfirmation && selectedRecommendation" class="modal-overlay" @click.self="showDeleteRecommendationConfirmation = false">
        <div class="modal-content delete-confirm-modal" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <h3 class="modal-title">
            {{ currentLanguage === 'en' ? 'Confirm Delete Recommendation' : 'تأكيد حذف التوصية' }}
          </h3>
          <p>
            {{ currentLanguage === 'en' ? 'Are you sure you want to delete this recommendation for patient' : 'هل أنت متأكد أنك تريد حذف هذه التوصية للمريض' }}
            <strong>{{ selectedRecommendation.patientName }}</strong>?
            {{ currentLanguage === 'en' ? 'This action cannot be undone.' : 'لا يمكن التراجع عن هذا الإجراء.' }}
          </p>
          <div class="modal-actions">
            <button @click="deleteRecommendation" class="action-button delete-button-confirm" :disabled="isLoadingPatients">
              <span v-if="isLoadingPatients">
<font-awesome-icon icon="spinner" spin />
                {{ currentLanguage === 'en' ? 'Deleting...' : 'جاري الحذف...' }}
              </span>
              <span v-else>
                {{ currentLanguage === 'en' ? 'Delete' : 'حذف' }}
              </span>
            </button>
            <button type="button" @click="showDeleteRecommendationConfirmation = false" class="action-button secondary">
              {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.patient-list-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
}

.patient-list-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to top */
  padding: 30px;
  background-color: #f8f9fa;
}

.patient-list-card {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 1000px; /* Wider card for table */
  width: 100%;
  border: 1px solid #eee;
  margin-top: 30px; /* Give some space from the header */
}

.patient-list-card h2 {
  color: #8D99AE;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.patient-list-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.add-new-patient-button {
  margin-bottom: 30px;
  background-color: #8D99AE;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.add-new-patient-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.add-new-patient-button i {
  margin-right: 8px;
}

.message {
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
  animation: fadeIn 0.5s ease-out;
}

.error-message {
  background-color: #ffe0e0;
  color: #d32f2f;
  border: 1px solid #d32f2f;
}

.success-message {
  background-color: #e6ffe6;
  color: #388e3c;
  border: 1px solid #388e3c;
}

.loading-message, .no-patients-message {
  text-align: center;
  font-size: 1.2em;
  color: #8D99AE;
  margin-top: 50px;
}

.loading-message i {
  margin-right: 10px;
}

.patient-list-section h3 {
  color: #8D99AE;
  font-size: 1.6em;
  margin-bottom: 25px;
  font-weight: 600;
}

.patient-table-container {
  overflow-x: auto; /* Allows table to scroll horizontally on small screens */
  width: 100%;
  margin-top: 30px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.patient-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.patient-table th,
.patient-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.patient-table th {
  background-color: #8D99AE;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}

.patient-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.patient-table tbody tr:hover {
  background-color: #f0f0f0;
}

.action-button-sm {
  background-color: #8D99AE;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  margin: 0 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.action-button-sm:hover {
  transform: translateY(-1px);
}

.action-button-sm.view-button { background-color: #5bc0de; } /* Info blue */
.action-button-sm.view-button:hover { background-color: #31b0d5; }

.action-button-sm.edit-button { background-color: #f0ad4e; } /* Warning yellow */
.action-button-sm.edit-button:hover { background-color: #ec971f; }

.action-button-sm.delete-button { background-color: #d9534f; } /* Danger red */
.action-button-sm.delete-button:hover { background-color: #c9302c; }

.action-button-sm.recommend-button { background-color: #28a745; } /* Success green */
.action-button-sm.recommend-button:hover { background-color: #218838; }


/* Modal Styles */
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
  max-width: 600px;
  width: 100%;
  position: relative;
  animation: fadeInScale 0.4s ease-out forwards;
}

.modal-content.delete-confirm-modal {
  max-width: 450px;
  text-align: center;
}

.modal-content.patient-details-modal,
.modal-content.recommendation-details-modal {
  max-width: 800px; /* Wider for details and history */
  max-height: 90vh; /* Allow scrolling for long history */
  overflow-y: auto;
  text-align: left;
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
  color: #8D99AE;
  margin-bottom: 25px;
  font-size: 1.8em;
  font-weight: 700;
  text-align: center;
}

.patient-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left; /* Align form elements to the left */
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  color: #333;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #8D99AE;
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.3);
  outline: none;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.action-button {
  background-color: #8D99AE;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.action-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  box-shadow: none;
}

.action-button.secondary {
  background-color: #6c757d;
}

.action-button.secondary:hover {
  background-color: #5a6268;
}

.delete-button-confirm {
  background-color: #d9534f;
}

.delete-button-confirm:hover {
  background-color: #c9302c;
}

.switch-link-container {
  margin-top: 25px;
  font-size: 0.95em;
  color: #666;
}

.switch-link-container a {
  color: #8D99AE;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.switch-link-container a:hover {
  color: #5a6473;
  text-decoration: underline;
}

/* Patient Details Modal Specific Styles */
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
  font-size: 1em;
}

.patient-details-grid strong {
  color: #6a7483;
}

.patient-details-grid .full-width {
  grid-column: 1 / -1; /* Span across all columns */
}

.recommendation-history-section {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 25px;
}

.history-title {
  color: #8D99AE;
  font-size: 1.6em;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
}

.generate-new-recommendation-button {
  display: block;
  margin: 0 auto 25px auto; /* Center button and add space below */
  background-color: #28a745; /* Green for new recommendation */
}

.generate-new-recommendation-button:hover {
  background-color: #218838;
}

.no-history-message {
  color: #777;
  font-size: 1em;
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
  position: relative; /* For action buttons positioning */
}

.recommendation-item p {
  margin-bottom: 8px;
  color: #495057;
  font-size: 0.95em;
  line-height: 1.6;
}

.recommendation-item strong {
  color: #6a7483;
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

/* Individual Recommendation Details Modal specific styles */
.recommendation-details-modal .details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fefefe;
}

.recommendation-details-modal .details-grid .full-width {
  grid-column: 1 / -1;
}

.recommendation-details-modal .details-grid h4 {
  color: #6a7483;
  font-size: 1.2em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 600;
  text-align: left;
}

.recommendation-details-modal .recommendation-text-output {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #cfd8e3;
}

.recommendation-details-modal .recommendation-text-output p {
  white-space: pre-wrap; /* Preserve formatting from AI response */
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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
  .patient-list-main-content {
    padding: 15px;
  }
  .patient-list-card {
    padding: 25px;
  }
  .patient-list-card h2 {
    font-size: 1.8em;
  }
  .add-new-patient-button {
    padding: 10px 20px;
    font-size: 0.95em;
  }
  .patient-table th,
  .patient-table td {
    padding: 10px;
    font-size: 0.9em;
  }
  .action-button-sm {
    padding: 6px 10px;
    font-size: 0.8em;
    margin: 0 2px;
  }
  .modal-content {
    padding: 25px;
    width: 95%;
  }
  .modal-title {
    font-size: 1.6em;
  }
  .patient-details-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .recommendation-history-section h4 {
    font-size: 1.4em;
  }
  .recommendation-item {
    padding: 15px;
  }
  .recommendation-item p {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .patient-list-card {
    padding: 15px;
  }
  .patient-list-card h2 {
    font-size: 1.6em;
  }
  .action-button {
    padding: 10px 20px;
    font-size: 0.9em;
  }
  .modal-content {
    padding: 15px;
  }
  .modal-title {
    font-size: 1.4em;
  }
  .recommendation-actions {
    flex-direction: column;
    align-items: flex-end;
  }
  .action-button-sm {
    width: auto;
    margin: 4px 0;
  }
}
</style>
