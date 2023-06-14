import { useState } from 'react'
import { Modal } from 'antd'
import useLogin from 'contexts/LoginContext'
import { useNavigate } from 'react-router-dom';

function LogoutModal({ open, setIsOpen }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { performLogout } = useLogin()
    const navigate = useNavigate()

    const handleOk = () => {
        setConfirmLoading(true)
        performLogout()
        navigate('/login')
        setTimeout(() => {
            setIsOpen(false);
            setConfirmLoading(false);
        }, 1200);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            title="Logout"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <p style={{ margin: '24px auto 24px auto' }}>Deseja sair do sistema?</p>
        </Modal>
    );
};

export default LogoutModal;