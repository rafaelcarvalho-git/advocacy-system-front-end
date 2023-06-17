import * as S from './styles'
import { useState } from 'react'
import { Button } from 'antd'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteUser from 'components/Registrations/Actions/DeleteUser'
import EditUser from 'components/Registrations/Actions/EditUser'


const Actions = ({ collaboratorData, successCallback }) => {
  const [editUser, setEditUser] = useState(false)
  const [deleteUser, setDeleteUser] = useState(false)

  return (
    <S.Actions>
      <Button type='primary' ghost onClick={() => setEditUser(true)}>
        <EditIcon />
      </Button>
      <EditUser
        editUser={editUser}
        setEditUser={setEditUser}
        collaboratorData={collaboratorData}
        successCallback={successCallback}
      />
      <Button onClick={() => setDeleteUser(true)}>
        <DeleteIcon />
      </Button>
      <DeleteUser
        deleteUser={deleteUser}
        setDeleteUser={setDeleteUser}
        collaboratorData={collaboratorData}
        successCallback={successCallback}
      />
    </S.Actions>
  )
}

export default Actions
