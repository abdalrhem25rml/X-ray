// src/stores/auth.js
import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup, // Using signInWithPopup for Google Auth
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged,
  signOut as firebaseSignOut
} from "firebase/auth";

// No need to import router here, as redirection is handled by router.beforeEach
// import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // Stores the Firebase user object
    isAuthenticated: false, // Indicates if a user is currently logged in
    isAuthReady: false, // Indicates if the initial Firebase auth check is complete
    loading: false, // For general loading states (e.g., during signup/login)
    error: null,    // For authentication-related errors
    authInstance: null, // To store the auth instance passed from main.js
  }),

  getters: {
    // Returns the current user's display name or 'Guest' if not logged in
    currentUserDisplayName: (state) => state.user ? state.user.displayName || state.user.email : 'Guest',
    // Checks if a user is currently logged in
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    // Initializes the Firebase Auth listener
    // This method now *receives* the auth instance from main.js and stores it.
    // The actual onAuthStateChanged listener is managed in main.js.
    initAuth(auth) {
      if (!auth) {
        console.error("Auth Store: Auth instance not provided to initAuth.");
        return;
      }
      this.authInstance = auth;
      console.log("Auth Store: initAuth called, authInstance set.");

      // For signInWithPopup, getRedirectResult is not the primary mechanism,
      // so we'll remove its call here to simplify and avoid confusion.
      // The onAuthStateChanged listener in main.js will be the source of truth.
    },

    // Handles user signup with email and password
    async signupWithEmail(name, email, password) {
      this.loading = true;
      this.error = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        const userCredential = await createUserWithEmailAndPassword(this.authInstance, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        console.log("Auth Store: User signed up with email via Pinia:", user.email, "Name:", user.displayName);
        // State update (user, isAuthenticated) will be handled by the onAuthStateChanged listener in main.js
        // Redirection will be handled by router.beforeEach
      } catch (error) {
        console.error("Auth Store: Error signing up with email via Pinia:", error.code, error.message);
        switch (error.code) {
          case 'auth/email-already-in-use': this.error = 'The email address is already in use by another account.'; break;
          case 'auth/invalid-email': this.error = 'The email address is not valid.'; break;
          case 'auth/operation-not-allowed': this.error = 'Email/password accounts are not enabled. Please contact support.'; break;
          case 'auth/weak-password': this.error = 'The password is too weak. Please choose a stronger password (at least 6 characters).'; break;
          default: this.error = `Signup failed: ${error.message}`; break;
        }
      } finally {
        this.loading = false;
      }
    },

    // Handles user signup with Google using a popup
    async signupWithGoogle() {
      this.loading = true;
      this.error = null;
      try {
        if (!this.authInstance) {
          console.error("Auth Store: signupWithGoogle - Auth instance is null or undefined.");
          throw new Error("Auth instance not initialized.");
        }
        const provider = new GoogleAuthProvider();
        console.log("Auth Store: signupWithGoogle - Attempting to open Google signup popup...");
        const userCredential = await signInWithPopup(this.authInstance, provider); // Using signInWithPopup
        const user = userCredential.user;
        console.log("Auth Store: signupWithGoogle SUCCESS via popup. User:", user.email);
        // State update (user, isAuthenticated) will be handled by the onAuthStateChanged listener in main.js
        // Redirection will be handled by router.beforeEach
      } catch (error) {
        console.error("Auth Store: signupWithGoogle - Error during Google signup popup:", error.code, error.message);
        switch (error.code) {
          case 'auth/popup-closed-by-user': this.error = 'Google sign-up was cancelled or popup closed.'; break;
          case 'auth/cancelled-popup-request': this.error = 'Popup window was closed before completing authentication.'; break;
          case 'auth/account-exists-with-different-credential': this.error = 'An account with this email already exists using a different sign-in method.'; break;
          default: this.error = `Google signup failed: ${error.message}`; break;
        }
      } finally {
        this.loading = false;
      }
    },

    // Handles user login with email and password
    async signInWithEmail(email, password) { // Renamed from loginWithEmail
      this.loading = true;
      this.error = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        const userCredential = await signInWithEmailAndPassword(this.authInstance, email, password);
        console.log("Auth Store: User signed in with email:", userCredential.user.email);
        // State update (user, isAuthenticated) will be handled by the onAuthStateChanged listener in main.js
        // Redirection will be handled by router.beforeEach
      } catch (error) {
        console.error("Auth Store: Error signing in with email:", error.code, error.message);
        switch (error.code) {
          case 'auth/invalid-email': this.error = 'Invalid email address.'; break;
          case 'auth/user-disabled': this.error = 'This account has been disabled.'; break;
          case 'auth/user-not-found': this.error = 'No user found with this email.'; break;
          case 'auth/wrong-password': this.error = 'Incorrect password.'; break;
          default: this.error = `Sign in failed: ${error.message}`; break;
        }
      } finally {
        this.loading = false;
      }
    },

    // Handles user login with Google using a popup
    async signInWithGoogle() { // Renamed from loginWithGoogle
      this.loading = true;
      this.error = null;
      try {
        if (!this.authInstance) {
          console.error("Auth Store: signInWithGoogle - Auth instance is null or undefined.");
          throw new Error("Auth instance not initialized.");
        }
        const provider = new GoogleAuthProvider();
        console.log("Auth Store: signInWithGoogle - Attempting to open Google login popup...");
        const userCredential = await signInWithPopup(this.authInstance, provider); // Using signInWithPopup
        const user = userCredential.user;
        console.log("Auth Store: signInWithGoogle SUCCESS via popup. User:", user.email);
        // State update (user, isAuthenticated) will be handled by the onAuthStateChanged listener in main.js
        // Redirection will be handled by router.beforeEach
      } catch (error) {
        console.error("Auth Store: signInWithGoogle - Error during Google login popup:", error.code, error.message);
        switch (error.code) {
          case 'auth/popup-closed-by-user': this.error = 'Google login was cancelled or popup closed.'; break;
          case 'auth/cancelled-popup-request': this.error = 'Popup window was closed before completing authentication.'; break;
          case 'auth/account-exists-with-different-credential': this.error = 'An account with this email already exists using a different sign-in method.'; break;
          default: this.error = `Google login failed: ${error.message}`; break;
        }
      } finally {
        this.loading = false;
      }
    },

    // Handles user logout
    async signOut() {
      this.loading = true;
      this.error = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        await firebaseSignOut(this.authInstance);
        console.log('Auth Store: User logged out.');
        // State update (user, isAuthenticated) will be handled by the onAuthStateChanged listener in main.js
        // Redirection will be handled by router.beforeEach
      } catch (error) {
        console.error("Auth Store: Error signing out:", error.message);
        this.error = `Logout failed: ${error.message}`;
      } finally {
        this.loading = false;
      }
    },
  },
});
