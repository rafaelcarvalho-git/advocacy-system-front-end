import { Button } from 'antd'
import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'

const RegistrationsOptions = ({ placeholder, setSearchName }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.SearchBar>
                <S.Bar
                    id='searchRegistration'
                    size='large'
                    placeholder={placeholder}
                    suffix={<SearchIcon />}
                    allowClear
                    onChange={e => console.log(e.target.value.toLowerCase())}
                />
            </S.SearchBar>
            <Button type='primary'>Novo Usuário</Button>
        </div>
    )
}

export default RegistrationsOptions
