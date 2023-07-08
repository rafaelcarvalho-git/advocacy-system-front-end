import * as S from './styles'
import { Outlet } from 'react-router-dom'
import Logout from 'components/Container/Logout'
import { checkUserLogged } from 'utils/UserAuthorization'
import { useState } from 'react'
import Navbar from './Navbar'

const Container = () => {
  const userLogged = checkUserLogged()
  const [showLogout, setShowLogout] = useState(false)
  return (
    <>
      {userLogged && (
        <>
          <Navbar setLogout={setShowLogout} />
          <S.Container>
            <Logout open={showLogout} setIsOpen={setShowLogout} />
            <Outlet />
            <S.Footer>
              &copy; {new Date().getFullYear()} - Advocacy System
              <p>Developed by <a href='https://github.com/rafaelcarvalho-git' target='_blank' rel='noreferrer noopener'>Rafael Carvalho</a></p>
            </S.Footer>
          </S.Container>
        </>
      )}
    </>
  )
}

export default Container
