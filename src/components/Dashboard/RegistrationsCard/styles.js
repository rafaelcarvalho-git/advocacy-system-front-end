import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { primaryColor } from 'assets/global'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(33, 37, 41, 0.15);
  background: white;
  padding: 16px;
  border: 0.5px solid #474747;
  text-align: left;
`

export const CardTitle = styled.h4``

export const CardContent = styled.div`
  text-align: left;
  margin-top: 10px;
`

export const CardRegistrations = styled.div`
  display: flex;
  align-items: end;
  gap: 5px;
  margin-bottom: 12px;
`

export const CardText = styled.p`
  margin-top: 12px;
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
