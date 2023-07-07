import styled from 'styled-components'
import { Select } from 'antd'

export const Status = styled.div`
  margin: auto;
  max-width: 400px;
  min-width: 140px;

  @media (max-width: 531px) {
    min-width: 95%;
  }
`

export const SelectStatus = styled(Select)`
  margin-top: 0.55rem;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 531px) {
    margin-bottom: 12px;
  }
`
