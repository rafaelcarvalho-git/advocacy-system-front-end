export const getUserCachedData = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const checkUserLogged = () => {
  const userData = getUserCachedData()
  const userLogged = !!userData?.token
  return userLogged
}

export const cleanUserToken = () => {
  localStorage.removeItem('user')
}

export const performLogin = data => {
  const user = JSON.stringify(data)
  localStorage.setItem('user', user)
}
