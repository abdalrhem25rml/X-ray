<script setup>
import { RouterView, useRoute } from 'vue-router'
import { provide, ref, watchEffect, computed } from 'vue'
import { useAuthStore } from './stores/auth'
import { useDatabaseStore } from './stores/database'
import TheHeader from './components/TheHeader.vue'
import InfoModal from './components/InfoModal.vue'
import HelpModal from './components/HelpModal.vue' // --- 1. Import new component
import { helpContent } from './helpContent' // --- 2. Import help content
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// --- Pinia Stores and Router ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()
const route = useRoute() // --- 3. Get route access

// --- Local State ---
const currentLanguage = ref('en')
const showInfoModal = ref(false)
const showHelpModal = ref(false) // --- 4. Add state for help modal
const currentMsv = ref(0)
const doseLimit = ref(20)
const isMsvLoading = ref(true)

// --- Help Modal Logic ---
const toggleHelpModal = () => {
  showHelpModal.value = !showHelpModal.value
}
const currentHelpContent = computed(() => {
  // Use route.name, which should be defined in your router/index.js
  const routeName = route.name
  if (routeName && helpContent[routeName]) {
    return helpContent[routeName]
  }
  return null // Return null if no help content is found for the current route
})

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'ar' : 'en'
}
const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value
}

const getJsDate = (firestoreDate) => {
  if (!firestoreDate) return null
  if (typeof firestoreDate.toDate === 'function') {
    return firestoreDate.toDate()
  }
  const date = new Date(firestoreDate)
  return !isNaN(date.getTime()) ? date : null
}

const updateDoseCalculation = async () => {
  console.log('%c[DOSE_CALC] Starting dose calculation...', 'color: blue; font-weight: bold;')
  if (!authStore.user || !authStore.role) {
    console.log('[DOSE_CALC] User or role not found. Aborting.')
    currentMsv.value = 0
    doseLimit.value = 1
    isMsvLoading.value = false
    return
  }
  isMsvLoading.value = true

  const userId = authStore.user.uid
  const role = authStore.role
  console.log(`[DOSE_CALC] User ID: ${userId}, Role: ${role}`)

  try {
    const allUserScans =
      role === 'doctor'
        ? await databaseStore.fetchDoctorCreatedScans()
        : await databaseStore.fetchScansForPatient(userId)

    console.log(`[DOSE_CALC] Fetched ${allUserScans?.length || 0} total scans.`)

    if (!allUserScans) {
      isMsvLoading.value = false
      return
    }

    const yearStart = new Date(new Date().getFullYear(), 0, 1)
    const scansThisYear = allUserScans.filter((scan) => {
      const scanDate = getJsDate(scan.scanDate)
      return scanDate && scanDate >= yearStart
    })
    console.log(`[DOSE_CALC] Found ${scansThisYear.length} scans this year.`)

    if (role === 'doctor') {
      const totalAnnualDose = scansThisYear.reduce((sum, scan) => {
        if (scan.isPersonalScan) {
          return sum + (scan.patientDose || 0)
        }
        return sum + (scan.doctorDose || 0)
      }, 0)

      currentMsv.value = parseFloat(totalAnnualDose.toFixed(3));
      console.log(`[DOSE_CALC] Calculated total annual dose: ${totalAnnualDose.toFixed(3)} mSv`);

      console.log('%c[DOSE_CALC] Checking pregnancy status...', 'color: #f5a623; font-weight: bold;');
      const userProfile = authStore.userProfile;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const estimatedDueDate = userProfile ? getJsDate(userProfile.estimatedDueDate) : null;

      console.log('[DOSE_CALC] Profile data for check:', userProfile);
      console.log(`[DOSE_CALC] Profile 'isPregnant' flag:`, userProfile?.isPregnant);
      console.log(`[DOSE_CALC] Parsed Due Date:`, estimatedDueDate);
      console.log(`[DOSE_CALC] Today's Date:`, today);
      if (estimatedDueDate) {
        console.log(`[DOSE_CALC] Is today before due date?`, today < estimatedDueDate);
      }

      if (userProfile?.isPregnant && estimatedDueDate && today < estimatedDueDate) {
        console.log('%c[DOSE_CALC] --- ACTIVE PREGNANCY LOGIC ACTIVATED ---', 'color: purple; font-weight: bold;');
        const remainingAnnualLimit = 20 - totalAnnualDose;
        const remainingPregnancyLimit = 0.5 - totalAnnualDose;
        console.log(`[DOSE_CALC] Remaining Annual Limit: ${remainingAnnualLimit.toFixed(3)} mSv`);
        console.log(`[DOSE_CALC] Remaining Pregnancy Limit (stricter interpretation): ${remainingPregnancyLimit.toFixed(3)} mSv`);

        doseLimit.value = Math.max(0, Math.min(remainingAnnualLimit, remainingPregnancyLimit));
        console.log(`[DOSE_CALC] Final limit set to (strictest of the two): ${doseLimit.value.toFixed(3)} mSv`);
      } else {
        console.log('%c[DOSE_CALC] --- STANDARD DOCTOR LOGIC ACTIVATED ---', 'color: green; font-weight: bold;');
        doseLimit.value = 20;
      }
    } else {
      console.log('%c[DOSE_CALC] --- PATIENT LOGIC ---', 'color: orange; font-weight: bold;')
      doseLimit.value = 1
      const totalPatientDose = scansThisYear.reduce((sum, scan) => sum + (scan.patientDose || 0), 0)
      currentMsv.value = parseFloat(totalPatientDose.toFixed(3))
    }

  } catch (err) {
    console.error('[DOSE_CALC_ERROR] Failed to update dose calculation:', err)
    currentMsv.value = 0
  } finally {
    isMsvLoading.value = false
    console.log(`[DOSE_CALC] FINAL STATE -> currentMsv: ${currentMsv.value}, doseLimit: ${doseLimit.value}`)
    console.log('%c[DOSE_CALC] Dose calculation finished.', 'color: blue; font-weight: bold;')
  }
}

// --- Watcher ---
watchEffect(() => {
  if (authStore.isAuthReady && !authStore.isProfileLoading) {
    updateDoseCalculation()
  }
})

// --- Provide data and functions to children ---
provide('currentLanguage', currentLanguage)
provide('toggleLanguage', toggleLanguage)
provide('toggleInfoModal', toggleInfoModal)
provide('triggerMsvRecalculation', updateDoseCalculation)
provide('currentMsv', currentMsv)
provide('doseLimit', doseLimit)
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col font-inter">
    <TheHeader
      :current-language="currentLanguage"
      :user="authStore.user"
      :msv-data="{ current: currentMsv, limit: doseLimit, isLoading: isMsvLoading }"
      @toggle-language="toggleLanguage"
      @toggle-info-modal="toggleInfoModal"
    />
    <router-view v-slot="{ Component, route }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <!-- --- 5. Add floating help button --- -->
    <button
      v-if="authStore.user && currentHelpContent"
      class="help-fab"
      @click="toggleHelpModal"
      :title="currentLanguage === 'en' ? 'Help' : 'مساعدة'"
    >
      <font-awesome-icon icon="question-circle" />
    </button>

    <!-- --- 6. Render Modals --- -->
    <InfoModal :show="showInfoModal" :current-language="currentLanguage" @close="toggleInfoModal" />
    <HelpModal
      :show="showHelpModal"
      :content="currentHelpContent"
      @close="toggleHelpModal"
    />
  </div>
</template>

<style>
/* --- 7. Add styles for floating button --- */
.help-fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #343a40;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 999;
  transition: transform 0.2s ease-in-out, background-color 0.2s;
}

.help-fab:hover {
  transform: scale(1.1);
  background-color: #495057;
}

/* Styles remain unchanged */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f0f2f5;
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
