<!-- SignupView.vue -->
<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Get the router instance

const showInfoModal = ref(false);
const currentLanguage = ref('en'); // 'en' for English, 'ar' for Arabic

const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value;
};

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'ar' : 'en';
  // Update document direction based on language
  document.documentElement.dir = currentLanguage.value === 'ar' ? 'rtl' : 'ltr';
};

const navigateToLogin = () => {
  router.push('/login'); // Navigate to the /login path
};

// Watch for language changes to update the document direction on initial load
watch(currentLanguage, (newLang) => {
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
}, { immediate: true }); // immediate: true to run on initial load

const infoTextArabic = `
التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.

تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:
المرضى يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.
العاملون في المجال الطبي مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.
النساء الحوامل هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.

الحد السنوي المسموح به للتعرض الإشعاعي
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP):
الفئة: العاملون في المجال الطبي
الحد السنوي المسموح به: 20 ميلي سيفرت (mSv)
ملاحظات: كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.

الفئة: المرضى
الحد السنوي المسموح به: لا يوجد حد صارم
ملاحظات: يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA (As Low As Reasonably Achievable).

الفئة: النساء الحوامل العاملات
الحد السنوي المسموح به: 1 ميلي سيفرت للجنين خلال الحمل
ملاحظات: يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.

الفئة: العامة (غير العاملين بالمجال)
الحد السنوي المسموح به: 1 ميلي سيفرت
ملاحظات: في الظروف الطبيعية بدون إجراءات طبية.

كيف تتم مراقبة الجرعات؟
أجهزة قياس الجرعة الشخصية (TLD أو Dosimeter) تُلبس على الجسم لتسجيل الجرعة اليومية أو الشهرية.
أنظمة إلكترونية ذكية تُستخدم في بعض المستشفيات لمتابعة الجرعة تلقائيًا وحفظ السجلات.
تحقيقات دورية من أقسام الوقاية الإشعاعية لمراجعة مستويات التعرض والتحقق من تطبيق إجراءات السلامة

خطوات الوقاية
استخدام الواقيات الرصاصية (مثل السترات والدروع).
تقليل وقت التعرض قدر الإمكان.
زيادة المسافة بين الشخص ومصدر الإشعاع.
استخدام تقنيات تصوير بديلة مثل الموجات فوق الصوتية أو الرنين المغناطيسي عند الإمكان.
اعتماد أنظمة ذكية لحساب الجرعات تلقائيًا وتنبيه الطبيب في حال تجاوز الحد الآمن.

التعرض الإشعاعي ضرورة طبية لا يمكن الاستغناء عنها، ولكن لا ينبغي أبدًا الاستهانة بمخاطره. فالمعرفة والوقاية والتقنيات الحديثة تمثل عناصر أساسية لحماية كل من المرضى والعاملين. التوعية المستمرة والتدريب والرقابة تضمن تحقيق الفائدة من الإشعاع بأقل الأضرار، وتحافظ على بيئة صحية وآمنة للجميع
`;

const infoTextEnglish = `
Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.

The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:
**Patients** should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.
**Medical professionals**, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.
**Pregnant women** are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.

**Annual Permissible Radiation Exposure Limit**
According to the recommendations of the International Commission on Radiological Protection (ICRP):
**Category:** Medical Professionals
**Annual Permissible Limit:** 20 millisieverts (mSv)
**Notes:** As an average over 5 years, provided it does not exceed 50 mSv in a single year.

**Category:** Patients
**Annual Permissible Limit:** No strict limit
**Notes:** Exposure should be reduced as much as possible according to the ALARA principle (As Low As Reasonably Achievable).

**Category:** Pregnant Workers
**Annual Permissible Limit:** 1 millisievert for the fetus during pregnancy
**Notes:** The dose should not exceed 1 mSv from the date of knowledge of pregnancy until birth.

**Category:** General Public (non-medical workers)
**Annual Permissible Limit:** 1 millisievert
**Notes:** Under normal circumstances without medical procedures.

**How are doses monitored?**
**Personal dose measuring devices** (TLD or Dosimeter) are worn on the body to record daily or monthly doses.
**Smart electronic systems** are used in some hospitals to automatically track doses and maintain records.
**Periodic investigations** by radiation protection departments to review exposure levels and verify the implementation of safety procedures.

**Prevention Steps**
* Use **lead shields** (e.g., aprons and barriers).
* Reduce **exposure time** as much as possible.
* Increase the **distance** between the person and the radiation source.
* Use **alternative imaging techniques** such as ultrasound or MRI when possible.
* Adopt **smart systems** to automatically calculate doses and alert the doctor if the safe limit is exceeded.

Radiation exposure is a medical necessity that cannot be dispensed with, but its risks should never be underestimated. Knowledge, prevention, and modern technologies are essential elements to protect both patients and workers. Continuous awareness, training, and monitoring ensure that radiation benefits are achieved with minimal harm, maintaining a healthy and safe environment for everyone.
`;
</script>

<template>
  <div class="signup-page">
    <main class="signup-main-content">
      <section class="signup-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Welcome! Please Sign Up' : 'أهلاً بك! يرجى التسجيل' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'This is where your elegant signup form will be designed.' : 'هنا سيتم تصميم نموذج التسجيل الأنيق الخاص بك.' }}
        </p>
        <!-- Signup form elements would go here -->
        <button class="action-button primary">
          {{ currentLanguage === 'en' ? 'Create Account' : 'إنشاء حساب' }}
        </button>
        <p class="switch-link-container" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Already have an account?' : 'هل لديك حساب بالفعل؟' }}
          <a href="#" @click.prevent="navigateToLogin">
            {{ currentLanguage === 'en' ? 'Sign In' : 'تسجيل الدخول' }}
          </a>
        </p>
      </section>
    </main>

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
            <p class="lang-text arabic-text">{{ infoTextArabic }}</p>
            <!-- Arabic table for ICRP limits -->
            <div class="overflow-x-auto mt-4 rounded-lg border border-gray-300">
              <table class="min-w-full divide-y divide-gray-200">
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
            <p class="lang-text english-text">{{ infoTextEnglish }}</p>
            <!-- English table for ICRP limits -->
            <div class="overflow-x-auto mt-4 rounded-lg border border-gray-300">
              <table class="min-w-full divide-y divide-gray-200">
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
              Radiation exposure is a medical necessity that cannot be dispensed with, but its risks should never be underestimated. Knowledge, prevention, and modern technologies are essential elements to protect both patients and workers. Continuous awareness, training, and monitoring ensure that radiation benefits are achieved with minimal harm, maintaining a healthy and safe environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Main Page Layout */
.signup-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

/* Header Styling */
.app-header {
  background-color: #F1E234; /* Bright Yellow */
  padding: 20px 30px;
  display: flex;
  justify-content: center; /* Center the title initially */
  align-items: center;
  position: relative; /* For positioning the info and language buttons */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 80px; /* Ensure a decent height */
}

.project-title {
  color: #000; /* Black text as requested */
  font-size: 2.8em; /* Larger, more impactful title */
  font-weight: 800; /* Extra bold */
  text-align: center;
  flex-grow: 1; /* Allow it to take up space and help centering */
  /* Adjust margin-left to account for both left and right buttons */
  margin-left: 60px; /* Offset for the language button */
  margin-right: 60px; /* Offset for the info button */
}

.info-button {
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

.info-button:hover {
  background-color: #6a7483; /* Darker shade on hover */
  transform: translateY(-50%) scale(1.03); /* Slight scale effect */
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

/* Main Content Area */
.signup-main-content {
  flex-grow: 1; /* Takes remaining vertical space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa; /* Consistent light background */
}

.signup-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px; /* Nicer rounded corners */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* More pronounced shadow */
  text-align: center;
  max-width: 500px;
  width: 100%;
  border: 1px solid #eee; /* Subtle border */
}

.signup-card h2 {
  color: #8D99AE; /* Accent color for headings */
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.signup-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
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
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px); /* Slight lift effect */
}

/* Modal Styling */
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
  white-space: pre-wrap; /* Preserves formatting */
  color: #444; /* Slightly darker text for readability */
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

/* Responsive Adjustments */
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

  .info-button {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-top: 10px;
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 3; /* Put info button below title */
  }

  .language-toggle-button {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-bottom: 10px; /* Space below button */
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 1; /* Put language button at the top */
  }

  .signup-card {
    padding: 30px;
  }

  .signup-card h2 {
    font-size: 1.8em;
  }

  .modal-content {
    padding: 25px;
    max-width: 95%; /* More space on smaller screens */
  }

  .close-modal-button {
    font-size: 2em;
    top: 10px;
    right: 10px;
  }

  .modal-title {
    font-size: 1.8em;
  }

  .lang-heading {
    font-size: 1.4em;
  }

  .lang-text {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.6em;
  }

  .info-button, .language-toggle-button {
    font-size: 0.9em;
    padding: 8px 15px;
  }

  .signup-card {
    padding: 20px;
  }

  .action-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}

.switch-link-container {
  margin-top: 25px; /* Space above the link */
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
</style>
