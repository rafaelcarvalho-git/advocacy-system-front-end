import { useState } from 'react'
import ListOffices from './ListOffices'
import ListUsers from './ListUsers'
import ListLawyers from './ListLawyers'
import RegistrationsMenu from './RegistrationsMenu'
import RegistrationsOptions from './RegistrationsOptions'

const Registrations = ({ collaborators, successCallback }) => {
  const [menuOption, setMenuOption] = useState('users')

  return (
    <>
      <RegistrationsMenu menuOption={menuOption} setMenuOption={setMenuOption} />

      <RegistrationsOptions userType={menuOption} />

      <>
        {menuOption === 'users' && <ListUsers collaborators={collaborators} successCallback={successCallback} userType={menuOption} />}
        {menuOption === 'lawyers' && <ListLawyers collaborators={collaborators} successCallback={successCallback} userType={menuOption} />}
        {menuOption === 'offices' && <ListOffices collaborators={collaborators} successCallback={successCallback} userType={menuOption} />}
      </>
    </>
  )
}
export default Registrations
