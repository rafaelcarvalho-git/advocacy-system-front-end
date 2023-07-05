import styled from 'styled-components'

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 10px;
  align-items: center;
  margin-left: auto;
  max-width: 320px;

  & > * {
    display: flex;
    align-items: center;
  }
`
