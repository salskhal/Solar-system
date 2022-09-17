import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/:id',
      name: 'planet',
      component: () => import('../views/PlanetView.vue'),
      props: true,
      meta: {
        title: ":id"
      }
    },
  ]
})



export default router
