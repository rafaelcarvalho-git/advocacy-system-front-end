import styled from 'styled-components'

export const DeleteUserInput = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 32px auto 32px auto;

  & input {
    margin-top: 16px;
  }
`

export const PasswordError = styled.p`
  text-align: center;
  color: #dc3545;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`
