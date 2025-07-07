<!-- LoginView.vue -->
<script setup>
import { ref, inject } from 'vue'; // Import ref
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth'; // Import your auth store

const router = useRouter();
const authStore = useAuthStore(); // Access the auth store

// Inject the globally provided language state
const currentLanguage = inject('currentLanguage');

// Form fields
const email = ref('');
const password = ref('');

// Function to handle email/password login
const handleEmailLogin = async () => {
  await authStore.loginWithEmail(email.value, password.value);
};

// Function to handle Google login
const handleGoogleLogin = async () => {
  await authStore.loginWithGoogle();
};

const navigateToSignup = () => {
  router.push('/'); // Navigate to the root path (SignupView)
};
</script>

<template>
  <div class="login-page">
    <main class="login-main-content">
      <section class="login-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Welcome Back! Please Sign In' : 'أهلاً بعودتك! يرجى تسجيل الدخول' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Log in to access your dashboard.' : 'سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك.' }}
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
          </div>

          <button class="action-button primary" type="submit" :disabled="authStore.loading">
            <span v-if="authStore.loading">
              {{ currentLanguage === 'en' ? 'Logging In...' : 'جاري تسجيل الدخول...' }}
            </span>
            <span v-else>
              {{ currentLanguage === 'en' ? 'Log In' : 'تسجيل الدخول' }}
            </span>
          </button>
        </form>

        <!-- Display error message from store -->
        <div v-if="authStore.error" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ authStore.error }}
        </div>

        <div class="divider" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          <span>{{ currentLanguage === 'en' ? 'OR' : 'أو' }}</span>
        </div>

        <button @click="handleGoogleLogin" class="action-button google-button" :disabled="authStore.loading">
          <svg class="google-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.5 20H24V28.5H35.5C34.75 31.85 32.5 34.5 29.5 36.5L24 41.5L24 48H32.5C39.5 48 44.5 43.5 44.5 36.5C44.5 35.5 44.3 34.5 44.1 33.5L44.5 20Z" fill="#4285F4"/>
            <path d="M24 44.5C29.5 44.5 34.25 42.5 37.75 39.25L29.5 36.5C27.25 37.75 24 38.5 24 38.5C18.5 38.5 13.75 34.25 11.75 28.5L6.25 33.5C8.75 38.75 15.5 44.5 24 44.5Z" fill="#34A853"/>
            <path d="M11.75 28.5C11.25 27.25 11 25.75 11 24C11 22.25 11.25 20.75 11.75 19.5L17.25 14.5C16 17.25 15.25 20.5 15.25 24C15.25 27.5 16 30.75 17.25 33.5L11.75 28.5Z" fill="#FBBC05"/>
            <path d="M24 9.5C26.75 9.5 29.25 10.5 31.25 12.25L36.5 7C32.5 3 27.25 0 24 0C15.5 0 8.75 5.75 6.25 11L11.75 16C13.75 10.25 18.5 6 24 6C24 6 24 9.5 24 9.5Z" fill="#EA4335"/>
          </svg>
          <span>{{ currentLanguage === 'en' ? 'Log In with Google' : 'تسجيل الدخول باستخدام جوجل' }}</span>
        </button>

        <p class="switch-link-container" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Or' : 'أو' }}
          <a href="#" @click.prevent="router.push('/dashboard')">
            {{ currentLanguage === 'en' ? 'Go to Dashboard (Temp)' : 'الانتقال إلى لوحة التحكم (مؤقت)' }}
          </a>
        </p>
        <p class="switch-link-container" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Don\'t have an account?' : 'ليس لديك حساب؟' }}
          <a href="#" @click.prevent="navigateToSignup">
            {{ currentLanguage === 'en' ? 'Sign Up' : 'التسجيل' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Inherit common styles from App.vue or define new ones */

.login-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust height to account for global header */
  width: 100%;
}

/* No .app-header, .project-title here - they are in App.vue */

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
  color: #8D99AE;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.login-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

/* Form Styling (similar to signup-form) */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between form groups */
  margin-bottom: 30px; /* Space before the "Or Go to Dashboard" link */
}

.form-group {
  text-align: left; /* Align labels and inputs to the left */
}

.form-group label {
  display: block; /* Make label take full width */
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
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.form-group input:focus {
  outline: none;
  border-color: #8D99AE; /* Highlight border on focus */
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2); /* Subtle glow on focus */
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
  width: 100%; /* Make button full width */
  margin-top: 20px; /* Space above the button, if not already handled by form-group gap */
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

.switch-link-container {
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

/* Divider for OR */
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
  margin-right: .25em;
}

.divider:not(:empty)::after {
  margin-left: .25em;
}

/* Google Button Styling */
.google-button {
  background-color: #4285F4; /* Google blue */
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
  margin-bottom: 20px; /* Space below Google button */
}

.google-button:hover {
  background-color: #357ae8; /* Darker blue on hover */
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

/* Message Styling */
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

/* Responsive Adjustments (similar to SignupView) */
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

  .action-button, .google-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}
</style>
