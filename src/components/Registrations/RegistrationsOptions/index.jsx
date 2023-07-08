import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'
import NewRegister from './NewRegister'
import { useState, useEffect } from 'react'
import { isAdmin } from 'utils/permissions'


const RegistrationsOptions = ({ collaborators, lawyers, offices, setSearch, setSearchValue, userType, successCallback }) => {
    const [type, setType] = useState(userType)

    useEffect(() => {
        if (userType === 'users') {
            setType('Usuário')
            setSearchValue(collaborators)
        } else if (userType === 'lawyers') {
            setType('Advogado')
            setSearchValue(lawyers)
        } else if (userType === 'offices') {
            setType('Escritório')
            setSearchValue(offices)
        }
    }, [userType, collaborators, lawyers, offices, setSearchValue])


    return (
        <S.Options>
            <S.SearchBar>
                <S.Bar
                    id='searchRegistration'
                    placeholder={'Nome do ' + type}
                    suffix={<SearchIcon />}
                    allowClear
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                />
            </S.SearchBar>
            {isAdmin && <NewRegister type={type} successCallback={successCallback} userType={userType} />}
        </S.Options>
    )
}

export default RegistrationsOptions
