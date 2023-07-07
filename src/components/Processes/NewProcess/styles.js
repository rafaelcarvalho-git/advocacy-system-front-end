import { DatePicker, Modal } from 'antd'
import styled from 'styled-components'

export const NewProcessModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NewProcessForm = styled.form`
  max-width: 720px;
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

export const NewProcessInputGroup = styled.div`
  margin-bottom: 1.1rem;
  text-align: left;

  & label h4 {
    margin-bottom: 0.5rem;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-evently;
  flex-wrap: wrap;
  gap: 12px;
`

export const NewProcessInput = styled.div`
  @media (max-width: 585px) {
    width: 100%;
  }
`

export const ProcessDate = styled(DatePicker)`
  width: 100%;
  @media (min-width: 586px) {
    min-width: 240px;
  }
`

export const NewProcessError = styled.p`
  text-align: center;
  color: #dc3545;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`

export const NewProcessFooter = styled.p`
  text-align: center;
  margin-bottom: 0;
  margin-top: 3rem;

  @media (max-width: 361px) {
    font-size: 14px;
  }
`
