const TokenKey = 'demo-Token'
const UserKey = 'demo-user'
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getUser() {
    return JSON.parse(localStorage.getItem(UserKey))
}

export function setUser(user) {
    let use = JSON.stringify(user)
    return localStorage.setItem(UserKey, use)
}

export function removeUser() {
    return localStorage.removeItem(UserKey)
}
