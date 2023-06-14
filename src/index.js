import { ConfigProvider } from 'antd'
import { GlobalStyle, primaryColor } from 'assets/global'
import React from 'react'
import ReactDOM from 'react-dom/client'
import locale from 'antd/locale/pt_BR'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
      locale={locale}
    >
      <GlobalStyle />
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
