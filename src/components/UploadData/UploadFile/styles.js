import styled from 'styled-components'
import { primaryColor } from 'assets/global'

export const FileUpload = styled.div`
  display: flex;
  justify-content: center;
  margin: 48px auto 18px auto;
`

export const InputFile = styled.input`
  display: none;
`

export const FileLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  padding: 12px 18px 12px 18px;
  border: 1px dashed ${primaryColor};
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const FileName = styled.span`
  &:hover,
  &:focus,
  &:active {
    color: ${primaryColor};
  }
`

export const FileButton = styled.span`
  padding: 9px 12px 9px 12px;
  color: white;
  background: ${primaryColor};
  border-radius: 0.5rem;
  margin-left: 24px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: #34aad9;
  }

  @media (max-width: 540px) {
    margin-left: 0;
    margin-top: 12px;
  }
`
