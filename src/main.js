// main.js
import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

// Firebase SDK imports
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { useAuthStore } from './stores/auth'
import { createPinia } from 'pinia'

// --- Font Awesome imports ---
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEye,
  faEdit,
  faTrashAlt,
  faFileMedical,
  faPlus,
  faSpinner, // For loading indicators
  faQuestionCircle,
  // Add any other solid icons you use here (e.g., faUser, faCog, etc.)
} from '@fortawesome/free-solid-svg-icons'

// Add the imported icons to the Font Awesome library
library.add(faEye, faEdit, faTrashAlt, faFileMedical, faPlus, faSpinner, faQuestionCircle)
// --- End Font Awesome imports ---

// Firebase configuration using environment variables (Vite's import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN, // Use from .env or Firebase default
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID, // Optional
}

// Initialize Firebase App FIRST
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp) // Get Firebase Auth instance
const db = getFirestore(firebaseApp) // Get Firebase Firestore instance

const app = createApp(App)

// Initialize Pinia
const pinia = createPinia()
app.use(pinia)

// Use the router
app.use(router)

// Register the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Global authentication state for Firestore operations
const currentUserId = ref(null)
const isAuthReady = ref(false) // Reactive state to track auth readiness

// Initialize the auth store and listen for auth state changes
const authStore = useAuthStore()
authStore.initAuth(auth) // Pass the initialized auth instance to your store's initAuth method

// Set up onAuthStateChanged listener directly in main.js to update reactive states
onAuthStateChanged(auth, (user) => {
  currentUserId.value = user ? user.uid : null
  authStore.user = user // Update Pinia store's user state
  authStore.isAuthenticated = !!user // Update Pinia store's isAuthenticated state
  isAuthReady.value = true // Mark authentication as ready after initial check

  if (user) {
    // Redirect to dashboard if user is signed in and currently on a public auth route
    const currentRouteName = router.currentRoute.value.name
    const publicAuthRoutes = ['signup', 'signin', 'resetpassword', 'newpassword']
    if (publicAuthRoutes.includes(currentRouteName)) {
      router.push('/dashboard')
    }
  } else {
    currentUserId.value = null
    authStore.user = null
    authStore.isAuthenticated = false
  }
})

// Provide Firestore instance, Auth instance, and reactive userId/isAuthReady to all components
app.provide('db', db)
app.provide('auth', auth)
app.provide('currentUserId', currentUserId) // Provide reactive userId
app.provide('isAuthReady', isAuthReady) // Provide reactive auth status
app.provide('appId', typeof __app_id !== 'undefined' ? __app_id : 'default-app-id') // Provide appId

app.mount('#app')
