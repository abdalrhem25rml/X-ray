// main.js
import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'

// Firebase SDK imports for standard npm installation
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Removed signInAnonymously import
import { getFirestore } from "firebase/firestore";
import { useAuthStore } from './stores/auth';
import { createPinia } from 'pinia'


// Firebase configuration using environment variables (Vite's import.meta.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID // Optional
};

// Initialize Firebase App FIRST
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Get Firebase Auth instance
const db = getFirestore(firebaseApp); // Get Firebase Firestore instance

const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();
app.use(pinia);

// Use the router
app.use(router);

// Global authentication state for Firestore operations
const currentUserId = ref(null); // Reactive ref for current user ID
const isAuthReady = ref(false); // Reactive state to track auth readiness

// Initialize the auth store and listen for auth state changes
const authStore = useAuthStore();
// Pass the initialized auth instance to your store's initAuth method
authStore.initAuth(auth);

// Set up onAuthStateChanged listener directly in main.js to update reactive states
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUserId.value = user.uid;
    console.log("Firebase Auth State Changed: User is signed in with UID:", currentUserId.value);
  } else {
    currentUserId.value = null; // No user signed in
    console.log("Firebase Auth State Changed: No user is signed in.");
  }
  isAuthReady.value = true; // Mark authentication as ready after initial check
});


// Provide Firestore instance, Auth instance, and reactive userId/isAuthReady to all components
app.provide('db', db);
app.provide('auth', auth);
app.provide('currentUserId', currentUserId); // Provide reactive userId
app.provide('isAuthReady', isAuthReady); // Provide reactive auth status

app.mount('#app');

// Important: Load Tailwind CSS CDN for styling
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindScript);

// Configure Tailwind CSS to use the 'Inter' and 'Cairo' fonts
tailwindScript.onload = () => {
  window.tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
          cairo: ['Cairo', 'sans-serif'], // Add Cairo for Arabic
        },
      },
    },
  };
};
