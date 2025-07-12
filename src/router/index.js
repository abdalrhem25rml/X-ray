// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'; // Import the 'h' function for creating VNodes
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue' // Corrected import for SigninView
import RecommendView from '../views/RecommendView.vue'
import PatientListView from '../views/PatientListView.vue'
import DashboardView from '../views/DashboardView.vue'

import { useAuthStore } from '../stores/auth'; // Import the auth store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true } // Protected route
    },
    {
      path: '/recommend/:patientId?',
      name: 'recommend',
      component: RecommendView,
      props: true, // Ensure patientId is passed as prop
      meta: { requiresAuth: true } // Protected route
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientListView,
      meta: { requiresAuth: true } // Protected route
    },
    // NEW ROUTES: These routes handle Firebase's internal authentication callbacks
    // They don't need a visible component; their purpose is to prevent Vue Router warnings
    // and allow Firebase SDK to process authentication results.
    {
      path: '/__/auth/handler',
      name: 'firebaseAuthHandler',
      component: { render() { return h('div'); } }, // Empty div to satisfy Vue Router
      beforeEnter: (to, from, next) => {
        next();
      }
    },
    {
      path: '/__/auth/iframe',
      name: 'firebaseAuthIframeHandler',
      component: { render() { return h('div'); } }, // Empty div to satisfy Vue Router
      beforeEnter: (to, from, next) => {
        next();
      }
    }
  ]
})

// Global navigation guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore(); // Get the auth store instance

  // Directly check authentication status.
  // The onAuthStateChanged listener in auth.js will update authStore.user and isAuthReady.
  // We rely on authStore.user being reactive.
  const isAuthenticated = !!authStore.user; // Check if user object exists

  // Special handling for Firebase auth internal paths (handler and iframe)
  // These should always be allowed to ensure Firebase SDK functions correctly.
  if (to.path.startsWith('/__/auth/handler') || to.path.startsWith('/__/auth/iframe')) {
    next();
    return;
  }

  // Debugging logs (can be removed once confirmed working)
  console.log(`Navigating to: ${to.path} (name: ${to.name})`);
  console.log(`isAuthenticated: ${isAuthenticated}`);

  // Define routes that do NOT require authentication (public routes)
  const publicRoutes = ['signup', 'signin'];
  const isPublicRoute = publicRoutes.includes(to.name);

  // If the user is authenticated
  if (isAuthenticated) {
    // If an authenticated user tries to access a public auth route (signup or signin),
    // redirect them to the dashboard.
    if (isPublicRoute) {
      console.log(`Redirecting authenticated user from ${to.name} to /dashboard.`);
      next('/dashboard');
    } else {
      // Otherwise, allow access to any other route (including protected ones if already authenticated).
      console.log(`Allowing authenticated access to ${to.path}.`);
      next();
    }
  } else {
    // If the user is NOT authenticated
    // If the route is a public auth route (signup or signin), allow access.
    if (isPublicRoute) {
      console.log(`Allowing unauthenticated access to ${to.name}.`);
      next();
    } else {
      // If the route is NOT a public auth route (i.e., it's a protected route),
      // redirect the unauthenticated user to the signin page.
      console.log(`Redirecting unauthenticated user from ${to.path} (requires auth) to /signin.`);
      next('/signin');
    }
  }
});

export default router
