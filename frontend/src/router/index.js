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
    },
    {
      path: '/auth',
      name: 'Авторизация',
      component: () => import('@/views/AuthView.vue')
    },
    {
      path: '/projectDetail/:id',
      name: 'Подробно',
      component: () => import('@/views/ProjectDetailView.vue')
    },
    {
      path: '/news',
      name: 'Рекомендации',
      component: () => import('@/views/NewsView.vue')
    }
  ]
})

export default router
