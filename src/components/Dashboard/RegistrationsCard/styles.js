import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { primaryColor } from 'assets/global'
import * as S from '../styles'

export const Card = styled(S.Card)`
  margin-bottom: 0;

  @media (min-width: 576px) {
    height: 100%;
  }

  @media (max-width: 991px) {
    margin-bottom: 36px !important;
  }
`

export const CardRegistrations = styled.div`
  display: flex;
  align-items: end;
  gap: 5px;
  margin-bottom: 12px;
`

export const CardIcon = styled.div`
  color: #16658a;
  align-self: end;
`

export const CardLink = styled(NavLink)`
  color: ${primaryColor};
  font-size: 18px;
  text-align: right;
  margin-top: 18px;
`
