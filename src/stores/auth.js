// src/stores/auth.js
import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signOut as firebaseSignOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import router from '../router'; // Import router for redirection

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // Stores the Firebase user object
    isAuthenticated: false,
    loading: false, // For general loading states (e.g., during signup)
    error: null,    // For authentication-related errors
  }),

  getters: {
    // Returns the current user's display name or 'Guest' if not logged in
    currentUserDisplayName: (state) => state.user ? state.user.displayName || state.user.email : 'Guest',
    // Checks if a user is currently logged in
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    // Initializes the Firebase Auth listener
    async initAuth() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.isAuthenticated = true;
          console.log('Auth state changed: User is logged in.', user.uid);
          // Optional: Redirect to dashboard if on login/signup page after refresh
          if (router.currentRoute.value.path === '/login' || router.currentRoute.value.path === '/') {
            router.push('/dashboard');
          }
        } else {
          this.user = null;
          this.isAuthenticated = false;
          console.log('Auth state changed: User is logged out.');
          // Optional: Redirect to signup/login if on a protected route after logout
          if (router.currentRoute.value.meta?.requiresAuth) { // Assuming you'll add meta.requiresAuth later
            router.push('/login');
          }
        }
      });
    },

    // Handles user signup with email and password
    async signupWithEmail(name, email, password) {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update user profile with the provided name
        await updateProfile(user, { displayName: name });

        this.user = user;
        this.isAuthenticated = true;
        console.log("User signed up with email via Pinia:", user.email, "Name:", user.displayName);
        router.push('/dashboard'); // Redirect immediately after successful signup
      } catch (error) {
        console.error("Error signing up with email via Pinia:", error.code, error.message);
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.error = 'The email address is already in use by another account.';
            break;
          case 'auth/invalid-email':
            this.error = 'The email address is not valid.';
            break;
          case 'auth/operation-not-allowed':
            this.error = 'Email/password accounts are not enabled. Please contact support.';
            break;
          case 'auth/weak-password':
            this.error = 'The password is too weak. Please choose a stronger password (at least 6 characters).';
            break;
          default:
            this.error = `Signup failed: ${error.message}`;
            break;
        }
      } finally {
        this.loading = false;
      }
    },

    // Handles user signup with Google
    async signupWithGoogle() {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        this.user = user;
        this.isAuthenticated = true;
        console.log("User signed up with Google via Pinia:", user.email, "Name:", user.displayName);
        router.push('/dashboard'); // Redirect immediately after successful signup
      } catch (error) {
        console.error("Error signing up with Google via Pinia:", error.code, error.message);
        switch (error.code) {
          case 'auth/popup-closed-by-user':
            this.error = 'Google sign-up was cancelled.';
            break;
          case 'auth/cancelled-popup-request':
            this.error = 'Popup window was closed before completing authentication.';
            break;
          default:
            this.error = `Google signup failed: ${error.message}`;
            break;
        }
      } finally {
        this.loading = false;
      }
    },

    // Handles user login with email and password (Placeholder for later implementation)
    async loginWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      // Implement Firebase signInWithEmailAndPassword logic here
      console.log('Login with email triggered (not yet implemented fully)');
      this.loading = false;
      this.error = 'Email login not yet fully implemented.';
    },

    // Handles user login with Google (Placeholder for later implementation)
    async loginWithGoogle() {
      this.loading = true;
      this.error = null;
      // Implement Firebase signInWithPopup (Google) logic here for login
      console.log('Google login triggered (not yet implemented fully)');
      this.loading = false;
      this.error = 'Google login not yet fully implemented.';
    },


    // Handles user logout
    async signOut() {
      this.loading = true;
      this.error = null;
      try {
        const auth = getAuth();
        await firebaseSignOut(auth);
        this.user = null;
        this.isAuthenticated = false;
        console.log('User logged out.');
        router.push('/login'); // Redirect to login page after logout
      } catch (error) {
        console.error("Error signing out:", error.message);
        this.error = `Logout failed: ${error.message}`;
      } finally {
        this.loading = false;
      }
    },
  },
});
