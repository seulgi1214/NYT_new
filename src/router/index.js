import { createRouter, createWebHistory } from 'vue-router'
import TopStory from '../views/TopStory.vue'
import RealTime from '../views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'TopStory',
    component: TopStory
  },
  {
    path: '/now',
    name: 'RealTime',
    component: RealTime
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
