import * as S from './styles'
import { Button } from 'antd'
import SearchIcon from '@mui/icons-material/Search'
import NewRegister from './NewRegister'
import { useState, useEffect } from 'react'
import { isAdmin } from 'utils/permissions'


const RegistrationsOptions = ({ setSearch, userType }) => {
    const [showRegister, setShowRegister] = useState(false)
    const [type, setType] = useState(userType)

    useEffect(() => {
        if (userType === 'users') {
            setType('Usuário');
        } else if (userType === 'lawyers') {
            setType('Advogado');
        } else if (userType === 'offices') {
            setType('Escritório');
        }
    }, [userType]);

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
            {isAdmin && <>
                <Button type='primary' onClick={() => setShowRegister(true)}>Novo {type}</Button>
                <NewRegister open={showRegister} setIsOpen={setShowRegister} userType={userType} type={type} />
            </>}
        </S.Options>
    )
}

export default RegistrationsOptions
