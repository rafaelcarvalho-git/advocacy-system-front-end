import { Navigate } from 'react-router-dom'
import useLogin from 'contexts/LoginContext'


const PrivatePage = ({ Page }) => {
    const { userLogged } = useLogin()

    if (!userLogged)
        return <Navigate to='/login' replace />
    return <Page />
}

export default PrivatePage
