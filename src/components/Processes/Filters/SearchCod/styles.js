import styled from 'styled-components'
import { Input } from 'antd'

export const SearchBar = styled.div`
  flex: 1 0 150px;
  max-width: 300px;

  @media (max-width: 531px) {
    min-width: 95%;
  }

  @media (min-width: 991px) {
    min-width: 300px;
  }
`

export const Bar = styled(Input)`
  margin-top: 0.55rem;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 531px) {
    margin-bottom: 12px;
  }
`
