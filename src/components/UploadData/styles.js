import styled from 'styled-components'

export const Upload = styled.div`
  max-width: 800px;
  margin: 24px auto 32px auto;
  text-align: center;
`

export const UploadText = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
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
