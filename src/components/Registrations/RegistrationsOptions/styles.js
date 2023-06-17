import styled from 'styled-components'
import { Input } from 'antd'

export const SearchBar = styled.div`
  max-width: 320px;

  @media (max-width: 531px) {
    width: 100%;
  }

  @media (min-width: 991px) {
    min-width: 320px;
  }
`

export const Bar = styled(Input)`
  width: 100%;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: center;
`
