<!-- views/DashboardView.vue -->
<script setup>
import { ref, inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getFirestore, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore'
const appId = import.meta.env.VITE_APP_ID
const auth = inject('auth')
const currentLanguage = inject('currentLanguage')
const router = useRouter()

const firestore = getFirestore()
const showRoleModal = ref(false)
const selectedRole = ref(null)

const checkUserRole = async () => {
  const user = auth.currentUser;
  if (!user) return router.push("/signin");
  const userDocRef = doc(firestore, "artifacts", appId, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // Create minimal user document
    await setDoc(userDocRef, { email: user.email, createdAt: new Date() });
    // Optionally trigger the "pick a role" modal here
    showRoleModal.value = true;
    return;
  }

  const userData = userSnapshot.data();
  if (!userData.role) {
    showRoleModal.value = true;
  }
};

// Handle role selection
const saveUserRole = async () => {
  if (!selectedRole.value || !auth.currentUser) return;

  const userRef = doc(firestore, "artifacts", appId, "users", auth.currentUser.uid);
  await updateDoc(userRef, { role: selectedRole.value });

  showRoleModal.value = false;
};

const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/signin')
  } catch (error) {
    console.error('Error logging out:', error)
  }
}

onMounted(() => {
  checkUserRole()
})
</script>

<template>
  <div>
    <!-- Role Picker Modal -->
    <div class="role-modal-backdrop" v-if="showRoleModal">
      <div class="role-modal">
        <h2>{{ currentLanguage === 'en' ? 'Select Your Role' : 'اختر دورك' }}</h2>
        <p>{{ currentLanguage === 'en' ? 'Please choose your role:' : 'يرجى اختيار دورك:' }}</p>
        <div class="role-buttons">
          <button class="role-button" @click="selectedRole = 'doctor'; saveUserRole()">
            {{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}
          </button>
          <button class="role-button" @click="selectedRole = 'patient'; saveUserRole()">
            {{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Content of the dashboard view -->
    <div class="dashboard-page dashboard-blur-area" :class="{ 'is-blurred': showRoleModal }">
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
            <!-- Existing: Get Scan Recommendation -->
            <div class="feature-item" @click="router.push('/recommend')">
              <i class="fas fa-file-medical"></i>
              <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                {{ currentLanguage === 'en' ? 'Get Scan Recommendation' : 'الحصول على توصية' }}
              </h3>
              <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                {{
                  currentLanguage === 'en'
                    ? 'Receive AI-powered recommendations for X-ray or CT scans.'
                    : 'احصل على توصيات مدعومة بالذكاء الاصطناعي لفحوصات الأشعة.'
                }}
              </p>
            </div>

            <!-- Existing: Manage Patients -->
            <div class="feature-item" @click="router.push('/patients')">
              <i class="fas fa-users"></i>
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

            <!-- ✅ ADD THIS NEW BLOCK FOR HISTORY -->
            <div class="feature-item" @click="router.push('/history')">
              <i class="fas fa-history"></i>
              <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                {{ currentLanguage === 'en' ? 'View Scan History' : 'عرض سجل الفحوصات' }}
              </h3>
              <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                {{
                  currentLanguage === 'en'
                    ? 'Review past X-ray and CT scan records.'
                    : 'مراجعة سجلات فحوصات الأشعة السينية والمقطعية السابقة.'
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
.role-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.role-modal {
  background: white;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.role-modal h2 {
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #444;
}

.role-modal p {
  font-size: 1rem;
  margin-bottom: 25px;
  color: #555;
}

.role-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.role-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  transition: 0.3s ease;
}

.role-button:hover {
  background-color: #6a7483;
}
.dashboard-blur-area.is-blurred {
  filter: blur(7px);
  pointer-events: none; /* Optional: Prevent interaction with blurred content */
  user-select: none;    /* Optional: Prevent text selection in blurred area */
  transition: filter 0.25s ease;
}
</style>
