import styled from 'styled-components'
import { DatePicker } from 'antd'

const { RangePicker } = DatePicker

export const StartDate = styled.div`
  margin: auto;
  @media (max-width: 531px) {
    min-width: 95%;
  }
`

export const Date = styled(RangePicker)`
  margin-top: 0.55rem;
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: 531px) {
    margin-bottom: 12px;
  }
`
