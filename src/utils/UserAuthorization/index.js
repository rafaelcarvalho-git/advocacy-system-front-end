export const getUserCachedData = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const checkUserLogged = () => {
  const userData = getUserCachedData()
  const isLogged = !!userData?.token
  return isLogged
}

export const cleanUserToken = () => {
  localStorage.removeItem('user')
}

export const performLogin = data => {
  const user = JSON.stringify(data)
  localStorage.setItem('user', user)
}
