import * as S from './styles'
import SearchIcon from '@mui/icons-material/Search'

const Search = ({ setSearchCTO }) => {
  return (
    <S.SearchBar>
      <label htmlFor='searchCTO'>
        <p>CTO</p>
      </label>
      <S.Bar
        id='searchCTO'
        size='large'
        placeholder='CTO'
        suffix={<SearchIcon />}
        allowClear
        onChange={e => setSearchCTO(e.target.value.toUpperCase())}
      />
    </S.SearchBar>
  )
}

export default Search
