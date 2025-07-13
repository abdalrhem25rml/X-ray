// stores/auth.js
import { defineStore } from 'pinia';
import { onAuthStateChanged, signOut, sendPasswordResetEmail, confirmPasswordReset, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Import necessary functions

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthReady: false,
    authInstance: null, // To store the auth instance passed from main.js
    loading: false, // Loading state for auth operations
    error: null, // Error message state
    successMessage: null, // Success message state
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
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        if (this.authInstance) {
          await signOut(this.authInstance);
          this.user = null;
          console.log("User logged out.");
          this.successMessage = 'Logged out successfully.';
        } else {
          console.warn("Auth instance not available for logout.");
          this.error = 'Authentication service not available.';
        }
      } catch (err) {
        console.error("Error logging out:", err);
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async signupWithEmail(name, email, password) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        const userCredential = await createUserWithEmailAndPassword(this.authInstance, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        this.user = userCredential.user;
        this.successMessage = 'Account created successfully!';
        return true;
      } catch (err) {
        console.error("Error signing up with email:", err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async signInWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        const userCredential = await signInWithEmailAndPassword(this.authInstance, email, password);
        this.user = userCredential.user;
        this.successMessage = 'Signed in successfully!';
        return true;
      } catch (err) {
        console.error("Error signing in with email:", err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async signInWithGoogle() {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(this.authInstance, provider);
        this.user = userCredential.user;
        this.successMessage = 'Signed in with Google successfully!';
        return true;
      } catch (err) {
        console.error("Error signing in with Google:", err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async sendPasswordReset(email) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        await sendPasswordResetEmail(this.authInstance, email);
        this.successMessage = 'Password reset link sent to your email!';
        return true;
      } catch (err) {
        console.error("Error sending password reset email:", err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async confirmPasswordReset(oobCode, newPassword) {
      this.loading = true;
      this.error = null;
      this.successMessage = null;
      try {
        await confirmPasswordReset(this.authInstance, oobCode, newPassword);
        this.successMessage = 'Your password has been reset successfully! You can now sign in with your new password.';
        return true;
      } catch (err) {
        console.error("Error confirming password reset:", err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },
  },
});
