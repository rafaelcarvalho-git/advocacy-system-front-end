import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const colorBlack = '#252525'
export const primaryColor = '#1190CB'
export const secondryColor = '#7DCCFF'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: 'Roboto';
      text-decoration: none;
      box-sizing: border-box;      
  }
`

export const BgContent = styled.div`
  background-color: #252525;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
