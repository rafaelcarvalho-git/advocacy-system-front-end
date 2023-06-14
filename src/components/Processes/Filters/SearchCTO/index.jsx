import * as S from './styles'
import { BsSearch } from 'react-icons/bs'

function Search({ setSearchCTO }) {
  return (
    <S.SearchBar>
      <label htmlFor='searchCTO'>
        <p>CTO</p>
      </label>
      <S.Bar
        id='searchCTO'
        size='large'
        placeholder='CTO'
        suffix={<BsSearch />}
        allowClear
        onChange={e => setSearchCTO(e.target.value.toUpperCase())}
      />
    </S.SearchBar>
  )
}

export default Search
