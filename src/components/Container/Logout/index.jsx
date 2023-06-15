import useLogin from 'contexts/LoginContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from 'antd'


const Logout = ({ open, setIsOpen }) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const { performLogout } = useLogin()
    const navigate = useNavigate()

    const handleOk = () => {
        setConfirmLoading(true)
        performLogout()
        setTimeout(() => {
            setIsOpen(false)
            setConfirmLoading(false)
        }, 1200)
        navigate('/login')
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <Modal
            title='Logout'
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <p style={{ margin: '24px auto 24px auto' }}>Deseja sair do sistema?</p>
        </Modal>
    )
}

export default Logout