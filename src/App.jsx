import Router from 'components/Router'
import { LoginContextProvider } from 'contexts/LoginContext'


const App = () => {
  return (
    <LoginContextProvider>
      <Router />
    </LoginContextProvider>
  )
}

export default App
