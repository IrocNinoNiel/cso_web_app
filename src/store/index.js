import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import student from './modules/student'
import faq from './modules/faq'
import query from './modules/query'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    student,
    faq,
    query,
    message
  }
})
