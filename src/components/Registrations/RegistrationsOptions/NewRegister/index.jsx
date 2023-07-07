import { useState } from 'react'
import { Button } from 'antd'
import NewRegisterUser from './User'
import NewRegisterLawyer from './Lawyer'
import NewRegisterOffice from './Office'


const NewRegister = ({ successCallback, userType, type }) => {
    const [open, setIsOpen] = useState(false)
    return (
        <>
            <Button type='primary' onClick={() => setIsOpen(true)}>Novo {type}</Button>
            {userType === 'users' && <NewRegisterUser open={open} setIsOpen={setIsOpen} successCallback={successCallback} />}
            {userType === 'lawyers' && <NewRegisterLawyer open={open} setIsOpen={setIsOpen} successCallback={successCallback} />}
            {userType === 'offices' && <NewRegisterOffice open={open} setIsOpen={setIsOpen} successCallback={successCallback} />}

        </>
    )
}

export default NewRegister
