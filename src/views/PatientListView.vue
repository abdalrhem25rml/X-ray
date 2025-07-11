<!-- views/PatientListView.vue -->
<script setup>
import { ref, inject, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

const router = useRouter();
const currentLanguage = inject('currentLanguage');
const db = inject('db');
const auth = inject('auth');
const isAuthReady = inject('isAuthReady'); // Reactive auth readiness state
const currentUserId = inject('currentUserId'); // Inject reactive userId

const patients = ref([]);
// Form fields for the modal (for adding new patient)
const newPatientName = ref('');
const newPatientAge = ref('');
const newPatientGender = ref('');
const newPatientMedicalHistory = ref(''); // Comma-separated string
const newPatientAllergies = ref(''); // Comma-separated string
const newPatientPreviousRadiationExposure = ref(''); // Comma-separated string

const isLoadingPatients = ref(false);
const isAddingPatient = ref(false);
const addPatientErrorMessage = ref(''); // Specific for add patient form
const addPatientSuccessMessage = ref(''); // Specific for add patient form
const showAddPatientModal = ref(false); // Controls add patient modal visibility

// State for Recommendation Modal
const showRecommendationModal = ref(false);
const selectedPatientForRecommendation = ref(null);
const patientRecommendationResult = ref('');
const isGeneratingRecommendation = ref(false);
const recommendationErrorMessage = ref(''); // Specific for recommendation generation

// New reactive states for predicted factors and calculated mSv in recommendation modal
const predictedFactorDetails = ref(null); // To store extracted factors from Gemini
const calculatedMsv = ref(null); // To store the calculated mSv from Gemini

// Get the API key from environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

// Function to convert basic Markdown to HTML
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
  const lines = html.split('<br>'); // Split by <br> which was previously added for newlines
  let inList = false;
  let listType = '';
  let processedLines = [];

  // Corrected for loop condition
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.startsWith('<li>')) {
      if (!inList) {
        // Determine list type (very basic, assumes consistent list type)
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
  html = processedLines.join('');

  // Convert remaining newlines to <br> (after list processing)
  html = html.replace(/\n/g, '<br>');

  return html;
};

// Function to extract factors and mSv from Gemini's text response
const extractFactorsAndMsv = (text) => {
  const extracted = {};
  // Regex to handle both English and Arabic labels and units.
  // Now specifically looking for optional square brackets around the numbers.
  // (\d+(?:\.\d+)?) captures the number (integer or float) in group 1.
  const exposureTimeMatch = text.match(/(?:Exposure Time|وقت التعرض):\s*\[?(\d+(?:\.\d+)?)\]?\s*(?:ms|ملي ثانية)/i);
  const tubeCurrentMatch = text.match(/(?:Tube Current|تيار الأنبوب):\s*\[?(\d+(?:\.\d+)?)\]?\s*(?:mA|ملي أمبير)/i);
  const tubeVoltageMatch = text.match(/(?:Tube Voltage|جهد الأنبوب):\s*\[?(\d+(?:\.\d+)?)\]?\s*(?:kV|كيلو فولت)/i);
  const msvMatch = text.match(/(?:Calculated mSv|الجرعة المحسوبة بالملي سيفرت \(mSv\)):\s*\[?(\d+(?:\.\d+)?)\]?\s*(?:mSv|ملي سيفرت)/i);


  if (exposureTimeMatch) extracted.exposureTimeMs = parseFloat(exposureTimeMatch[1]);
  if (tubeCurrentMatch) extracted.tubeCurrentMa = parseFloat(tubeCurrentMatch[1]);
  if (tubeVoltageMatch) extracted.tubeVoltageKv = parseFloat(tubeVoltageMatch[1]);
  if (msvMatch) extracted.calculatedMsv = parseFloat(msvMatch[1]);

  console.log("Extracted Factors and mSv:", extracted); // Debugging log
  return extracted;
};


// Function to fetch patients from Firestore
const fetchPatients = async () => {
  if (!isAuthReady.value || !currentUserId.value) {
    console.warn("Auth not ready or userId not available for fetching patients.");
    return;
  }

  isLoadingPatients.value = true;
  addPatientErrorMessage.value = ''; // Clear general error messages
  try {
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const patientCollectionRef = collection(db, `artifacts/${appId}/users/${currentUserId.value}/patients`);

    const q = query(patientCollectionRef, orderBy('timestamp', 'desc'));

    const querySnapshot = await getDocs(q);
    patients.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("Fetched patients:", patients.value);
  } catch (error) {
    console.error("Error fetching patients: ", error);
    addPatientErrorMessage.value = currentLanguage.value === 'en' ? 'Failed to load patients.' : 'فشل تحميل بيانات المرضى.';
  } finally {
    isLoadingPatients.value = false;
  }
};

// Function to reset the add patient form fields
const resetForm = () => {
  newPatientName.value = '';
  newPatientAge.value = '';
  newPatientGender.value = '';
  newPatientMedicalHistory.value = '';
  newPatientAllergies.value = '';
  newPatientPreviousRadiationExposure.value = '';
  addPatientErrorMessage.value = ''; // Clear error message when resetting form
};

// Function to add a new patient to Firestore
const addPatient = async () => {
  addPatientErrorMessage.value = '';
  addPatientSuccessMessage.value = '';

  if (!newPatientName.value || !newPatientAge.value || !newPatientGender.value || !newPatientMedicalHistory.value) {
    addPatientErrorMessage.value = currentLanguage.value === 'en' ? 'Please fill in all required fields.' : 'الرجاء ملء جميع الحقول المطلوبة.';
    return;
  }

  if (!isAuthReady.value || !currentUserId.value) {
    addPatientErrorMessage.value = currentLanguage.value === 'en'
      ? 'Authentication not ready. Please wait and try again.'
      : 'المصادقة غير جاهزة. يرجى الانتظار والمحاولة مرة أخرى.';
    console.error("Firestore operation attempted before authentication was ready.");
    return;
  }

  isAddingPatient.value = true;
  try {
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const patientCollectionRef = collection(db, `artifacts/${appId}/users/${currentUserId.value}/patients`);

    const patientData = {
      name: newPatientName.value,
      age: parseInt(newPatientAge.value),
      gender: newPatientGender.value,
      medicalHistory: newPatientMedicalHistory.value.split(',').map(item => item.trim()).filter(item => item),
      allergies: newPatientAllergies.value.split(',').map(item => item.trim()).filter(item => item),
      previousRadiationExposure: newPatientPreviousRadiationExposure.value.split(',').map(item => item.trim()).filter(item => item),
      timestamp: new Date() // Add timestamp for ordering
    };

    await addDoc(patientCollectionRef, patientData);
    addPatientSuccessMessage.value = currentLanguage.value === 'en' ? 'Patient added successfully!' : 'تمت إضافة المريض بنجاح!';

    resetForm(); // Clear form fields
    showAddPatientModal.value = false; // Close the modal
    fetchPatients(); // Refresh the list
  } catch (error) {
    console.error("Error adding patient: ", error);
    addPatientErrorMessage.value = currentLanguage.value === 'en' ? 'Failed to add patient.' : 'فشل إضافة المريض.';
  } finally {
    isAddingPatient.value = false;
  }
};

// Function to get recommendation for a specific patient
const getPatientRecommendation = async (patient) => {
  selectedPatientForRecommendation.value = patient;
  showRecommendationModal.value = true;
  patientRecommendationResult.value = ''; // Clear previous recommendation
  recommendationErrorMessage.value = ''; // Clear previous error
  predictedFactorDetails.value = null; // Clear previous factors
  calculatedMsv.value = null; // Clear previous mSv
  isGeneratingRecommendation.value = true;

  if (!GEMINI_API_KEY) {
    recommendationErrorMessage.value = currentLanguage.value === 'en'
      ? 'Gemini API key is not configured. Please set VITE_GEMINI_KEY in your .env file.'
      : 'لم يتم تكوين مفتاح API الخاص بـ Gemini. يرجى تعيين VITE_GEMINI_KEY في ملف .env الخاص بك.';
    isGeneratingRecommendation.value = false;
    console.error('VITE_GEMINI_KEY is not defined.');
    return;
  }

  try {
    // Construct the prompt with patient information (excluding current symptoms as they are not stored)
    // EMPHASIS ADDED ON MEDICAL HISTORY AND PREVIOUS RADIATION EXPOSURE
    let prompt = currentLanguage.value === 'en'
      ? `Provide ONLY the predicted scan factors and the calculated mSv dosage first, in the EXACT format on a single line, then a separator "---", then the medical recommendation.
        Predicted Scan Factors: Exposure Time: [value] ms, Tube Current: [value] mA, Tube Voltage: [value] kV. Calculated mSv: [value] mSv (using formula: mSv = (Tube Voltage * Tube Current * Exposure Time_ms * 0.00000001)).
        ---
        Provide a concise medical recommendation regarding X-ray or CT scans for a patient based on the following historical details. It is crucial to consider the comprehensive medical history and any previous radiation exposure when making recommendations. Mention possible risks and important considerations.
        Patient Name: ${patient.name}
        - Age: ${patient.age} years
        - Gender: ${patient.gender}
        - Medical History: ${patient.medicalHistory.join(', ') || 'None'}
        - Allergies: ${patient.allergies.join(', ') || 'None'}
        - Previous Radiation Exposure History (Type, Date, and approximate Quantity in mSv if known): ${patient.previousRadiationExposure.join(', ') || 'Not specified'}

        Please provide a comprehensive, clear, and concise recommendation. Format the response using Markdown for readability (e.g., bold text, bullet points, headings). Ensure the response is entirely in English. Do NOT provide the mSv calculation formula in your response again after the factors line.`
      : `الرجاء تقديم عوامل الفحص المتوقعة والجرعة المحسوبة بالملي سيفرت أولاً فقط، بالصيغة الدقيقة على سطر واحد، ثم فاصل "---"، ثم التوصية الطبية.
        عوامل الفحص المتوقعة: وقت التعرض: [قيمة] ملي ثانية، تيار الأنبوب: [قيمة] ملي أمبير، جهد الأنبوب: [قيمة] كيلو فولت. الجرعة المحسوبة بالملي سيفرت (mSv): [قيمة] ملي سيفرت (باستخدام الصيغة: ملي سيفرت = (جهد الأنبوب * تيار الأنبوب * وقت التعرض بالملي ثانية * 0.00000001)).
        ---
        قدم توصية طبية موجزة بشأن فحوصات الأشعة السينية أو الأشعة المقطعية لمريض بناءً على التفاصيل التاريخية التالية. من الأهمية بمكان مراعاة التاريخ الطبي الشامل وأي تعرض سابق للإشعاع عند تقديم التوصيات. اذكر أيضًا المخاطر المحتملة والاعتبارات الهامة.
        اسم المريض: ${patient.name}
        - العمر: ${patient.age} سنة
        - الجنس: ${patient.gender === 'male' ? 'ذكر' : (patient.gender === 'female' ? 'أنثى' : 'آخر')}
        - التاريخ الطبي: ${patient.medicalHistory.join(', ') || 'لا يوجد'}
        - الحساسية: ${patient.allergies.join(', ') || 'لا يوجد'}
        - التعرض السابق للإشعاع (النوع، التاريخ، والكمية التقريبية بالملي سيفرت إن أمكن): ${patient.previousRadiationExposure.join(', ') || 'غير محدد'}

        الرجاء تقديم توصية شاملة وواضحة وموجزة. قم بتنسيق الاستجابة باستخدام Markdown لسهولة القراءة (على سبيل المثال، النص الغامق، النقاط النقطية، العناوين). تأكد من أن الرد باللغة العربية بالكامل. لا تقدم صيغة حساب الجرعة بالملي سيفرت في ردك مرة أخرى بعد سطر العوامل.`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
        topP: 0.9,
        topK: 40
      }
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log('Raw API Response:', response);

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('API Error Response Body:', errorBody);
      recommendationErrorMessage.value = currentLanguage.value === 'en'
        ? `API Error: ${response.status} - ${errorBody.error?.message || 'Unknown error'}`
        : `خطأ في واجهة برمجة التطبيقات: ${response.status} - ${errorBody.error?.message || 'خطأ غير معروف'}`;
      return;
    }

    const result = await response.json();
    console.log('Parsed API Result:', result);

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      const geminiText = result.candidates[0].content.parts[0].text;
      console.log("--- Gemini's raw text response (for debugging factors) ---");
      console.log(geminiText); // THIS IS THE CRUCIAL LOG FOR YOU TO COPY IF IT FAILS AGAIN
      console.log("----------------------------------------------------------");

      // Split the text to isolate the factors line
      const parts = geminiText.split('---');
      let factorsAndMsvLine = '';
      let recommendationMarkdown = geminiText; // Default to full text if split fails

      if (parts.length > 1) {
        factorsAndMsvLine = parts[0].trim();
        recommendationMarkdown = parts.slice(1).join('---').trim(); // Rejoin the rest for markdown
      } else {
        console.warn("Separator '---' not found in Gemini response. Attempting to parse factors from full text.");
        factorsAndMsvLine = geminiText; // Try to parse from full text as fallback
      }

      // Extract factors and mSv from the dedicated line
      const extracted = extractFactorsAndMsv(factorsAndMsvLine);
      predictedFactorDetails.value = { // Using new state variable
        exposureTimeMs: extracted.exposureTimeMs,
        tubeCurrentMa: extracted.tubeCurrentMa,
        tubeVoltageKv: extracted.tubeVoltageKv,
      };
      calculatedMsv.value = extracted.calculatedMsv; // Using new state variable

      // Use the markdownToHtml function to process the recommendation part
      patientRecommendationResult.value = markdownToHtml(recommendationMarkdown);
      console.log('Gemini recommendation (HTML):', patientRecommendationResult.value);
    } else {
      if (result.promptFeedback && result.promptFeedback.blockReason) {
        recommendationErrorMessage.value = currentLanguage.value === 'en'
          ? `Response blocked due to safety reasons: ${result.promptFeedback.blockReason}`
          : `تم حظر الاستجابة لأسباب تتعلق بالسلامة: ${result.promptFeedback.blockReason}`;
      } else {
        recommendationErrorMessage.value = currentLanguage.value === 'en' ? 'No valid recommendation from API or unexpected structure.' : 'لا توجد توصية صالحة من واجهة برمجة التطبيقات أو هيكل غير متوقع.';
      }
      console.error('Gemini API response structure:', result);
    }

  } catch (err) {
    console.error('Error generating recommendation:', err);
    recommendationErrorMessage.value = currentLanguage.value === 'en' ? `Recommendation failed: ${err.message}` : `فشل التوصية: ${err.message}`;
  } finally {
    isGeneratingRecommendation.value = false;
  }
};


// Fetch patients when the component is mounted and auth is ready
watch(isAuthReady, (ready) => {
  if (ready && currentUserId.value) {
    fetchPatients();
  }
}, { immediate: true });

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
          @click="showAddPatientModal = true; resetForm();"
          class="action-button primary add-new-patient-button"
          :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
        >
          {{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}
        </button>

        <div v-if="addPatientErrorMessage" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ addPatientErrorMessage }}
        </div>
        <div v-if="addPatientSuccessMessage" class="message success-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ addPatientSuccessMessage }}
        </div>

        <!-- Patient List -->
        <div class="patient-list-section mt-8">
          <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            {{ currentLanguage === 'en' ? 'Existing Patients' : 'المرضى الحاليون' }}
          </h3>
          <div v-if="isLoadingPatients" class="loading-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            {{ currentLanguage === 'en' ? 'Loading patients...' : 'جاري تحميل المرضى...' }}
          </div>
          <div v-else-if="patients.length === 0" class="no-patients-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            {{ currentLanguage === 'en' ? 'No patients added yet.' : 'لم يتم إضافة أي مرضى بعد.' }}
          </div>
          <ul v-else class="patient-list" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            <li v-for="patient in patients" :key="patient.id" class="patient-item">
              <div class="patient-details" :class="{'text-right': currentLanguage === 'ar'}">
                <strong>{{ currentLanguage === 'en' ? 'Name:' : 'الاسم:' }}</strong> {{ patient.name }}<br/>
                <strong>{{ currentLanguage === 'en' ? 'Age:' : 'العمر:' }}</strong> {{ patient.age }}<br/>
                <strong>{{ currentLanguage === 'en' ? 'Gender:' : 'الجنس:' }}</strong> {{ patient.gender }}<br/>
                <strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ الطبي:' }}</strong> {{ patient.medicalHistory.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}<br/>
                <strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'الحساسية:' }}</strong> {{ patient.allergies.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}<br/>
                <strong>{{ currentLanguage === 'en' ? 'Previous Radiation:' : 'الإشعاع السابق:' }}</strong> {{ patient.previousRadiationExposure.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}
              </div>
              <button
                @click="getPatientRecommendation(patient)"
                class="action-button small mt-3"
                :disabled="isGeneratingRecommendation && selectedPatientForRecommendation?.id === patient.id"
              >
                <span v-if="isGeneratingRecommendation && selectedPatientForRecommendation?.id === patient.id">
                  {{ currentLanguage === 'en' ? 'Generating...' : 'جاري الإنشاء...' }}
                </span>
                <span v-else>
                  {{ currentLanguage === 'en' ? 'Get Recommendation' : 'الحصول على توصية' }}
                </span>
              </button>
            </li>
          </ul>
        </div>

        <p class="switch-link-container mt-8" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <a href="#" @click.prevent="router.push('/dashboard')">
            {{ currentLanguage === 'en' ? 'Back to Dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </p>
      </section>
    </main>

    <!-- Add Patient Modal -->
    <div v-if="showAddPatientModal" class="modal-overlay" @click.self="showAddPatientModal = false; resetForm();">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <h3 class="modal-title">
          {{ currentLanguage === 'en' ? 'Add New Patient' : 'إضافة مريض جديد' }}
        </h3>
        <form @submit.prevent="addPatient" class="patient-form">
          <div class="form-group">
            <label for="modalPatientName" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Name' : 'الاسم' }}
            </label>
            <input type="text" id="modalPatientName" v-model="newPatientName" required :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" />
          </div>
          <div class="form-group">
            <label for="modalPatientAge" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Age' : 'العمر' }}
            </label>
            <input type="number" id="modalPatientAge" v-model="newPatientAge" required min="0" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" />
          </div>
          <div class="form-group">
            <label for="modalPatientGender" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
            </label>
            <select id="modalPatientGender" v-model="newPatientGender" required :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Gender' : 'اختر الجنس' }}</option>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
              <option value="other">{{ currentLanguage === 'en' ? 'Other' : 'آخر' }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="modalPatientMedicalHistory" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي (مفصولة بفاصلة)' }}
            </label>
            <textarea id="modalPatientMedicalHistory" v-model="newPatientMedicalHistory" rows="2" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"></textarea>
          </div>
          <div class="form-group">
            <label for="modalPatientAllergies" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)' }}
            </label>
            <textarea id="modalPatientAllergies" v-model="newPatientAllergies" rows="2" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"></textarea>
          </div>
          <div class="form-group">
            <label for="modalPatientPreviousRadiationExposure" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Previous Radiation Exposure (comma-separated)' : 'التعرض السابق للإشعاع (مفصولة بفاصلة)' }}
            </label>
            <textarea id="modalPatientPreviousRadiationExposure" v-model="newPatientPreviousRadiationExposure" rows="2" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"></textarea>
          </div>

          <div v-if="addPatientErrorMessage" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
            {{ addPatientErrorMessage }}
          </div>

          <button type="submit" class="action-button primary" :disabled="isAddingPatient">
            <span v-if="isAddingPatient">
              {{ currentLanguage === 'en' ? 'Adding Patient...' : 'جاري إضافة المريض...' }}
            </span>
            <span v-else>
              {{ currentLanguage === 'en' ? 'Add Patient' : 'إضافة مريض' }}
            </span>
          </button>
          <button type="button" @click="showAddPatientModal = false; resetForm();" class="action-button secondary mt-2">
            {{ currentLanguage === 'en' ? 'Cancel' : 'إلغاء' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Recommendation Modal -->
    <div v-if="showRecommendationModal" class="modal-overlay" @click.self="showRecommendationModal = false;">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <h3 class="modal-title">
          {{ currentLanguage === 'en' ? 'Recommendation for Patient' : 'توصية للمريض' }}
        </h3>
        <div v-if="selectedPatientForRecommendation" class="patient-details-summary">
          <strong>{{ currentLanguage === 'en' ? 'Name:' : 'الاسم:' }}</strong> {{ selectedPatientForRecommendation.name }}<br/>
          <strong>{{ currentLanguage === 'en' ? 'Age:' : 'العمر:' }}</strong> {{ selectedPatientForRecommendation.age }}<br/>
          <strong>{{ currentLanguage === 'en' ? 'Gender:' : 'الجنس:' }}</strong> {{ selectedPatientForRecommendation.gender }}<br/>
          <strong>{{ currentLanguage === 'en' ? 'Medical History:' : 'التاريخ الطبي:' }}</strong> {{ selectedPatientForRecommendation.medicalHistory.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}<br/>
          <strong>{{ currentLanguage === 'en' ? 'Allergies:' : 'الحساسية:' }}</strong> {{ selectedPatientForRecommendation.allergies.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}<br/>
          <strong>{{ currentLanguage === 'en' ? 'Previous Radiation:' : 'الإشعاع السابق:' }}</strong> {{ selectedPatientForRecommendation.previousRadiationExposure.join(', ') || (currentLanguage === 'en' ? 'N/A' : 'غير متوفر') }}
        </div>

        <div v-if="isGeneratingRecommendation" class="loading-message mt-4">
          {{ currentLanguage === 'en' ? 'Generating recommendation...' : 'جاري إنشاء التوصية...' }}
        </div>
        <div v-else-if="recommendationErrorMessage" class="message error-message mt-4">
          {{ recommendationErrorMessage }}
        </div>
        <div v-else-if="patientRecommendationResult" class="recommendation-display mt-4">
          <!-- Display Predicted Scan Factors -->
          <div v-if="predictedFactorDetails && predictedFactorDetails.tubeVoltageKv" class="factor-details mt-4">
            <h4>{{ currentLanguage === 'en' ? 'Predicted Scan Factors:' : 'عوامل الفحص المتوقعة:' }}</h4>
            <p>
              <strong>{{ currentLanguage === 'en' ? 'Tube Voltage:' : 'جهد الأنبوب:' }}</strong> {{ predictedFactorDetails.tubeVoltageKv }} kV<br/>
              <strong>{{ currentLanguage === 'en' ? 'Tube Current:' : 'تيار الأنبوب:' }}</strong> {{ predictedFactorDetails.tubeCurrentMa }} mA<br/>
              <strong>{{ currentLanguage === 'en' ? 'Exposure Time:' : 'وقت التعرض:' }}</strong> {{ predictedFactorDetails.exposureTimeMs }} ms
            </p>
          </div>

          <!-- Display Calculated Effective Dose -->
          <div v-if="calculatedMsv !== null" class="msv-details mt-4">
            <h4>{{ currentLanguage === 'en' ? 'Calculated Effective Dose:' : 'الجرعة الفعالة المحسوبة:' }}</h4>
            <p>
              {{ currentLanguage === 'en' ? 'Approximate Effective Dose:' : 'الجرعة الفعالة التقريبية:' }}
              <strong>{{ calculatedMsv }} mSv</strong>
            </p>
            <p v-if="parseFloat(calculatedMsv) > 5" class="text-red-600 font-semibold">
              {{ currentLanguage === 'en' ? 'Warning: This calculated dose is relatively high. Further medical consultation is strongly recommended.' : 'تحذير: هذه الجرعة المحسوبة مرتفعة نسبيًا. يوصى بشدة باستشارة طبية إضافية.' }}
            </p>
          </div>

          <div class="result-text" v-html="patientRecommendationResult"></div>
        </div>

        <button type="button" @click="showRecommendationModal = false;" class="action-button primary mt-4">
          {{ currentLanguage === 'en' ? 'Close' : 'إغلاق' }}
        </button>
      </div>
    </div>
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
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.patient-list-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px; /* Wider card for lists */
  width: 100%;
  border: 1px solid #eee;
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
}

.patient-list-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.patient-list-section h3 {
  color: #8D99AE;
  font-size: 1.6em;
  margin-bottom: 25px;
  font-weight: 600;
}

.patient-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left; /* Default LTR alignment */
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
  font-size: 0.95em;
}

.form-group label.text-right {
  text-align: right;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #8D99AE;
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2);
}

.action-button {
  background-color: #8D99AE;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 20px;
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.action-button:disabled {
  background-color: #b0b0b0;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.action-button.secondary {
  background-color: #6c757d;
}

.action-button.secondary:hover {
  background-color: #5a6268;
}

.action-button.small {
  padding: 8px 15px;
  font-size: 0.9em;
  width: auto; /* Allow button to size based on content */
  align-self: flex-start; /* Align to start within flex container */
  margin-top: 15px;
}

.message {
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.95em;
  font-weight: 500;
  text-align: center;
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
  color: #666;
  font-style: italic;
  margin-top: 20px;
}

.patient-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

/* RTL adjustments for list items */
.patient-list[dir="rtl"] {
  text-align: right; /* Align the list content to the right */
}

.patient-item {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack details and button */
  align-items: flex-start; /* Align items to the start (left for LTR, right for RTL) */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.patient-item[dir="rtl"] {
  align-items: flex-end; /* Align items to the end (right for RTL) */
}

.patient-item .patient-details {
  width: 100%; /* Ensure details take full width */
  text-align: left; /* Default for LTR */
}

.patient-item .patient-details.text-right {
  text-align: right; /* Specific for RTL content within list item */
}

.patient-item strong {
  color: #8D99AE;
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
  position: relative;
  text-align: center;
}

.modal-title {
  color: #8D99AE;
  font-size: 1.8em;
  font-weight: 700;
  margin-bottom: 25px;
}

.patient-details-summary {
  text-align: left; /* Default for LTR */
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  color: #555;
  font-size: 1em;
}

.modal-content[dir="rtl"] .patient-details-summary {
  text-align: right; /* Align patient summary to right for RTL */
}

.patient-details-summary strong {
  color: #8D99AE;
}

.recommendation-display {
  text-align: left; /* Default for LTR */
  margin-top: 20px;
  padding: 15px;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 8px;
}

.modal-content[dir="rtl"] .recommendation-display {
  text-align: right; /* Align recommendation text to right for RTL */
}

.recommendation-display .result-text {
  color: #333;
  font-size: 1.1em;
  line-height: 1.6;
}

.recommendation-display .result-text h1,
.recommendation-display .result-text h2,
.recommendation-display .result-text h3 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
  line-height: 1.2;
}

.recommendation-display .result-text h1 { font-size: 1.8em; }
.recommendation-display .result-text h2 { font-size: 1.5em; }
.recommendation-display .result-text h3 { font-size: 1.3em; }

.recommendation-display .result-text ul,
.recommendation-display .result-text ol {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 25px; /* For LTR */
  padding-right: 0;
}

.modal-content[dir="rtl"] .recommendation-display .result-text ul,
.modal-content[dir="rtl"] .recommendation-display .result-text ol {
  padding-right: 25px; /* For RTL */
  padding-left: 0;
}

.recommendation-display .result-text ul {
  list-style-type: disc;
}

.recommendation-display .result-text ol {
  list-style-type: decimal;
}

.recommendation-display .result-text li {
  margin-bottom: 5px;
}

.recommendation-display .result-text strong {
  font-weight: bold;
}

.recommendation-display .result-text em {
  font-style: italic;
}


/* Responsive Adjustments */
@media (max-width: 768px) {
  .patient-list-main-content {
    padding: 15px;
  }
  .patient-list-card {
    padding: 30px;
  }
  .patient-list-card h2 {
    font-size: 1.8em;
  }
  .action-button {
    padding: 10px 20px;
    font-size: 1em;
  }
  .modal-content {
    padding: 30px;
    width: 95%;
  }
}

@media (max-width: 480px) {
  .patient-list-card {
    padding: 20px;
  }
  .patient-list-card h2 {
    font-size: 1.6em;
  }
  .action-button {
    padding: 8px 15px;
    font-size: 0.9em;
  }
  .modal-content {
    padding: 20px;
  }
}
</style>
