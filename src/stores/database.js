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
  Timestamp, // Correctly imported for creating server-side timestamps
  orderBy,
  deleteDoc,
  writeBatch, // Correctly imported for atomic multi-document writes
} from 'firebase/firestore'
import { useAuthStore } from './auth'

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    loading: false,
    error: null,
  }),

  actions: {
    _getDBEssentials() {
      console.log('[DB_STORE] _getDBEssentials: Checking for auth user...')
      const authStore = useAuthStore()
      if (!authStore.user?.uid) {
        this.error = 'User not authenticated. Operation cancelled.'
        console.error('[DB_STORE] _getDBEssentials: ' + this.error)
        return null
      }
      const db = getFirestore()
      const appId = import.meta.env.VITE_APP_ID
      const userId = authStore.user.uid
      console.log(`[DB_STORE] _getDBEssentials: Success. Found user: ${userId}`)
      return { db, appId, userId }
    },

    async createUserProfile(userId, email, displayName, role) {
      console.log(
        `[DB_STORE] createUserProfile: Attempting to create/update profile for user ID: ${userId}`,
      )
      this.loading = true
      this.error = null
      try {
        const db = getFirestore()
        const appId = import.meta.env.VITE_APP_ID
        const userDocRef = doc(db, 'artifacts', appId, 'users', userId)
        await setDoc(
          userDocRef,
          { email, displayName, role, createdAt: Timestamp.now() },
          { merge: true },
        )
        console.log(`[DB_STORE] createUserProfile: Successfully created/updated profile for ${userId}.`)
        return true
      } catch (err) {
        console.error('[DB_STORE] createUserProfile: Error:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    // --- PATIENT DATA ACTIONS ---
    async createPatientProfile(patientData) {
      console.log(
        `[DB_STORE] createPatientProfile: Attempting to create new patient with data:`,
        patientData,
      )
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null
      try {
        const { db, appId, userId } = essentials
        const patientsCollectionRef = collection(db, 'artifacts', appId, 'patients')
        const dataToSave = {
          ...patientData,
          creatorId: userId, // Standardized field
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        }
        const docRef = await addDoc(patientsCollectionRef, dataToSave)
        console.log(`[DB_STORE] createPatientProfile: Successfully created patient with new ID: ${docRef.id}`)
        return docRef.id
      } catch (err) {
        console.error('[DB_STORE] createPatientProfile: Error creating patient profile:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
    async updatePatientProfile(patientId, patientData) {
      console.log(
        `[DB_STORE] updatePatientProfile: Attempting to update patient ID: ${patientId}`,
      )
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        await updateDoc(patientDocRef, { ...patientData, updatedAt: Timestamp.now() })
        console.log(`[DB_STORE] updatePatientProfile: Successfully updated patient ${patientId}.`)
        return true
      } catch (err) {
        console.error(
          `[DB_STORE] updatePatientProfile: Error updating patient profile ${patientId}:`,
          err,
        )
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
    async fetchPatientProfile(patientId) {
      console.log(
        `[DB_STORE] fetchPatientProfile: Attempting to fetch patient profile for ID: ${patientId}`,
      )
      this.loading = true
      this.error = null
      try {
        const essentials = this._getDBEssentials()
        if (!essentials) return null
        const { db, appId } = essentials
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        const docSnap = await getDoc(patientDocRef)
        if (docSnap.exists()) {
          const patientData = { id: docSnap.id, ...docSnap.data() }
          console.log(`[DB_STORE] fetchPatientProfile: Found profile for ${patientId}.`)
          return patientData
        } else {
          console.warn(`[DB_STORE] fetchPatientProfile: No patient profile found for ID: ${patientId}`)
          return null
        }
      } catch (err) {
        console.error('[DB_STORE] fetchPatientProfile: Error:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
    async fetchPatientsForDoctor() {
      console.log('[DB_STORE] fetchPatientsForDoctor: Starting fetch for current doctor.')
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return []
      try {
        const { db, appId, userId } = essentials
        const patientsCollectionRef = collection(db, 'artifacts', appId, 'patients')
        const q = query(
          patientsCollectionRef,
          where('creatorId', '==', userId), // Standardized field
          orderBy('createdAt', 'desc'),
        )
        const querySnapshot = await getDocs(q)
        console.log(`[DB_STORE] fetchPatientsForDoctor: Found ${querySnapshot.size} patient records.`)
        const patients = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        console.log('[DB_STORE] fetchPatientsForDoctor: Returning final patient list:', patients)
        return patients
      } catch (err) {
        console.error('[DB_STORE] fetchPatientsForDoctor: Error:', err)
        this.error = err.message
        return []
      } finally {
        this.loading = false
      }
    },
    async deletePatientProfile(patientId) {
      console.log(`[DB_STORE] deletePatientProfile: Attempting to delete patient ID: ${patientId}`)
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const batch = writeBatch(db)

        // Delete the patient document
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        batch.delete(patientDocRef)

        // Find and delete all associated scans
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const scansQuery = query(scansCollectionRef, where('patientId', '==', patientId))
        const scansSnapshot = await getDocs(scansQuery)
        scansSnapshot.forEach((scanDoc) => {
          batch.delete(scanDoc.ref)
        })

        await batch.commit()
        console.log(
          `[DB_STORE] deletePatientProfile: Successfully deleted patient ${patientId} and ${scansSnapshot.size} associated scans.`,
        )
        return true
      } catch (err) {
        console.error('[DB_STORE] deletePatientProfile: Error:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    // --- SCAN ACTIONS ---
    async createScan(scanData) {
      console.log('[DB_STORE] createScan: Attempting to create new scan record:', scanData)
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null
      try {
        const { db, appId, userId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const newScanData = {
          ...scanData,
          scanDate: Timestamp.fromDate(new Date(scanData.scanDate)), // Convert date string to Timestamp
          creatorId: userId,
          isPersonalScan: scanData.patientId === userId,
          createdAt: Timestamp.now(),
        }
        const docRef = await addDoc(scansCollectionRef, newScanData)
        console.log(`[DB_STORE] createScan: Successfully created scan with new ID: ${docRef.id}`)
        return docRef.id
      } catch (err) {
        console.error('[DB_STORE] createScan: Error:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
    async updateScan(scanId, scanData) {
      console.log(`[DB_STORE] updateScan: Attempting to update scan ID: ${scanId}`)
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId)
        const dataToUpdate = {
          ...scanData,
          scanDate: Timestamp.fromDate(new Date(scanData.scanDate)),
          updatedAt: Timestamp.now(),
        }
        await updateDoc(scanDocRef, dataToUpdate)
        console.log(`[DB_STORE] updateScan: Successfully updated scan ${scanId}.`)
        return true
      } catch (err) {
        console.error(`[DB_STORE] updateScan: Error updating scan ${scanId}:`, err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
    async deleteScan(scanId) {
      console.log(`[DB_STORE] deleteScan: Attempting to delete scan ID: ${scanId}`)
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId)
        await deleteDoc(scanDocRef)
        console.log(`[DB_STORE] deleteScan: Successfully deleted scan ${scanId}.`)
        return true
      } catch (err) {
        console.error(`[DB_STORE] deleteScan: Error deleting scan ${scanId}:`, err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
    async fetchScansForPatient(patientId) {
      console.log(`[DB_STORE] fetchScansForPatient: Fetching scans for patient ID: ${patientId}`)
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
        console.log(`[DB_STORE] fetchScansForPatient: Found ${querySnapshot.size} scans.`)
        const scans = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return scans
      } catch (err) {
        console.error('[DB_STORE] fetchScansForPatient: Error:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
    async fetchDoctorCreatedScans() {
      console.log('[DB_STORE] fetchDoctorCreatedScans: Fetching all scans created by current doctor.')
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
        console.log(`[DB_STORE] fetchDoctorCreatedScans: Found ${querySnapshot.size} scans.`)
        const scans = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return scans
      } catch (err) {
        console.error('[DB_STORE] fetchDoctorCreatedScans: Error:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },

    // --- PREGNANCY DECLARATION ACTIONS (for Doctors) ---
    async addPregnancyDeclaration(declarationData) {
      console.log(
        '[DB_STORE] addPregnancyDeclaration: Attempting to add declaration:',
        declarationData,
      )
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
        console.log(`[DB_STORE] addPregnancyDeclaration: Success. New declaration ID: ${docRef.id}`)
        return docRef.id
      } catch (err) {
        console.error('[DB_STORE] addPregnancyDeclaration: Error:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
    async fetchPregnancyHistory() {
      console.log('[DB_STORE] fetchPregnancyHistory: Fetching history for current doctor.')
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
        console.log(`[DB_STORE] fetchPregnancyHistory: Found ${querySnapshot.size} records.`)
        const history = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        console.log('[DB_STORE] fetchPregnancyHistory: Returning history:', history)
        return history
      } catch (err) {
        console.error('[DB_STORE] fetchPregnancyHistory: Error:', err)
        this.error = err.message
        return null
      } finally {
        this.loading = false
      }
    },
    async updatePregnancyRecord(pregnancyId, updates) {
      console.log(
        `[DB_STORE] updatePregnancyRecord: Updating pregnancy ID ${pregnancyId} with:`,
        updates,
      )
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
        console.log(`[DB_STORE] updatePregnancyRecord: Successfully updated ${pregnancyId}.`)
        return true
      } catch (err)
      {
        console.error('[DB_STORE] updatePregnancyRecord: Error:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
