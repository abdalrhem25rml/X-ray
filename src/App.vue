<script setup>
import { RouterView } from 'vue-router'
import { provide, ref, watch, computed, inject } from 'vue'
import { useAuthStore } from './stores/auth'
import { collection, getDocs } from 'firebase/firestore'

// Import new child components
import TheHeader from './components/TheHeader.vue'
import InfoModal from './components/InfoModal.vue'

// --- Injections and Setup ---
const db = inject('db')
const auth = inject('auth')
const appId = import.meta.env.VITE_APP_ID
const authStore = useAuthStore()

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


// --- mSv Counter Logic (remains in App.vue as it's global user data) ---
const currentMsv = ref(0)
const userRole = computed(() => authStore.role)
const yearlyLimit = computed(() => (userRole.value === 'doctor' ? 20 : 1))

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
      if (scanDate instanceof Date && !isNaN(scanDate) && scanDate >= yearStart && typeof data.dose === 'number') {
        sum += data.dose
      }
    })
    currentMsv.value = sum
  } catch (err) {
    console.error('[App.vue] Failed to fetch current mSv:', err)
  }
}

// Watch for auth state changes to fetch data
watch(
  [() => authStore.user, userRole],
  ([user, role]) => {
    if (user && role) {
      fetchYearlyMsv()
    } else {
      currentMsv.value = 0 // Reset on logout
    }
  },
  { immediate: true }
)
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col font-inter">
    <!-- Use the new Header component and pass data via props -->
    <TheHeader
      :current-language="currentLanguage"
      :user="authStore.user"
      :msv-data="{ current: currentMsv, limit: yearlyLimit }"
      @toggle-language="toggleLanguage"
      @toggle-info-modal="toggleInfoModal"
    />

    <!-- Router View remains the same -->
    <router-view v-slot="{ Component, route }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <!-- Use the new Info Modal component -->
    <InfoModal
      :show="showInfoModal"
      :current-language="currentLanguage"
      @close="toggleInfoModal"
    />
  </div>
</template>

<style>
/* Keep your global styles here, especially for fonts and page transitions */
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
