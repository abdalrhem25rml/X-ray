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

    // --- PATIENT DATA ACTIONS ---
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
      this.loading = true;
      this.error = null;
      const essentials = this._getDBEssentials();
      if (!essentials) return null;

      try {
        const { db, appId, userId } = essentials;
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans');

        const dataToWorkWith = { ...scanData };
        delete dataToWorkWith.id;

        // ✅ DEFINITIVE DATE FIX: This block defensively handles the incoming date.
        let finalScanDate;
        const dateValue = dataToWorkWith.scanDate;

        if (dateValue instanceof Timestamp) {
          finalScanDate = dateValue; // Already a valid Timestamp, trust it.
        } else if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
          finalScanDate = Timestamp.fromDate(dateValue); // A valid Date object, convert it.
        } else if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
          // A "YYYY-MM-DD" string, parse it safely in UTC.
          const parts = dateValue.split('-');
          const safeDate = new Date(Date.UTC(parts[0], parseInt(parts[1], 10) - 1, parts[2], 12, 0, 0));
          if (isNaN(safeDate.getTime())) {
            throw new RangeError('Provided scanDate string resulted in an invalid Date.');
          }
          finalScanDate = Timestamp.fromDate(safeDate);
        } else {
          // If the format is unknown or invalid, throw a clear error.
          console.error('Invalid scanDate received by createScan:', dateValue);
          throw new RangeError('Invalid or unsupported type for scanDate. Must be a Timestamp, Date, or "YYYY-MM-DD" string.');
        }

        const newScanData = {
          ...dataToWorkWith,
          scanDate: finalScanDate, // Use the sanitized and converted date
          creatorId: userId,
          isPersonalScan: dataToWorkWith.patientId === userId,
          createdAt: Timestamp.now(),
        };

        // This check is crucial for non-personal scans
        if (!newScanData.patientId) {
            throw new Error("Cannot create a scan without a patientId.");
        }

        const docRef = await addDoc(scansCollectionRef, newScanData);
        return docRef.id;
      } catch (err) {
        console.error('[DB_STORE] Error details during scan creation:', err);
        this.error = err.message; // Pass the detailed error message back.
        return null; // Explicitly return null on failure.
      } finally {
        this.loading = false;
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
        console.error(
          "Error in fetchScansForPatient. Is the Firestore index for 'scans' (patientId asc, scanDate desc) created?",
          err,
        )
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

    // --- OTHER SCANS ACTIONS ---
    async createOtherScan(otherScanData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        const otherScansCollectionRef = collection(db, 'artifacts', appId, 'other_scans')
        const { id, ...data } = otherScanData
        const dataToSave = {
          ...data,
          userId: userId,
          createdAt: Timestamp.now(),
        }
        console.log('[DB_STORE] Attempting to createOtherScan with cleaned payload:', dataToSave)
        const docRef = await addDoc(otherScansCollectionRef, dataToSave)
        return docRef.id
      } catch (err)
      {
        this.error = err.message
        console.error('[DB_STORE] Error creating other scan:', err)
        return null
      } finally {
        this.loading = false
      }
    },

    async updateOtherScan(scanId, otherScanData) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const scanDocRef = doc(db, 'artifacts', appId, 'other_scans', scanId)
        await updateDoc(scanDocRef, { ...otherScanData, updatedAt: Timestamp.now() })
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async deleteOtherScan(scanId) {
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false
      try {
        const { db, appId } = essentials
        const scanDocRef = doc(db, 'artifacts', appId, 'other_scans', scanId)
        await deleteDoc(scanDocRef)
        return true
      } catch (err) {
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async fetchOtherScansForUser(userId) {
      this.loading = true;
      this.error = null;
      try {
        const db = getFirestore();
        const appId = import.meta.env.VITE_APP_ID;

        const q = query(
          collection(db, 'artifacts', appId, 'other_scans'),
          where('userId', '==', userId)
        );

        const querySnapshot = await getDocs(q);

        // Corrected line to include the document ID
        const scans = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Sort the results by date descending after fetching
        scans.sort((a, b) => b.date.toDate() - a.date.toDate());

        return scans;
      } catch (err) {
        this.error = err.message;
        return [];
      } finally {
        this.loading = false;
      }
    },

    // --- AGGREGATION ACTIONS ---
    async fetchAllDosesForUser(userId, userRole) {
      this.loading = true
      this.error = null
      console.log(`[DB_STORE] Starting fetchAllDosesForUser for userId: ${userId}, role: ${userRole}`)

      try {
        const allDoses = []

        // 1. Fetch "other scans" for the user
        const otherScans = await this.fetchOtherScansForUser(userId)
        console.log(`[DB_STORE] other scans:`, JSON.parse(JSON.stringify(otherScans)))
        otherScans.forEach((scan) => {
          if (scan.dosage > 0) {
            allDoses.push({ date: scan.date, dose: scan.dosage })
          }
        })

        // 2. Fetch scans where the user was the patient
        const personalScans = await this.fetchScansForPatient(userId)
        console.log(`[DB_STORE] personal scans:`, JSON.parse(JSON.stringify(personalScans)))
        personalScans.forEach((scan) => {
          if (scan.patientDose > 0) {
            allDoses.push({ date: scan.scanDate, dose: scan.patientDose })
          }
        })

        // 3. For doctors ONLY, fetch scans they created for their occupational dose.
        if (userRole === 'doctor') {
          const createdScans = await this.fetchDoctorCreatedScans()
          console.log(
            `[DB_STORE] created scans (for occupational dose):`,
            JSON.parse(JSON.stringify(createdScans)),
          )
          createdScans.forEach((scan) => {
            if (scan.doctorDose > 0) {
              allDoses.push({ date: scan.scanDate, dose: scan.doctorDose })
            }
          })
        }

        return allDoses
      } catch (err) {
        this.error = `Failed to fetch all doses: ${err.message}`
        console.error(`[DB_STORE] Error: ${err.message}`)
        return []
      } finally {
        this.loading = false
      }
    },
  },
})
