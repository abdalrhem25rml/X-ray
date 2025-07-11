<!-- App.vue -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref, watch } from 'vue'; // Import provide, ref, watch

// Global language state
const currentLanguage = ref('en'); // 'en' for English, 'ar' for Arabic

// Global info modal state
const showInfoModal = ref(false);

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'ar' : 'en';
  // Set document direction based on language
  document.documentElement.dir = currentLanguage.value === 'ar' ? 'rtl' : 'ltr';
};

const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value;
};

// Provide the language state and toggle function to all child components
provide('currentLanguage', currentLanguage);
provide('toggleLanguage', toggleLanguage);
provide('toggleInfoModal', toggleInfoModal); // Provide toggleInfoModal globally

// Watch for initial load to set document direction
watch(currentLanguage, (newLang) => {
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
}, { immediate: true });

// Information text content (moved from SignupView.vue)
const infoTextArabic = `
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>

<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>

<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP):</p>
<strong>الفئة:</strong> العاملون في المجال الطبي<br>
<strong>الحد السنوي المسموح به:</strong> 20 ميلي سيفرت (mSv)<br>
<strong>ملاحظات:</strong> كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.

<p><strong>الفئة:</strong> المرضى<br>
<strong>الحد السنوي المسموح به:</strong> لا يوجد حد صارم<br>
<strong>ملاحظات:</strong> يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA (As Low As Reasonably Achievable).</p>

<p><strong>الفئة:</strong> النساء الحوامل العاملات<br>
<strong>الحد السنوي المسموح به:</strong> 1 ميلي سيفرت للجنين خلال الحمل<br>
<strong>ملاحظات:</strong> يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.</p>

<p><strong>الفئة:</strong> العامة (غير العاملين بالمجال)<br>
<strong>الحد السنوي المسموح به:</strong> 1 ميلي سيفرت<br>
<strong>ملاحظات:</strong> في الظروف الطبيعية بدون إجراءات طبية.</p>

<p><strong>كيف تتم مراقبة الجرعات؟</strong></p>
<ul>
  <li><strong>أجهزة قياس الجرعة الشخصية</strong> (TLD أو Dosimeter) تُلبس على الجسم لتسجيل الجرعة اليومية أو الشهرية.</li>
  <li><strong>أنظمة إلكترونية ذكية</strong> تُستخدم في بعض المستشفيات لمتابعة الجرعة تلقائيًا وحفظ السجلات.</li>
  <li><strong>تحقيقات دورية</strong> من أقسام الوقاية الإشعاعية لمراجعة مستويات التعرض والتحقق من تطبيق إجراءات السلامة.</li>
</ul>

<p><strong>خطوات الوقاية</strong></p>
<ul>
  <li>استخدام <strong>الواقيات الرصاصية</strong> (مثل السترات والدروع).</li>
  <li>تقليل <strong>وقت التعرض</strong> قدر الإمكان.</li>
  <li>زيادة <strong>المسافة</strong> بين الشخص ومصدر الإشعاع.</li>
  <li>استخدام <strong>تقنيات تصوير بديلة</strong> مثل الموجات فوق الصوتية أو الرنين المغناطيسي عند الإمكان.</li>
  <li>اعتماد <strong>أنظمة ذكية</strong> لحساب الجرعات تلقائيًا وتنبيه الطبيب في حال تجاوز الحد الآمن.</li>
</ul>

<p>التعرض الإشعاعي ضرورة طبية لا يمكن الاستغناء عنها، ولكن لا ينبغي أبدًا الاستهانة بمخاطره. فالمعرفة والوقاية والتقنيات الحديثة تمثل عناصر أساسية لحماية كل من المرضى والعاملين. التوعية المستمرة والتدريب والرقابة تضمن تحقيق الفائدة من الإشعاع بأقل الأضرار، وتحافظ على بيئة صحية وآمنة للجميع.</p>
`;

const infoTextEnglish = `
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>

<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>

<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP):</p>
<strong>Category:</strong> Medical Professionals<br>
<strong>Annual Permissible Limit:</strong> 20 millisieverts (mSv)<br>
<strong>Notes:</strong> As an average over 5 years, provided it does not exceed 50 mSv in a single year.

<p><strong>Category:</strong> Patients<br>
<strong>Annual Permissible Limit:</strong> No strict limit<br>
<strong>Notes:</strong> Exposure should be reduced as much as possible according to the ALARA principle (As Low As Reasonably Achievable).</p>

<p><strong>Category:</strong> Pregnant Workers<br>
<strong>Annual Permissible Limit:</strong> 1 millisievert for the fetus during pregnancy<br>
<strong>Notes:</strong> The dose should not exceed 1 mSv from the date of knowledge of pregnancy until birth.</p>

<p><strong>Category:</strong> General Public (non-medical workers)<br>
<strong>Annual Permissible Limit:</strong> 1 millisievert<br>
<strong>Notes:</strong> Under normal circumstances without medical procedures.</p>

<p><strong>How are doses monitored?</strong></p>
<ul>
  <li><strong>Personal dose measuring devices</strong> (TLD or Dosimeter) are worn on the body to record daily or monthly doses.</li>
  <li><strong>Smart electronic systems</strong> are used in some hospitals to automatically track doses and maintain records.</li>
  <li><strong>Periodic investigations</strong> by radiation protection departments to review exposure levels and verify the implementation of safety procedures.</li>
</ul>

<p><strong>Prevention Steps</strong></p>
<ul>
  <li>Use <strong>lead shields</strong> (e.g., aprons and barriers).</li>
  <li>Reduce <strong>exposure time</strong> as much as possible.</li>
  <li>Increase the <strong>distance</strong> between the person and the radiation source.</li>
  <li>Use <strong>alternative imaging techniques</strong> such as ultrasound or MRI when possible.</li>
  <li>Adopt <strong>smart systems</strong> to automatically calculate doses and alert the doctor if the safe limit is exceeded.</li>
</ul>

<p>Radiation exposure is a medical necessity that cannot be dispensed with, but its risks should never be underestimated. Knowledge, prevention, and modern technologies are essential elements to protect both patients and workers. Continuous awareness, training, and monitoring ensure that the benefits of radiation are achieved with minimal harm, maintaining a healthy and safe environment for everyone.</p>
`;
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col font-inter">
    <!-- Global Header Section -->
    <header class="app-header">
      <!-- Language Toggle Button -->
      <button
        @click="toggleLanguage"
        class="language-toggle-button"
        aria-label="Toggle language between Arabic and English"
      >
        {{ currentLanguage === 'en' ? 'العربية' : 'English' }}
      </button>

      <h1 class="project-title">
        {{ currentLanguage === 'en' ? 'X-Ray Exposure Calculator' : 'حاسبة التعرض للأشعة السينية' }}
      </h1>
      <!-- Global Info Button -->
      <button @click="toggleInfoModal" class="info-button-global">
        {{ currentLanguage === 'en' ? 'Information' : 'معلومات' }}
      </button>
    </header>

    <!-- The router-view will render the component for the current route -->
    <router-view v-slot="{ Component }">
      <Transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>

    <!-- Global Information Modal (moved from SignupView.vue) -->
    <Transition name="modal-fade">
      <div v-if="showInfoModal" class="modal-overlay" @click.self="toggleInfoModal">
        <div class="modal-content">
          <button class="close-modal-button" @click="toggleInfoModal">
            &times;
          </button>
          <h2 class="modal-title">
            {{ currentLanguage === 'en' ? 'Radiation Exposure Awareness' : 'التوعية بالتعرض الإشعاعي' }}
          </h2>
          <!-- Conditionally display Arabic or English content -->
          <div v-if="currentLanguage === 'ar'" class="info-section">
            <h3 class="lang-heading" dir="rtl">العربية (Arabic)</h3>
            <div class="lang-text arabic-text" v-html="infoTextArabic"></div> <!-- Use v-html here -->
            <!-- Arabic table for ICRP limits -->
            <div class="overflow-x-auto mt-4 rounded-lg border border-gray-300">
              <table class="info-table" dir="rtl"> <!-- Added dir="rtl" here -->
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الفئة</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحد السنوي المسموح به</th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ملاحظات</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">العاملون في المجال الطبي</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">20 ميلي سيفرت (mSv)</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">المرضى</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">لا يوجد حد صارم</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA (As Low As Reasonably Achievable).</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">النساء الحوامل العاملات</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 ميلي سيفرت للجنين خلال الحمل</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">العامة (غير العاملين بالمجال)</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 ميلي سيفرت</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">في الظروف الطبيعية بدون إجراءات طبية.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-4 lang-text arabic-text">
              التعرض الإشعاعي ضرورة طبية لا يمكن الاستغناء عنها، ولكن لا ينبغي أبدًا الاستهانة بمخاطره. فالمعرفة والوقاية والتقنيات الحديثة تمثل عناصر أساسية لحماية كل من المرضى والعاملين. التوعية المستمرة والتدريب والرقابة تضمن تحقيق الفائدة من الإشعاع بأقل الأضرار، وتحافظ على بيئة صحية وآمنة للجميع.
            </p>
          </div>
          <div v-else class="info-section">
            <h3 class="lang-heading" dir="ltr">English</h3>
            <div class="lang-text english-text" v-html="infoTextEnglish"></div> <!-- Use v-html here -->
            <!-- English table for ICRP limits -->
            <div class="overflow-x-auto mt-4 rounded-lg border border-gray-300">
              <table class="info-table" dir="ltr"> <!-- Added dir="ltr" here for consistency -->
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Permissible Limit</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Medical Professionals</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">20 mSv</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Averaged over 5 years, not exceeding 50 mSv in any single year.</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Patients</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">No strict limit</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Exposure should be as low as reasonably achievable (ALARA principle).</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Pregnant Workers</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 mSv to the fetus during pregnancy</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dose should not exceed 1 mSv from the date of knowledge of pregnancy until birth.</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">General Public (Non-Occupational)</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1 mSv</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Under normal conditions without medical procedures.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="mt-4 lang-text english-text">
              Radiation exposure is a medical necessity that cannot be dispensed with, but its risks should never be underestimated. Knowledge, prevention, and modern technologies are essential elements to protect both patients and workers. Continuous awareness, training, and monitoring ensure that the benefits of radiation are achieved with minimal harm, maintaining a healthy and safe environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
/* Import Google Fonts - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
/* Import Google Fonts - Cairo for Arabic text */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

/* Basic global styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif; /* Ensure Inter is applied globally */
  background-color: #f0f2f5;
  overflow-x: hidden; /* Prevent horizontal scroll during transitions */
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* flex-grow handles the height */
}

/* Global Header Styling (moved from SignupView) */
.app-header {
  background-color: #F1E234; /* Bright Yellow */
  padding: 20px 30px;
  display: flex;
  justify-content: center; /* Center the title initially */
  align-items: center;
  position: relative; /* For positioning the language and info buttons */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 80px; /* Ensure a decent height */
}

.project-title {
  color: #000; /* Black text as requested */
  font-size: 2.8em; /* Larger, more impactful title */
  font-weight: 800; /* Extra bold */
  text-align: center;
  flex-grow: 1; /* Allow it to take up space and help centering */
  /* Adjust margin-left and margin-right to account for both left and right buttons */
  margin-left: 120px; /* Offset for the language button */
  margin-right: 120px; /* Offset for the info button */
}

.language-toggle-button {
  position: absolute;
  left: 30px; /* Top left corner */
  top: 50%;
  transform: translateY(-50%); /* Vertically center */
  background-color: #8D99AE; /* Desired accent color */
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px; /* Slightly more rounded corners */
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.language-toggle-button:hover {
  background-color: #6a7483; /* Darker shade on hover */
  transform: translateY(-50%) scale(1.03); /* Slight scale effect */
}

.info-button-global { /* Renamed to avoid conflict with potential local info buttons */
  position: absolute;
  right: 30px; /* Top right corner */
  top: 50%;
  transform: translateY(-50%); /* Vertically center */
  background-color: #8D99AE; /* Desired accent color */
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px; /* Slightly more rounded corners */
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.info-button-global:hover {
  background-color: #6a7483; /* Darker shade on hover */
  transform: translateY(-50%) scale(1.03); /* Slight scale effect */
}

/* Modal Styling (moved from SignupView) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px; /* Padding for smaller screens */
}

.modal-content {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); /* Stronger shadow */
  max-width: 900px; /* Wider modal for better text flow */
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: fadeInScale 0.4s ease-out forwards; /* Smoother animation */
}

.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em; /* Larger X for easier clicking */
  cursor: pointer;
  color: #8D99AE; /* Use accent color for consistency */
  transition: color 0.3s ease, transform 0.2s ease;
}

.close-modal-button:hover {
  color: #555;
  transform: rotate(90deg); /* Spin effect on close */
}

.modal-title {
  text-align: center;
  color: #8D99AE;
  margin-bottom: 30px;
  font-size: 2.2em;
  font-weight: 700;
}

.info-section {
  margin-bottom: 25px; /* Spacing between sections */
}

.lang-heading {
  color: #555;
  margin-bottom: 15px;
  font-size: 1.6em;
  font-weight: 600;
  border-bottom: 2px solid #eee; /* Subtle separator */
  padding-bottom: 5px;
}

.lang-text {
  line-height: 1.8; /* Increased line height for readability */
  font-size: 1.1em;
  text-align: justify;
  /* Removed white-space: pre-wrap; to allow proper HTML rendering */
  color: #444; /* Slightly darker text for readability */
}

/* Styles for lists within the info modal text */
.lang-text ul {
  list-style-type: disc !important; /* Ensures the bullet points appear, overriding any reset */
  list-style-position: outside !important; /* Ensures bullets are outside the content */
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  /* Removed padding-left: 0 !important; padding-right: 0 !important; from here */
}

.lang-text.english-text ul {
  padding-left: 20px !important; /* Explicit padding for LTR lists */
  margin-left: 0 !important; /* Ensure no additional margin */
  margin-right: 0 !important;
}

.lang-text.arabic-text ul {
  padding-right: 20px !important; /* Explicit padding for RTL lists */
  padding-left: 0 !important; /* Ensure no left padding */
  margin-right: 0 !important; /* Ensure no additional margin */
  margin-left: 0 !important;
}

.lang-text li {
  margin-bottom: 5px !important; /* Spacing between list items */
  /* No specific text-align here, let it inherit or default */
}


.arabic-text {
  direction: rtl; /* Right-to-left for Arabic */
  text-align: justify;
  font-family: 'Cairo', 'Arial', sans-serif; /* Use Cairo for Arabic */
}

.english-text {
  direction: ltr;
}

.section-divider {
  border: 0;
  height: 1px;
  background-color: #dde;
  margin: 40px 0; /* More spacing for the divider */
}

/* Table specific styling for borders */
.info-table {
  width: 100%;
  border-collapse: collapse; /* Ensures borders are collapsed */
  margin-top: 20px;
  border: 1px solid #ccc; /* Outer border for the table */
}

.info-table th,
.info-table td {
  border: 1px solid #ddd; /* All sides border for cells */
  padding: 12px 15px;
}

/* Specific text alignment for Arabic table */
.info-table[dir="rtl"] th,
.info-table[dir="rtl"] td {
  text-align: right; /* Align text to the right for RTL tables */
}

/* Specific text alignment for English table */
.info-table[dir="ltr"] th,
.info-table[dir="ltr"] td {
  text-align: left; /* Align text to the left for LTR tables */
}


.info-table th {
  background-color: #8D99AE; /* Accent color for table header */
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}

.info-table tr:nth-child(even) {
  background-color: #f9f9f9; /* Zebra striping for readability */
}

.info-table tr:hover {
  background-color: #f0f0f0; /* Hover effect */
}


/* Modal Transition Animations */
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

/* Page Transition Styles */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease; /* Fade duration */
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0; /* Start/End completely transparent */
}

/* Responsive Adjustments for Global Header */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    padding: 15px 20px;
    min-height: auto; /* Allow height to adjust */
  }

  .project-title {
    font-size: 2em;
    margin-bottom: 15px;
    margin-left: 0; /* Reset margin for smaller screens */
    margin-right: 0;
    order: 2; /* Put title below buttons on small screens */
  }

  .language-toggle-button {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-bottom: 10px; /* Space below button */
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 1; /* Put language button at the top */
  }

  .info-button-global {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-top: 10px;
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 3; /* Put info button below title */
  }

  /* Responsive adjustments for modal table */
  .info-table th,
  .info-table td {
    padding: 8px 10px;
    font-size: 0.85em;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.6em;
  }

  .info-button-global, .language-toggle-button {
    font-size: 0.9em;
    padding: 8px 15px;
  }
}
</style>
