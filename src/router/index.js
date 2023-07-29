import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CharacterPage from '@/views/CharacterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:name',
      name: 'to-info-char',
      component: CharacterPage,
    },
  ],
})

export default router
