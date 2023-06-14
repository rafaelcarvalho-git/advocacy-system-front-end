import Router from 'components/Router'
import { LoginContextProvider } from 'contexts/LoginContext'


function App() {
  return (
    <LoginContextProvider>
      <Router />
    </LoginContextProvider>
  );
}

export default App;
