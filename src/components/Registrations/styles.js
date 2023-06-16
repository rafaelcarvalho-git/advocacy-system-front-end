import { primaryColor } from 'assets/global'
import styled from 'styled-components'

export const TableContent = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  text-align: left;
  margin: 32px auto auto auto;

  & td a {
    text-decoration: none;
    color: black;
  }

  & thead th {
    padding: 12px 18px 12px 18px;
  }

  & thead div {
    display: flex !important;
    align-items: end;
    gap: 5px; 
  }

  & tr td {
    padding: 12px 18px 12px 18px;
    cursor: pointer;

    &:hover, &:active, &:focus {
      color: ${primaryColor}
    }
  }

  & tr td a {
    &:hover, &:active, &:focus {
      color: ${primaryColor}
    }
`
