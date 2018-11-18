import { loginByUsername, getUserInfo } from '@/api/login'
import { getToken, setToken, getUser, setUser } from '@/utils/auth'

const user = {
  state: {
    user: getUser(),
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    // 用户名登录
    loginByUsername({ commit }, userInfo) {
        console.log('----传递进store-----',userInfo)
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const token = response.data.userid
          commit('SET_TOKEN', token)
          commit('SET_USER', response.data)
          setToken(token)
          setUser(response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data
          commit('SET_NAME', data.username)
          commit('SET_AVATAR', data.avatar)
          commit('SET_USER', data._id)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user
