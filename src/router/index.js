import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/components/Menu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Menu
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/segundo',
      name: 'segundo',
      component: () => import('../views/segundoMenu.vue')
    },
    {
      path: '/terceiro',
      name: 'terceiro',
      component: () => import('../views/terceiroMenu.vue')
    }
  ]
})

export default router
