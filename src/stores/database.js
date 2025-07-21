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

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    loading: false,
    error: null,
  }),

  actions: {
    _getDBEssentials() {
      console.log('[DB_STORE] _getDBEssentials: Checking for auth user...');
      const authStore = useAuthStore()
      if (!authStore.user?.uid) {
        this.error = 'User not authenticated. Operation cancelled.'
        console.error('[DB_STORE] _getDBEssentials: ' + this.error)
        return null
      }
      const db = getFirestore()
      const appId = import.meta.env.VITE_APP_ID
      const userId = authStore.user.uid
      console.log(`[DB_STORE] _getDBEssentials: Success. Found user: ${userId}`);
      return { db, appId, userId }
    },

    async createUserProfile(userId, email, displayName, role) {
      console.log(`[DB_STORE] createUserProfile: Attempting to create/update profile for user ID: ${userId}`);
      this.loading = true
      this.error = null
      try {
        const db = getFirestore()
        const appId = import.meta.env.VITE_APP_ID
        const userDocRef = doc(db, 'artifacts', appId, 'users', userId)
        await setDoc(userDocRef, { email, displayName, role, createdAt: serverTimestamp() }, { merge: true });
        console.log(`[DB_STORE] createUserProfile: Successfully created/updated profile for ${userId}.`);
        return true
      } catch (err) {
        console.error('[DB_STORE] createUserProfile: Error:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async createPatientProfile(patientId, patientData) {
      console.log(`[DB_STORE] createPatientProfile: Attempting to create/update patient details for ID: ${patientId}`, patientData);
      this.loading = true
      this.error = null
      try {
        const essentials = this._getDBEssentials()
        if (!essentials) return false;
        const { db, appId } = essentials;
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        await setDoc(patientDocRef, { userId: patientId, ...patientData, updatedAt: serverTimestamp() }, { merge: true });
        console.log(`[DB_STORE] createPatientProfile: Successfully created/updated patient details for ${patientId}.`);
        return true
      } catch (err) {
        console.error('[DB_STORE] createPatientProfile: Error:', err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async fetchPatientProfile(patientId) {
      console.log(`[DB_STORE] fetchPatientProfile: Attempting to fetch patient profile for ID: ${patientId}`);
      this.loading = true
      this.error = null
      try {
        const essentials = this._getDBEssentials()
        if (!essentials) return null
        const { db, appId } = essentials
        const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId)
        const docSnap = await getDoc(patientDocRef)
        if (docSnap.exists()) {
          const patientData = { id: docSnap.id, ...docSnap.data() };
          console.log(`[DB_STORE] fetchPatientProfile: Found profile for ${patientId}.`);
          return patientData;
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

    async createScan(scanData) {
      console.log('[DB_STORE] createScan: Attempting to create new scan record:', scanData);
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
        console.log(`[DB_STORE] createScan: Successfully created scan with new ID: ${docRef.id}`);
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
      console.log(`[DB_STORE] updateScan: Attempting to update scan ID: ${scanId} with data:`, scanData);
      this.loading = true;
      this.error = null;
      const essentials = this._getDBEssentials();
      if (!essentials) return false;
      try {
        const { db, appId } = essentials;
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId);
        const dataToUpdate = { ...scanData, updatedAt: serverTimestamp() };
        await updateDoc(scanDocRef, dataToUpdate);
        console.log(`[DB_STORE] updateScan: Successfully updated scan ${scanId}.`);
        return true;
      } catch (err) {
        console.error(`[DB_STORE] updateScan: Error updating scan ${scanId}:`, err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async deleteScan(scanId) {
      console.log(`[DB_STORE] deleteScan: Attempting to delete scan ID: ${scanId}`);
      this.loading = true;
      this.error = null;
      const essentials = this._getDBEssentials();
      if (!essentials) return false;
      try {
        const { db, appId } = essentials;
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId);
        await deleteDoc(scanDocRef);
        console.log(`[DB_STORE] deleteScan: Successfully deleted scan ${scanId}.`);
        return true;
      } catch (err) {
        console.error(`[DB_STORE] deleteScan: Error deleting scan ${scanId}:`, err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async fetchScansForPatient(patientId) {
      console.log(`[DB_STORE] fetchScansForPatient: Fetching scans for patient ID: ${patientId}`);
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null
      try {
        const { db, appId } = essentials
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans')
        const q = query(scansCollectionRef, where('patientId', '==', patientId), orderBy('scanDate', 'desc'))
        const querySnapshot = await getDocs(q)
        console.log(`[DB_STORE] fetchScansForPatient: Found ${querySnapshot.size} scans.`);
        const scans = []
        querySnapshot.forEach((doc) => { scans.push({ id: doc.id, ...doc.data() }) })
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
      console.log('[DB_STORE] fetchDoctorCreatedScans: Fetching all scans created by current doctor.');
      this.loading = true;
      this.error = null;
      const essentials = this._getDBEssentials();
      if (!essentials) return null;
      try {
        const { db, appId, userId } = essentials;
        const scansCollectionRef = collection(db, 'artifacts', appId, 'scans');
        const q = query(scansCollectionRef, where('creatorId', '==', userId), orderBy('scanDate', 'desc'));
        const querySnapshot = await getDocs(q);
        console.log(`[DB_STORE] fetchDoctorCreatedScans: Found ${querySnapshot.size} scans.`);
        const scans = [];
        querySnapshot.forEach((doc) => {
          scans.push({ id: doc.id, ...doc.data() });
        });
        return scans;
      } catch (err) {
        console.error('[DB_STORE] fetchDoctorCreatedScans: Error:', err);
        this.error = err.message;
        return null;
      } finally {
        this.loading = false;
      }
    },

    async fetchPatientsForDoctor() {
        console.log('[DB_STORE] fetchPatientsForDoctor: Starting fetch for current doctor.');
        this.loading = true;
        this.error = null;
        const essentials = this._getDBEssentials();
        if (!essentials) return null;
        try {
            const { db, appId, userId } = essentials;
            const scansCollectionRef = collection(db, 'artifacts', appId, 'scans');
            const scansQuery = query(scansCollectionRef, where('creatorId', '==', userId));
            const scansSnapshot = await getDocs(scansQuery);
            if (scansSnapshot.empty) {
                console.log('[DB_STORE] fetchPatientsForDoctor: No scans found, returning empty array.');
                return [];
            }
            const patientIds = new Set();
            scansSnapshot.forEach(doc => { patientIds.add(doc.data().patientId); });
            console.log(`[DB_STORE] fetchPatientsForDoctor: Found ${patientIds.size} unique patient IDs.`);
            if (patientIds.size === 0) return [];
            const patientsCollectionRef = collection(db, 'artifacts', appId, 'patients');
            const patientsQuery = query(patientsCollectionRef, where('userId', 'in', Array.from(patientIds)));
            const patientsSnapshot = await getDocs(patientsQuery);
            const patients = [];
            patientsSnapshot.forEach(doc => { patients.push({ id: doc.id, ...doc.data() }); });
            console.log('[DB_STORE] fetchPatientsForDoctor: Returning final patient list:', patients);
            return patients;
        } catch (err) {
            console.error("[DB_STORE] fetchPatientsForDoctor: Error:", err);
            this.error = err.message;
            return null;
        } finally {
            this.loading = false;
        }
    },

    async deleteScan(scanId) {
      this.loading = true;
      this.error = null;
      const essentials = this._getDBEssentials();
      if (!essentials) return false;

      try {
        const { db, appId } = essentials;
        const scanDocRef = doc(db, 'artifacts', appId, 'scans', scanId);
        console.log(`Delete ${scanDocRef}...`)
        await deleteDoc(scanDocRef);
        console.log("Deleted Successfully")
        return true;
      } catch (err) {
        console.error("Error deleting scan:", err);
        this.error = err.message;
        return false;
      } finally {
        this.loading = false;
      }
    },

    async deletePatientProfile(patientId) {
        console.log(`[DB_STORE] deletePatientProfile: Attempting to delete patient ID: ${patientId}`);
        this.loading = true;
        this.error = null;
        const essentials = this._getDBEssentials();
        if (!essentials) return false;
        try {
            const { db, appId } = essentials;
            const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId);
            await deleteDoc(patientDocRef);
            console.log(`[DB_STORE] deletePatientProfile: Successfully deleted patient ${patientId}.`);
            return true;
        } catch (err) {
            console.error("[DB_STORE] deletePatientProfile: Error:", err);
            this.error = err.message;
            return false;
        } finally {
            this.loading = false;
        }
    },

    // --- PREGNANCY DECLARATION ACTIONS (for Doctors) ---
    async addPregnancyDeclaration(declarationData) {
      console.log('[DB_STORE] addPregnancyDeclaration: Attempting to add declaration:', declarationData);
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        const pregnancyCollectionRef = collection(db, 'artifacts', appId, 'users', userId, 'pregnancies')

        const declarationYear = declarationData.declarationDate.getFullYear()
        const monitoringPeriodStartDate = new Date(declarationYear, 0, 1)

        const newDeclaration = {
          ...declarationData,
          status: 'active',
          endDate: null,
          monitoringPeriodStartDate,
          createdAt: serverTimestamp(),
        }

        console.log('[DB_STORE] addPregnancyDeclaration: Final data being added:', newDeclaration);
        const docRef = await addDoc(pregnancyCollectionRef, newDeclaration)
        console.log(`[DB_STORE] addPregnancyDeclaration: Success. New declaration ID: ${docRef.id}`);
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
      console.log('[DB_STORE] fetchPregnancyHistory: Fetching history for current doctor.');
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return null

      try {
        const { db, appId, userId } = essentials
        const pregnancyCollectionRef = collection(db, 'artifacts', appId, 'users', userId, 'pregnancies')
        const q = query(pregnancyCollectionRef, orderBy('declarationDate', 'desc'))

        const querySnapshot = await getDocs(q)
        console.log(`[DB_STORE] fetchPregnancyHistory: Found ${querySnapshot.size} records.`);
        const history = []
        querySnapshot.forEach((doc) => {
          history.push({ id: doc.id, ...doc.data() })
        })
        console.log('[DB_STORE] fetchPregnancyHistory: Returning history:', history);
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
      console.log(`[DB_STORE] updatePregnancyRecord: Updating pregnancy ID ${pregnancyId} with:`, updates);
      this.loading = true
      this.error = null
      const essentials = this._getDBEssentials()
      if (!essentials) return false

      try {
        const { db, appId, userId } = essentials
        const pregnancyDocRef = doc(db, 'artifacts', appId, 'users', userId, 'pregnancies', pregnancyId)
        await updateDoc(pregnancyDocRef, updates)
        console.log(`[DB_STORE] updatePregnancyRecord: Successfully updated ${pregnancyId}.`);
        return true
      } catch (err) {
        console.error("[DB_STORE] updatePregnancyRecord: Error:", err)
        this.error = err.message
        return false
      } finally {
        this.loading = false
      }
    },

    async fetchPatientsForDoctor() {
        console.log('[DB_STORE] fetchPatientsForDoctor: Starting fetch for current doctor.');
        this.loading = true;
        this.error = null;
        const essentials = this._getDBEssentials();
        if (!essentials) return null;

        try {
            const { db, appId, userId } = essentials;

            console.log('[DB_STORE] fetchPatientsForDoctor: Step 1 - Fetching scans created by doctor...');
            const scansCollectionRef = collection(db, 'artifacts', appId, 'scans');
            const scansQuery = query(scansCollectionRef, where('creatorId', '==', userId));
            const scansSnapshot = await getDocs(scansQuery);
            console.log(`[DB_STORE] fetchPatientsForDoctor: Found ${scansSnapshot.size} scans.`);

            if (scansSnapshot.empty) return [];

            const patientIds = new Set();
            scansSnapshot.forEach(doc => { patientIds.add(doc.data().patientId); });
            console.log(`[DB_STORE] fetchPatientsForDoctor: Step 2 - Found ${patientIds.size} unique patient IDs:`, Array.from(patientIds));

            if (patientIds.size === 0) return [];

            console.log('[DB_STORE] fetchPatientsForDoctor: Step 3 - Fetching profiles for unique patient IDs...');
            const patientsCollectionRef = collection(db, 'artifacts', appId, 'patients');
            const patientsQuery = query(patientsCollectionRef, where('userId', 'in', Array.from(patientIds)));
            const patientsSnapshot = await getDocs(patientsQuery);
            console.log(`[DB_STORE] fetchPatientsForDoctor: Found ${patientsSnapshot.size} patient profiles.`);

            const patients = [];
            patientsSnapshot.forEach(doc => { patients.push({ id: doc.id, ...doc.data() }); });
            console.log('[DB_STORE] fetchPatientsForDoctor: Returning final patient list:', patients);

            return patients;
        } catch (err) {
            console.error("[DB_STORE] fetchPatientsForDoctor: Error:", err);
            this.error = err.message;
            return null;
        } finally {
            this.loading = false;
        }
    },

    async deletePatientProfile(patientId) {
        console.log(`[DB_STORE] deletePatientProfile: Attempting to delete patient ID: ${patientId}`);
        this.loading = true;
        this.error = null;
        const essentials = this._getDBEssentials();
        if (!essentials) return false;

        try {
            const { db, appId } = essentials;
            const patientDocRef = doc(db, 'artifacts', appId, 'patients', patientId);
            await deleteDoc(patientDocRef);
            console.log(`[DB_STORE] deletePatientProfile: Successfully deleted patient ${patientId}.`);
            return true;
        } catch (err) {
            console.error("[DB_STORE] deletePatientProfile: Error:", err);
            this.error = err.message;
            return false;
        } finally {
            this.loading = false;
        }
    }
  },
})
