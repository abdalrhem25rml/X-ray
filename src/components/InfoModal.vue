<script setup>
defineProps({
  show: Boolean,
  currentLanguage: String,
})

defineEmits(['close'])

// The text constants should NOT include the table. The table is defined statically in the template.
const infoTextArabic = `
<p>التعرض الإشعاعي هو كمية الإشعاع التي يتلقاها الجسم عند مروره في بيئة تحتوي على إشعاع مؤين، مثل الأشعة السينية (X-rays) أو الأشعة المقطعية (CT). وتُقاس الجرعة الإشعاعية بوحدة "الميلي سيفرت" (mSv)، وهي وحدة تعكس التأثير البيولوجي للإشعاع على أنسجة الجسم.</p>
<p>تكمن الخطورة في أن الإشعاع المؤين يمكن أن يسبب تلفًا في الخلايا، مما يزيد من خطر الإصابة بالأمراض المزمنة مثل السرطان، خاصةً مع التعرض المتكرر أو الطويل. لذلك:</p>
<ul>
  <li><strong>المرضى</strong> يجب ألا يتعرضوا إلا عند الضرورة، ويجب تسجيل كل فحص وتقييم فائدته مقابل ضرره.</li>
  <li><strong>العاملون في المجال الطبي</strong> مثل أطباء الأشعة وفنيي الأشعة، يتعرضون بشكل مزمن، مما يستدعي مراقبة دورية واتباع إجراءات السلامة.</li>
  <li><strong>النساء الحوامل</strong> هن فئة خاصة يجب أخذ الحيطة الشديدة عند تعرّضهن للإشعاع لتجنّب التأثير على الجنين.</li>
</ul>
<p><strong>الحد السنوي المسموح به للتعرض الإشعاعي</strong><br>
وفقًا لتوصيات اللجنة الدولية للحماية من الإشعاع (ICRP)، هذه هي الحدود الموصى بها:</p>
`

const infoTextEnglish = `
<p>Radiation exposure is the amount of radiation received by the body when passing through an environment containing ionizing radiation, such as X-rays or CT scans. The radiation dose is measured in "millisieverts" (mSv), a unit that reflects the biological effect of radiation on body tissues.</p>
<p>The danger lies in the fact that ionizing radiation can cause cell damage, increasing the risk of chronic diseases like cancer, especially with repeated or prolonged exposure. Therefore:</p>
<ul>
  <li><strong>Patients</strong> should only be exposed when necessary, and every examination should be recorded and its benefit evaluated against its harm.</li>
  <li><strong>Medical professionals</strong>, such as radiologists and radiology technicians, are chronically exposed, requiring periodic monitoring and adherence to safety procedures.</li>
  <li><strong>Pregnant women</strong> are a special category who should exercise extreme caution when exposed to radiation to avoid affecting the fetus.</li>
</ul>
<p><strong>Annual Permissible Radiation Exposure Limit</strong><br>
According to the recommendations of the International Commission on Radiological Protection (ICRP), these are the recommended limits:</p>
`
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
        <button class="close-modal-button" @click="$emit('close')">&times;</button>
        <h2 class="modal-title">
          {{ currentLanguage === 'en' ? 'Radiation Exposure Awareness' : 'التوعية بالتعرض الإشعاعي' }}
        </h2>

        <!-- English Content -->
        <div v-if="currentLanguage === 'en'" class="info-text-content">
          <div v-html="infoTextEnglish"></div>
          <div class="overflow-x-auto mt-4">
            <table class="info-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Annual Permissible Limit</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Medical Professionals</td>
                  <td>20 mSv</td>
                  <td>Averaged over 5 years, not exceeding 50 mSv in any single year.</td>
                </tr>
                <tr>
                  <td>Patients</td>
                  <td>No strict limit</td>
                  <td>Exposure should be as low as reasonably achievable (ALARA principle).</td>
                </tr>
                <tr>
                  <td>Pregnant Workers</td>
                  <td>1 mSv to the fetus</td>
                  <td>From the date of knowledge of pregnancy until birth.</td>
                </tr>
                <tr>
                  <td>General Public</td>
                  <td>1 mSv</td>
                  <td>Under normal conditions without medical procedures.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Arabic Content -->
        <div v-else class="info-text-content">
          <div v-html="infoTextArabic"></div>
          <div class="overflow-x-auto mt-4">
            <table class="info-table">
              <thead>
                <tr>
                  <th>الفئة</th>
                  <th>الحد السنوي المسموح به</th>
                  <th>ملاحظات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>العاملون في المجال الطبي</td>
                  <td>20 ميلي سيفرت (mSv)</td>
                  <td>كمتوسط على مدى 5 سنوات، بشرط ألا يتجاوز 50 mSv في سنة واحدة.</td>
                </tr>
                <tr>
                  <td>المرضى</td>
                  <td>لا يوجد حد صارم</td>
                  <td>يجب تقليل التعرض بقدر الإمكان وفق مبدأ ALARA.</td>
                </tr>
                <tr>
                  <td>النساء الحوامل العاملات</td>
                  <td>1 ميلي سيفرت للجنين خلال الحمل</td>
                  <td>يجب ألا تتجاوز الجرعة 1 mSv من تاريخ العلم بالحمل وحتى الولادة.</td>
                </tr>
                <tr>
                  <td>العامة (غير العاملين بالمجال)</td>
                  <td>1 ميلي سيفرت</td>
                  <td>في الظروف الطبيعية بدون إجراءات طبية.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.75); display: flex;
  justify-content: center; align-items: center; z-index: 1000; padding: 20px;
}
.modal-content {
  background-color: white; padding: 30px 40px; border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); max-width: 900px;
  width: 100%; max-height: 90vh; overflow-y: auto; position: relative;
}
.modal-content[dir="rtl"] {
  font-family: 'Cairo', sans-serif;
}
.close-modal-button {
  position: absolute; top: 15px; right: 15px; background: none; border: none;
  font-size: 2.5em; cursor: pointer; color: #aaa;
  transition: color 0.2s ease, transform 0.2s ease;
}
.close-modal-button:hover {
  color: #333;
  transform: rotate(90deg);
}
.modal-title {
  text-align: center; color: #8d99ae; margin-bottom: 30px;
  font-size: 2.2em; font-weight: 700;
}

/* Container for v-html content */
.info-text-content {
  color: #333;
  text-align: justify;
}

/* ✅ FIX: Styles for elements inside v-html */
.info-text-content :deep(p) {
  line-height: 1.8;
  margin-bottom: 1.2em;
  font-size: 1.05em;
}
.info-text-content :deep(strong) {
  font-weight: 700;
  color: #2c3e50;
}
.info-text-content :deep(ul) {
  list-style-type: disc;
  list-style-position: outside; /* Aligns bullets correctly */
  margin-bottom: 1.2em;
}
/* Indentation for LTR (English) */
.info-text-content[dir="ltr"] :deep(ul) {
  padding-left: 25px;
}
/* Indentation for RTL (Arabic) */
.info-text-content[dir="rtl"] :deep(ul) {
  padding-right: 25px;
}
.info-text-content :deep(li) {
  margin-bottom: 0.6em;
  padding-left: 5px;
}
.info-text-content[dir="rtl"] :deep(li) {
  padding-left: 0;
  padding-right: 5px;
}

/* ✅ Improved Table Styles */
.info-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  font-size: 0.95em;
}
.info-table th, .info-table td {
  border: 1px solid #e0e0e0;
  padding: 12px 15px;
  text-align: left;
  vertical-align: middle;
}
.modal-content[dir="rtl"] .info-table th,
.modal-content[dir="rtl"] .info-table td {
  text-align: right;
}
.info-table th {
  background-color: #f7f9fc;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.5px;
}
.info-table tbody tr:nth-child(even) {
  background-color: #fdfdfd;
}
.info-table tbody tr:hover {
  background-color: #f1f5f9;
}

/* Modal transition styles */
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
</style>
