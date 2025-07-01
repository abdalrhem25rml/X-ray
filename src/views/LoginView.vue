<!-- LoginView.vue -->
<script setup>
import { inject } from 'vue'; // Import inject
import { useRouter } from 'vue-router';

const router = useRouter();

// Inject the globally provided language state
const currentLanguage = inject('currentLanguage');

const navigateToSignup = () => {
  router.push('/'); // Navigate to the root path (SignupView)
};
</script>

<template>
  <div class="login-page">
    <!-- The global header is now in App.vue -->

    <main class="login-main-content">
      <section class="login-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Welcome Back! Please Sign In' : 'أهلاً بعودتك! يرجى تسجيل الدخول' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'This is where your elegant login form will be designed.' : 'هنا سيتم تصميم نموذج تسجيل الدخول الأنيق الخاص بك.' }}
        </p>
        <button class="action-button primary">
          {{ currentLanguage === 'en' ? 'Log In' : 'تسجيل الدخول' }}
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
  margin-bottom: 20px; /* Space before the link */
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px);
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

  .action-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}
</style>
