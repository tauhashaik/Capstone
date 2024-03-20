import { createRouter, createWebHistory } from 'vue-router'
import FlightsView from '../views/FlightsView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import FlightsAdminView from '../views/FlightsAdminView.vue'
import UsersAdminView from '../views/UsersAdminView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import CartView from '../views/CartView.vue'
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
    path:'/login',
    name:'login',
    component: LoginView
  },
  {
    path:'/signup',
    name:'signup',
    component: SignUpView
  },
  {
    path:'/cart',
    name:'cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
