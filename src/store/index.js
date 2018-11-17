import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    user
  },
  getters
})

export default store
