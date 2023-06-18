import { MenuItem } from '@mui/material'
import styled from 'styled-components'

export const ProfileOpt = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const LogoutButton = styled(MenuItem)`
  border-radius: 200px !important;
  height: 40px;
  width: 40px;
  display: flex !important;
  align-items: center !important;
  justify-content: center;

  & * {
    margin-left: -5px;
  }
`
