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
import AddStudent from '../views/AddStudent.vue'
import EditStudent from '../views/EditStudent.vue'
import AddFaq from '../views/AddFaq.vue'
import EditFaq from '../views/EditFaq.vue'
import ArchivedMessage from '../views/ArchivedMessage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
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
      {
        path: '/addstudent',
        name: 'AddStudent',
        component: AddStudent
      },
      {
        path: '/editstudent/:id',
        name: 'EditStudent',
        component: EditStudent
      },
      {
        path: '/addfaq',
        name: 'AddFaq',
        component: AddFaq
      },
      {
        path: '/editfaq/:id',
        name: 'EditFaq',
        component: EditFaq
      },
      {
        path: '/archivedmessage',
        name: 'ArchivedMessage',
        component: ArchivedMessage
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
