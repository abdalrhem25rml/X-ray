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
const doseLimit = ref(20) // Default to the highest possible limit, will be adjusted
const isMsvLoading = ref(true)

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'ar' : 'en'
}
const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value
}

/**
 * The final, robust dose calculation engine. It now correctly handles concurrent
 * occupational and fetal dose limits, always enforcing the more restrictive one.
 */
const updateDoseCalculation = async () => {
  if (!authStore.user || !authStore.role) {
    currentMsv.value = 0
    doseLimit.value = 1 // Reset to patient default
    isMsvLoading.value = false
    return
  }
  isMsvLoading.value = true

  const userId = authStore.user.uid
  const role = authStore.role
  let calculatedDose = 0

  try {
    const allUserScans =
      role === 'doctor'
        ? await databaseStore.fetchDoctorCreatedScans()
        : await databaseStore.fetchScansForPatient(userId)

    const yearStart = new Date(new Date().getFullYear(), 0, 1)
    const scansThisYear = allUserScans.filter((scan) => scan.scanDate.toDate() >= yearStart)

    if (role === 'doctor') {
      // --- DOCTOR LOGIC: Always calculate the standard annual dose first ---
      const occupationalDoseThisYear = scansThisYear.reduce(
        (sum, scan) => sum + (scan.doctorDose || 0),
        0,
      )
      const remainingAnnualLimit = 20 - occupationalDoseThisYear

      const pregnancies = await databaseStore.fetchPregnancyHistory()
      const activePregnancy = pregnancies?.find((p) => p.status === 'active')

      if (activePregnancy) {
        // --- PREGNANCY LOGIC: A second, concurrent limit applies ---
        console.log('[App.vue] Active pregnancy detected. Calculating dual limits.')

        const scansSinceDeclaration = allUserScans.filter(
          (scan) => scan.scanDate.toDate() >= activePregnancy.declarationDate.toDate(),
        )
        const doseSinceDeclaration = scansSinceDeclaration.reduce(
          (sum, scan) => sum + (scan.doctorDose || 0),
          0,
        )
        const remainingPregnancyLimit = 0.5 - doseSinceDeclaration

        // The UI limit is the MORE RESTRICTIVE (lower) of the two remaining limits.
        doseLimit.value = Math.min(remainingAnnualLimit, remainingPregnancyLimit)
        calculatedDose = occupationalDoseThisYear // The progress bar still reflects the total for the year

        console.log(`[App.vue] Remaining Annual Limit: ${remainingAnnualLimit.toFixed(3)}, Remaining Pregnancy Limit: ${remainingPregnancyLimit.toFixed(3)}. Effective Limit: ${doseLimit.value.toFixed(3)}`)
      } else {
        // --- STANDARD DOCTOR LOGIC ---
        doseLimit.value = 20
        calculatedDose = occupationalDoseThisYear
      }
    } else {
      // --- PATIENT LOGIC ---
      doseLimit.value = 1
      calculatedDose = scansThisYear.reduce((sum, scan) => sum + (scan.patientDose || 0), 0)
    }

    currentMsv.value = parseFloat(calculatedDose.toFixed(3))
  } catch (err) {
    console.error('[App.vue] Failed to update dose calculation:', err)
    currentMsv.value = 0
  } finally {
    isMsvLoading.value = false
  }
}

// --- Watcher ---
watchEffect(() => {
  if (authStore.isAuthReady) {
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
