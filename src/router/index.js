// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue' // Import the 'h' function for creating VNodes
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue' // Ensure this is the correct login view
import RecommendView from '@/views/RecommendView.vue'
import PatientsView from '@/views/PatientsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue' // Import the new component
import ProfileView from '@/views/ProfileView.vue'
import RecommendGuestView from '@/views/RecommendGuestView.vue'

import { useAuthStore } from '@/stores/auth' // Import the auth store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }, // Uncomment this later if you want to protect this route
    },
    {
      path: '/recommend/:patientId?',
      name: 'recommend',
      component: RecommendView,
      meta: { requiresAuth: true }, // Uncomment this later if you want to protect this route
    },
    {
      path: '/recommend/guest',
      name: 'recommendGuest',
      component: RecommendGuestView,
      meta: { requiresAuth: false }, // Uncomment this later if you want to protect this route
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientsView,
      meta: { requiresAuth: true }, // Uncomment this later if you want to protect this route
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPasswordView,
    },
    {
      path: '/__/auth/handler',
      name: 'firebaseAuthHandler',
      component: {
        render() {
          return h('div')
        },
      }, // Empty div to satisfy Vue Router
      beforeEnter: (to, from, next) => {
        next()
      },
    },
    // Catch-all route for 404 (optional, but good practice)
    {
      path: '/:catchAll(.*)',
      redirect: '/dashboard', // Or a specific 404 page if you have one
    },
    {
      path: '/__/auth/iframe',
      name: 'firebaseAuthIframeHandler',
      component: {
        render() {
          return h('div')
        },
      }, // Empty div to satisfy Vue Router
      beforeEnter: (to, from, next) => {
        next()
      },
    },
  ],
})

// Global navigation guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // Wait until Firebase auth state is ready (initial check completed)
  if (!authStore.isAuthReady) {
    await new Promise((resolve) => {
      const unsubscribe = authStore.$subscribe((mutation, state) => {
        if (state.isAuthReady) {
          unsubscribe()
          resolve()
        }
      })
    })
  }

  const isAuthenticated = !!authStore.user

  // Special handling for Firebase auth internal paths (handler and iframe)
  if (to.path.startsWith('/__/auth/handler') || to.path.startsWith('/__/auth/iframe')) {
    next()
    return
  }

  console.log(`Navigating to: ${to.path} (name: ${to.name})`)
  console.log(`isAuthenticated: ${isAuthenticated}`)

  // Define routes that do NOT require authentication (public routes)
  const publicRoutes = ['signup', 'signin', 'resetpassword', 'newpassword', 'recommendGuest'] // Added 'newpassword'
  const isPublicRoute = publicRoutes.includes(to.name)

  if (isAuthenticated) {
    if (isPublicRoute) {
      console.log(`Redirecting authenticated user from ${to.name} to /dashboard.`)
      next('/dashboard')
    } else {
      console.log(`Allowing authenticated access to ${to.path}.`)
      next()
    }
  } else {
    if (isPublicRoute) {
      console.log(`Allowing unauthenticated access to ${to.name}.`)
      next()
    } else {
      console.log(`Redirecting unauthenticated user from ${to.path} (requires auth) to /signin.`)
      next('/signin')
    }
  }
})

export default router
