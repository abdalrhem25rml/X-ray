// stores/auth.js (Example - adjust based on your actual auth store logic)
import { defineStore } from 'pinia';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import necessary functions

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthReady: false,
    authInstance: null, // To store the auth instance passed from main.js
  }),
  actions: {
    // Modify initAuth to accept the auth instance
    initAuth(auth) {
      if (!auth) {
        console.error("Auth instance not provided to initAuth.");
        return;
      }
      this.authInstance = auth; // Store the auth instance

      // Set up the listener using the provided auth instance
      onAuthStateChanged(this.authInstance, (user) => {
        this.user = user;
        this.isAuthReady = true;
        if (user) {
          console.log("Auth Store: User logged in:", user.uid);
        } else {
          console.log("Auth Store: User logged out.");
        }
      });
    },
    async logout() {
      if (this.authInstance) {
        await signOut(this.authInstance);
        this.user = null;
        console.log("User logged out.");
      } else {
        console.warn("Auth instance not available for logout.");
      }
    },
    // ... other auth actions like login, signup
  },
});
