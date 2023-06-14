import styled from 'styled-components'
import { primaryColor } from 'assets/global'
import { Button } from 'antd'

export const LoginForm = styled.form`
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(33, 37, 41, 0.15);
  background-color: white;
  max-width: 540px;
  width: 100%;
  padding: 32px 42px 24px 42px;
  text-align: center;

  @media (max-width: 542px) {
    border-radius: 0;
    min-width: 100%;
    padding: 32px 32px 24px 32px;
  }
`

export const LoginLogo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
  padding-right: 1rem;
  padding-left: 1rem;

  img {
    width: 100%;
    max-width: 240px;
  }
`

export const LoginButton = styled(Button)`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  width: 100%;
  min-height: 42px;
  max-width: 240px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const ForgetButton = styled.button`
  border: none;
  box-shadow: none !important;
  cursor: pointer;
  font-size: 12.5px;
  color: ${primaryColor};
`

export const LoginInput = styled.div`
  margin-bottom: 1.75rem;
  text-align: left;

  & input {
    margin-top: 0.5rem;
  }
`

export const LoginOptions = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 384px) {
    & button {
      margin-top: 12px;
      margin-left: auto;
    }
  }
`

export const LoginError = styled.p`
  text-align: center;
  color: #dc3545;
  margin-bottom: 1rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`

export const LoginFooter = styled.p`
  text-align: center;
  margin-bottom: 0;
  margin-top: 3rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`
