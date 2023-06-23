import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '../stores/auth'

import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'

// const authStore = useAuthStore();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/forgot-password',
      name: 'forgotpassword',
      component: ForgotPasswordView
    },
    {
      path: '/password-reset/:token',
      name: 'passwordreset',
      component: ResetPasswordView
    }
    
  ]
})

router.beforeEach((to, from, next) => {

  //clear authStates
  

  next()
})

export default router
