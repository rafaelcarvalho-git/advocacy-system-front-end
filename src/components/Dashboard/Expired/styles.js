import styled from 'styled-components'
import * as S from '../styles'

export const Card = styled(S.Card)`
  margin-bottom: 0;

  @media (max-width: 576px) {
    flex-direction: row;
    text-align: left !important;
  }

  @media (min-width: 576px) {
    height: 100%;
  }

  @media (max-width: 991px) {
    margin-bottom: 36px !important;
  }
`
