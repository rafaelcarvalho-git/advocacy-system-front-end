import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from 'pages/Login'
import NewUser from 'pages/NewUser'
import Dashboard from 'pages/Dashboard'
import Processes from 'pages/Processes'
import Registrations from 'pages/Registrations'
import NotFound from 'pages/NotFound'
import Container from 'components/Container'
import PrivatePage from 'components/Router/PrivatePage'
import useLogin from 'contexts/LoginContext'


const Router = () => {
  const { userLogged } = useLogin()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={!userLogged ? <Login /> : <Navigate to='/dashboard' replace />}
        />
        <Route
          path='/cadastro'
          element={
            !userLogged ? <NewUser /> : <Navigate to='/dashboard' replace />
          }
        />
        <Route
          path='/'
          element={userLogged ? <Container /> : <Navigate to='/login' replace />}
        >
          <Route path='' element={<Navigate to='/dashboard' replace />} />
          <Route
            path='dashboard'
            element={<PrivatePage Page={() => <Dashboard />} />}
          />
          <Route
            path='processos'
            element={<PrivatePage Page={() => <Processes />} />}
          />
          <Route
            path='cadastros'
            element={<PrivatePage Page={() => <Registrations />} />}
          />
          <Route path='*' element={<PrivatePage Page={() => <NotFound />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
