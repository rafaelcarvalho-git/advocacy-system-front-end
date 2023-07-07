import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'

const Search = ({ setSearchCod }) => {
  return (
    <S.SearchBar>
      <S.Bar
        placeholder='Código do Processo'
        suffix={<SearchIcon />}
        allowClear
        onChange={e => setSearchCod(e.target.value.toUpperCase())}
      />
    </S.SearchBar>
  )
}

export default Search
