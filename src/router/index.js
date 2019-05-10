import Vue from 'vue'
import VueRouter from 'vue-router'


import {routers, appRouter} from './defines'

Vue.use(VueRouter)

const RouterConfig = {
  // mode: 'history',
  routes: routers
}
const router = new VueRouter(RouterConfig)

export default router
