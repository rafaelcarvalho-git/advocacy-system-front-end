import { primaryColor } from 'assets/global'
import styled from 'styled-components'

export const Container = styled.div`
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 740px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

export const Footer = styled.p`
  text-align: center;
  margin-bottom: 8px;
  margin-top: 32px;

  @media (max-width: 361px) {
    font-size: 14px;
  }

  & p {
    margin-top: 12.5px;
  }

  & p a {
    text-decoration: none;
    color: ${primaryColor};
  }
`
