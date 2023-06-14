import * as S from './styles'
import { BsSearch } from 'react-icons/bs'

function Search({ setSearchName }) {
  return (
    <S.SearchBar>
      <label htmlFor='searchName'>
        <p>Nome do cliente</p>
      </label>
      <S.Bar
        id='searchName'
        size='large'
        placeholder='Nome do cliente'
        suffix={<BsSearch />}
        allowClear
        onChange={e => setSearchName(e.target.value.toLowerCase())}
      />
    </S.SearchBar>
  )
}

export default Search
