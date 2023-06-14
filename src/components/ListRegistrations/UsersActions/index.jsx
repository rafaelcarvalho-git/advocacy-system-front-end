import * as S from './styles'
import { useState } from 'react'
import { Button } from 'antd'
import { BsPencilFill, BsFillTrashFill } from 'react-icons/bs'
import DeleteUser from 'components/ListRegistrations/UsersActions/DeleteUser'
import EditUser from 'components/ListRegistrations/UsersActions/EditUser'

function UsersActions({ collaboratorData, successCallback }) {
  const [editUser, setEditUser] = useState(false)
  const [deleteUser, setDeleteUser] = useState(false)

  return (
    <S.Actions>
      <Button type='primary' ghost onClick={() => setEditUser(true)}>
        <BsPencilFill />
      </Button>
      <EditUser
        editUser={editUser}
        setEditUser={setEditUser}
        collaboratorData={collaboratorData}
        successCallback={successCallback}
      />
      <Button onClick={() => setDeleteUser(true)}>
        <BsFillTrashFill />
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

export default UsersActions
