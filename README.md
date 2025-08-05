# X-ray: mSv Dose Tracker

This project is a comprehensive web application built with Vue 3 and Vite, designed to help manage and track radiation exposure from medical scans. It provides functionalities for both patients and doctors to monitor doses, get AI-powered scan recommendations, and manage patient records. Every part of this application, from its core structure to its individual components and data management, is designed for clarity, maintainability, and ease of understanding.

## Project Structure

The application follows a standard Vue.js project structure, with a clear separation of concerns, making it easy to navigate, understand, and modify. Below is a detailed breakdown of each directory and significant file:

```
.
├── public/                 # Static assets, like the application favicon and other non-processed resources.
├── src/                    # The heart of the application, containing all source code.
│   ├── assets/             # Global assets such as CSS files (base, index, main) and common images (logo.svg).
│   │   ├── base.css        # Base styles, often containing fundamental CSS resets or global variables.
│   │   ├── index.css       # Core application-wide styles.
│   │   ├── logo.svg        # The main application logo in SVG format.
│   │   └── main.css        # Primary stylesheet for general layout and theming.
│   ├── components/         # Reusable Vue components used throughout the application to build user interfaces.
│   │   ├── ConfirmDeleteModal.vue        # A versatile modal for confirming deletion actions.
│   │   ├── HelpModal.vue                 # Displays informational content, such as help or guidelines.
│   │   ├── HistoryTable.vue              # A table component to display lists of medical scan records.
│   │   ├── InfoModal.vue                 # Provides important information on radiation exposure and limits.
│   │   ├── MsvCounter.vue                # Shows and tracks annual radiation dose against a limit.
│   │   ├── PatientDetailsModal.vue       # Displays comprehensive details and scan history for a patient.
│   │   ├── PatientFormModal.vue          # Used for adding or editing patient profiles.
│   │   ├── PatientTable.vue              # Lists managed patients and provides actions (view, edit, delete, recommend).
│   │   ├── PersonalScanFormModal.vue     # Dedicated modal for users to manage their own scan records.
│   │   ├── ProfileFormModal.vue          # Allows users to update their personal profile information.
│   │   ├── ScanFormModal.vue             # Configurable modal for doctors to add or edit patient scan records.
│   │   ├── TheHeader.vue                 # The persistent header component seen across all main views.
│   │   └── icons/                        # A directory specifically for SVG icon components, promoting reusability.
│   │       ├── IconCommunity.vue
│   │       ├── IconDocumentation.vue
│   │       ├── IconEcosystem.vue
│   │       ├── IconSupport.vue
│   │       └── IconTooling.vue
│   ├── router/             # Configures Vue Router, managing navigation between different views.
│   │   └── index.js        # Defines all application routes and their corresponding view components.
│   ├── stores/             # Contains Pinia stores for centralized state management across the application.
│   │   ├── auth.js         # Manages user authentication state, login, logout, and user-related data.
│   │   ├── counter.js      # A simple Pinia store for numerical counting, demonstrating basic state management.
│   │   └── database.js     # Handles all interactions with the backend database for data retrieval and manipulation.
│   ├── views/              # Represents the main pages or screens of the application.
│   │   ├── DashboardView.vue         # The main hub after login, offering navigation and profile completion.
│   │   ├── PatientsView.vue          # (Doctor-specific) Manages patient records, including adding, viewing, and editing.
│   │   ├── ProfileView.vue           # Allows users to view/update their profile and manage personal scan history.
│   │   ├── RecommendView.vue         # Provides AI-powered scan recommendations based on user inputs.
│   │   ├── ResetPasswordView.vue     # Facilitates resetting forgotten user passwords.
│   │   ├── SigninView.vue            # Handles user login with email/password or Google sign-in.
│   │   └── SignupView.vue            # Manages new user registration and account creation.
│   ├── App.vue             # The root Vue component that orchestrates the overall application layout and global functionalities.
│   └── main.js             # The entry point of the application, initializing Vue, Pinia, and Vue Router.
├── .gitignore              # Specifies intentionally untracked files to ignore by Git.
├── 404.html                # Custom 404 error page displayed when a route is not found.
├── eslint.config.js        # Configuration for ESLint, defining code quality and style rules.
├── index.html              # The main HTML file that serves as the entry point for the web application.
├── jsconfig.json           # Configuration for JavaScript language services in editors like VS Code.
├── package.json            # Contains project metadata, dependencies, and npm scripts.
├── package-lock.json       # Records the exact dependency tree used, ensuring consistent installs.
├── vite.config.js          # Configuration file for Vite, the build tool used by the project.
└── README.md               # This very file, providing comprehensive documentation for the project.
```

## Views and Their Components

This section details each main view of the application, describing its purpose, the key components it utilizes, and its interactions with the Pinia stores for data management. Understanding these views is crucial for comprehending the application's user flows.

### 1. `SignupView.vue`

**Purpose:** This view handles new user registration, allowing users to create an account using their email and password or by signing up with Google. It serves as the gateway for new users to access the application.

**Components Used & Functionality:**
- **Form Elements (native HTML):** Standard HTML inputs for email, password, and confirm password fields are used to collect user credentials securely.
- **Buttons:** Dedicated buttons facilitate both email-based signup and Google OAuth-based signup, providing flexible registration options.
- **`useAuthStore` (Pinia Store):** This central store is responsible for managing all user authentication states. It encapsulates the complex signup logic, handles communication with the backend authentication services, and stores authentication-related errors and loading states to provide real-time feedback to the user during the registration process.

### 2. `SigninView.vue`

**Purpose:** This view allows existing users to securely log in to their accounts using their registered email and password or by signing in through their Google account. It also provides essential links for account recovery and new user registration.

**Components Used & Functionality:**
- **Form Elements (native HTML):** Standard HTML inputs for email and password fields facilitate credential collection.
- **Buttons:** Distinct buttons for email-based sign-in and Google OAuth-based sign-in streamline the login process.
- **Links:**
    - "Forgot your password?" link navigates users directly to the `ResetPasswordView` to initiate password recovery.
    - "Don't have an account?" link guides new users to the `SignupView` for registration.
- **`useAuthStore` (Pinia Store):** This store is critical for managing user authentication state. It handles the core sign-in logic, interacts with authentication services, and stores all authentication-related errors and success messages, providing clear feedback to the user.

### 3. `ResetPasswordView.vue`

**Purpose:** This view provides a secure mechanism for users to reset their forgotten passwords. It enables users to request a password reset link to be sent to their registered email address, enhancing account security and usability.

**Components Used & Functionality:**
- **Form Elements (native HTML):** An input field specifically for the user's email address is used to identify the account for password reset.
- **Button:** A dedicated button initiates the process of sending the password reset link to the provided email.
- **Link:** The "Remembered your password?" link offers a convenient way for users to return to the `SigninView` if they recall their credentials.
- **`useAuthStore` (Pinia Store):** This store is central to the password reset functionality. It manages the state of the password reset request, communicates with the backend to send the reset link, and handles any associated loading or error states.

### 4. `DashboardView.vue`

**Purpose:** The `DashboardView.vue` serves as the primary landing page immediately after a user successfully logs in. It acts as a personalized central hub, welcoming the user and providing intuitive navigation options to other key features of the application. It also dynamically prompts users to complete their profiles if necessary.

**Components Used & Functionality:**
- **Profile Completion Modal (inline):** A conditionally rendered modal component that appears prominently if the user's profile data is detected as incomplete. This modal guides users to enter essential information such as their role (doctor/patient), birth date, gender, allergies, and medical history, ensuring a complete user profile for accurate recommendations and functionalities.
- **Navigation Cards:** Interactive and visually appealing cards provide direct links to other crucial application views:
    - `RecommendView`: For accessing AI-powered scan recommendations.
    - `PatientsView` (conditionally rendered for doctors): Allows doctors to manage their patient records.
    - `ProfileView`: For users to view and update their personal profile and scan history.
- **Logout Button:** A clear and accessible button allows the user to securely log out of their current session.
- **`useAuthStore` (Pinia Store):** This store is used extensively to access and monitor the current user's authentication status, their assigned role (doctor or patient), and the completion status of their profile. This enables dynamic rendering of navigation options and the profile completion modal.
- **`useDatabaseStore` (Pinia Store):** Utilized to persist the initial user profile data captured through the profile completion modal, ensuring that essential user information is saved to the database.

### 5. `RecommendView.vue`

**Purpose:** This view empowers users (both patients and doctors) to obtain AI-powered recommendations for medical scans. It meticulously collects various inputs including patient details, existing radiation doses, pregnancy status, and the specific type of scan being considered. Doctors also have the capability to provide additional context for occupational exposure, enabling highly tailored recommendations.

**Components Used & Functionality:**
- **Mode Switcher:** A user-friendly toggle that allows switching between "For Myself" (for personal scan recommendations) and "For Another Patient" (specifically designed for doctors to get general recommendations for their patients).
- **Form Elements (native HTML):** A comprehensive set of input fields is used to capture all necessary data points:
    - Patient details: birth date, gender, pregnancy status, estimated due date, medical history, current symptoms, and allergies.
    - Scan type: The specific type of medical scan for which the recommendation is sought.
- **Textareas:** Dedicated larger input areas for detailed medical history, current symptoms, and a special field for doctors to add any additional occupational exposure context.
- **Prediction Result Display:** This section dynamically presents the AI-powered recommendation text, providing clear guidance. It also displays the estimated patient dose and, if applicable, the estimated doctor's occupational dose, along with any relevant warnings or advisories related to the recommended scan.
- **`useAuthStore` (Pinia Store):** Used to retrieve the current user's role (to determine view permissions) and their unique ID, which is crucial for personalizing recommendations and data retrieval.
- **`useDatabaseStore` (Pinia Store):** Essential for fetching specific patient data and their cumulative scan dose from the backend, which are vital inputs for the AI recommendation engine.

### 6. `PatientsView.vue`

**Purpose:** (Doctor-specific) This critical view is exclusively designed for doctors to efficiently manage their patient records. It provides a centralized interface to add new patients, view existing patient details (including their comprehensive scan history), edit patient information, and securely delete patient records. Furthermore, it offers a direct pathway to obtain a scan recommendation for any specific patient under their care.

**Components Used & Functionality:**
- **`PatientFormModal.vue`:** This modal component is dynamically used for two primary functions: enabling doctors to add entirely new patient profiles with all relevant details, or to edit the existing information of a selected patient.
- **`PatientDetailsModal.vue`:** Upon selecting a patient, this modal component provides a comprehensive display of their detailed profile information, alongside a complete chronological history of all their medical scans.
- **`ConfirmDeleteModal.vue`:** A generic yet crucial confirmation modal utilized to ensure doctors deliberately confirm the deletion of patient records, preventing accidental data loss.
- **`PatientTable.vue`:** This robust table component efficiently displays a paginated list of all managed patients, presenting key information at a glance. It also incorporates action buttons (view, edit, delete, recommend) next to each patient entry, enabling direct interaction and workflow integration.
- **`useAuthStore` (Pinia Store):** Retrieves the unique user ID of the logged-in doctor, which is essential for fetching only their associated patients and ensuring data privacy.
- **`useDatabaseStore` (Pinia Store):** This store handles all Create, Read, Update, and Delete (CRUD) operations related to patient profiles. It is also responsible for fetching comprehensive patient lists and their associated scan histories from the backend database.

### 7. `ProfileView.vue`

**Purpose:** This view is designed for all users to view and update their personal profile information. Additionally, it provides a dedicated section for managing their individual medical scan history. Patients can directly add, edit, and delete their own scan records, maintaining full control over their personal health data.

**Components Used & Functionality:**
- **`ProfileFormModal.vue`:** A modal component specifically crafted for users to update their personal profile details, such as contact information, and medical history.
- **`PersonalScanFormModal.vue`:** This modal component allows individual users (patients) to add new medical scan records or modify existing ones that are associated with their personal profile.
- **`ConfirmDeleteModal.vue`:** A versatile confirmation modal used here to obtain explicit user confirmation before any personal scan records are permanently deleted.
- **`HistoryTable.vue`:** A highly reusable table component, employed in this view to elegantly display the user's personal medical scan history. It offers clear options to edit or delete individual scan entries.
- **`useAuthStore` (Pinia Store):** This store is primarily used to access the current user's profile information for display and to facilitate updates to their profile details.
- **`useDatabaseStore` (Pinia Store):** Handles all Create, Read, Update, and Delete (CRUD) operations for personal scan records and is responsible for fetching the user's complete personal scan history from the database.

## Reusable Components

This section provides in-depth details on the reusable Vue components located in the `src/components` directory. These components are meticulously designed to be modular, highly configurable, and easily utilizable across various views, significantly enhancing consistency, reducing code duplication, and simplifying development.

### 1. `ConfirmDeleteModal.vue`

**Purpose:** This is a generic, highly reusable modal component designed to provide a critical confirmation step before a destructive delete action is performed. Its adaptability allows it to be used for confirming the deletion of various data items (e.g., patients, scans) throughout the application, promoting data integrity and preventing accidental removals.

**Key Props:**
- `show` (Boolean): Controls the visibility of the modal. Set to `true` to display, `false` to hide.
- `title` (String): The title displayed at the top of the modal, typically indicating the type of deletion being confirmed (e.g., "Confirm Patient Deletion").
- `message` (String): A detailed message displayed within the modal, explaining what is about to be deleted and prompting for confirmation (e.g., "Are you sure you want to delete this patient record? This action cannot be undone.").

**Key Emits:**
- `close`: Emitted when the user cancels the deletion or closes the modal without confirming.
- `confirm`: Emitted when the user explicitly confirms the delete action, triggering the actual deletion logic in the parent component.

### 2. `HelpModal.vue`

**Purpose:** This modal component is designed to display helpful information, guidelines, or frequently asked questions to the user. It can be populated with dynamic content to provide context-sensitive assistance or general application guidance. The content for this modal is typically sourced from `src/helpContent.js`.

**Key Props:**
- `show` (Boolean): Controls the visibility of the modal.
- `currentLanguage` (String): Determines which language version of the help content to display, supporting internationalization.

**Key Emits:**
- `close`: Emitted when the user closes the modal.

### 3. `HistoryTable.vue`

**Purpose:** A highly versatile table component meticulously designed to display lists of medical scan records. Its flexibility allows it to be configured for different contexts: a personal view (for patients) displaying limited details, or a more comprehensive doctor view (for medical professionals) including patient names and doctor-specific dose information.

**Key Props:**
- `scans` (Array of scan objects): The array of scan data to be displayed in the table.
- `isLoading` (Boolean): Indicates whether the scan data is currently being loaded, allowing for loading indicators.
- `isPersonalView` (Boolean): A flag that modifies the table's columns and presentation. If `true`, it shows only scan type, date, reason, and patient dose. If `false` (doctor view), it also includes patient name and doctor's occupational dose.

**Key Emits:**
- `edit`: Emitted when an "Edit" action is triggered for a specific scan record, typically passing the scan object to the parent component.
- `delete`: Emitted when a "Delete" action is triggered for a scan record, signaling the parent to initiate a deletion confirmation.

### 4. `InfoModal.vue`

**Purpose:** This modal component serves to display crucial informational content related to radiation exposure awareness and internationally recommended annual dose limits for various categories of individuals (e.g., medical professionals, general public, pregnant workers). It supports content display in multiple languages to ensure broad accessibility.

**Key Props:**
- `show` (Boolean): Controls the modal's visibility.
- `currentLanguage` (String): Specifies the language for the informational content (e.g., 'en' for English, 'ar' for Arabic).

**Key Emits:**
- `close`: Emitted when the modal is closed by the user.

### 5. `MsvCounter.vue`

**Purpose:** This dynamic component is designed to visually display a user's (or a doctor's occupational) annual radiation dose in millisieverts (mSv). It provides a clear comparison against a predefined yearly dose limit, featuring a responsive progress bar that intuitively changes color (e.g., green for safe, yellow for warning, red for danger) based on the current dose relative to the set limit, offering immediate visual feedback on exposure levels.

**Key Props:**
- `currentMsv` (Number): The current accumulated radiation dose for the user or patient.
- `yearlyLimit` (Number): The predefined maximum allowable annual radiation dose.
- `currentLanguage` (String): The active language setting for text display within the counter.
- `isLoading` (Boolean): Indicates if the mSv data is currently being fetched, useful for displaying loading states.

### 6. `PatientDetailsModal.vue`

**Purpose:** This is a comprehensive modal exclusively used by doctors to gain a full understanding of a selected patient's profile and their complete medical scan history. It serves as a central point from which doctors can seamlessly add new scans for that patient, or modify/delete existing scan records.

**Key Props:**
- `show` (Boolean): Controls the modal's visibility.
- `patient` (Object): The full patient object whose details and scans are to be displayed.

**Key Emits:**
- `close`: Emitted when the modal is closed.

**Child Components Used:**
- **`ScanFormModal.vue`:** Integrated within this modal to facilitate the addition or editing of individual scan records for the displayed patient.
- **`ConfirmDeleteModal.vue`:** Utilized to secure the deletion process for any of the patient's scan records, requiring explicit confirmation.

### 7. `PatientFormModal.vue`

**Purpose:** A highly functional modal component primarily utilized by doctors to either onboard new patient profiles or to meticulously modify the existing demographic and medical details of current patients. This includes crucial information such as name, birth date, gender, pregnancy status, comprehensive medical history, and known allergies.

**Key Props:**
- `show` (Boolean): Controls the modal's visibility.
- `patient` (Object / Null): If `null`, the modal is in "add new patient" mode. If a `patient` object is provided, it's in "edit patient" mode, pre-filling the form with existing data.
- `isSaving` (Boolean): Indicates if the form data is currently being saved to the database, useful for disabling buttons and showing loading indicators.

**Key Emits:**
- `close`: Emitted when the modal is closed without saving.
- `save`: Emitted when the "Save" action is confirmed, typically passing the updated patient object to the parent component for persistence.

### 8. `PatientTable.vue`

**Purpose:** This is a dedicated and efficient table component designed for doctors to display and manage a paginated list of all their registered patients. It provides a clear, organized overview of patient information and integrates direct action buttons for viewing comprehensive patient details, editing profiles, deleting records, and initiating scan recommendations for specific patients.

**Key Props:**
- `patients` (Array of patient objects): The array of patient data to be displayed in the table.
- `isLoading` (Boolean): Indicates whether the patient data is currently being fetched from the database.

**Key Emits:**
- `view`: Emitted when the "View" button for a patient is clicked, typically opening `PatientDetailsModal.vue`.
- `edit`: Emitted when the "Edit" button is clicked, typically opening `PatientFormModal.vue` for the selected patient.
- `delete`: Emitted when the "Delete" button is clicked, prompting confirmation via `ConfirmDeleteModal.vue`.
- `recommend`: Emitted to trigger navigation to the `RecommendView.vue` with the selected patient's context.

### 9. `PersonalScanFormModal.vue`

**Purpose:** This modal is specifically tailored for individual users (patients) to add new personal medical scan records or to edit existing ones. It facilitates the input of essential scan details such as scan type, date, reason for the scan, and any additional notes. A key feature is its ability to automatically estimate the patient's radiation dose if it is not manually provided, simplifying dose tracking for patients.

**Key Props:**
- `show` (Boolean): Controls the visibility of the modal.
- `scan` (Object / Null): If `null`, the modal is in "add new scan" mode. If a `scan` object is provided, it's in "edit scan" mode, pre-filling the form with existing data.
- `isSaving` (Boolean): Indicates if the scan data is currently being saved.

**Key Emits:**
- `close`: Emitted when the modal is closed without saving.
- `save`: Emitted when the "Save" action is confirmed, typically passing the new or updated scan object to the parent for persistence.

### 10. `ProfileFormModal.vue`

**Purpose:** This modal component allows users to conveniently view and update their personal profile information. This includes critical details such as their designated role within the application (e.g., doctor, patient), birth date, gender, pregnancy status, known allergies, and comprehensive medical history. It serves as a central point for users to maintain accurate and up-to-date personal data.

**Key Props:**
- `show` (Boolean): Controls the visibility of the modal.
- `profileData` (Object): The current user's profile object, used to pre-populate the form fields for editing.

**Key Emits:**
- `close`: Emitted when the modal is closed without saving changes.
- `save`: Emitted when the "Save" action is confirmed, typically passing the updated `profileData` to the parent component for persistence.

### 11. `ScanFormModal.vue`

**Purpose:** This is a highly configurable and versatile modal used primarily by doctors to meticulously add new scan records or to edit existing ones for their patients. It captures a comprehensive set of details including the scan type, date of scan, patient and doctor occupational doses (with intelligent AI estimation options available), the reason for the scan, additional notes, and specific doctor's occupational context if relevant. Its flexibility makes it a powerful tool for detailed scan record management.

**Key Props:**
- `show` (Boolean): Controls the visibility of the modal.
- `scan` (Object / Null): If `null`, the modal is in "add new scan" mode. If a `scan` object is provided, it's in "edit scan" mode.
- `isSaving` (Boolean): Indicates if the scan data is currently being saved.
- `patient` (Object): The current patient object for whom the scan record is being managed. This context is crucial for associating scans correctly.

**Key Emits:**
- `close`: Emitted when the modal is closed without saving.
- `save`: Emitted when the "Save" action is confirmed, typically passing the new or updated scan object to the parent for persistence.

### 12. `TheHeader.vue`

**Purpose:** The `TheHeader.vue` component serves as the persistent main header that is prominently displayed across all primary views of the application. It provides consistent branding and essential global functionalities. It typically includes the application title, a toggle for language selection, a global information button (often opening `InfoModal.vue`), and integrates the `MsvCounter` component to continuously display the current user's annual radiation dose, keeping vital information always visible.

**Key Props:**
- `currentLanguage` (String): The active language setting for the header elements.
- `user` (Object): The current authenticated user object, used for displaying user-specific information or conditional elements.
- `msvData` (Object): An object containing `currentMsv` (the user's current dose), `limit` (the yearly dose limit), and `isLoading` (status of mSv data loading), directly passed to the `MsvCounter`.

**Key Emits:**
- `toggle-language`: Emitted when the language toggle is activated.
- `toggle-info-modal`: Emitted when the global information button is clicked, signaling the parent to open the `InfoModal.vue`.

## Getting Started

To get a local copy of this project up and running on your development machine, follow these simple and detailed steps. These instructions will guide you through setting up the necessary environment and running the application.

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

-   **npm (Node Package Manager):** `npm` is used for managing project dependencies. If you don't have it, you can install it using Node.js. It's recommended to have the latest version.
    ```sh
    npm install npm@latest -g
    ```
    *This command globally installs the latest version of npm.* To verify your installation, run `npm -v` in your terminal.

### Installation

Follow these steps to set up the project locally:

1.  **Clone the Repository**
    First, clone the project repository to your local machine using Git. Open your terminal or command prompt and run:
    ```sh
    git clone https://github.com/your_username/X-ray.git
    ```
    *Replace `your_username` with the actual GitHub username or organization where the repository is hosted.*

2.  **Navigate to the Project Directory**
    Change your current directory to the newly cloned project folder:
    ```sh
    cd X-ray
    ```

3.  **Install NPM Packages**
    Once inside the project directory, install all the necessary dependencies by running the npm install command:
    ```sh
    npm install
    ```
    *This command reads the `package.json` file and downloads all required libraries and frameworks into the `node_modules` directory.*

### Compile and Hot-Reload for Development

To run the application in development mode with hot-reloading (changes in your code will automatically reflect in the browser without manual refresh), use the following command:

```sh
npm run dev
```
*This command starts a development server, usually accessible at `http://localhost:5173/` (or another port if 5173 is in use). You can then open this URL in your web browser to see the application running.*

### Compile and Minify for Production

To build the application for production, which generates optimized and minified static files ready for deployment, use this command:

```sh
npm run build
```
*This command creates a `dist/` directory in your project root, containing the production-ready assets (HTML, CSS, JavaScript, etc.). These files are optimized for performance and smaller size.*

### Lint with [ESLint](https://eslint.org/)

To check your code for style consistency and potential errors using ESLint, run the linting command:

```sh
npm run lint
```
*This command will analyze your JavaScript and Vue files against the configured ESLint rules and report any issues, helping maintain code quality.*
