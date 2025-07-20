<script setup>
import { ref, inject, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'

const appId = import.meta.env.VITE_APP_ID
const auth = inject('auth')
const currentLanguage = inject('currentLanguage')
const router = useRouter()
const firestore = getFirestore()

// --- State Management ---
const isCheckingRole = ref(true)
const showProfileModal = ref(false)
const userRole = ref(null)
const userProfile = ref({
  role: null,
  birthDate: '',
  gender: '',
  isPregnant: false,
  allergies: '',
  medicalHistory: '', // ✅ NEW: Added medical history field
})

// --- Firebase Functions ---
// ✅ FIX: The function is restored to its correct state.
const checkUserRole = async (user) => {
  // First, check if the role is already known from the injected auth object.
  // This prevents unnecessary database reads on subsequent visits.
  if (auth.role === 'doctor' || auth.role === 'patient') {
    userRole.value = auth.role
    isCheckingRole.value = false
    return
  }

  // If role is not known, proceed to check the database.
  if (!user) {
    isCheckingRole.value = false
    return
  }

  try {
    const userDocRef = doc(firestore, 'artifacts', appId, 'users', user.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (
      !userSnapshot.exists() ||
      !userSnapshot.data().role ||
      !userSnapshot.data().birthDate ||
      !userSnapshot.data().gender
    ) {
      // If the profile is incomplete, show the setup modal.
      showProfileModal.value = true
    } else {
      // If the profile is complete, set the local role and also update the injected auth object.
      const userData = userSnapshot.data()
      userRole.value = userData.role
      auth.role = userData.role // Sync the role back to the provided auth object.
    }
  } catch (error) {
    console.error('Error during role/profile check:', error)
  } finally {
    isCheckingRole.value = false
  }
}

const saveUserProfile = async () => {
  if (!auth.currentUser) return

  const { role, birthDate, gender, isPregnant, allergies, medicalHistory } = userProfile.value
  if (!role || !birthDate || !gender) {
    alert('Please fill out all required fields: Role, Birth Date, and Gender.')
    return
  }

  try {
    const userRef = doc(firestore, 'artifacts', appId, 'users', auth.currentUser.uid)
    await setDoc(
      userRef,
      {
        role,
        birthDate,
        gender,
        isPregnant: gender === 'female' ? isPregnant : false,
        allergies: allergies.split(',').map((s) => s.trim()).filter(Boolean),
        medicalHistory: medicalHistory.split(',').map((s) => s.trim()).filter(Boolean), // ✅ NEW: Save medical history as array
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName,
        createdAt: serverTimestamp(),
      },
      { merge: true },
    )

    userRole.value = role
    auth.role = role // Also update the injected auth object after saving.
    showProfileModal.value = false
  } catch (err) {
    console.error('Failed to save user profile:', err)
    alert('Something went wrong. Please try again.')
  }
}

const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/signin')
  } catch (error) {
    console.error('Error logging out:', error)
  }
}

// Watch for auth changes to trigger the role check.
watch(
  () => auth.currentUser,
  (newUser) => {
    isCheckingRole.value = true
    checkUserRole(newUser)
  },
  { immediate: true },
)
</script>

<template>
  <div>
    <!-- Loading Screen -->
    <div v-if="isCheckingRole" class="loading-container">
      <p>{{ currentLanguage === 'en' ? 'Verifying session...' : 'جار التحقق من الجلسة...' }}</p>
    </div>

    <!-- Main Content -->
    <template v-else>
      <!-- Profile Setup Modal -->
      <div v-if="showProfileModal" class="role-modal-backdrop">
        <div class="role-modal">
          <h2>{{ currentLanguage === 'en' ? 'Complete Your Profile' : 'أكمل ملفك الشخصي' }}</h2>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'I am a:' : 'أنا:' }}</label>
            <select v-model="userProfile.role">
              <option value="" disabled>{{ currentLanguage === 'en' ? '-- Select Role --' : '-- اختر دورك --' }}</option>
              <option value="doctor">{{ currentLanguage === 'en' ? 'Doctor' : 'طبيب' }}</option>
              <option value="patient">{{ currentLanguage === 'en' ? 'Patient' : 'مريض' }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Birth Date' : 'تاريخ الميلاد' }}</label>
            <input type="date" v-model="userProfile.birthDate" />
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Gender' : 'الجنس' }}</label>
            <select v-model="userProfile.gender">
              <option value="" disabled>{{ currentLanguage === 'en' ? '-- Select Gender --' : '-- اختر الجنس --' }}</option>
              <option value="male">{{ currentLanguage === 'en' ? 'Male' : 'ذكر' }}</option>
              <option value="female">{{ currentLanguage === 'en' ? 'Female' : 'أنثى' }}</option>
            </select>
          </div>

          <div class="form-group" v-if="userProfile.gender === 'female'">
            <label class="checkbox-label">
              <input type="checkbox" v-model="userProfile.isPregnant" />
              <span>{{ currentLanguage === 'en' ? 'Currently pregnant?' : 'هل أنت حامل حاليًا؟' }}</span>
            </label>
          </div>

          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Allergies (comma-separated)' : 'الحساسية (مفصولة بفاصلة)' }}</label>
            <textarea
              v-model="userProfile.allergies"
              rows="2"
              :placeholder="currentLanguage === 'en' ? 'e.g., Iodine-Based Dyes' : 'مثال: صبغات اليود'"
            ></textarea>
          </div>

          <!-- ✅ NEW: Medical History Field -->
          <div class="form-group">
            <label>{{ currentLanguage === 'en' ? 'Medical History (comma-separated)' : 'التاريخ الطبي (مفصول بفاصلة)' }}</label>
            <textarea
              v-model="userProfile.medicalHistory"
              rows="2"
              :placeholder="currentLanguage === 'en' ? 'e.g., Diabetes, Asthma' : 'مثال: مرض السكري، الربو'"
            ></textarea>
          </div>

          <button class="action-button" @click="saveUserProfile">
            {{ currentLanguage === 'en' ? 'Save & Continue' : 'حفظ ومتابعة' }}
          </button>
        </div>
      </div>

      <!-- Main Dashboard Content -->
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
                      ? 'Receive AI-powered recommendations for scans.'
                      : 'احصل على توصيات مدعومة بالذكاء الاصطناعي للفحوصات.'
                  }}
                </p>
              </div>

              <div v-if="userRole === 'doctor'" class="feature-item" @click="router.push('/patients')">
                <i class="fas fa-users"></i>
                <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{ currentLanguage === 'en' ? 'Manage Patients' : 'إدارة المرضى' }}
                </h3>
                <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{
                    currentLanguage === 'en'
                      ? 'View, add, and manage patient records.'
                      : 'عرض وإضافة وإدارة سجلات المرضى.'
                  }}
                </p>
              </div>

              <div class="feature-item" @click="router.push('/history')">
                <i class="fas fa-history"></i>
                <h3 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{ currentLanguage === 'en' ? 'View Scan History' : 'عرض سجل الفحوصات' }}
                </h3>
                <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
                  {{
                    currentLanguage === 'en'
                      ? 'Review your past scan records.'
                      : 'مراجعة سجلات الفحوصات السابقة.'
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
.form-group {
  margin-bottom: 15px;
  text-align: start;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}
.form-group select,
.form-group input[type='date'],
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}
.checkbox-label input[type='checkbox'] {
  width: auto;
  height: 18px;
  width: 18px;
}
.role-modal .action-button {
  width: 100%;
  margin-top: 15px;
}
.dashboard-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
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
  background-color: #e0e6ed;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  flex: 1;
  min-width: 280px;
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
  width: auto;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
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
.dashboard-blur-area.is-blurred {
  filter: blur(7px);
  pointer-events: none;
  user-select: none;
  transition: filter 0.25s ease;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  font-size: 1.5em;
  color: #8d99ae;
  background-color: #f8f9fa;
}

.checkbox-label input[type='checkbox']{
    width: auto;
    margin: 5px;
}
</style>
