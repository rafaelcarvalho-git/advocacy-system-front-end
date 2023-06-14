import { createContext, useContext, useState } from 'react'
import { checkUserLogged } from 'utils/UserAuthorization'
import { cleanUserToken } from 'utils/UserAuthorization'
import { getUserCachedData } from 'utils/UserAuthorization'

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
  const userCachedData = getUserCachedData()
  const [userLogged, setUserLogged] = useState(checkUserLogged())

  const performLogout = () => {
    localStorage.removeItem('user')
    cleanUserToken()
    setUserLogged(false)
  }

  const performLogin = data => {
    const user = JSON.stringify(data)
    localStorage.setItem('user', user)
    setUserLogged(true)
  }

  return (
    <LoginContext.Provider
      value={{
        userLogged,
        performLogout,
        performLogin,
        userCachedData,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

const useLogin = () => {
  return useContext(LoginContext)
}

export default useLogin
