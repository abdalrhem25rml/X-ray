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
    userProfile: null, // Holds the full user profile from Firestore
    isAuthReady: false,
    authInstance: null,
    loading: false,
    error: null,
    successMessage: null,
    isProfileLoading: false,
  }),
  getters: {
    // Getter to easily check if the profile is complete
    isProfileComplete: (state) => {
      // Profile is complete if the role AND birthDate fields exist.
      return !!state.userProfile?.role && !!state.userProfile?.birthDate
    },
    // Getter for the role for easier access in components
    role: (state) => state.userProfile?.role,
  },
  actions: {
    initAuth(auth) {
      if (!auth) return
      this.authInstance = auth

      onAuthStateChanged(this.authInstance, async (user) => {
        if (user) {
          this.user = user
          // ✅ 1. Set profile loading to TRUE before starting the fetch.
          this.isProfileLoading = true
          try {
            const db = getFirestore()
            const appId = import.meta.env.VITE_APP_ID
            const userDocRef = doc(db, 'artifacts', appId, 'users', user.uid)
            const userDocSnap = await getDoc(userDocRef)

            if (userDocSnap.exists()) {
              this.userProfile = userDocSnap.data()
            } else {
              this.userProfile = null
            }
          } catch (error) {
            console.error('Failed to fetch user profile:', error)
            this.userProfile = null
          } finally {
            // ✅ 2. Set profile loading to FALSE after the fetch is complete.
            this.isProfileLoading = false
          }
        } else {
          this.user = null
          this.userProfile = null
        }
        // isAuthReady indicates the initial check is done.
        this.isAuthReady = true
      })
    },

    // Action to manually update the local profile state after saving
    setUserProfile(profileData) {
      this.userProfile = profileData
    },

    async logout() {
      await signOut(this.authInstance)
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
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
