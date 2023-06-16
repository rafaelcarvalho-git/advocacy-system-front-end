import styled from 'styled-components'
import { Input } from 'antd'

export const SearchBar = styled.div`
  max-width: 400px;

  @media (max-width: 531px) {
    width: 100%;
    flex: none;
  }

  @media (min-width: 991px) {
    min-width: 400px;
  }
`

export const Bar = styled(Input)`
  margin-top: 0.55rem;
  margin-bottom: 24px;
  width: 100%;
`
