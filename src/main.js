import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/fonts/fontawesome-all.min.css'
import './assets/fonts/ionicons.min.css'

Vue.use(router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

