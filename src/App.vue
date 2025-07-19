<script setup>
import { RouterView } from 'vue-router'
import { provide, ref, watch, computed, inject } from 'vue'
import { useAuthStore } from './stores/auth'
import { collection, getDocs } from 'firebase/firestore'
import TheHeader from './components/TheHeader.vue'
import InfoModal from './components/InfoModal.vue'

// --- Injections and Setup ---
const db = inject('db')
const authStore = useAuthStore()
const appId = import.meta.env.VITE_APP_ID

// --- Global State & Toggles ---
const currentLanguage = ref('en')
const showInfoModal = ref(false)

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'ar' : 'en'
}
const toggleInfoModal = () => {
  showInfoModal.value = !showInfoModal.value
}

provide('currentLanguage', currentLanguage)
provide('toggleLanguage', toggleLanguage)
provide('toggleInfoModal', toggleInfoModal)

// --- mSv Counter Logic ---
const currentMsv = ref(0)
const userRole = computed(() => authStore.role)
const yearlyLimit = computed(() => (userRole.value === 'doctor' ? 20 : 1))

// --- CORRECTED: fetchYearlyMsv now isolates the dose based on role ---
const fetchYearlyMsv = async () => {
  const user = authStore.user
  if (!user || !userRole.value) {
    currentMsv.value = 0
    return
  }
  try {
    const now = new Date()
    const yearStart = new Date(now.getFullYear(), 0, 1)
    const scansCol = collection(db, 'artifacts', appId, 'users', user.uid, 'scans')
    const snapshot = await getDocs(scansCol)
    let sum = 0
    snapshot.forEach((doc) => {
      const data = doc.data()
      const scanDate = data.scanDate?.toDate ? data.scanDate.toDate() : new Date(data.scanDate)
      if (scanDate instanceof Date && !isNaN(scanDate) && scanDate >= yearStart) {
        // ** THE FIX IS HERE **
        if (userRole.value === 'doctor') {
          // For doctors, ONLY sum their personal occupational dose.
          if (typeof data.doctorDose === 'number') {
            sum += data.doctorDose
          }
        } else {
          // For all other users (patients), sum the patient dose.
          if (typeof data.dose === 'number') {
            sum += data.dose
          }
        }
      }
    })
    currentMsv.value = sum
  } catch (err) {
    console.error('[App.vue] Failed to fetch current mSv:', err)
  }
}

provide('triggerMsvRecalculation', fetchYearlyMsv)
provide('currentMsv', currentMsv)
provide('yearlyLimit', yearlyLimit)

watch(
  () => authStore.user,
  (user) => {
    if (user) {
      fetchYearlyMsv()
    } else {
      currentMsv.value = 0
    }
  },
  { immediate: true },
)
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col font-inter">
    <TheHeader
      :current-language="currentLanguage"
      :user="authStore.user"
      :msv-data="{ current: currentMsv, limit: yearlyLimit }"
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
/* ... global styles remain unchanged ... */
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
