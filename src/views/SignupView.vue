<!-- SignupView.vue -->
<script setup>
import { ref, inject } from 'vue'; // Import inject
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Get the router instance

// Inject the globally provided language state and toggle function from App.vue
const currentLanguage = inject('currentLanguage');
// The toggleInfoModal is now provided by App.vue, but we don't need to inject it here
// as the info button is no longer in this component.

const navigateToLogin = () => {
  router.push('/login'); // Navigate to the /login path
};
</script>

<template>
  <div class="signup-page">
    <main class="signup-main-content">
      <section class="signup-card">
        <h2 :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Welcome! Please Sign Up' : 'أهلاً بك! يرجى التسجيل' }}
        </h2>
        <p :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Create your account to get started.' : 'أنشئ حسابك للبدء.' }}
        </p>

        <form class="signup-form">
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
            {{ currentLanguage === 'en' ? 'Create Account' : 'إنشاء حساب' }}
          </button>
        </form>

        <p class="switch-link-container" :dir="currentLanguage === 'ar' ? 'rtl' : 'ltr'">
          {{ currentLanguage === 'en' ? 'Already have an account?' : 'هل لديك حساب بالفعل؟' }}
          <a href="#" @click.prevent="navigateToLogin">
            {{ currentLanguage === 'en' ? 'Sign In' : 'تسجيل الدخول' }}
          </a>
        </p>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Main Page Layout */
.signup-page {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px); /* Adjust height to account for global header */
  width: 100%;
}

/* Main Content Area */
.signup-main-content {
  flex-grow: 1; /* Takes remaining vertical space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f8f9fa; /* Consistent light background */
}

.signup-card {
  background-color: white;
  padding: 50px;
  border-radius: 12px; /* Nicer rounded corners */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* More pronounced shadow */
  text-align: center;
  max-width: 500px;
  width: 100%;
  border: 1px solid #eee; /* Subtle border */
}

.signup-card h2 {
  color: #8D99AE; /* Accent color for headings */
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 700;
}

.signup-card p {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
}

/* Form Styling */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between form groups */
  margin-bottom: 30px; /* Space before the "Already have an account?" link */
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

/* Action button (Create Account) */
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
  transform: translateY(-2px); /* Slight lift effect */
}

.switch-link-container {
  margin-top: 25px; /* Space above the link */
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

/* Responsive Adjustments */
@media (max-width: 768px) {
  .signup-main-content {
    padding: 15px;
  }

  .signup-card {
    padding: 30px;
  }

  .signup-card h2 {
    font-size: 1.8em;
  }
}

@media (max-width: 480px) {
  .signup-card {
    padding: 20px;
  }

  .action-button {
    padding: 12px 20px;
    font-size: 1em;
  }
}
</style>
