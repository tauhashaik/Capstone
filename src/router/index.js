import { createRouter, createWebHistory } from 'vue-router'
import FlightsView from '../views/FlightsView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import FlightsAdminView from '../views/FlightsAdminView.vue'
import UsersAdminView from '../views/UsersAdminView.vue'
import SignupLoginView from '../views/SignupLoginView.vue'

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
  },
  {
    path:'/',
    name:'home',
    component: HomeView
  },
  {
    path:'/flightsadmin',
    name:'flightsadmin',
    component: FlightsAdminView
  },
  {
    path:'/usersadmin',
    name:'usersadmin',
    component: UsersAdminView
  },
  {
    path:'/signuplogin',
    name:'signup/login',
    component: SignupLoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
