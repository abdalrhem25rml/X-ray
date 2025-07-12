// src/stores/auth.js
import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  sendPasswordResetEmail, // Import for password reset
  confirmPasswordReset, // Import for confirming password reset
  applyActionCode, // Needed for applying action code if confirmPasswordReset requires it
} from "firebase/auth";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isAuthReady: false,
    loading: false,
    error: null,
    successMessage: null, // New state for success messages
    authInstance: null,
  }),

  getters: {
    currentUserDisplayName: (state) => state.user ? state.user.displayName || state.user.email : 'Guest',
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    initAuth(auth) {
      if (!auth) {
        console.error("Auth Store: Auth instance not provided to initAuth.");
        return;
      }
      this.authInstance = auth;
      console.log("Auth Store: initAuth called, authInstance set.");
    },

    async signupWithEmail(name, email, password) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        const userCredential = await createUserWithEmailAndPassword(this.authInstance, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        console.log("Auth Store: User signed up with email via Pinia:", user.email, "Name:", user.displayName);
        this.successMessage = 'Account created successfully! You are now logged in.';
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

    async signupWithGoogle() {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) {
          console.error("Auth Store: signupWithGoogle - Auth instance is null or undefined.");
          throw new Error("Auth instance not initialized.");
        }
        const provider = new GoogleAuthProvider();
        console.log("Auth Store: signupWithGoogle - Attempting to open Google signup popup...");
        const userCredential = await signInWithPopup(this.authInstance, provider);
        const user = userCredential.user;
        console.log("Auth Store: signupWithGoogle SUCCESS via popup. User:", user.email);
        this.successMessage = 'Signed up with Google successfully! You are now logged in.';
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

    async signInWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        const userCredential = await signInWithEmailAndPassword(this.authInstance, email, password);
        console.log("Auth Store: User signed in with email:", userCredential.user.email);
        this.successMessage = 'Logged in successfully!';
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

    async signInWithGoogle() {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) {
          console.error("Auth Store: signInWithGoogle - Auth instance is null or undefined.");
          throw new Error("Auth instance not initialized.");
        }
        const provider = new GoogleAuthProvider();
        console.log("Auth Store: signInWithGoogle - Attempting to open Google login popup...");
        const userCredential = await signInWithPopup(this.authInstance, provider);
        const user = userCredential.user;
        console.log("Auth Store: signInWithGoogle SUCCESS via popup. User:", user.email);
        this.successMessage = 'Logged in with Google successfully!';
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

    async signOut() {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        await firebaseSignOut(this.authInstance);
        console.log('Auth Store: User logged out.');
        this.successMessage = 'You have been logged out.';
      } catch (error) {
        console.error("Auth Store: Error signing out:", error.message);
        this.error = `Logout failed: ${error.message}`;
      } finally {
        this.loading = false;
      }
    },

    // New action: Send password reset email
    async sendPasswordReset(email) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");
        await sendPasswordResetEmail(this.authInstance, email);
        this.successMessage = 'Password reset email sent! Please check your inbox.';
        console.log("Auth Store: Password reset email sent to:", email);
      } catch (error) {
        console.error("Auth Store: Error sending password reset email:", error.code, error.message);
        switch (error.code) {
          case 'auth/invalid-email': this.error = 'The email address is not valid.'; break;
          case 'auth/user-not-found': this.error = 'No user found with this email address.'; break;
          default: this.error = `Failed to send reset email: ${error.message}`; break;
        }
      } finally {
        this.loading = false;
      }
    },

    // New action: Confirm password reset and set new password
    async confirmPasswordReset(oobCode, newPassword) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (!this.authInstance) throw new Error("Auth instance not initialized.");

        // Apply the action code first to validate it
        await applyActionCode(this.authInstance, oobCode);
        console.log("Auth Store: Action code applied successfully.");

        // Then confirm the password reset
        await confirmPasswordReset(this.authInstance, oobCode, newPassword);
        this.successMessage = 'Your password has been reset successfully! You are now logged in.';
        console.log("Auth Store: Password reset confirmed and new password set.");

        // After successful password reset, the user is typically signed in automatically
        // The onAuthStateChanged listener in main.js will pick this up and redirect to dashboard.

      } catch (error) {
        console.error("Auth Store: Error confirming password reset:", error.code, error.message);
        switch (error.code) {
          case 'auth/expired-action-code': this.error = 'The password reset link has expired.'; break;
          case 'auth/invalid-action-code': this.error = 'The password reset link is invalid.'; break;
          case 'auth/user-disabled': this.error = 'This account has been disabled.'; break;
          case 'auth/user-not-found': this.error = 'User not found for this reset request.'; break;
          case 'auth/weak-password': this.error = 'The new password is too weak. Please choose a stronger password (at least 6 characters).'; break;
          default: this.error = `Failed to reset password: ${error.message}`; break;
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
