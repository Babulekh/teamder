import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Проекты',
      component: HomeView
    },
    {
      path: '/profile/:finalCrumb',
      name: 'Профиль',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/project/:username/:finalCrumb',
      name: 'Проект',
      component: () => import('@/views/ProjectView.vue')
    }
  ]
})

export default router
