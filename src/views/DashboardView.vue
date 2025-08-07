<script setup>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useDatabaseStore } from '@/stores/database'
import { Timestamp } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const authStore = useAuthStore()
const databaseStore = useDatabaseStore()
const router = useRouter()

const userProfileForm = ref({
  role: null,
  birthDate: '',
  gender: '',
  allergies: '',
  medicalHistory: '',
})

// ✅ FIX: The main loading screen now waits for BOTH auth to be ready AND the profile to finish loading.
// This prevents the dashboard from rendering in an intermediate state.
const isLoading = computed(() => !authStore.isAuthReady || authStore.isProfileLoading)

const showProfileModal = computed(() => {
  // This logic is now safe because `isLoading` will be false before this is ever evaluated.
  if (!authStore.user) return false
  return !authStore.isProfileComplete
})

const userRole = computed(() => authStore.role)
const currentLanguage = inject('currentLanguage')

const saveUserProfile = async () => {
  const { uid, email, displayName } = authStore.user
  const { role, birthDate, gender, allergies, medicalHistory } = userProfileForm.value

  if (!role || !birthDate || !gender) {
    alert('Please fill out all required fields: Role, Birth Date, and Gender.')
    return
  }

  const profileData = {
    email: email,
    displayName: displayName,
    role: role,
    birthDate: Timestamp.fromDate(new Date(birthDate)),
    gender: gender,
    allergies: allergies
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    medicalHistory: medicalHistory
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
  }

  const success = await databaseStore.setUserProfile(uid, profileData)

  if (success) {
    authStore.setUserProfile(profileData)
  } else {
    alert(`Failed to save profile. Error: ${databaseStore.error}`)
  }
}

const handleLogout = async () => {
  await authStore.logout()
  router.push('/signin')
}
</script>

<template>
  <div>
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-container">
      <p>{{ currentLanguage === 'en' ? 'Verifying session...' : 'جار التحقق من الجلسة...' }}</p>
      <font-awesome-icon icon="spinner" spin size="2x" />
    </div>

    <!-- Main Content (All template code from here down remains the same) -->
    <template v-else>
      <div v-if="showProfileModal" class="role-modal-backdrop">
        <div class="role-modal">
          <h2>{{ currentLanguage === 'en' ? 'Complete Your Profile' : 'أكمل ملفك الشخصي' }}</h2>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'I am a:' : 'أنا:' }}</label>
            <select v-model="userProfileForm.role">
              <option value="" disabled>
                {{ currentLanguage === 'en' ? '-- Select Role --' : '-- اختر دورك --' }}
              </option>
              <option value="doctor">{{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}</option>
              <option value="patient">{{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Birth Date' : 'تاريخ الميلاد' }}</label>
            <input type="date" v-model="userProfileForm.birthDate" />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</label>
            <select v-model="userProfileForm.gender">
              <option value="" disabled>
                {{ currentLanguage === 'en' ? '-- Select Gender --' : '-- اختر الجنس --' }}
              </option>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>{{
              currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)'
            }}</label>
            <textarea
              v-model="userProfileForm.allergies"
              rows="2"
              :placeholder="
                currentLanguage === 'en' ? 'e.g., Iodine-Based Dyes' : 'مثال: صبغات اليود'
              "
            ></textarea>
          </div>

          <div class="form-group">
            <label>{{
              currentLanguage === 'en'
                ? 'Medical History (comma-separated)'
                : 'التاريخ الطبي (مفصول بفاصلة)'
            }}</label>
            <textarea
              v-model="userProfileForm.medicalHistory"
              rows="2"
              :placeholder="
                currentLanguage === 'en' ? 'e.g., Diabetes, Asthma' : 'مثال: مرض السكري, الربو'
              "
            ></textarea>
          </div>

          <button class="action-button" @click="saveUserProfile" :disabled="databaseStore.loading">
            <font-awesome-icon v-if="databaseStore.loading" icon="spinner" spin />
            <span v-else>{{ currentLanguage === 'en' ? 'Save & Continue' : 'حفظ ومتابعة' }}</span>
          </button>
        </div>
      </div>

      <div class="dashboard-page dashboard-blur-area" :class="{ 'is-blurred': showProfileModal }">
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
                  ? 'Your comprehensive tool for managing radiation exposure.'
                  : 'أداتك الشاملة لإدارة التعرض للإشعاع.'
              }}
            </p>

            <div class="dashboard-features">
              <div class="feature-item" @click="router.push('/recommend')">
                <i class="fas fa-file-medical"></i>
                <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{ currentLanguage === 'en' ? 'Get Scan Recommendation' : 'الحصول على توصية' }}
                </h3>
                <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{
                    currentLanguage === 'en'
                      ? 'Assess a radiological scan to estimate doses and review safety-based warnings.'
                      : 'تقييم الفحص الإشعاعي لتقدير الجرعات ومراجعة تحذيرات السلامة.'
                  }}
                </p>
              </div>

              <div
                v-if="userRole === 'doctor'"
                class="feature-item"
                @click="router.push('/patients')"
              >
                <i class="fas fa-users"></i>
                <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{ currentLanguage === 'en' ? 'Manage Patients' : 'إدارة المرضى' }}
                </h3>
                <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{
                    currentLanguage === 'en'
                      ? 'View, add, and manage your patient records and their scan histories.'
                      : 'عرض وإضافة وإدارة سجلات مرضاك وتاريخ فحوصاتهم.'
                  }}
                </p>
              </div>

              <div class="feature-item" @click="router.push('/profile')">
                <i class="fas fa-user"></i>
                <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{ currentLanguage === 'en' ? 'View Profile' : 'عرض الملف الشخصي' }}
                </h3>
                <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{
                    currentLanguage === 'en'
                      ? 'Review your personal details and dose history.'
                      : 'راجع معلوماتك الشخصية وسجل جرعاتك.'
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
  </div>
</template>

<style scoped>
/* All your previous styles remain the same */
.role-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
  box-sizing: border-box;
}

.role-modal {
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: auto;
}

.role-modal h2 {
  margin-bottom: 25px;
  font-size: 1.8rem;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: start;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-group select,
.form-group input[type='date'],
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}

.role-modal .action-button {
  width: 100%;
  margin-top: 20px;
  padding: 12px 20px;
}

.dashboard-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  max-width: 900px;
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
  font-size: 1.2em;
}

.dashboard-features {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.feature-item {
  background-color: #eef2f7;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  flex: 1;
  min-width: 250px;
  max-width: 320px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  border: 1px solid #d3dce6;
}

.feature-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.feature-item i {
  font-size: 3em;
  color: #8d99ae;
  margin-bottom: 20px;
}

.feature-item h3 {
  color: #6a7483;
  font-size: 1.4em;
  margin: 0;
  font-weight: 600;
}

.action-button {
  background-color: #8d99ae;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  width: auto;
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
}

.action-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.action-button.secondary {
  background-color: #6c757d;
}

.action-button.secondary:hover {
  background-color: #5a6268;
}

.logout-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.dashboard-blur-area.is-blurred {
  filter: blur(7px);
  pointer-events: none;
  user-select: none;
  transition: filter 0.25s ease;
}

.loading-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5em;
  color: #8d99ae;
  background-color: #f8f9fa;
}
</style>
