import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'

const Search = ({ setSearchCod }) => {
  return (
    <S.SearchBar>
      <label htmlFor='searchCod'>
        <p>Cód. Processo</p>
      </label>
      <S.Bar
        id='searchCod'
        size='large'
        placeholder='Cód. Processo'
        suffix={<SearchIcon />}
        allowClear
        onChange={e => setSearchCod(e.target.value.toUpperCase())}
      />
    </S.SearchBar>
  )
}

export default Search
