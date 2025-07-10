// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import RecommendView from '../views/RecommendView.vue'
import PatientListView from '../views/PatientListView.vue' // Import the new PatientListView

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
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: DashboardView,
    //   // meta: { requiresAuth: true } // Uncomment this later if you want to protect this route
    // },
    {
      path: '/recommend',
      name: 'recommend',
      component: RecommendView
    },
    {
      path: '/patients', // New route for patient list
      name: 'patients',
      component: PatientListView
    }
  ]
})

export default router
