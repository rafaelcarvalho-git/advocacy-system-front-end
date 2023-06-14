import { primaryColor } from 'assets/global'
import styled from 'styled-components'

export const Header = styled.div`
  text-align: center;
  margin: 0 12px 36px 12px;

  & p {
    margin-top: 8px;
    color: rgba(0, 0, 0, 0.65);
  }

  @media (max-width: 739px) {
    & h1 {
      font-size: 1.8rem;
    }

    @media (max-width: 532px) {
      & h1 {
        font-size: 1.6rem;
      }
  }
`

export const HeaderIcon = styled.span`
  color: ${primaryColor};
  font-size: 38px;

  @media (max-width: 739px) {
    font-size: 32px;
  }
`
