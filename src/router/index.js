import { createRouter, createWebHistory } from 'vue-router'
import TopStory from '../views/TopStory.vue'
import RealTime from '../views/RealTime.vue'
import Books from '../views/Books.vue'
import Food from '../views/Food.vue'
import Movie from '../views/Movie.vue'

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
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
