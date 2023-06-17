import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'

const Search = ({ setSearchName }) => {
  return (
    <S.SearchBar>
      <label htmlFor='searchName'>
        <p>Nome do cliente</p>
      </label>
      <S.Bar
        id='searchName'
        size='large'
        placeholder='Nome do cliente'
        suffix={<SearchIcon />}
        allowClear
        onChange={e => setSearchName(e.target.value.toLowerCase())}
      />
    </S.SearchBar>
  )
}

export default Search
