import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/AppLogin.vue'
import Register from '../views/AppRegisterr.vue'
import DashBoard from '../views/DashboardView.vue'
import Category from '../views/CategoryView.vue'
import Prodcuts from '../views/ProductView.vue'
import Listado from '../views/listado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard,
    children: [
      {
        path: 'category',
        name: 'category',
        component: Category
      },
      {
        path: 'products',
        name: 'products',
        component: Prodcuts
      },
      {
        path: 'listado',
        name: 'listado',
        component: Listado 
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
