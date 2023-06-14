import styled from 'styled-components'
import { Select } from 'antd'

export const Collaborator = styled.div`
  max-width: 400px;
  min-width: 180px;

  @media (max-width: 531px) {
    min-width: 95%;
  }
`

export const SelectCollaborator = styled(Select)`
  margin-top: 0.55rem;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 531px) {
    margin-bottom: 12px;
  }
`
