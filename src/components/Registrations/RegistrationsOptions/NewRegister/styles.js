import { Modal } from 'antd'
import styled from 'styled-components'

export const RegisterModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterForm = styled.form`
  max-width: 540px;
  width: 100%;
  padding: 32px 36px 24px 36px;
  text-align: center;

  @media (max-width: 542px) {
    min-width: 100%;
    padding: 32px 32px 24px 32px;
  }

  @media (max-width: 485px) {
    height: 100%;
  }
`

export const RegisterInputGroup = styled.div`
  margin-bottom: 1.1rem;
  text-align: left;

  & input {
    margin-top: 0.5rem;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

export const RegisterInput = styled.div`
  @media (max-width: 585px) {
    width: 100%;
  }
`

export const RegisterOptions = styled.div`
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

export const RegisterError = styled.p`
  text-align: center;
  color: #dc3545;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`

export const RegisterFooter = styled.p`
  text-align: center;
  margin-bottom: 0;
  margin-top: 3rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`
