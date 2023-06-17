import { Button } from 'antd'
import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'
import NewRegister from './NewRegister'
import { useState } from 'react'

const RegistrationsOptions = ({ label, placeholder, setSearch }) => {
    const [showLogout, setShowLogout] = useState(false)

    return (
        <S.Options>
            <S.SearchBar>
                <S.Bar
                    id='searchRegistration'
                    placeholder={placeholder}
                    suffix={<SearchIcon />}
                    allowClear
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                />
            </S.SearchBar>
            <Button type='primary' onClick={() => setShowLogout(true)}>Novo {label}</Button>
            <NewRegister open={showLogout} setIsOpen={setShowLogout} />
        </S.Options>
    )
}

export default RegistrationsOptions
