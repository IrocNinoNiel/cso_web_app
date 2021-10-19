import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/fonts/fontawesome-all.min.css'
import './assets/fonts/ionicons.min.css'
import moment from 'moment'

// socket io
import socket from 'socket.io';
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity", 
  "timeout" : 1000,                  
  "transports" : ["websocket"]
};


Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:5000', connectionOptions), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);


Vue.prototype.moment = moment
Vue.use(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

