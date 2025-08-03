# X-ray: mSv Dose Tracker

This project is a comprehensive web application built with Vue 3 and Vite, designed to help manage and track radiation exposure from medical scans. It provides functionalities for both patients and doctors to monitor doses, get AI-powered scan recommendations, and manage patient records.

## Project Structure

The application follows a standard Vue.js project structure, with a clear separation of concerns:

```
.
├── public/                 # Static assets
├── src/
│   ├── assets/             # Global assets (e.g., images, CSS)
│   ├── components/         # Reusable Vue components
│   │   ├── ConfirmDeleteModal.vue
│   │   ├── HistoryTable.vue
│   │   ├── InfoModal.vue
│   │   ├── MsvCounter.vue
│   │   ├── PatientDetailsModal.vue
│   │   ├── PatientFormModal.vue
│   │   ├── PatientTable.vue
│   │   ├── PersonalScanFormModal.vue
│   │   ├── ProfileFormModal.vue
│   │   ├── ScanFormModal.vue
│   │   └── TheHeader.vue
│   ├── router/             # Vue Router configuration
│   ├── stores/             # Pinia stores for state management (authentication, database)
│   ├── views/              # Main application views (pages)
│   │   ├── DashboardView.vue
│   │   ├── PatientsView.vue
│   │   ├── ProfileView.vue
│   │   ├── RecommendView.vue
│   │   ├── ResetPasswordView.vue
│   │   ├── SigninView.vue
│   │   └── SignupView.vue
│   ├── App.vue             # Main application component
│   └── main.js             # Application entry point
├── .gitignore
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
└── README.md               # Project README (this file)
```

## Views and Their Components

This section details each main view of the application, describing its purpose and the key components it utilizes.

### 1. `SignupView.vue`

**Purpose:** This view handles new user registration, allowing users to create an account using their email and password or by signing up with Google.

**Components:**
- **Form Elements (native HTML):** Inputs for email, password, confirm password.
- **Buttons:** For email signup and Google signup.
- **`useAuthStore` (Pinia Store):** Manages user authentication state, handles signup logic, and stores authentication-related errors and loading states.

### 2. `SigninView.vue`

**Purpose:** This view allows existing users to log in to their accounts using their email and password or by signing in with Google. It also provides a link to reset the password.

**Components:**
- **Form Elements (native HTML):** Inputs for email and password.
- **Buttons:** For email sign-in and Google sign-in.
- **Links:** "Forgot your password?" to `ResetPasswordView`, and "Don't have an account?" to `SignupView`.
- **`useAuthStore` (Pinia Store):** Manages user authentication state, handles sign-in logic, and stores authentication-related errors and success messages.

### 3. `ResetPasswordView.vue`

**Purpose:** This view provides a mechanism for users to reset their forgotten passwords by sending a reset link to their registered email address.

**Components:**
- **Form Elements (native HTML):** Input for email address.
- **Button:** To send the password reset link.
- **Link:** "Remembered your password?" to `SigninView`.
- **`useAuthStore` (Pinia Store):** Handles the password reset functionality and manages related loading and error states.

### 4. `DashboardView.vue`

**Purpose:** The main landing page after successful login. It serves as a central hub, displaying a welcome message and providing navigation options to other key features of the application such as `RecommendView`, `PatientsView` (for doctors), and `ProfileView`. It also includes a modal for completing the user profile if it's incomplete.

**Components:**
- **Profile Completion Modal (inline):** A conditional modal that appears if the user's profile is incomplete, prompting them to enter their role, birth date, gender, allergies, and medical history.
- **Navigation Cards:** Interactive cards that link to `RecommendView`, `PatientsView` (conditionally rendered for doctors), and `ProfileView`.
- **Logout Button:** Allows the user to log out of their session.
- **`useAuthStore` (Pinia Store):** Accesses user authentication status, role, and profile completion status.
- **`useDatabaseStore` (Pinia Store):** Used to save the user's initial profile data.

### 5. `RecommendView.vue`

**Purpose:** This view enables users (patients or doctors) to get AI-powered recommendations for medical scans. It takes into account patient details, existing radiation doses, pregnancy status, and the type of scan being considered. Doctors can also input additional context for occupational exposure.

**Components:**
- **Mode Switcher:** Toggles between "For Myself" (personal recommendation) and "For Another Patient" (general recommendation, for doctors).
- **Form Elements (native HTML):** Inputs for patient details (birth date, gender, pregnancy status, estimated due date, medical history, current symptoms, allergies), and scan type.
- **Textareas:** For medical history, current symptoms, and doctor's additional context.
- **Prediction Result Display:** Shows the AI-powered recommendation text, estimated patient dose, and estimated doctor occupational dose (if applicable), along with any warnings.
- **`useAuthStore` (Pinia Store):** Retrieves the current user's role and ID.
- **`useDatabaseStore` (Pinia Store):** Fetches patient data and their cumulative scan dose.

### 6. `PatientsView.vue`

**Purpose:** (Doctor-specific) This view allows doctors to manage their patients' records. They can add new patients, view existing patient details (including scan history), edit patient information, and delete patient records. It also provides a direct link to get a scan recommendation for a specific patient.

**Components Used:**
- **`PatientFormModal.vue`:** A modal component for adding new patients or editing existing patient profiles.
- **`PatientDetailsModal.vue`:** A modal component to display detailed information about a selected patient, including their scan history.
- **`ConfirmDeleteModal.vue`:** A generic confirmation modal used for deleting patient records.
- **`PatientTable.vue`:** Displays a list of patients with their key information and action buttons (view, edit, delete, recommend).
- **`useAuthStore` (Pinia Store):** Retrieves the doctor's user ID.
- **`useDatabaseStore` (Pinia Store):** Handles CRUD operations for patient profiles and fetches patient lists and scan histories.

### 7. `ProfileView.vue`

**Purpose:** This view allows users to view and update their personal profile information and manage their personal medical scan history. Patients can add, edit, and delete their own scan records.

**Components Used:**
- **`ProfileFormModal.vue`:** A modal component for editing the user's personal profile details.
- **`PersonalScanFormModal.vue`:** A modal component for adding new personal scans or editing existing ones.
- **`ConfirmDeleteModal.vue`:** A generic confirmation modal used for deleting personal scan records.
- **`HistoryTable.vue`:** A reusable component (likely shared with `PatientDetailsModal`) to display the user's personal scan history with options to edit and delete.
- **`useAuthStore` (Pinia Store):** Accesses and updates the current user's profile information.
- **`useDatabaseStore` (Pinia Store):** Handles CRUD operations for personal scan records and fetches personal scan history.

## Reusable Components

This section provides details on the reusable Vue components located in the `src/components` directory. These components are designed to be modular and can be utilized across different views to maintain consistency and reduce code duplication.

### 1. `ConfirmDeleteModal.vue`

**Purpose:** A generic, reusable modal component that prompts the user for confirmation before performing a delete action. It can be used for various items (e.g., patients, scans) by passing `title` and `message` props.

**Key Props:** `show`, `title`, `message`
**Key Emits:** `close`, `confirm`

### 2. `HistoryTable.vue`

**Purpose:** A versatile table component designed to display lists of medical scan records. It can be configured for personal views (showing only scan type, date, reason, patient dose) or doctor views (also showing patient name and doctor's dose).

**Key Props:** `scans` (Array of scan objects), `isLoading`, `isPersonalView` (Boolean)
**Key Emits:** `edit`, `delete`

### 3. `InfoModal.vue`

**Purpose:** A modal component that displays important information regarding radiation exposure awareness and recommended annual dose limits for different categories (medical professionals, patients, pregnant workers, general public). It supports both English and Arabic content.

**Key Props:** `show`, `currentLanguage`
**Key Emits:** `close`

### 4. `MsvCounter.vue`

**Purpose:** Displays the user's (or doctor's occupational) annual radiation dose and compares it against a predefined yearly limit. It features a progress bar and changes color (safe, warning, danger) based on the current dose relative to the limit.

**Key Props:** `currentMsv`, `yearlyLimit`, `currentLanguage`, `isLoading`

### 5. `PatientDetailsModal.vue`

**Purpose:** A comprehensive modal used by doctors to view the full profile and scan history of a selected patient. From within this modal, doctors can add new scans, and edit or delete existing scans for that patient.

**Key Props:** `show`, `patient` (selected patient object)
**Key Emits:** `close`
**Child Components Used:** `ScanFormModal.vue`, `ConfirmDeleteModal.vue`

### 6. `PatientFormModal.vue`

**Purpose:** A modal component used by doctors to add new patient profiles or modify existing patient details such as name, birth date, gender, pregnancy status, medical history, and allergies.

**Key Props:** `show`, `patient` (patient object for editing, null for adding), `isSaving`
**Key Emits:** `close`, `save`

### 7. `PatientTable.vue`

**Purpose:** A dedicated table component for doctors to display a list of their managed patients. It provides actions like viewing patient details (which opens `PatientDetailsModal`), editing patient profiles (which opens `PatientFormModal`), deleting patients, and navigating to the `RecommendView` for a specific patient.

**Key Props:** `patients` (Array of patient objects), `isLoading`
**Key Emits:** `view`, `edit`, `delete`, `recommend`

### 8. `PersonalScanFormModal.vue`

**Purpose:** A modal specifically for individual users (patients) to add or edit their own personal medical scan records. It allows input for scan type, date, reason, notes, and automatically estimates the patient's dose if not provided manually.

**Key Props:** `show`, `scan` (scan object for editing, null for adding), `isSaving`
**Key Emits:** `close`, `save`

### 9. `ProfileFormModal.vue`

**Purpose:** A modal component for users to update their personal profile information, including their role (doctor/patient), birth date, gender, pregnancy status, allergies, and medical history.

**Key Props:** `show`, `profileData` (user's profile object)
**Key Emits:** `close`, `save`

### 10. `ScanFormModal.vue`

**Purpose:** A highly configurable modal used by doctors to add or edit scan records for their patients. It captures details like scan type, date, patient and doctor doses (with AI estimation options), reason, notes, and doctor's occupational context.

**Key Props:** `show`, `scan` (scan object for editing, null for adding), `isSaving`, `patient` (current patient object)
**Key Emits:** `close`, `save`

### 11. `TheHeader.vue`

**Purpose:** The main header component that appears across the application. It includes the application title, a language toggle, a global information button, and the `MsvCounter` component to display the current user's annual dose.

**Key Props:** `currentLanguage`, `user`, `msvData` (object containing currentMsv, limit, isLoading)
**Key Emits:** `toggle-language`, `toggle-info-modal`

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/X-ray.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
