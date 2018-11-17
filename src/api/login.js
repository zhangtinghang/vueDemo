import request from '@/utils/request'

export function loginByUsername(number, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      number,
      password
    }
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
    params: { token }
  })
}

