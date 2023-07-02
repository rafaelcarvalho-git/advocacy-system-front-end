import styled from 'styled-components'
import * as S from '../styles'

export const Card = styled(S.Card)`
  flex-direction: row;
  margin-bottom: 0;

  @media (max-width: 991px) {
    margin-bottom: 36px !important;
  }
`
