// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithCustomToken, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { useAuthStore } from './stores/auth';


const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();
app.use(pinia);

// Use the router
app.use(router);

// Initialize Firebase (Auth only) using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID // Optional, if you have it
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Get Firebase Auth instance

// Initialize the auth store and listen for auth state changes
const authStore = useAuthStore();
authStore.initAuth(); // This will set up the onAuthStateChanged listener

// For local development, we'll sign in anonymously as a fallback
// The __initial_auth_token is specific to the Canvas environment and not used here.
signInAnonymously(auth)
  .then(() => console.log("Signed in anonymously for local development."))
  .catch((error) => console.error("Error signing in anonymously for local development:", error));


app.mount('#app');

// Important: Load Tailwind CSS CDN for styling
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindScript);

// Configure Tailwind CSS to use the 'Inter' font
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
