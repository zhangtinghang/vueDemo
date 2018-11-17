import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: Home, hidden: false },
  { path: '/about', component: About, hidden: false },
]

export default new Router({
  routes: constantRouterMap
})

