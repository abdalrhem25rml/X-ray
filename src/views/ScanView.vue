<!-- views/ScanView.vue -->
<script setup>
import { ref, inject, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentLanguage = inject('currentLanguage');

const selectedFile = ref(null);
const imagePreviewUrl = ref(null);
const predictionResult = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

// Function to convert a File object to a Base64 string
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Remove the "data:image/png;base64," part
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
};

// Function to handle file input change
const handleFileChange = (event) => {
  errorMessage.value = '';
  predictionResult.value = '';
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    // Create a URL for image preview
    imagePreviewUrl.value = URL.createObjectURL(file);
  } else {
    selectedFile.value = null;
    imagePreviewUrl.value = null;
  }
};

// Function to call Gemini API for prediction
const handlePrediction = async () => {
  if (!selectedFile.value) {
    errorMessage.value = currentLanguage.value === 'en' ? 'Please select an image first.' : 'الرجاء تحديد صورة أولاً.';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  predictionResult.value = '';

  try {
    const base64ImageData = await fileToBase64(selectedFile.value);

    // Prompt designed to elicit a one-word response for body part classification
    const prompt = currentLanguage.value === 'en'
      ? 'What body part is shown in this medical scan? Respond with only one word (e.g., Chest, Brain, Abdomen, Hand, Spine, Pelvis).'
      : 'ما هو جزء الجسم الظاهر في هذا الفحص الطبي؟ أجب بكلمة واحدة فقط (مثال: صدر، دماغ، بطن، يد، عمود فقري، حوض).';

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: selectedFile.value.type, // Use the actual MIME type of the file
                data: base64ImageData
              }
            }
          ]
        }
      ],
    };

    // API key is automatically provided by Canvas if left empty for gemini-2.0-flash
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // --- Start Debugging Additions ---
    console.log('Raw API Response:', response); // Log the raw response object

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('API Error Response Body:', errorBody); // Log the error body
      errorMessage.value = currentLanguage.value === 'en'
        ? `API Error: ${response.status} - ${errorBody.error?.message || 'Unknown error'}`
        : `خطأ في واجهة برمجة التطبيقات: ${response.status} - ${errorBody.error?.message || 'خطأ غير معروف'}`;
      return; // Exit if response was not OK
    }
    // --- End Debugging Additions ---

    const result = await response.json();
    console.log('Parsed API Result:', result); // Log the parsed JSON result

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      // Trim the response to try and get a single word, or the first word
      let geminiResponse = result.candidates[0].content.parts[0].text.trim();
      // Take only the first word if Gemini returns more
      geminiResponse = geminiResponse.split(' ')[0];
      predictionResult.value = geminiResponse;
      console.log('Gemini prediction:', predictionResult.value);
    } else {
      errorMessage.value = currentLanguage.value === 'en' ? 'No valid response from API or unexpected structure.' : 'لا توجد استجابة صالحة من واجهة برمجة التطبيقات أو هيكل غير متوقع.';
      console.error('API response structure:', result);
    }

  } catch (err) {
    console.error('Error calling Gemini API:', err);
    errorMessage.value = currentLanguage.value === 'en' ? `Prediction failed: ${err.message}` : `فشل التنبؤ: ${err.message}`;
  } finally {
    isLoading.value = false;
  }
};

// Clean up the object URL when the component is unmounted
onUnmounted(() => {
  if (imagePreviewUrl.value) {
    URL.revokeObjectURL(imagePreviewUrl.value);
  }
});
</script>

<template>
  <div class="scan-page">
    <main class="scan-main-content">
      <section class="scan-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Scan Analysis' : 'تحليل الأشعة' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Upload an X-Ray or CT scan to predict the body part.' : 'قم بتحميل صورة أشعة سينية أو مقطعية للتنبؤ بجزء الجسم.' }}
        </p>

        <!-- Disclaimer for non-medical use -->
        <p class="text-sm font-semibold text-red-600 text-center mb-4" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Disclaimer: This feature uses AI for general image understanding and is NOT intended for medical diagnosis or clinical use.' : 'إخلاء مسؤولية: تستخدم هذه الميزة الذكاء الاصطناعي للفهم العام للصور وليست مخصصة للتشخيص الطبي أو الاستخدام السريري.' }}
        </p>

        <div class="file-input-group" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <label for="scanUpload" class="file-input-label">
            {{ currentLanguage === 'en' ? 'Choose Scan Image' : 'اختر صورة الأشعة' }}
          </label>
          <input
            type="file"
            id="scanUpload"
            accept="image/*"
            @change="handleFileChange"
            class="hidden-file-input"
          />
          <span class="file-name">
            {{ selectedFile ? selectedFile.name : (currentLanguage === 'en' ? 'No file chosen' : 'لم يتم اختيار ملف') }}
          </span>
        </div>

        <div v-if="imagePreviewUrl" class="image-preview-container">
          <img :src="imagePreviewUrl" alt="Scan Preview" class="image-preview" />
        </div>

        <button
          @click="handlePrediction"
          class="action-button primary predict-button"
          :disabled="isLoading || !selectedFile"
        >
          <span v-if="isLoading">
            {{ currentLanguage === 'en' ? 'Predicting...' : 'جاري التنبؤ...' }}
          </span>
          <span v-else>
            {{ currentLanguage === 'en' ? 'Predict Body Part' : 'توقع جزء الجسم' }}
          </span>
        </button>

        <div v-if="errorMessage" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ errorMessage }}
        </div>

        <div v-if="predictionResult" class="prediction-result" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <h3>{{ currentLanguage === 'en' ? 'Prediction Result:' : 'نتيجة التنبؤ:' }}</h3>
          <p class="result-text">{{ predictionResult }}</p>
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
.scan-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust height to account for global header */
  width: 100%;
}

.scan-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.scan-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px; /* Slightly wider card for scan content */
  width: 100%;
  border: 1px solid #eee;
}

.scan-card h2 {
  color: #8D99AE;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.scan-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

/* File Input Styling */
.file-input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.file-input-label {
  background-color: #8D99AE;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: inline-block; /* Allows padding and margin */
  margin-bottom: 15px; /* Space between label and file name */
}

.file-input-label:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.hidden-file-input {
  display: none; /* Hide the default file input */
}

.file-name {
  color: #777;
  font-size: 0.9em;
  word-break: break-all; /* Break long file names */
  text-align: center;
}

/* Image Preview */
.image-preview-container {
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden; /* Ensures image respects border-radius */
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 300px; /* Limit preview height */
  background-color: #f0f0f0;
}

.image-preview {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  display: block; /* Remove extra space below image */
  object-fit: contain; /* Ensures the whole image is visible */
}

/* Predict Button */
.predict-button {
  width: 100%; /* Make button full width */
  margin-top: 20px;
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

/* Prediction Result Styling */
.prediction-result {
  margin-top: 30px;
  padding: 20px;
  background-color: #e6f7ff; /* Light blue background */
  border: 1px solid #91d5ff; /* Blue border */
  border-radius: 8px;
  text-align: center;
}

.prediction-result h3 {
  color: #1890ff; /* Darker blue for heading */
  font-size: 1.4em;
  margin-bottom: 10px;
  font-weight: 700;
}

.prediction-result .result-text {
  color: #333;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0; /* Remove default paragraph margin */
}

/* Common button styles */
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
  .scan-main-content {
    padding: 15px;
  }
  .scan-card {
    padding: 30px;
  }
  .scan-card h2 {
    font-size: 1.8em;
  }
  .file-input-label, .action-button {
    padding: 10px 20px;
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .scan-card {
    padding: 20px;
  }
  .scan-card h2 {
    font-size: 1.6em;
  }
  .file-input-label, .action-button {
    padding: 8px 15px;
    font-size: 0.9em;
  }
}
</style>
