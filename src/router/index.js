import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Reports from '../views/Reports.vue'
import Message from '../views/Message.vue'
import Faq from '../views/FAQ.vue'
import Table from '../views/Table.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ManageUser from '../views/ManageUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/reports',
        name: 'Reports',
        component: Reports
      },
      {
        path: '/message',
        name: 'Message',
        component: Message
      },
      {
        path: '/faq',
        name: 'Faq',
        component: Faq
      },
      {
        path: '/table',
        name: 'Table',
        component: Table
      },
      {
        path: '/manageusers',
        name: 'ManageUsers',
        component: ManageUser
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
