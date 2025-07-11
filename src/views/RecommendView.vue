<!-- views/RecommendView.vue -->
<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentLanguage = inject('currentLanguage');

// Patient Data State
const age = ref('');
const gender = ref(''); // 'male', 'female', 'other'
const medicalHistory = ref('');
const currentSymptoms = ref('');
const isPregnant = ref(false);
const allergies = ref('');
const previousRadiationExposure = ref(''); // Updated to include quantity
const scanType = ref(''); // New state for scan type: 'CT', 'X-ray', 'Both'

const recommendationResult = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const calculatedMsv = ref(null); // To store the calculated mSv from Gemini
const factorDetails = ref(null); // To store extracted factors from Gemini

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


// Function to call Gemini API for recommendations
const getRecommendations = async () => {
  // Basic validation
  if (!age.value || !gender.value || !medicalHistory.value || !currentSymptoms.value || !scanType.value) {
    errorMessage.value = currentLanguage.value === 'en'
      ? 'Please fill in all required patient details (Age, Gender, Medical History, Current Symptoms, and Scan Type).'
      : 'الرجاء ملء جميع تفاصيل المريض المطلوبة (العمر، الجنس، التاريخ الطبي، الأعراض الحالية، ونوع الفحص).';
    return;
  }

  // Check if API key is available
  if (!GEMINI_API_KEY) {
    errorMessage.value = currentLanguage.value === 'en'
      ? 'Gemini API key is not configured. Please set VITE_GEMINI_KEY in your .env file.'
      : 'لم يتم تكوين مفتاح API الخاص بـ Gemini. يرجى تعيين VITE_GEMINI_KEY في ملف .env الخاص بك.';
    console.error('VITE_GEMINI_KEY is not defined.');
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  recommendationResult.value = '';
  calculatedMsv.value = null; // Reset
  factorDetails.value = null; // Reset

  try {
    // Construct the prompt with patient information
    // STRONGLY EMPHASIZED EXACT FORMAT AND PLACEMENT FOR FACTORS AND MSV CALCULATION
    let prompt = currentLanguage.value === 'en'
      ? `Provide ONLY the predicted scan factors and the calculated mSv dosage first, in the EXACT format on a single line, then a separator "---", then the medical recommendation.
        Predicted ${scanType.value === 'X-ray' ? 'X-ray' : 'CT'} Factors: Exposure Time: [value] ms, Tube Current: [value] mA, Tube Voltage: [value] kV. Calculated mSv: [value] mSv (using formula: mSv = (Tube Voltage * Tube Current * Exposure Time_ms * 0.00000001)).
        ---
        Provide a concise medical recommendation regarding ${scanType.value === 'Both' ? 'X-ray or CT scans' : scanType.value + ' scans'} for a patient based on the following details.
        Always adhere to the ALARA (As Low As Reasonably Achievable) principle.
        Patient Details:
        - Age: ${age.value} years
        - Gender: ${gender.value}
        - Medical History: ${medicalHistory.value}
        - Current Symptoms: ${currentSymptoms.value}
        - Allergies: ${allergies.value || 'None'}
        - Previous Radiation Exposure History (Type, Date, and approximate Quantity in mSv if known): ${previousRadiationExposure.value || 'Not specified'}
        ${gender.value === 'female' && isPregnant.value ? '- Pregnancy Status: Pregnant. Provide specific notes regarding radiation dosage for pregnant patients.' : ''}

        Please provide a comprehensive, clear, and concise recommendation. Format the recommendation part using Markdown for readability (e.g., bold text, bullet points, headings). Ensure the response is entirely in English. Do NOT provide the mSv calculation formula in your response again after the factors line.`
      : `الرجاء تقديم عوامل الفحص المتوقعة والجرعة المحسوبة بالملي سيفرت أولاً فقط، بالصيغة الدقيقة على سطر واحد، ثم فاصل "---"، ثم التوصية الطبية.
        عوامل فحص ${scanType.value === 'X-ray' ? 'الأشعة السينية' : 'الأشعة المقطعية'} المتوقعة: وقت التعرض: [قيمة] ملي ثانية، تيار الأنبوب: [قيمة] ملي أمبير، جهد الأنبوب: [قيمة] كيلو فولت. الجرعة المحسوبة بالملي سيفرت (mSv): [قيمة] ملي سيفرت (باستخدام الصيغة: ملي سيفرت = (جهد الأنبوب * تيار الأنبوب * وقت التعرض بالملي ثانية * 0.00000001)).
        ---
        قدم توصية طبية موجزة بشأن فحوصات ${scanType.value === 'Both' ? 'الأشعة السينية أو الأشعة المقطعية' : (scanType.value === 'X-ray' ? 'الأشعة السينية' : 'الأشعة المقطعية')} لمريض بناءً على التفاصيل التالية.
        التزم دائمًا بمبدأ ALARA (أقل ما يمكن تحقيقه بشكل معقول).
        تفاصيل المريض:
        - العمر: ${age.value} سنة
        - الجنس: ${gender.value === 'male' ? 'ذكر' : (gender.value === 'female' ? 'أنثى' : 'آخر')}
        - التاريخ الطبي: ${medicalHistory.value}
        - الأعراض الحالية: ${currentSymptoms.value}
        - الحساسية: ${allergies.value || 'لا يوجد'}
        - التعرض السابق للإشعاع (النوع، التاريخ، والكمية التقريبية بالملي سيفرت إن أمكن): ${previousRadiationExposure.value || 'غير محدد'}
        ${gender.value === 'female' && isPregnant.value ? '- حالة الحمل: حامل. قدم ملاحظات محددة بخصوص جرعة الإشعاع للمريضات الحوامل.' : ''}

        الرجاء تقديم توصية شاملة وواضحة وموجزة. قم بتنسيق جزء التوصية باستخدام Markdown لسهولة القراءة (على سبيل المثال، النص الغامق، النقاط النقطية، العناوين). تأكد من أن الرد باللغة العربية بالكامل. لا تقدم صيغة حساب الجرعة بالملي سيفرت في ردك مرة أخرى بعد سطر العوامل.`
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
      errorMessage.value = currentLanguage.value === 'en'
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
      factorDetails.value = {
        exposureTimeMs: extracted.exposureTimeMs,
        tubeCurrentMa: extracted.tubeCurrentMa,
        tubeVoltageKv: extracted.tubeVoltageKv,
      };
      calculatedMsv.value = extracted.calculatedMsv;

      // Use the markdownToHtml function to process the recommendation part
      recommendationResult.value = markdownToHtml(recommendationMarkdown);
      console.log('Gemini recommendation (HTML):', recommendationResult.value);
    } else {
      if (result.promptFeedback && result.promptFeedback.blockReason) {
        errorMessage.value = currentLanguage.value === 'en'
          ? `Response blocked due to safety reasons: ${result.promptFeedback.blockReason}`
          : `تم حظر الاستجابة لأسباب تتعلق بالسلامة: ${result.promptFeedback.blockReason}`;
      } else {
        errorMessage.value = currentLanguage.value === 'en' ? 'No valid response from API or unexpected structure.' : 'لا توجد استجابة صالحة من واجهة برمجة التطبيقات أو هيكل غير متوقع.';
      }
      console.error('API response structure:', result);
    }

  } catch (err) {
    console.error('Error calling Gemini API:', err);
    errorMessage.value = currentLanguage.value === 'en' ? `Recommendation failed: ${err.message}` : `فشل التوصية: ${err.message}`;
  } finally {
    isLoading.value = false;
  }
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
            :disabled="isLoading"
          >
            <span v-if="isLoading">
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

          <div v-if="factorDetails && factorDetails.tubeVoltageKv" class="factor-details mt-4">
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
          <a href="#" @click.prevent="router.push('/dashboard')">
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
