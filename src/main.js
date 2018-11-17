import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission' // permission control
import './errorLog'// error log
import i18n from './lang' // Internationalization

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
