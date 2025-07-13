<!-- views/RecommendView.vue -->
<script setup>
import { ref, inject, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';

const router = useRouter();
const route = useRoute();
const currentLanguage = inject('currentLanguage');
// toggleInfoModal is not used in this specific template, but kept if it's a global utility
const toggleInfoModal = inject('toggleInfoModal');
const db = inject('db'); // Inject Firestore instance
const auth = inject('auth'); // Inject Auth instance
const currentUserId = inject('currentUserId'); // Inject reactive currentUserId
const isAuthReady = inject('isAuthReady'); // Inject reactive auth readiness

// Access VITE_APP_ID directly from environment variables for Firestore path construction
const VITE_APP_ID = import.meta.env.VITE_APP_ID;

// Reactive state for form inputs (from your original template)
const age = ref(null);
const gender = ref('');
const medicalHistory = ref('');
const currentSymptoms = ref('');
const allergies = ref('');
const isPregnant = ref(false);
const previousRadiationExposure = ref('');
const scanType = ref(''); // Type of Scan to Consider

// Reactive state for AI response and UI feedback
const recommendationResult = ref(''); // This will hold the main text recommendation
const factorDetails = ref(null); // Holds structured AI output for scan factors
const calculatedMsv = ref(null); // Holds structured AI output for calculated mSv
const isLoading = ref(false);
const errorMessage = ref('');

// Patient details from route params and fetched from Firestore
const patientId = ref(route.params.patientId || '');
const patientName = ref(''); // Will be fetched based on patientId
const patientAge = ref(null); // Will be fetched based on patientId
const patientGender = ref(''); // Will be fetched based on patientId

// Function to fetch patient details if patientId is provided in the route
const fetchPatientDetails = async (id) => {
  // Ensure db and currentUserId are available before attempting to fetch
  if (!id || !db || !currentUserId.value) {
    console.warn("Cannot fetch patient details: ID, DB, or User ID not ready.");
    return;
  }

  const userIdVal = currentUserId.value; // Get the current user ID
  // Construct the Firestore document reference for the patient
  const patientDocRef = doc(db, `artifacts/${VITE_APP_ID}/users/${userIdVal}/patients`, id);

  try {
    const patientSnap = await getDoc(patientDocRef);
    if (patientSnap.exists()) {
      const patientData = patientSnap.data();
      patientName.value = patientData.name;
      patientAge.value = patientData.age;
      patientGender.value = patientData.gender;
      // Pre-fill form fields if patient data is available and makes sense
      age.value = patientData.age;
      gender.value = patientData.gender.toLowerCase(); // Ensure lowercase for select
      console.log("Patient details fetched and form pre-filled:", patientData);
    } else {
      console.warn("Patient not found for ID:", id);
      errorMessage.value = currentLanguage.value === 'en' ? 'Patient not found. Please select a valid patient.' : 'المريض غير موجود. الرجاء اختيار مريض صالح.';
    }
  } catch (error) {
    console.error("Error fetching patient details:", error);
    errorMessage.value = currentLanguage.value === 'en' ? 'Error fetching patient details.' : 'خطأ في جلب تفاصيل المريض.';
  }
};

// Watch for changes in auth readiness and patientId to fetch details
watch([isAuthReady, () => route.params.patientId], ([ready, newPatientId]) => {
  patientId.value = newPatientId || '';
  if (ready && patientId.value) {
    fetchPatientDetails(patientId.value);
  }
}, { immediate: true }); // Run immediately on component mount

const getRecommendations = async () => {
  isLoading.value = true;
  errorMessage.value = ''; // Clear previous errors
  recommendationResult.value = ''; // Clear previous results
  factorDetails.value = null;
  calculatedMsv.value = null;

  // Basic validation for required fields
  if (!age.value || !gender.value || !medicalHistory.value || !currentSymptoms.value || !scanType.value) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Please fill in all required fields (Age, Gender, Medical History, Current Symptoms, Scan Type).' : 'الرجاء تعبئة جميع الحقول المطلوبة (العمر، الجنس، التاريخ الطبي، الأعراض الحالية، نوع الفحص).';
    isLoading.value = false;
    return;
  }
  if (!patientId.value || !patientName.value) {
    errorMessage.value = currentLanguage.value === 'en' ? 'No patient selected or patient details not loaded. Please go back to Patient List and select a patient.' : 'لم يتم اختيار مريض أو لم يتم تحميل تفاصيل المريض. الرجاء العودة إلى قائمة المرضى واختيار مريض.';
    isLoading.value = false;
    return;
  }

  // Construct the prompt for the Gemini API
  const prompt = currentLanguage.value === 'en' ?
    `Based on the following patient details, provide a medical recommendation for an X-ray or CT scan.
    Also, estimate the typical Tube Voltage (kV), Tube Current (mA), Exposure Time (ms) for the recommended scan, and the approximate Effective Dose (mSv).
    Patient Name: ${patientName.value}
    Age: ${age.value}
    Gender: ${gender.value}
    Medical History: ${medicalHistory.value}
    Current Symptoms: ${currentSymptoms.value}
    Allergies: ${allergies.value || 'None'}
    Is Pregnant: ${isPregnant.value ? 'Yes' : 'No'}
    Previous Radiation Exposure: ${previousRadiationExposure.value || 'None known'}
    Type of Scan to Consider: ${scanType.value}

    The recommendation should be concise, professional, and explain if the estimated dose is within safe limits according to ICRP guidelines (20 mSv/year for medical professionals, 1 mSv/year for general public, 1 mSv for fetus during pregnancy for pregnant workers). If the estimated dose is high, suggest alternatives or precautions.
    Provide the response in a JSON format with the following keys: "recommendationText" (string), "factorDetails" (object with "tubeVoltageKv", "tubeCurrentMa", "exposureTimeMs" as numbers), and "calculatedMsv" (number).
    Example JSON structure:
    {
      "recommendationText": "...",
      "factorDetails": {
        "tubeVoltageKv": 80,
        "tubeCurrentMa": 100,
        "exposureTimeMs": 50
      },
      "calculatedMsv": 0.1
    }` :
    `بناءً على تفاصيل المريض التالية، قدم توصية طبية لفحص بالأشعة السينية أو الأشعة المقطعية.
    أيضًا، قم بتقدير جهد الأنبوب (kV)، تيار الأنبوب (mA)، وقت التعرض (ms) للفحص الموصى به، والجرعة الفعالة التقريبية (mSv).
    اسم المريض: ${patientName.value}
    العمر: ${age.value}
    الجنس: ${gender.value}
    التاريخ الطبي: ${medicalHistory.value}
    الأعراض الحالية: ${currentSymptoms.value}
    الحساسية: ${allergies.value || 'لا يوجد'}
    هل هي حامل: ${isPregnant.value ? 'نعم' : 'لا'}
    التعرض السابق للإشعاع: ${previousRadiationExposure.value || 'لا يوجد معلومات'}
    نوع الفحص المراد النظر فيه: ${scanType.value}

    يجب أن تكون التوصية موجزة واحترافية، وتوضح ما إذا كانت الجرعة المقدرة ضمن الحدود الآمنة وفقًا لإرشادات اللجنة الدولية للحماية من الإشعاع (ICRP) (20 ملي سيفرت/سنة للعاملين في المجال الطبي، 1 ملي سيفرت/سنة لعامة الجمهور، 1 ملي سيفرت للجنين أثناء الحمل للعاملات الحوامل). إذا كانت الجرعة المقدرة عالية، اقترح بدائل أو احتياطات.
    قدم الاستجابة بتنسيق JSON مع المفاتيح التالية: "recommendationText" (سلسلة نصية), "factorDetails" (كائن يحتوي على "tubeVoltageKv", "tubeCurrentMa", "exposureTimeMs" كأرقام), و "calculatedMsv" (رقم).
    مثال على هيكل JSON:
    {
      "recommendationText": "...",
      "factorDetails": {
        "tubeVoltageKv": 80,
        "tubeCurrentMa": 100,
        "exposureTimeMs": 50
      },
      "calculatedMsv": 0.1
    }`;

  try {
    const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            recommendationText: { type: "STRING" },
            factorDetails: {
              type: "OBJECT",
              properties: {
                tubeVoltageKv: { type: "NUMBER" },
                tubeCurrentMa: { type: "NUMBER" },
                exposureTimeMs: { type: "NUMBER" }
              }
            },
            calculatedMsv: { type: "NUMBER" }
          },
          required: ["recommendationText", "factorDetails", "calculatedMsv"]
        }
      }
    };

    const apiKey = ""; // Canvas will provide this at runtime for gemini-2.0-flash
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      const jsonResponse = JSON.parse(result.candidates[0].content.parts[0].text);

      recommendationResult.value = jsonResponse.recommendationText;
      factorDetails.value = jsonResponse.factorDetails;
      calculatedMsv.value = jsonResponse.calculatedMsv;

      console.log("Recommendation generated:", recommendationResult.value);
      console.log("Factor Details:", factorDetails.value);
      console.log("Calculated mSv:", calculatedMsv.value);

      // Save recommendation to Firestore
      if (db && currentUserId.value) {
        const userIdVal = currentUserId.value;
        const recommendationsCollectionRef = collection(db, `artifacts/${VITE_APP_ID}/users/${userIdVal}/recommendationHistory`);
        try {
          await addDoc(recommendationsCollectionRef, {
            patientId: patientId.value,
            patientName: patientName.value, // Save patient name for easier display later
            age: age.value,
            gender: gender.value,
            medicalHistory: medicalHistory.value,
            currentSymptoms: currentSymptoms.value,
            allergies: allergies.value,
            isPregnant: isPregnant.value,
            previousRadiationExposure: previousRadiationExposure.value,
            scanType: scanType.value,
            recommendation: recommendationResult.value,
            factorDetails: factorDetails.value,
            calculatedMsv: calculatedMsv.value,
            timestamp: new Date(), // Store current timestamp for ordering
            language: currentLanguage.value // Store the language of the recommendation
          });
          console.log("Recommendation saved to Firestore successfully.");
        } catch (saveError) {
          console.error("Error saving recommendation to Firestore:", saveError);
          errorMessage.value = currentLanguage.value === 'en' ? 'Failed to save recommendation to history.' : 'فشل حفظ التوصية في السجل.';
        }
      } else {
        console.warn("Firestore or User ID not available, recommendation not saved.");
      }

    } else {
      errorMessage.value = currentLanguage.value === 'en' ? 'Could not generate recommendation. Please try again.' : 'تعذر إنشاء التوصية. الرجاء المحاولة مرة أخرى.';
      console.error('API response structure:', result);
    }
  } catch (error) {
    console.error("Error generating recommendation:", error);
    errorMessage.value = currentLanguage.value === 'en' ? `An error occurred: ${error.message}` : `حدث خطأ: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
};

const goToDashboard = () => {
  router.push('/dashboard');
};

const goToPatientList = () => {
  router.push('/patients');
};
</script>

<template>
  <div class="recommend-page">
    <main class="recommend-main-content">
      <section class="recommend-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Medical Scan Recommendation' : 'توصية الفحص الطبي' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Enter patient details to receive recommendations for X-ray or CT scans.' : 'أدخل تفاصيل المريض لتلقي توصيات بشأن فحوصات الأشعة السينية أو الأشعة المقطعية.' }}
        </p>

        <!-- Display patient info if available -->
        <p v-if="patientId && patientName" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" class="patient-info-display">
          {{ currentLanguage === 'en' ? 'Generating recommendation for Patient:' : 'إنشاء توصية للمريض:' }}
          <strong>{{ patientName }}</strong> ({{ patientAge }} {{ currentLanguage === 'en' ? 'years old' : 'سنة' }}, {{ currentLanguage === 'en' ? patientGender : (patientGender === 'Male' ? 'ذكر' : 'أنثى') }})
        </p>
        <p v-else :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" class="text-red-600 font-bold mb-4">
          {{ currentLanguage === 'en' ? 'No patient selected or patient details not loaded. Please select a patient from the Patient List to generate a recommendation for their history.' : 'لم يتم اختيار مريض أو لم يتم تحميل تفاصيل المريض. الرجاء اختيار مريض من قائمة المرضى لإنشاء توصية لسجله.' }}
          <button @click="goToPatientList" class="inline-link-button">
            {{ currentLanguage === 'en' ? 'Go to Patient List' : 'اذهب إلى قائمة المرضى' }}
          </button>
        </p>

        <!-- Disclaimer for non-medical use -->
        <p class="text-sm font-semibold text-red-600 text-center mb-6" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Disclaimer: This feature uses AI for informational purposes only and is NOT intended for medical diagnosis, treatment, or any clinical use. Always consult with a qualified medical professional.' : 'إخلاء مسؤولية: تستخدم هذه الميزة الذكاء الاصطناعي لأغراض إعلامية فقط وليست مخصصة للتشخيص الطبي أو العلاج أو أي استخدام سريري. استشر دائمًا أخصائيًا طبيًا مؤهلاً.' }}
        </p>

        <form @submit.prevent="getRecommendations" class="recommend-form">
          <div class="form-group">
            <label for="age" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Age (Years)' : 'العمر (سنوات)' }}
            </label>
            <input
              type="number"
              id="age"
              v-model="age"
              :placeholder="currentLanguage === 'en' ? 'e.g., 35' : 'مثال: 35'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
              min="0"
            />
          </div>

          <div class="form-group">
            <label for="gender" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}
            </label>
            <select
              id="gender"
              v-model="gender"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
            >
              <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Gender' : 'اختر الجنس' }}</option>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
              <option value="other">{{ currentLanguage === 'en' ? 'Other' : 'آخر' }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="medicalHistory" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Medical History (e.g., chronic conditions, past surgeries)' : 'التاريخ الطبي (مثال: أمراض مزمنة، عمليات سابقة)' }}
            </label>
            <textarea
              id="medicalHistory"
              v-model="medicalHistory"
              rows="3"
              :placeholder="currentLanguage === 'en' ? 'e.g., Diabetes, Hypertension, Appendectomy 5 years ago' : 'مثال: السكري، ارتفاع ضغط الدم، استئصال الزائدة الدودية قبل 5 سنوات'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="currentSymptoms" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Current Symptoms (reason for scan consideration)' : 'الأعراض الحالية (سبب التفكير في الفحص)' }}
            </label>
            <textarea
              id="currentSymptoms"
              v-model="currentSymptoms"
              rows="3"
              :placeholder="currentLanguage === 'en' ? 'e.g., Persistent cough, abdominal pain, headache' : 'مثال: سعال مستمر، ألم في البطن، صداع'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="allergies" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Allergies (e.g., to contrast dye, medications)' : 'الحساسية (مثال: لصبغة التباين، الأدوية)' }}
            </label>
            <textarea
              id="allergies"
              v-model="allergies"
              rows="2"
              :placeholder="currentLanguage === 'en' ? 'e.g., Iodine, Penicillin' : 'مثال: اليود، البنسلين'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            ></textarea>
          </div>

          <div class="form-group" v-if="gender === 'female'">
            <div
              class="flex items-center"
              :class="{ 'flex-row-reverse': currentLanguage === 'ar', 'justify-end': currentLanguage === 'ar' }"
            >
              <input
                type="checkbox"
                id="isPregnant"
                v-model="isPregnant"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="isPregnant" class="ml-2 text-gray-700" :class="{ 'mr-2 ml-0': currentLanguage === 'ar' }">
                {{ currentLanguage === 'en' ? 'Is the patient pregnant?' : 'هل المريضة حامل؟' }}
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="previousRadiationExposure" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Previous Radiation Exposure (Type, Date, and approx. Quantity in mSv if known)' : 'التعرض السابق للإشعاع (النوع، التاريخ، والكمية التقريبية بالملي سيفرت إن أمكن)' }}
            </label>
            <input
              type="text"
              id="previousRadiationExposure"
              v-model="previousRadiationExposure"
              :placeholder="currentLanguage === 'en' ? 'e.g., Chest X-ray 6 months ago (2 mSv), CT Head 2 years ago (5 mSv)' : 'مثال: أشعة سينية للصدر قبل 6 أشهر (2 ملي سيفرت)، أشعة مقطعية للرأس قبل سنتين (5 ملي سيفرت)'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            />
          </div>

          <!-- New Form Group for Scan Type Selection -->
          <div class="form-group">
            <label for="scanType" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'" :class="{'text-right w-full': currentLanguage === 'ar'}">
              {{ currentLanguage === 'en' ? 'Type of Scan to Consider' : 'نوع الفحص المراد النظر فيه' }}
            </label>
            <select
              id="scanType"
              v-model="scanType"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
            >
              <option value="" disabled>{{ currentLanguage === 'en' ? 'Select Scan Type' : 'اختر نوع الفحص' }}</option>
              <option value="X-ray">{{ currentLanguage === 'en' ? 'X-ray' : 'الأشعة السينية' }}</option>
              <option value="CT">{{ currentLanguage === 'en' ? 'CT Scan' : 'الأشعة المقطعية' }}</option>
              <option value="Both">{{ currentLanguage === 'en' ? 'Both (X-ray and CT)' : 'كلاهما (الأشعة السينية والمقطعية)' }}</option>
            </select>
          </div>

          <button
            type="submit"
            class="action-button primary recommend-button"
            :disabled="isLoading || !patientId || !isAuthReady || !currentUserId || !age || !gender || !medicalHistory || !currentSymptoms || !scanType"
          >
            <span v-if="isLoading">
<font-awesome-icon icon="spinner" spin />
              {{ currentLanguage === 'en' ? 'Getting Recommendations...' : 'جاري الحصول على التوصيات...' }}
            </span>
            <span v-else>
              {{ currentLanguage === 'en' ? 'Get Recommendations' : 'الحصول على التوصيات' }}
            </span>
          </button>
        </form>

        <div v-if="errorMessage" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ errorMessage }}
        </div>

        <div
          v-if="recommendationResult"
          class="prediction-result"
          :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
        >
          <h3>{{ currentLanguage === 'en' ? 'Recommendations:' : 'التوصيات:' }}</h3>

          <div v-if="factorDetails && factorDetails.tubeVoltageKv !== undefined" class="factor-details mt-4">
            <h4>{{ currentLanguage === 'en' ? 'Predicted Scan Factors:' : 'عوامل الفحص المتوقعة:' }}</h4>
            <p>
              <strong>{{ currentLanguage === 'en' ? 'Tube Voltage:' : 'جهد الأنبوب:' }}</strong> {{ factorDetails.tubeVoltageKv }} kV<br/>
              <strong>{{ currentLanguage === 'en' ? 'Tube Current:' : 'تيار الأنبوب:' }}</strong> {{ factorDetails.tubeCurrentMa }} mA<br/>
              <strong>{{ currentLanguage === 'en' ? 'Exposure Time:' : 'وقت التعرض:' }}</strong> {{ factorDetails.exposureTimeMs }} ms
            </p>
          </div>

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

          <!-- Use v-html to render the Markdown-converted HTML -->
          <div class="result-text" v-html="recommendationResult"></div>
        </div>

        <p class="switch-link-container mt-8" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <a href="#" @click.prevent="goToDashboard">
            {{ currentLanguage === 'en' ? 'Back to Dashboard' : 'العودة إلى لوحة التحكم' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.recommend-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust height to account for global header */
  width: 100%;
}

.recommend-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.recommend-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 700px; /* Wider card for more content */
  width: 100%;
  border: 1px solid #eee;
}

.recommend-card h2 {
  color: #8D99AE;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.recommend-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.patient-info-display {
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.inline-link-button {
  background: none;
  border: none;
  color: #8D99AE;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  margin-left: 5px;
  transition: color 0.2s ease;
}

.inline-link-button:hover {
  color: #6a7483;
}

/* Form Styling */
.recommend-form {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between form groups */
  margin-bottom: 30px;
}

.form-group {
  text-align: left; /* Default LTR alignment */
}

.form-group label {
  display: block; /* Make label take full width */
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
  font-size: 0.95em;
}

/* Conditional text-align for labels */
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
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #8D99AE; /* Highlight border on focus */
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2); /* Subtle glow on focus */
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
  width: 100%; /* Make button full width */
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

/* Message Styling (Error) */
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

/* Recommendation Result Styling */
.prediction-result { /* Reusing .prediction-result for consistency */
  margin-top: 30px;
  padding: 20px;
  background-color: #e6f7ff; /* Light blue background */
  border: 1px solid #91d5ff; /* Blue border */
  border-radius: 8px;
  /* text-align will be set by dir attribute */
}

.prediction-result h3 {
  color: #1890ff; /* Darker blue for heading */
  font-size: 1.4em;
  margin-bottom: 10px;
  font-weight: 700;
  text-align: center; /* Center the heading */
}

.prediction-result h4 {
  color: #40a9ff; /* Slightly lighter blue for sub-heading */
  font-size: 1.2em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 600;
  text-align: center;
}

.prediction-result[dir="ltr"] .result-text,
.prediction-result[dir="ltr"] .factor-details,
.prediction-result[dir="ltr"] .msv-details {
  text-align: left;
}

.prediction-result[dir="rtl"] .result-text,
.prediction-result[dir="rtl"] .factor-details,
.prediction-result[dir="rtl"] .msv-details {
  text-align: right;
}

.prediction-result .result-text,
.prediction-result .factor-details p,
.prediction-result .msv-details p {
  color: #333;
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 0;
  /* Styles for Markdown-rendered elements */
}

.prediction-result .result-text h1,
.prediction-result .result-text h2,
.prediction-result .result-text h3 {
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: bold;
  line-height: 1.2;
}

.prediction-result .result-text h1 { font-size: 1.8em; }
.prediction-result .result-text h2 { font-size: 1.5em; }
.prediction-result .result-text h3 { font-size: 1.3em; }


.prediction-result .result-text ul,
.prediction-result .result-text ol {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 25px; /* For LTR */
  padding-right: 0;
}

.prediction-result[dir="rtl"] .result-text ul,
.prediction-result[dir="rtl"] .result-text ol {
  padding-right: 25px; /* For RTL */
  padding-left: 0;
}

.prediction-result .result-text ul {
  list-style-type: disc;
}

.prediction-result .result-text ol {
  list-style-type: decimal;
}

.prediction-result .result-text li {
  margin-bottom: 5px;
}

.prediction-result .result-text strong {
  font-weight: bold;
}

.prediction-result .result-text em {
  font-style: italic;
}


/* Switch Link Container */
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

/* Responsive Adjustments */
@media (max-width: 768px) {
  .recommend-main-content {
    padding: 15px;
  }
  .recommend-card {
    padding: 30px;
  }
  .recommend-card h2 {
    font-size: 1.8em;
  }
  .action-button {
    padding: 10px 20px;
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .recommend-card {
    padding: 20px;
  }
  .recommend-card h2 {
    font-size: 1.6em;
  }
  .action-button {
    padding: 8px 15px;
    font-size: 0.9em;
  }
}
</style>
