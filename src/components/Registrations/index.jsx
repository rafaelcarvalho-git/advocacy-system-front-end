import * as S from './styles'
import ListOffices from './ListOffices'
import ListUsers from './ListUsers'
import ListLawyers from './ListLawyers'
import { useState } from 'react'
import RegistrationsMenu from './RegistrationsMenu'

const ListRegistrations = ({ collaborators, successCallback }) => {
  const [menuOption, setMenuOption] = useState('users')

  return (
    <>
      <RegistrationsMenu menuOption={menuOption} setMenuOption={setMenuOption} />

      <S.TableContent>
        {menuOption === 'users' && <ListUsers collaborators={collaborators} successCallback={successCallback} />}
        {menuOption === 'lawyers' && <ListLawyers collaborators={collaborators} successCallback={successCallback} />}
        {menuOption === 'offices' && <ListOffices collaborators={collaborators} successCallback={successCallback} />}
      </S.TableContent>
    </>
  )
}
export default ListRegistrations
