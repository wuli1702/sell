import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Order from 'components/order/order'
import Home from 'components/home/home'
import './cube-ui'
import './register'
import store from 'store'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/', component: Home
  }, {
    path: '/order', component: Order
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
