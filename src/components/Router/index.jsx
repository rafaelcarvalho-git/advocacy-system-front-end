import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import ActiveProcesses from 'pages/ActiveProcesses/'
import ConcludedProcesses from 'pages/ConcludedProcesses'
import UploadData from 'pages/UploadData'
import Login from 'pages/Login'
import Registrations from 'pages/Registrations'
import NotFound from 'pages/NotFound'
import NewUser from 'pages/NewUser'
import Container from 'components/Container'
import PrivatePage from 'components/PrivatePage'
import useLogin from 'contexts/LoginContext'
import { isAdmin } from 'utils/permissions'
import { cleanUserToken } from 'utils/UserAuthorization'

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
            path='processos-ativos'
            element={<PrivatePage Page={() => <ActiveProcesses />} />}
          />
          <Route
            path='processos-concluidos'
            element={<PrivatePage Page={() => <ConcludedProcesses />} />}
          />
          <Route
            path='upload'
            element={
              isAdmin ? (
                <PrivatePage Page={() => <UploadData />} />
              ) : (
                <Navigate to='/dashboard' replace />
              )
            }
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
