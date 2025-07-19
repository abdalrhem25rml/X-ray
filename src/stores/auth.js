// stores/auth.js
import { defineStore } from 'pinia'
import {
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

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
        return
      }
      this.authInstance = auth

      // ✅ 3. The onAuthStateChanged listener is now upgraded
      onAuthStateChanged(this.authInstance, async (user) => {
        if (user) {
          // User is logged in, store their main user object
          this.user = user

          // NOW, fetch their role from the corresponding Firestore document
          const db = getFirestore()
          const appId = import.meta.env.VITE_APP_ID
          const userDocRef = doc(db, 'artifacts', appId, 'users', user.uid)
          const userDocSnap = await getDoc(userDocRef)

          if (userDocSnap.exists()) {
            // If the document exists, set the role in our store
            this.role = userDocSnap.data().role
          } else {
            // No custom user document yet, role is null
            this.role = null
          }
        } else {
          // User is logged out, clear everything
          this.user = null
          this.role = null // Also clear the role
        }
        // Signal that the initial auth check is complete
        this.isAuthReady = true
      })
    },

    async logout() {
      this.loading = true
      this.error = null
      this.successMessage = null
      try {
        if (this.authInstance) {
          await signOut(this.authInstance)
          this.user = null
        } else {
          console.warn('Auth instance not available for logout.')
          this.error = 'Authentication service not available.'
        }
      } catch (err) {
        console.error('Error logging out:', err)
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    async signupWithEmail(name, email, password) {
      this.loading = true
      this.error = null
      this.successMessage = null
      try {
        const userCredential = await createUserWithEmailAndPassword(
          this.authInstance,
          email,
          password,
        )
        await updateProfile(userCredential.user, { displayName: name })
        this.user = userCredential.user
        this.successMessage = 'Account created successfully!'
        return true
      } catch (err) {
        console.error('Error signing up with email:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async signInWithEmail(email, password) {
      this.loading = true
      this.error = null
      this.successMessage = null
      try {
        const userCredential = await signInWithEmailAndPassword(this.authInstance, email, password)
        this.user = userCredential.user
        return true
      } catch (err) {
        console.error('Error signing in with email:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async signInWithGoogle() {
      this.loading = true
      this.error = null
      this.successMessage = null
      try {
        const provider = new GoogleAuthProvider()
        const userCredential = await signInWithPopup(this.authInstance, provider)
        this.user = userCredential.user
        return true
      } catch (err) {
        console.error('Error signing in with Google:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async sendPasswordReset(email) {
      this.loading = true
      this.error = null
      this.successMessage = null
      try {
        await sendPasswordResetEmail(this.authInstance, email)
        this.successMessage = 'Password reset link sent to your email!'
        return true
      } catch (err) {
        console.error('Error sending password reset email:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async confirmPasswordReset(oobCode, newPassword) {
      this.loading = true
      this.error = null
      this.successMessage = null
      try {
        await confirmPasswordReset(this.authInstance, oobCode, newPassword)
        this.successMessage =
          'Your password has been reset successfully! You can now sign in with your new password.'
        return true
      } catch (err) {
        console.error('Error confirming password reset:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
