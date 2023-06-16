import { Button } from 'antd'
import * as S from './styles'
import { BsSearch } from 'react-icons/bs'

function RegistrationsOptions({ placeholder, setSearchName }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.SearchBar>
                <S.Bar
                    id='searchRegistration'
                    size='large'
                    placeholder={placeholder}
                    suffix={<BsSearch />}
                    allowClear
                    onChange={e => console.log(e.target.value.toLowerCase())}
                />
            </S.SearchBar>
            <Button type='primary'>Novo Usuário</Button>
        </div>
    )
}

export default RegistrationsOptions
