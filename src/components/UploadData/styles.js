import styled from 'styled-components'
import { Button } from 'antd'
import { primaryColor } from 'assets/global'

export const Upload = styled.div`
  max-width: 800px;
  margin: 64px auto auto auto;
  text-align: center;
`

export const UploadArea = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border: 2px dashed ${primaryColor};
  border-radius: 1rem;
  cursor: pointer;
`

export const UploadText = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
  margin-bottom: 24px;
`

export const UploadError = styled.p`
  text-align: center;
  color: #dc3545;
  margin-bottom: 1rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`
