import { createAPI } from 'cube-ui'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HeaderDetail from 'components/header-detail/header-detail'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'
import ShopCartStikcy from 'components/shop-cart-sticky/shop-cart-sticky'
import Food from 'components/food/food'

Vue.use(VueRouter)
Vue.use(Vuex)

createAPI(Vue, HeaderDetail)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartStikcy)
createAPI(Vue, Food)
