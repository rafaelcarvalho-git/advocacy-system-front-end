import { useState } from 'react'
import ListOffices from './ListOffices'
import ListUsers from './ListUsers'
import ListLawyers from './ListLawyers'
import RegistrationsMenu from './RegistrationsMenu'
import RegistrationsOptions from './RegistrationsOptions'

const Registrations = ({ collaborators, lawyers, offices, successCallback }) => {
  const [menuOption, setMenuOption] = useState('users')
  const [search, setSearch] = useState('')
  const [searchValue, setSearchValue] = useState(collaborators)

  const filteredData = search.length > 0
    ? searchValue.filter((value) => value.first_name.toLowerCase().includes(search.toLowerCase()))
    : searchValue

  return (
    <>
      <RegistrationsMenu menuOption={menuOption} setMenuOption={setMenuOption} />

      <RegistrationsOptions collaborators={collaborators} lawyers={lawyers} offices={offices}
        userType={menuOption} setSearch={setSearch} setSearchValue={setSearchValue} successCallback={successCallback} />

      <>
        {menuOption === 'users' && <ListUsers collaborators={filteredData} successCallback={successCallback} userType={menuOption} />}
        {menuOption === 'lawyers' && <ListLawyers lawyers={filteredData} successCallback={successCallback} userType={menuOption} />}
        {menuOption === 'offices' && <ListOffices offices={filteredData} successCallback={successCallback} userType={menuOption} />}
      </>
    </>
  )
}
export default Registrations
