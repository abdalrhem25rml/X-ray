<script setup>
import { RouterView } from 'vue-router'
import { provide, ref, watch, computed, inject } from 'vue'
import { useAuthStore } from './stores/auth'
import { collection, getDocs } from 'firebase/firestore'
import TheHeader from './components/TheHeader.vue'
import InfoModal from './components/InfoModal.vue'

const db = inject('db')
const authStore = useAuthStore()
const appId = import.meta.env.VITE_APP_ID

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
const isMsvLoading = ref(true)
const userRole = computed(() => authStore.role)
const yearlyLimit = computed(() => (userRole.value === 'doctor' ? 20 : 1))

const fetchYearlyMsv = async () => {
  const user = authStore.user
  if (!user || !userRole.value) {
    currentMsv.value = 0
    isMsvLoading.value = false
    return
  }

  isMsvLoading.value = true
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
        if (userRole.value === 'doctor') {
          if (typeof data.doctorDose === 'number') sum += data.doctorDose
        } else {
          if (typeof data.dose === 'number') sum += data.dose
        }
      }
    })
    currentMsv.value = sum
  } catch (err) {
    console.error('[App.vue] Failed to fetch current mSv:', err)
  } finally {
    isMsvLoading.value = false
  }
}

provide('triggerMsvRecalculation', fetchYearlyMsv)
provide('currentMsv', currentMsv)
provide('yearlyLimit', yearlyLimit)

// ✅ FIX: This is the new, robust logic that replaces the old watcher.
// It waits for the 'isAuthReady' signal from your auth store.
watch(
  () => authStore.isAuthReady,
  (isReady) => {
    // This code only runs when the auth state is definitively known.
    if (isReady) {
      console.log('[App.vue] Auth store is now ready.');
      if (authStore.user) {
        console.log('[App.vue] User is logged in. Fetching mSv.');
        fetchYearlyMsv();
      } else {
        console.log('[App.vue] No user is logged in. Resetting mSv counter.');
        currentMsv.value = 0;
        isMsvLoading.value = false;
      }
    }
  },
  { immediate: true } // This ensures it runs on initial load.
);

// This secondary watcher handles dynamic logins/logouts that happen AFTER the initial load.
watch(() => authStore.user, (newUser, oldUser) => {
    // Only run if the user has actually changed (e.g. from a user object to null, or vice-versa)
    if (authStore.isAuthReady && newUser?.uid !== oldUser?.uid) {
        console.log('[App.vue] User state changed after initial load (login/logout).');
        if (newUser) {
            fetchYearlyMsv();
        } else {
            currentMsv.value = 0;
            isMsvLoading.value = false;
        }
    }
});

</script>

<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col font-inter">
    <TheHeader
      :current-language="currentLanguage"
      :user="authStore.user"
      :msv-data="{ current: currentMsv, limit: yearlyLimit, isLoading: isMsvLoading }"
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
