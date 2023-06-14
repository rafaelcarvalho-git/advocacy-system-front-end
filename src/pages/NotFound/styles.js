import styled from 'styled-components'
import { Button } from 'antd'

export const NotFoundImg = styled.div`
  display: flex;
  justify-content: center;
  max-width: 420px;
  margin: auto;

  & img {
    width: 100%;
  }
`

export const ReturnButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto auto 32px auto;
  min-width: 180px;

  & * {
    margin-right: 12px;
  }
`
