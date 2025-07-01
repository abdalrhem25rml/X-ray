import { createRouter, createWebHistory } from 'vue-router'
// Import your views
import SignupView from '../views/SignupView.vue'
import LoginPage from '../views/LoginView.vue';
import PatientDashboard from '../components/PatientDashboard.vue' // WILL BE CHANGED!!!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
// Define your routes
  routes: [
  {
    path: '/',
    name: 'Signup',
    component: SignupView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'PatientDashboard',
    component: PatientDashboard,
  },
]
})

export default router
