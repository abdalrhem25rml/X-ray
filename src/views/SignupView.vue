<!-- SignupView.vue -->
<script setup>
import { ref, inject } from 'vue'; // Import inject
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Get the router instance

const showInfoModal = ref(false);

// Inject the globally provided language state and toggle function from App.vue
const currentLanguage = inject('currentLanguage');
const toggleLanguage = inject('toggleLanguage'); // Although not directly used by a button in this component, it's good practice to inject if available.

const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value;
};

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
          {{ currentLanguage === 'en' ? 'This is where your elegant signup form will be designed.' : 'هنا سيتم تصميم نموذج التسجيل الأنيق الخاص بك.' }}
        </p>
        <!-- Signup form elements would go here -->
        <button class="action-button primary">
          {{ currentLanguage === 'en' ? 'Create Account' : 'إنشاء حساب' }}
        </button>
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

/* No .app-header, .project-title, .language-toggle-button here - they are in App.vue */

.info-button-local {
  /* This is the info button specific to SignupView */
  background-color: #8D99AE; /* Desired accent color */
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px; /* Slightly more rounded corners */
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 20px; /* Space above the button */
}

.info-button-local:hover {
  background-color: #6a7483; /* Darker shade on hover */
  transform: scale(1.03); /* Slight scale effect */
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
}

.action-button:hover {
  background-color: #6a7483;
  transform: translateY(-2px); /* Slight lift effect */
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px; /* Padding for smaller screens */
}

.modal-content {
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); /* Stronger shadow */
  max-width: 900px; /* Wider modal for better text flow */
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: fadeInScale 0.4s ease-out forwards; /* Smoother animation */
}

.close-modal-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2.5em; /* Larger X for easier clicking */
  cursor: pointer;
  color: #8D99AE; /* Use accent color for consistency */
  transition: color 0.3s ease, transform 0.2s ease;
}

.close-modal-button:hover {
  color: #555;
  transform: rotate(90deg); /* Spin effect on close */
}

.modal-title {
  text-align: center;
  color: #8D99AE;
  margin-bottom: 30px;
  font-size: 2.2em;
  font-weight: 700;
}

.info-section {
  margin-bottom: 25px; /* Spacing between sections */
}

.lang-heading {
  color: #555;
  margin-bottom: 15px;
  font-size: 1.6em;
  font-weight: 600;
  border-bottom: 2px solid #eee; /* Subtle separator */
  padding-bottom: 5px;
}

.lang-text {
  line-height: 1.8; /* Increased line height for readability */
  font-size: 1.1em;
  text-align: justify;
  white-space: pre-wrap; /* Preserves formatting */
  color: #444; /* Slightly darker text for readability */
}

.arabic-text {
  direction: rtl; /* Right-to-left for Arabic */
  text-align: justify;
  font-family: 'Cairo', 'Arial', sans-serif; /* Use Cairo for Arabic */
}

.english-text {
  direction: ltr;
}

.section-divider {
  border: 0;
  height: 1px;
  background-color: #dde;
  margin: 40px 0; /* More spacing for the divider */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .app-header {
    flex-direction: column;
    padding: 15px 20px;
    min-height: auto; /* Allow height to adjust */
  }

  .project-title {
    font-size: 2em;
    margin-bottom: 15px;
    margin-left: 0; /* Reset margin for smaller screens */
    margin-right: 0;
    order: 2; /* Put title below buttons on small screens */
  }

  .info-button {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-top: 10px;
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 3; /* Put info button below title */
  }

  .language-toggle-button {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-bottom: 10px; /* Space below button */
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 1; /* Put language button at the top */
  }

  .signup-card {
    padding: 30px;
  }

  .signup-card h2 {
    font-size: 1.8em;
  }

  .modal-content {
    padding: 25px;
    max-width: 95%; /* More space on smaller screens */
  }

  .close-modal-button {
    font-size: 2em;
    top: 10px;
    right: 10px;
  }

  .modal-title {
    font-size: 1.8em;
  }

  .lang-heading {
    font-size: 1.4em;
  }

  .lang-text {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.6em;
  }

  .info-button, .language-toggle-button {
    font-size: 0.9em;
    padding: 8px 15px;
  }

  .signup-card {
    padding: 20px;
  }

  .action-button {
    padding: 12px 20px;
    font-size: 1em;
  }
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
</style>
