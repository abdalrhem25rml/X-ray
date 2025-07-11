// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import RecommendView from '../views/RecommendView.vue'
import PatientListView from '../views/PatientListView.vue'
import DashboardView from '@/views/DashboardView.vue'
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
      path: '/login',
      name: 'login',
      component: LoginView
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
    }
  ]
})

// Global navigation guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore(); // Get the auth store instance

  // Wait until Firebase auth state is ready (initial check completed)
  // This is crucial to prevent premature redirects before the user's auth status is known.
  if (!authStore.isAuthReady) {
    // If auth is not ready, wait for it.
    // This simple approach might cause a slight delay on initial load.
    // For more advanced handling, you might use a promise or a loading screen.
    await new Promise(resolve => {
      const unsubscribe = authStore.$subscribe((mutation, state) => {
        if (state.isAuthReady) {
          unsubscribe(); // Unsubscribe after auth is ready
          resolve();
        }
      });
    });
  }

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!authStore.user; // Check if user object exists

  if (requiresAuth && !isAuthenticated) {
    // If route requires authentication and user is NOT authenticated, redirect to login
    console.log(`Redirecting to login: Route '${to.path}' requires authentication.`);
    next('/login');
  } else if (!requiresAuth && isAuthenticated && (to.name === 'login' || to.name === 'signup')) {
    // If user is authenticated and tries to go to login/signup, redirect to dashboard
    console.log(`Redirecting authenticated user to dashboard from '${to.path}'.`);
    next('/dashboard');
  } else {
    // Otherwise, allow navigation
    next();
  }
});

export default router
