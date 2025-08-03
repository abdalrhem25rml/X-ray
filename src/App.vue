<script setup>
import { RouterView } from 'vue-router'
import { provide, ref, watchEffect } from 'vue'
import { useAuthStore } from './stores/auth'
import { useDatabaseStore } from './stores/database'
import TheHeader from './components/TheHeader.vue'
import InfoModal from './components/InfoModal.vue'

// --- Pinia Stores ---
const authStore = useAuthStore()
const databaseStore = useDatabaseStore()

// --- Local State ---
const currentLanguage = ref('en')
const showInfoModal = ref(false)
const currentMsv = ref(0)
const doseLimit = ref(20)
const isMsvLoading = ref(true)

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

      // --- LOGGING THE PREGNANCY CHECK ---
      console.log('%c[DOSE_CALC] Checking pregnancy status...', 'color: #f5a623; font-weight: bold;');
      const userProfile = authStore.userProfile;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const estimatedDueDate = userProfile ? getJsDate(userProfile.estimatedDueDate) : null;

      // Log the exact data being used for the check
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
    <InfoModal :show="showInfoModal" :current-language="currentLanguage" @close="toggleInfoModal" />
  </div>
</template>

<style>
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
