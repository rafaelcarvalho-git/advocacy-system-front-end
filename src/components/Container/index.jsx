import * as S from './styles'
import { Outlet } from 'react-router-dom'
import LogoutModal from 'components/Container/LogoutModal'
import { checkUserLogged } from 'utils/UserAuthorization'
import { useState } from 'react'
import Navbar from './Navbar'

function Container() {
  const userLogged = checkUserLogged()
  const [showLogout, setShowLogout] = useState(false)
  return (
    <>
      {userLogged && (
        <>
          <Navbar setLogout={setShowLogout} />
          <S.Container>
            <LogoutModal open={showLogout} setIsOpen={setShowLogout} />
            <Outlet />
            <S.Footer>
              &copy; {new Date().getFullYear()} - Advocacy System
            </S.Footer>
          </S.Container>
        </>
      )}
    </>
  )
}

export default Container
