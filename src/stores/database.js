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
  Timestamp,
  orderBy,
  deleteDoc,
  writeBatch,
} from 'firebase/firestore'
import { useAuthStore } from './auth'

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    loading: false,
    error: null,
  }),

  actions: {
    _getDBEssentials() {
      const authStore = useAuthStore()
      if (!authStore.user?.uid) {
        this.error = 'User not authenticated. Operation cancelled.'
        return null
      }
      const db = getFirestore()
      const appId = import.meta.env.VITE_APP_ID
      const userId = authStore.user.uid
      return { db, appId, userId }
    },

    // --- USER PROFILE ACTIONS ---

    // This is the function that was missing. It saves data to the /users collection.
    async setUserProfile(userId, profileData) {
      console.log(`[DB_STORE] setUserProfile: Updating profile for user ID: ${userId}`)
      this.loading = true
      this.error = null
      try {
        const db = getFirestore()
        const appId = import.meta.env.VITE_APP_ID
        const userDocRef = doc(db, 'artifacts', appId, 'users', userId)
        await setDoc(userDocRef, profileData, { merge: true })
        console.log(`[DB_STORE] setUserProfile: Successfully updated profile for ${userId}.`)
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    // This function correctly fetches the user's profile from the /users collection.
    async fetchUserProfile(userId) {
      this.loading = true
      this.error = null
      try {
        const essentials = this._getDBEssentials()
        if (!essentials) return null
        const { db, appId } = essentials
        const userDocRef = doc(db, 'artifacts', appId, 'users', userId)
        const docSnap = await getDoc(userDocRef)
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() }
        } else {
          return null
        }
      } catch (err) {
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    // --- PATIENT DATA ACTIONS (for Doctors creating separate patients) ---
    async addNewPatient(patientData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null
      try {
        const { db, appId, userId } = essentials
        const patientsCollectionRef = collection(db, 'artifacts', appId, 'patients')
        const dataToSave = {
          ...patientData,
          creatorId: userId,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        }
        const docRef = await addDoc(patientsCollectionRef, dataToSave)
        return docRef.id
      } catch (err) {
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    async updatePatientProfile(patientId, patientData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        await updateDoc(patientDocRef, { ...patientData, updatedAt: Timestamp.now() })
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async fetchPatientsForDoctor() {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return []
      try {
        const { db, appId, userId } = essentials
        const patientsCollectionRef = collection(db, 'artifacts', appId, 'patients')
        const q = query(
          patientsCollectionRef,
          where('creatorId', '==', userId),
          orderBy('createdAt', 'desc'),
        )
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      } catch (err) {
        this.error = err.message
        return []
      } finally {
        this.loading = false
      }
    },

    async deletePatientProfile(patientId) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const batch = writeBatch(db)
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        batch.delete(patientDocRef)

        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const scansQuery = query(scansCollectionRef, where('patientId', '==', patientId))
        const scansSnapshot = await getDocs(scansQuery)
        scansSnapshot.forEach((scanDoc) => batch.delete(scanDoc.ref))

        await batch.commit()
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    // --- SCAN ACTIONS ---
    async createScan(scanData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null
      try {
        const { db, appId, userId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')

        // ✅ CORRECTED: Trust the incoming scanData to be correctly formatted.
        // The conversion to Timestamp is now done in the component layer.
        const newScanData = {
          ...scanData,
          creatorId: userId,
          isPersonalScan: scanData.patientId === userId,
          createdAt: Timestamp.now(),
        }

        const docRef = await addDoc(scansCollectionRef, newScanData)
        return docRef.id
      } catch (err) {
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    async updateScan(scanId, scanData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId)

        // ✅ CORRECTED: Trust the incoming scanData to be correctly formatted.
        const dataToUpdate = {
          ...scanData,
          updatedAt: Timestamp.now(),
        }

        await updateDoc(scanDocRef, dataToUpdate)
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async deleteScan(scanId) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId)
        await deleteDoc(scanDocRef)
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async fetchScansForPatient(patientId) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return []
      try {
        const { db, appId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const q = query(
          scansCollectionRef,
          where('patientId', '==', patientId),
          orderBy('scanDate', 'desc'),
        )
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      } catch (err) {
        this.error = err.message
        return []
      } finally {
        this.loading = false
      }
    },

    async fetchDoctorCreatedScans() {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return []
      try {
        const { db, appId, userId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const q = query(
          scansCollectionRef,
          where('creatorId', '==', userId),
          orderBy('scanDate', 'desc'),
        )
        const querySnapshot = await getDocs(q)
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      } catch (err) {
        this.error = err.message
        return []
      } finally {
        this.loading = false
      }
    },

    // --- PREGNANCY DECLARATION ACTIONS ---
    async addPregnancyDeclaration(declarationData) {
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
        const newDeclaration = {
          ...declarationData,
          status: 'active',
          endDate: null,
          createdAt: Timestamp.now(),
        }
        const docRef = await addDoc(pregnancyCollectionRef, newDeclaration)
        return docRef.id
      } catch (err) {
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    async fetchPregnancyHistory() {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return []
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
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      } catch (err) {
        this.error = err.message
        return []
      } finally {
        this.loading = false
      }
    },

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
        await updateDoc(pregnancyDocRef, { ...updates, updatedAt: Timestamp.now() })
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
    async fetchSinglePatient(patientId) {
      this.loading = true
      this.error = null
      try {
        const db = getFirestore()
        const appId = import.meta.env.VITE_APP_ID
        // This function specifically fetches a record from the 'patients' collection
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        const docSnap = await getDoc(patientDocRef)

        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() }
        } else {
          this.error = `No patient found with ID: ${patientId}`
          console.warn(`[DB_STORE] No patient found with ID: ${patientId}`)
          return null
        }
      } catch (err) {
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
  },
})
