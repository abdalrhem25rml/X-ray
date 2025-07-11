// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import RecommendView from '../views/RecommendView.vue'
import PatientListView from '../views/PatientListView.vue' // Import the new PatientListView
import DashboardView from '@/views/DashboardView.vue'

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
      meta: { requiresAuth: true } // Uncomment this later if you want to protect this route
    },
    {
      path: '/recommend/:patientId?', // Make patientId optional for flexibility
      name: 'recommend',
      component: RecommendView,
      meta: { requiresAuth: true } // Uncomment this later if you want to protect this route
    },
    {
      path: '/patients', // New route for patient list
      name: 'patients',
      component: PatientListView,
      meta: { requiresAuth: true } // Uncomment this later if you want to protect this route
    }
  ]
})

export default router
