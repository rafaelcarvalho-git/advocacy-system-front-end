import NewRegisterUser from './User'
import NewRegisterLawyer from './Lawyer'
import NewRegisterOffice from './Office'


const NewRegister = ({ open, setIsOpen, successCallback, userType }) => {
    return (
        <>
            {userType === 'users' && <NewRegisterUser open={open} setIsOpen={setIsOpen} successCallback={successCallback} />}
            {userType === 'lawyers' && <NewRegisterLawyer open={open} setIsOpen={setIsOpen} successCallback={successCallback} />}
            {userType === 'offices' && <NewRegisterOffice open={open} setIsOpen={setIsOpen} successCallback={successCallback} />}

        </>
    )
}

export default NewRegister
