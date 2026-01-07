import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('@/views/research.vue'),
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('@/views/sales.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/products.vue'),
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('@/views/other.vue'),
    }
  ],
})

export default router
