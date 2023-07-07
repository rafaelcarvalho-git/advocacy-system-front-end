import styled from 'styled-components'
import { Select } from 'antd'

export const State = styled.div`
  margin: auto;
  max-width: 320px;
  min-width: 100px;

  @media (max-width: 531px) {
    min-width: 95%;
  }
`

export const SelectState = styled(Select)`
  margin-top: 0.55rem;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 531px) {
    margin-bottom: 12px;
  }
`
