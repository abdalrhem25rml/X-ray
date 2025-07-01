<!-- App.vue -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref, watch } from 'vue'; // Import provide, ref, watch

// Global language state
const currentLanguage = ref('en'); // 'en' for English, 'ar' for Arabic

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'ar' : 'en';
  // Set document direction based on language
  document.documentElement.dir = currentLanguage.value === 'ar' ? 'rtl' : 'ltr';
};

// Provide the language state and toggle function to all child components
provide('currentLanguage', currentLanguage);
provide('toggleLanguage', toggleLanguage);

// Watch for initial load to set document direction
watch(currentLanguage, (newLang) => {
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
}, { immediate: true });
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col font-inter">
    <!-- Global Header Section -->
    <header class="app-header">
      <!-- Language Toggle Button -->
      <button
        @click="toggleLanguage"
        class="language-toggle-button"
        aria-label="Toggle language between Arabic and English"
      >
        {{ currentLanguage === 'en' ? 'العربية' : 'English' }}
      </button>

      <h1 class="project-title">
        {{ currentLanguage === 'en' ? 'X-Ray Exposure Calculator' : 'حاسبة التعرض للأشعة السينية' }}
      </h1>
      <!-- No info button here, it's specific to SignupView -->
    </header>

    <!-- The router-view will render the component for the current route -->
    <router-view v-slot="{ Component }">
      <Transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style>
/* Import Google Fonts - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
/* Import Google Fonts - Cairo for Arabic text */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

/* Basic global styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif; /* Ensure Inter is applied globally */
  background-color: #f0f2f5;
  overflow-x: hidden; /* Prevent horizontal scroll during transitions */
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* flex-grow handles the height */
}

/* Global Header Styling (moved from SignupView) */
.app-header {
  background-color: #F1E234; /* Bright Yellow */
  padding: 20px 30px;
  display: flex;
  justify-content: center; /* Center the title initially */
  align-items: center;
  position: relative; /* For positioning the language button */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 80px; /* Ensure a decent height */
}

.project-title {
  color: #000; /* Black text as requested */
  font-size: 2.8em; /* Larger, more impactful title */
  font-weight: 800; /* Extra bold */
  text-align: center;
  flex-grow: 1; /* Allow it to take up space and help centering */
  /* Adjust margin-left to account for the language button */
  margin-left: 120px; /* Offset for the language button, keeping title truly centered visually */
}

.language-toggle-button {
  position: absolute;
  left: 30px; /* Top left corner */
  top: 50%;
  transform: translateY(-50%); /* Vertically center */
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
}

.language-toggle-button:hover {
  background-color: #6a7483; /* Darker shade on hover */
  transform: translateY(-50%) scale(1.03); /* Slight scale effect */
}

/* Page Transition Styles */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease; /* Fade duration */
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0; /* Start/End completely transparent */
}

/* Responsive Adjustments for Global Header */
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
    order: 2; /* Put title below buttons on small screens */
  }

  .language-toggle-button {
    position: static; /* Allow it to flow naturally */
    transform: none;
    margin-bottom: 10px; /* Space below button */
    width: 80%; /* Make button wider */
    padding: 10px 20px;
    order: 1; /* Put language button at the top */
  }
}

@media (max-width: 480px) {
  .project-title {
    font-size: 1.6em;
  }

  .language-toggle-button {
    font-size: 0.9em;
    padding: 8px 15px;
  }
}
</style>
