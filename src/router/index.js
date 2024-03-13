import { createRouter, createWebHistory } from 'vue-router'
import FlightsView from '../views/FlightsView.vue'
import AboutView from '../views/AboutView.vue'
const routes = [
  {
    path: '/flights',
    name: 'flights',
    component: FlightsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
