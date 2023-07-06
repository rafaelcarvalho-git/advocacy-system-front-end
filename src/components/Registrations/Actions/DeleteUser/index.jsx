import * as S from './styles'
import { useState } from 'react'
import { Input, Modal, message } from 'antd'
import deleteCollaborator from 'services/collaborator/deleteCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const DeleteUser = ({
  deleteUser,
  setDeleteUser,
  collaboratorData,
  successCallback,
}) => {
  const [exclude, setExclude] = useState('')
  const [incorrectInfo, setIncorrectInfo] = useState(false)
  const [incorrectPhrase, setIncorrectPhrase] = useState('')

  const handleOk = () => {
    if (exclude !== '' && exclude === '123') {
      validateCollaborator()
        .then(response => {
          setDeleteUser(false)
          deleteCollaborator(collaboratorData.id)
            .then(response => {
              successCallback()
              message.success(
                `Colaborador ${collaboratorData.first_name} excluido com sucesso!`
              )
            })
            .catch(error => {
              console.log(error)
              message.error(
                'Algo deu errado! Recarregue a página e tente novamente.'
              )
            })
        })
        .catch(error => {
          console.log(error)
          message.error(
            'Algo deu errado! Recarregue a página e tente novamente.'
          )
        })
    } else {
      setIncorrectInfo(true)
      setIncorrectPhrase('Insira a senha corretamente!')
    }
  }

  const handleCancel = () => {
    setExclude('')
    setDeleteUser(false)
  }

  return (
    <Modal
      title='Excluir colaborador'
      open={deleteUser}
      onOk={handleOk}
      okText={'Excluir'}
      onCancel={handleCancel}
    >
      <S.DeleteUserInput>
        <label htmlFor='password'>
          <p>Digite a senha de exclusão</p>
        </label>
        <Input
          type='password'
          size='large'
          onChange={e => setExclude(e.target.value)}
          onClick={() => setIncorrectInfo(false)}
          id='password'
        />
        {incorrectInfo && <S.PasswordError>{incorrectPhrase}</S.PasswordError>}
      </S.DeleteUserInput>
    </Modal>
  )
}

export default DeleteUser
