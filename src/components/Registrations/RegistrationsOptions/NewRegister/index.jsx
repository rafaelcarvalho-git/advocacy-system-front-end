import useLogin from 'contexts/LoginContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from 'antd'


const NewRegister = ({ open, setIsOpen }) => {
    const [confirmLoading, setConfirmLoading] = useState(false)

    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setIsOpen(false)
            setConfirmLoading(false)
        }, 1200)

    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <Modal
            title='Novo Cadastro'
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <p style={{ margin: '24px auto 24px auto' }}>Deseja sair do sistema?</p>
        </Modal>
    )
}

export default NewRegister