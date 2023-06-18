import * as S from './styles'
import { useState } from 'react'
import NewRegisterUser from './User'
import NewRegisterLawyer from './Lawyer'
import NewRegisterOffice from './Office'


const NewRegister = ({ open, setIsOpen, successCallback, userType, type }) => {
    const [registerFunction, setRegisterFunction] = useState(null)

    const handleOk = () => {
        if (registerFunction) {
            registerFunction()
        }
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <S.RegisterModal
            title={`Cadastrar Novo ${type}`}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width={600}
        >
            {userType === 'users' && <NewRegisterUser successCallback={successCallback} setRegisterFunction={setRegisterFunction} />}
            {userType === 'lawyers' && <NewRegisterLawyer successCallback={successCallback} setRegisterFunction={setRegisterFunction} />}
            {userType === 'offices' && <NewRegisterOffice successCallback={successCallback} setRegisterFunction={setRegisterFunction} />}

        </S.RegisterModal>
    )
}

export default NewRegister
