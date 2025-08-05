<script setup>
import { ref, provide, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'
import { useDatabaseStore } from './stores/database'
import TheHeader from './components/TheHeader.vue'

// --- Pinia Stores ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()

// --- App-wide states ---
const currentLanguage = ref(localStorage.getItem('language') || 'en')
const currentMsv = ref(0)
const doseLimit = ref(20)
const showInfoModal = ref(false)

// --- Language Handling ---
const setLanguage = (lang) => {
  currentLanguage.value = lang
  localStorage.setItem('language', lang)
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
}
const toggleLanguage = () => {
  setLanguage(currentLanguage.value === 'en' ? 'ar' : 'en')
}

// --- Dose Calculation ---
const calculateAnnualMsv = async () => {
  console.log("Calculating the msv...")
  if (!authStore.user?.uid || !authStore.role) {
    currentMsv.value = 0
    return
  }

  const allDoses = await databaseStore.fetchAllDosesForUser(authStore.user.uid, authStore.role)
  // Use JSON.stringify to properly log the array of objects
  console.log(`All doses:`, JSON.parse(JSON.stringify(allDoses)))

  if (allDoses) {
    const yearStart = new Date(new Date().getFullYear(), 0, 1)
    const getJsDate = (d) => (d ? (d.toDate ? d.toDate() : new Date(d)) : null)

    const totalDose = allDoses
      .filter(dose => {
        const dateOfDose = getJsDate(dose.date)
        return dateOfDose && dateOfDose >= yearStart
      })
      .reduce((sum, dose) => sum + (dose.dose || 0), 0)

    currentMsv.value = parseFloat(totalDose.toFixed(3))
  }
  console.log("Finished Calculation")
}

// --- Provide states and functions ---
provide('currentLanguage', currentLanguage)
provide('currentMsv', currentMsv)
provide('doseLimit', doseLimit)
provide('triggerMsvRecalculation', calculateAnnualMsv)

// --- ✅ CORRECTED WATCHER ---
// We now watch the userProfile. This ensures that the user's role is
// available before we attempt to run the calculation.
watch(
  () => authStore.userProfile,
  (newProfile) => {
    // Only run if the user is logged in AND their profile has loaded.
    if (authStore.user && newProfile) {
      calculateAnnualMsv();
    } else if (!authStore.user) {
      // If the user logs out, reset the mSv counter
      currentMsv.value = 0;
    }
  },
  { deep: true, immediate: true }
);

// Set initial language on app load
setLanguage(currentLanguage.value)
</script>

<template>
  <div id="app-container">
    <TheHeader
      :current-language="currentLanguage"
      :user="authStore.user"
      :msv-data="{
        current: currentMsv,
        limit: doseLimit,
        isLoading: databaseStore.loading,
      }"
      @toggle-language="toggleLanguage"
      @toggle-info-modal="showInfoModal = true"
    />
    <main class="main-content">
      <RouterView v-if="authStore.isAuthReady" />
      <div v-else class="loading-fullpage">
        <span>Loading Application...</span>
      </div>
    </main>
  </div>
</template>

<style>
/* Global styles remain unchanged */
:root{--primary-bg:#f8f9fa;--secondary-bg:#fff;--primary-text:#212529;--secondary-text:#6c757d;--accent-color:#8d99ae;--border-color:#dee2e6;--header-color:#f1e234}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:var(--primary-bg);color:var(--primary-text);line-height:1.6}#app-container{display:flex;flex-direction:column;min-height:100vh}.main-content{flex:1;padding-top:20px}.loading-fullpage{display:flex;justify-content:center;align-items:center;height:80vh;font-size:1.5rem;color:var(--secondary-text)}
</style>
