import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/fonts/fontawesome-all.min.css'
import './assets/fonts/ionicons.min.css'
import moment from 'moment'

Vue.prototype.moment = moment

Vue.use(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

