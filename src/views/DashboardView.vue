<!-- views/DashboardView.vue -->
<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentLanguage = inject('currentLanguage')
const auth = inject('auth') // Inject the auth instance from main.js

// Function to handle logout
const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/signin') // Redirect to login page after logout
  } catch (error) {
    console.error('Error logging out:', error)
    // Optionally display an error message to the user
  }
}
</script>

<template>
  <div class="dashboard-page">
    <main class="dashboard-main-content">
      <section class="dashboard-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{
            currentLanguage === 'en'
              ? 'Welcome to mSv Dose Tracker'
              : 'مرحبًا بك في متتبع جرعات الأشعة السينية'
          }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{
            currentLanguage === 'en'
              ? 'Your comprehensive tool for managing patient radiation exposure and recommendations.'
              : 'أداتك الشاملة لإدارة تعرض المرضى للإشعاع وتقديم التوصيات.'
          }}
        </p>

        <div class="dashboard-features">
          <div class="feature-item" @click="router.push('/recommend')">
            <i class="fas fa-file-medical"></i>
            <!-- Icon for recommendation -->
            <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Get Scan Recommendation' : 'الحصول على توصية' }}
            </h3>
            <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{
                currentLanguage === 'en'
                  ? 'Receive AI-powered recommendations for X-ray or CT scans based on patient data.'
                  : 'احصل على توصيات مدعومة بالذكاء الاصطناعي لفحوصات الأشعة السينية أو الأشعة المقطعية بناءً على بيانات المريض.'
              }}
            </p>
          </div>

          <div class="feature-item" @click="router.push('/patients')">
            <i class="fas fa-users"></i>
            <!-- Icon for patient management -->
            <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Manage Patients' : 'إدارة المرضى' }}
            </h3>
            <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{
                currentLanguage === 'en'
                  ? 'View, add, and manage patient records securely.'
                  : 'عرض وإضافة وإدارة سجلات المرضى بأمان.'
              }}
            </p>
          </div>
        </div>

        <button @click="handleLogout" class="action-button secondary logout-button">
          {{ currentLanguage === 'en' ? 'Logout' : 'تسجيل الخروج' }}
        </button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust height to account for global header */
  width: 100%;
}

.dashboard-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.dashboard-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 900px; /* Wider card for more content */
  width: 100%;
  border: 1px solid #eee;
}

.dashboard-card h2 {
  color: #8d99ae;
  margin-bottom: 20px;
  font-size: 2.2em;
  font-weight: 700;
}

.dashboard-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.dashboard-features {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
}

.feature-item {
  background-color: #e0e6ed;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  flex: 1;
  min-width: 280px; /* Minimum width for feature items */
  max-width: 350px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #d3dce6;
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.feature-item i {
  font-size: 3.5em;
  color: #8d99ae;
  margin-bottom: 15px;
}

.feature-item h3 {
  color: #6a7483;
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: 600;
}

.feature-item p {
  color: #777;
  font-size: 0.95em;
  line-height: 1.5;
  margin-bottom: 0;
}

.action-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  width: auto; /* Allow button to size based on content */
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.action-button.secondary {
  background-color: #6c757d;
}

.action-button.secondary:hover {
  background-color: #5a6268;
}

.logout-button {
  display: block; /* Make it a block element to center with margin auto */
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .dashboard-main-content {
    padding: 15px;
  }
  .dashboard-card {
    padding: 30px;
  }
  .dashboard-card h2 {
    font-size: 1.8em;
  }
  .dashboard-card p {
    font-size: 1em;
  }
  .dashboard-features {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .feature-item {
    min-width: 90%;
    max-width: 90%;
    padding: 20px;
  }
  .feature-item i {
    font-size: 3em;
  }
  .feature-item h3 {
    font-size: 1.3em;
  }
  .action-button {
    padding: 12px 25px;
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .dashboard-card {
    padding: 20px;
  }
  .dashboard-card h2 {
    font-size: 1.6em;
  }
  .feature-item {
    padding: 15px;
  }
  .feature-item i {
    font-size: 2.5em;
  }
  .feature-item h3 {
    font-size: 1.2em;
  }
  .action-button {
    padding: 10px 20px;
    font-size: 0.9em;
  }
}
</style>
