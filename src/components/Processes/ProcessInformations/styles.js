import { primaryColor } from 'assets/global'
import styled from 'styled-components'

export const InformacoesProcesso = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Informacao = styled.div`
  margin: 7.5px 10px 7.5px 10px;
  padding: 7.5px 22px 7.5px 22px;
`

export const InformationText = styled.p`
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: ${primaryColor};
  }
`
