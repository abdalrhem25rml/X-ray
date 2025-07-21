// stores/database.js
import { defineStore } from 'pinia'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  orderBy,
  deleteDoc,
} from 'firebase/firestore'
import { useAuthStore } from './auth'

/**
 * @description
 * This store handles all interactions with the Firestore database.
 * It is designed to be the single source of truth for database queries.
 * It does NOT store collections of data in its state, as per project
 * guidelines. Instead, its actions return the fetched data directly.
 * State is used only for loading and error management.
 */
export const useDatabaseStore = defineStore('database', {
  state: () => ({
    loading: false, // A global loading state for any database operation
    error: null, // Stores the message of the last encountered error
  }),

  actions: {
    // --- PRIVATE HELPER ---
    /**
     * Gets essential instances and IDs. Aborts if user is not authenticated.
     * @private
     * @returns { {db: Firestore, appId: string, userId: string} | null }
     */
    _getDBEssentials() {
      const authStore = useAuthStore()
      if (!authStore.user?.uid) {
        this.error = 'User not authenticated. Operation cancelled.'
        console.error(this.error)
        return null
      }
      const db = getFirestore()
      const appId = import.meta.env.VITE_APP_ID
      const userId = authStore.user.uid
      return { db, appId, userId }
    },

    // --- USER PROFILE ACTIONS ---

    /**
     * Creates the user profile document in Firestore after signup.
     * This is separate from Auth user creation.
     * @param {string} userId - The user's UID from Firebase Auth.
     * @param {string} email - The user's email.
     * @param {string} displayName - The user's display name.
     * @param {'doctor' | 'patient'} role - The user's role in the application.
     * @returns {Promise<boolean>} - True on success, false on failure.
     */
    async createUserProfile(userId, email, displayName, role) {
      this.loading = true
      this.error = null
      try {
        const db = getFirestore()
        const appId = import.meta.env.VITE_APP_ID
        const userDocRef = doc(db, 'artifacts', appId, 'users', userId)

        await setDoc(userDocRef, {
          email,
          displayName,
          role,
          createdAt: serverTimestamp(),
        })
        return true
      } catch (err) {
        console.error('Error creating user profile:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    // --- PATIENT DATA ACTIONS ---

    /**
     * Creates a detailed patient profile.
     * @param {string} patientId - The UID of the user this profile belongs to.
     * @param {object} patientData - Object containing patient details.
     * @param {string} patientData.displayName - Patient's full name.
     * @param {Date} patientData.birthDate - Patient's date of birth.
     * @param {string} patientData.gender - Patient's gender.
     * @param {string[]} patientData.allergies - Array of allergies.
     * @param {string[]} patientData.medicalHistory - Array of medical history notes.
     * @returns {Promise<boolean>}
     */
    async createPatientProfile(patientId, patientData) {
      this.loading = true
      this.error = null
      try {
        const { db, appId } = this._getDBEssentials()
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        await setDoc(patientDocRef, {
          userId: patientId,
          ...patientData,
          updatedAt: serverTimestamp(),
        })
        return true
      } catch (err) {
        console.error('Error creating patient profile:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    /**
     * Fetches a single patient's profile from the 'patients' collection.
     * @param {string} patientId - The ID of the patient to fetch.
     * @returns {Promise<object|null>} - The patient data object or null.
     */
    async fetchPatientProfile(patientId) {
      this.loading = true
      this.error = null
      try {
        const essentials = this._getDBEssentials()
        if (!essentials) return null

        const { db, appId } = essentials
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        const docSnap = await getDoc(patientDocRef)

        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() }
        } else {
          console.warn(`No patient profile found for ID: ${patientId}`)
          return null
        }
      } catch (err) {
        console.error('Error fetching patient profile:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    // --- SCAN ACTIONS ---

    /**
     * Creates a new scan record.
     * @param {object} scanData - The data for the new scan.
     * @param {string} scanData.patientId - The UID of the patient.
     * @param {string} scanData.scanType - E.g., 'CT', 'X-ray'.
     * @param {Date} scanData.scanDate - The date of the scan.
     * @param {string} scanData.reason - Reason for the scan.
     * @param {number} scanData.patientDose - Dose in mSv for the patient.
     * @param {number} scanData.doctorDose - Occupational dose in mSv for the doctor.
     * @returns {Promise<string|null>} - The ID of the new scan doc or null.
     */
    async createScan(scanData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')

        const newScanData = {
          ...scanData,
          creatorId: userId,
          isPersonalScan: scanData.patientId === userId,
          createdAt: serverTimestamp(),
        }

        const docRef = await addDoc(scansCollectionRef, newScanData)
        return docRef.id
      } catch (err) {
        console.error('Error creating scan record:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    /**
     * Fetches all scans for a given patient, ordered by date.
     * @param {string} patientId - The UID of the patient whose scans to fetch.
     * @returns {Promise<object[]|null>} - An array of scan objects or null.
     */
    async fetchScansForPatient(patientId) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const q = query(
          scansCollectionRef,
          where('patientId', '==', patientId),
          orderBy('scanDate', 'desc'),
        )

        const querySnapshot = await getDocs(q)
        const scans = []
        querySnapshot.forEach((doc) => {
          scans.push({ id: doc.id, ...doc.data() })
        })
        return scans
      } catch (err) {
        console.error('Error fetching scans for patient:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    /**
     * Fetches all scans created by the currently logged-in doctor.
     * @returns {Promise<object[]|null>} An array of scan objects or null.
     */
    async fetchDoctorCreatedScans() {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const q = query(
          scansCollectionRef,
          where('creatorId', '==', userId),
          orderBy('scanDate', 'desc'),
        )

        const querySnapshot = await getDocs(q)
        const scans = []
        querySnapshot.forEach((doc) => {
          scans.push({ id: doc.id, ...doc.data() })
        })
        return scans
      } catch (err) {
        console.error('Error fetching doctor-created scans:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    // --- PREGNANCY DECLARATION ACTIONS (for Doctors) ---

    /**
     * Adds a pregnancy declaration for the currently logged-in doctor.
     * @param {object} declarationData
     * @param {Date} declarationData.declarationDate
     * @param {Date} declarationData.estimatedDueDate
     * @param {number} declarationData.doseAtDeclaration - Occupational dose (mSv) before declaration.
     * @returns {Promise<string|null>} - The ID of the new pregnancy doc or null.
     */
    async addPregnancyDeclaration(declarationData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        // This is a subcollection of the DOCTOR's user document
        const pregnancyCollectionRef = collection(
          db,
          'artifacts',
          appId,
          'users',
          userId,
          'pregnancies',
        )

        // Calculate the monitoring period start date (Jan 1st of the declaration year)
        const declarationYear = declarationData.declarationDate.getFullYear()
        const monitoringPeriodStartDate = new Date(declarationYear, 0, 1)

        const newDeclaration = {
          ...declarationData,
          status: 'active',
          endDate: null,
          monitoringPeriodStartDate,
          createdAt: serverTimestamp(),
        }

        const docRef = await addDoc(pregnancyCollectionRef, newDeclaration)
        return docRef.id
      } catch (err) {
        console.error('Error adding pregnancy declaration:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    /**
     * Fetches the pregnancy history for the currently logged-in doctor.
     * @returns {Promise<object[]|null>} - An array of pregnancy declaration objects.
     */
    async fetchPregnancyHistory() {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        const pregnancyCollectionRef = collection(
          db,
          'artifacts',
          appId,
          'users',
          userId,
          'pregnancies',
        )
        const q = query(pregnancyCollectionRef, orderBy('declarationDate', 'desc'))

        const querySnapshot = await getDocs(q)
        const history = []
        querySnapshot.forEach((doc) => {
          history.push({ id: doc.id, ...doc.data() })
        })
        return history
      } catch (err) {
        console.error('Error fetching pregnancy history:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    /**
     * Updates a pregnancy record, e.g., to mark it as 'completed'.
     * @param {string} pregnancyId - The ID of the pregnancy document to update.
     * @param {object} updates - The fields to update (e.g., { status: 'completed', endDate: new Date() }).
     * @returns {Promise<boolean>}
     */
    async updatePregnancyRecord(pregnancyId, updates) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false

      try {
        const { db, appId, userId } = essentials
        const pregnancyDocRef = doc(
          db,
          'artifacts',
          appId,
          'users',
          userId,
          'pregnancies',
          pregnancyId,
        )
        await updateDoc(pregnancyDocRef, updates)
        return true
      } catch (err) {
        console.error('Error updating pregnancy record:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
