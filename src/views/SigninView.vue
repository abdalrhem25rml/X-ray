<!-- SigninView.vue -->
<script setup>
import { ref, inject } from 'vue' // Import ref
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth' // Import your auth store

const router = useRouter()
const authStore = useAuthStore() // Access the auth store

// Inject the globally provided language state
const currentLanguage = inject('currentLanguage')

// Form fields
const email = ref('')
const password = ref('')

// Function to handle email/password login
const handleEmailLogin = async () => {
  // This function call is correct and working
  await authStore.signInWithEmail(email.value, password.value)
}

// Function to handle Google login
const handleGoogleLogin = async () => {
  // This function call is correct and working
  await authStore.signInWithGoogle()
}

const navigateToSignup = () => {
  router.push('/') // Navigate to the root path (SignupView)
}

// New function to navigate to the reset password page
const navigateToResetPassword = () => {
  router.push('/resetpassword')
}

const navigateToGuestRecommend = () => {
  router.push('/recommend/guest')
}
</script>

<template>
  <div class="login-page">
    <main class="login-main-content">
      <section class="login-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{
            currentLanguage === 'en'
              ? 'Welcome Back! Please Sign In'
              : 'أهلاً بعودتك! يرجى تسجيل الدخول'
          }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{
            currentLanguage === 'en'
              ? 'Sign in to access your dashboard.'
              : 'سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك.'
          }}
        </p>

        <form @submit.prevent="handleEmailLogin" class="login-form">
          <div class="form-group">
            <label for="email" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Email Address' : 'عنوان البريد الإلكتروني' }}
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              :placeholder="currentLanguage === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
            />
          </div>

          <div class="form-group">
            <label for="password" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Password' : 'كلمة المرور' }}
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              :placeholder="currentLanguage === 'en' ? 'Enter your password' : 'أدخل كلمة المرور'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
              required
              minlength="6"
            />
            <!-- Forgot password link added here -->
            <p class="forgot-password-link" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              <a href="#" @click.prevent="navigateToResetPassword">
                {{ currentLanguage === 'en' ? 'Forgot your password?' : 'هل نسيت كلمة المرور؟' }}
              </a>
            </p>
          </div>

          <button class="action-button primary" type="submit" :disabled="authStore.loading">
            <span v-if="authStore.loading">
              {{ currentLanguage === 'en' ? 'Signing In...' : 'جاري تسجيل الدخول...' }}
            </span>
            <span v-else>
              {{ currentLanguage === 'en' ? 'Sign in' : 'تسجيل الدخول' }}
            </span>
          </button>
        </form>

        <div
          v-if="authStore.error"
          class="message error-message"
          :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
        >
          {{ authStore.error }}
        </div>
        <div
          v-if="authStore.successMessage"
          class="message success-message"
          :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
        >
          {{ authStore.successMessage }}
        </div>

        <div class="divider" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <span>{{ currentLanguage === 'en' ? 'OR' : 'أو' }}</span>
        </div>

        <button
          @click="handleGoogleLogin"
          class="action-button google-button"
          :disabled="authStore.loading"
        >
          <svg
            class="google-icon"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z"
              fill="#4285F4"
            />
            <path
              d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z"
              fill="#34A853"
            />
            <path
              d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z"
              fill="#FBBC05"
            />
            <path
              d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z"
              fill="#EA4335"
            />
          </svg>
          <span>{{
            currentLanguage === 'en' ? 'Sign in with Google' : 'تسجيل الدخول باستخدام جوجل'
          }}</span>
        </button>

        <!-- New Guest Recommendation Option -->
        <button
          class="action-button guest-button"
          @click="navigateToGuestRecommend"
          :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
        >
          {{ currentLanguage === 'en'
            ? 'Get Recommendation as Guest'
            : 'الحصول على نصيحة كضيف' }}
        </button>

        <p class="switch-link-container" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? "Don't have an account?" : 'ليس لديك حساب؟' }}
          <a href="#" @click.prevent="navigateToSignup">
            {{ currentLanguage === 'en' ? 'Sign Up' : 'التسجيل' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
}

.login-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.login-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  border: 1px solid #eee;
}

.login-card h2 {
  color: #8d99ae;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.login-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
  font-size: 0.95em;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #8d99ae;
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2);
}

.forgot-password-link {
  text-align: left;
  margin-top: 8px;
  font-size: 0.9em;
}
[dir='rtl'] .forgot-password-link {
  text-align: right;
}
.forgot-password-link a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 500;
}
.forgot-password-link a:hover {
  text-decoration: underline;
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
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
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

.guest-button {
  background-color: #4fa24b;
  margin-top: 18px;
}
.guest-button:hover {
  background-color: #306e2e;
}

.switch-link-container {
  font-size: 0.95em;
  color: #666;
  margin-top: 25px;
}

.switch-link-container a {
  color: #8d99ae;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
.switch-link-container a:hover {
  color: #5a6473;
  text-decoration: underline;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 0;
  color: #777;
  font-size: 0.9em;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}
.divider:not(:empty)::before {
  margin-right: 0.25em;
}
.divider:not(:empty)::after {
  margin-left: 0.25em;
}

.google-button {
  background-color: #4285f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-bottom: 20px;
}
.google-button:hover {
  background-color: #357ae8;
  transform: translateY(-2px);
}
.google-button:disabled {
  background-color: #b0b0b0;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
.google-icon {
  width: 24px;
  height: 24px;
}

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
.success-message {
  background-color: #e6ffed;
  color: #1a7a3d;
  border: 1px solid #1a7a3d;
}

@media (max-width: 768px) {
  .login-main-content {
    padding: 15px;
  }
  .login-card {
    padding: 30px;
  }
  .login-card h2 {
    font-size: 1.8em;
  }
}
@media (max-width: 480px) {
  .login-card {
    padding: 20px;
  }
  .action-button,
  .google-button,
  .guest-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}
</style>
