<!-- LoginPage.vue -->
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
          {{ currentLanguage === 'en' ? 'Log in to access your dashboard.' : 'سجّل الدخول للوصول إلى لوحة التحكم الخاصة بك.' }}
        </p>

        <form class="login-form">
          <div class="form-group">
            <label for="email" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Email Address' : 'عنوان البريد الإلكتروني' }}
            </label>
            <input
              type="email"
              id="email"
              :placeholder="currentLanguage === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            />
          </div>

          <div class="form-group">
            <label for="password" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
              {{ currentLanguage === 'en' ? 'Password' : 'كلمة المرور' }}
            </label>
            <input
              type="password"
              id="password"
              :placeholder="currentLanguage === 'en' ? 'Enter your password' : 'أدخل كلمة المرور'"
              :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'"
            />
          </div>

          <button class="action-button primary" type="submit">
            {{ currentLanguage === 'en' ? 'Log In' : 'تسجيل الدخول' }}
          </button>
        </form>

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
