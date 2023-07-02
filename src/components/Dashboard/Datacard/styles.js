import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { primaryColor } from 'assets/global'

export const Card = styled.div`
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(33, 37, 41, 0.15);
  background: white;
  padding: 16px;
  border: 0.5px solid #515151;
  margin-bottom: 32px;
`

export const CardTitle = styled.h4``

export const CardContent = styled.div`
  text-align: left;
  flex: 1;
`

export const CardIcon = styled.div`
  color: #16658a;
  align-self: center;
`

export const CardLink = styled(NavLink)`
  color: ${primaryColor};
  font-size: 18px;
`
