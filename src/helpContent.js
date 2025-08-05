export const helpContent = {
  dashboard: {
    en: {
      title: 'Dashboard Guide',
      body: `
        The Dashboard is your central hub.
        <ul>
          <li><strong>Welcome Message:</strong> A quick greeting and overview.</li>
          <li><strong>Get Scan Recommendation:</strong> Navigates to a page where you can use an AI tool to check if a radiological scan is necessary.</li>
          <li><strong>Manage Patients (Doctors Only):</strong> Access a list of your patients to view their history, edit details, or add new scans.</li>
          <li><strong>View Profile:</strong> Go to your personal profile page to see your details and your personal scan history.</li>
        </ul>
        <p>If this is your first time logging in, you will see a "Complete Your Profile" modal. You must fill this out to use the app.</p>
      `,
    },
    ar: {
      title: 'دليل لوحة التحكم',
      body: `
        لوحة التحكم هي مركزك الرئيسي.
        <ul>
          <li><strong>رسالة الترحيب:</strong> تحية سريعة ونظرة عامة.</li>
          <li><strong>الحصول على توصية فحص:</strong> ينقلك إلى صفحة حيث يمكنك استخدام أداة الذكاء الاصطناعي للتحقق من ضرورة إجراء فحص إشعاعي.</li>
          <li><strong>إدارة المرضى (للأطباء فقط):</strong> يمكنك الوصول إلى قائمة مرضاك لعرض تاريخهم، تعديل تفاصيلهم، أو إضافة فحوصات جديدة.</li>
          <li><strong>عرض الملف الشخصي:</strong> انتقل إلى صفحتك الشخصية لرؤية تفاصيلك وسجل فحوصاتك الشخصية.</li>
        </ul>
        <p>إذا كانت هذه هي المرة الأولى التي تسجل فيها الدخول، فسترى نافذة "أكمل ملفك الشخصي". يجب عليك ملء هذا النموذج لاستخدام التطبيق.</p>
      `,
    },
  },
  recommend: {
    en: {
      title: 'Recommendation Page Guide',
      body: `
        This page uses AI to provide a recommendation about a potential radiological scan.
        <ul>
          <li><strong>Mode Switcher:</strong> Choose between getting a recommendation for yourself ('For Myself') or for a patient ('For Another Patient' if you are a doctor).</li>
          <li><strong>Patient Details:</strong> Fill in the patient's information. For 'personal' mode, your data is loaded automatically.</li>
          <li><strong>Scan Details:</strong> Specify the exact type and protocol of the scan being considered. This is critical for an accurate dose estimation.</li>
          <li><strong>Get Recommendation:</strong> After filling the form, click this to send the data to the AI for analysis.</li>
        </ul>
        <p>The goal is to adhere to the <strong>ALARA (As Low As Reasonably Achievable)</strong> principle by avoiding unnecessary radiation exposure.</p>
      `,
    },
    ar: {
      title: 'دليل صفحة التوصيات',
      body: `
        تستخدم هذه الصفحة الذكاء الاصطناعي لتقديم توصية بشأن فحص إشعاعي محتمل.
        <ul>
          <li><strong>مفتاح الوضع:</strong> اختر بين الحصول على توصية لنفسك ('لنفسي') أو لمريض ('لمريض آخر' إذا كنت طبيباً).</li>
          <li><strong>تفاصيل المريض:</strong> املأ معلومات المريض. في وضع 'لنفسي'، يتم تحميل بياناتك تلقائيًا.</li>
          <li><strong>تفاصيل الفحص:</strong> حدد النوع والبروتوكول الدقيق للفحص قيد الدراسة. هذا حاسم لتقدير الجرعة بدقة.</li>
          <li><strong>الحصول على توصية:</strong> بعد ملء النموذج، انقر هنا لإرسال البيانات إلى الذكاء الاصطناعي لتحليلها.</li>
        </ul>
        <p>الهدف هو الالتزام بمبدأ <strong>ALARA (أقل ما يمكن تحقيقه بشكل معقول)</strong> عن طريق تجنب التعرض غير الضروري للإشعاع.</p>
      `,
    },
  },
  patients: {
    en: {
      title: 'Manage Patients Guide',
      body: `
        This page allows doctors to manage their patient records.
        <ul>
          <li><strong>Add New Patient:</strong> Opens a form to add a new patient to your list.</li>
          <li><strong>Patient Table:</strong> Displays all your current patients.</li>
          <li><strong>Actions:</strong> Each patient has four action buttons:
            <ul>
              <li><strong style="color: #5bc0de;">View (Eye Icon):</strong> See the patient's full scan history and edit it.</li>
              <li><strong style="color: #f0ad4e;">Edit (Pencil Icon):</strong> Modify the patient's personal details.</li>
              <li><strong style="color: #d9534f;">Delete (Trash Icon):</strong> Permanently remove the patient and their records.</li>
              <li><strong style="color: #28a745;">Recommend (Medical File Icon):</strong> Go to the Recommendation page for this patient.</li>
            </ul>
          </li>
        </ul>
      `,
    },
    ar: {
      title: 'دليل إدارة المرضى',
      body: `
        تتيح هذه الصفحة للأطباء إدارة سجلات مرضاهم.
        <ul>
          <li><strong>إضافة مريض جديد:</strong> يفتح نموذجًا لإضافة مريض جديد إلى قائمتك.</li>
          <li><strong>جدول المرضى:</strong> يعرض جميع مرضاك الحاليين.</li>
          <li><strong>الإجراءات:</strong> لكل مريض أربعة أزرار إجراءات:
            <ul>
              <li><strong style="color: #5bc0de;">عرض (أيقونة العين):</strong> شاهد سجل الفحوصات الكامل للمريض و عدل عليه.</li>
              <li><strong style="color: #f0ad4e;">تعديل (أيقونة القلم):</strong> قم بتعديل التفاصيل الشخصية للمريض.</li>
              <li><strong style="color: #d9534f;">حذف (أيقونة سلة المهملات):</strong> قم بإزالة المريض وسجلاته بشكل دائم.</li>
              <li><strong style="color: #28a745;">توصية (أيقونة الملف الطبي):</strong> انتقل إلى صفحة التوصيات لهذا المريض.</li>
            </ul>
          </li>
        </ul>
      `,
    },
  },
  profile: {
    en: {
      title: 'Profile Page Guide',
      body: `
        This is your personal space to manage your information and scan history.
        <ul>
          <li><strong>My Profile Section:</strong> Displays your current details. Click 'Edit Profile' to update your information, including pregnancy status.</li>
          <li><strong>Personal Scan History:</strong> This table lists all radiological scans you have logged for yourself.
            <ul>
              <li>Click 'Add Personal Scan' to log a new scan.</li>
              <li>Use the 'Edit' and 'Delete' icons on each row to manage existing entries.</li>
            </ul>
          </li>
        </ul>
        <p>Keeping your profile and scan history accurate ensures the mSv dose tracker in the header is always correct.</p>
      `,
    },
    ar: {
      title: 'دليل صفحة الملف الشخصي',
      body: `
        هذه هي مساحتك الشخصية لإدارة معلوماتك وسجل فحوصاتك.
        <ul>
          <li><strong>قسم ملفي الشخصي:</strong> يعرض تفاصيلك الحالية. انقر على 'تعديل الملف الشخصي' لتحديث معلوماتك، بما في ذلك حالة الحمل.</li>
          <li><strong>سجل الفحوصات الشخصية:</strong> يسرد هذا الجدول جميع الفحوصات الإشعاعية التي سجلتها لنفسك.
            <ul>
              <li>انقر على 'إضافة فحص شخصي' لتسجيل فحص جديد.</li>
              <li>استخدم أيقونات 'تعديل' و 'حذف' في كل صف لإدارة الإدخالات الحالية.</li>
            </ul>
          </li>
        </ul>
        <p>يضمن الحفاظ على دقة ملفك الشخصي وسجل الفحوصات أن يكون متتبع جرعات mSv في الرأس صحيحًا دائمًا.</p>
      `,
    },
  },
}
