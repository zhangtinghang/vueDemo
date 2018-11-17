import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: Login, hidden: false },
  { path: '/home', component: Home, hidden: false },
]

export default new Router({
  routes: constantRouterMap
})

