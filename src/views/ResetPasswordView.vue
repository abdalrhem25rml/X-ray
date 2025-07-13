<!-- ResetPasswordView.vue -->
<script setup>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const currentLanguage = inject('currentLanguage');

const email = ref('');

const handlePasswordReset = async () => {
  await authStore.sendPasswordReset(email.value);
};

const navigateToSignin = () => {
  router.push('/signin');
};
</script>

<template>
  <div class="reset-password-page">
    <main class="reset-password-main-content">
      <section class="reset-password-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Reset Your Password' : 'إعادة تعيين كلمة المرور' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Enter your email address to receive a password reset link.' : 'أدخل عنوان بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور.' }}
        </p>

        <form @submit.prevent="handlePasswordReset" class="reset-password-form">
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

          <button class="action-button primary" type="submit" :disabled="authStore.loading">
            <span v-if="authStore.loading">
              {{ currentLanguage === 'en' ? 'Sending Link...' : 'جاري إرسال الرابط...' }}
            </span>
            <span v-else>
              {{ currentLanguage === 'en' ? 'Send Reset Link' : 'إرسال رابط إعادة التعيين' }}
            </span>
          </button>
        </form>

        <!-- Display error message from store -->
        <div v-if="authStore.error" class="message error-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ authStore.error }}
        </div>
        <!-- Display success message from store -->
        <div v-if="authStore.successMessage" class="message success-message" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ authStore.successMessage }}
        </div>

        <p class="switch-link-container" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Remembered your password?' : 'هل تذكرت كلمة المرور؟' }}
          <a href="#" @click.prevent="navigateToSignin">
            {{ currentLanguage === 'en' ? 'Sign In' : 'تسجيل الدخول' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Reusing styles from SigninView/SignupView for consistency */
.reset-password-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
}

.reset-password-main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa;
}

.reset-password-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  border: 1px solid #eee;
}

.reset-password-card h2 {
  color: #8D99AE;
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.reset-password-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.reset-password-form {
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
  border-color: #8D99AE;
  box-shadow: 0 0 0 3px rgba(141, 153, 174, 0.2);
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
  width: 100%;
  margin-top: 20px;
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
  margin-top: 25px;
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
  .reset-password-main-content {
    padding: 15px;
  }
  .reset-password-card {
    padding: 30px;
  }
  .reset-password-card h2 {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .reset-password-card {
    padding: 20px;
  }
  .action-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}
</style>
