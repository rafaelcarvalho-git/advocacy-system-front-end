import * as S from './styles'
import { useState } from 'react'
import { Input, Checkbox, message } from 'antd'
import editCollaborator from 'services/collaborator/saveCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const EditUser = ({
  editUser,
  setEditUser,
  collaboratorData,
  successCallback,
}) => {
  const [userEdit, setUserForm] = useState({
    first_name: collaboratorData.first_name,
    last_name: collaboratorData.last_name,
    email: collaboratorData.email,
    telephone: collaboratorData.telephone,
    cpf: collaboratorData.cpf,
    admin: collaboratorData.admin,
  })
  const [confirmPassword, setConfirmPassword] = useState()
  const [incorrectInfo, setIncorrectInfo] = useState(false)
  const [incorrectPhrase, setIncorrectPhrase] = useState('')

  const EditUser = () => {
    const isNotEmpty =
      userEdit.first_name !== '' &&
      userEdit.last_name !== '' &&
      userEdit.email !== '' &&
      userEdit.telephone !== '' &&
      userEdit.cpf !== ''
    if (isNotEmpty) {
      validateCollaborator()
        .then(response => {
          editCollaborator(collaboratorData.id, userEdit)
            .then(response => {
              successCallback()
              message.success(
                `Colaborador ${collaboratorData.first_name} editado com sucesso!`
              )
              setTimeout(() => {
                setEditUser(false)
              }, 1000)
            })
            .catch(error => {
              console.log(error)
              message.error(
                'Algo deu errado! Recarregue a página e tente novamente.'
              )
              setIncorrectInfo(true)
              setIncorrectPhrase('Verifique os dados inseridos.')
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
      setIncorrectPhrase('Não podem haver campos vazios.')
    }
  }

  const handleCancel = () => {
    setEditUser(false)
  }

  return (
    <S.EditUserModal
      title='Editar colaborador'
      open={editUser}
      onOk={EditUser}
      onCancel={handleCancel}
      width={600}
    >
      <S.EditUserForm>
        <S.EditUserInputGroup>
          <S.Flex>
            <S.EditUserInput>
              <label htmlFor='first_name'>
                <h4>Nome</h4>
              </label>
              <Input
                type='text'
                size='large'
                value={userEdit.first_name}
                onChange={e =>
                  setUserForm(prev => ({ ...prev, first_name: e.target.value }))
                }
                onClick={() => setIncorrectInfo(false)}
                id='first_name'
              />
            </S.EditUserInput>
            <S.EditUserInput>
              <label htmlFor='last_name'>
                <h4>Sobrenome</h4>
              </label>
              <Input
                type='text'
                size='large'
                value={userEdit.last_name}
                onChange={e =>
                  setUserForm(prev => ({ ...prev, last_name: e.target.value }))
                }
                onClick={() => setIncorrectInfo(false)}
                id='last_name'
              />
            </S.EditUserInput>
          </S.Flex>
        </S.EditUserInputGroup>

        <S.EditUserInputGroup>
          <S.Flex>
            <S.EditUserInput>
              <label htmlFor='telefone'>
                <h4>Telefone</h4>
              </label>
              <Input
                size='large'
                value={userEdit.telephone}
                onChange={e =>
                  setUserForm(prev => ({ ...prev, telephone: e.target.value }))
                }
                onClick={() => setIncorrectInfo(false)}
                id='telefone'
              />
            </S.EditUserInput>
            <S.EditUserInput>
              <label htmlFor='cpf'>
                <h4>Cpf</h4>
              </label>
              <Input
                size='large'
                value={userEdit.cpf}
                onChange={e =>
                  setUserForm(prev => ({ ...prev, cpf: e.target.value }))
                }
                onClick={() => setIncorrectInfo(false)}
                id='cpf'
              />
            </S.EditUserInput>
          </S.Flex>
        </S.EditUserInputGroup>

        <S.EditUserInputGroup>
          <label htmlFor='email'>
            <h4>E-mail</h4>
          </label>
          <Input
            id='email'
            size='large'
            type='email'
            value={userEdit.email}
            onChange={e =>
              setUserForm(prev => ({ ...prev, email: e.target.value }))
            }
            onClick={() => setIncorrectInfo(false)}
            placeholder='advogado@gmail.com'
          />
        </S.EditUserInputGroup>

        <S.EditUserInputGroup>
          <S.Flex>
            <S.EditUserInput>
              <label htmlFor='password'>
                <h4>Nova senha</h4>
              </label>
              <Input
                type='password'
                size='large'
                onChange={e =>
                  setUserForm(prev => ({ ...prev, password: e.target.value }))
                }
                onClick={() => setIncorrectInfo(false)}
                id='password'
              />
            </S.EditUserInput>
            <S.EditUserInput>
              <label htmlFor='confirm_password'>
                <h4>Confirmar senha</h4>
              </label>
              <Input
                type='password'
                size='large'
                onChange={e => setConfirmPassword(e.target.value)}
                onClick={() => setIncorrectInfo(false)}
                id='confirm_password'
              />
            </S.EditUserInput>
          </S.Flex>
          {userEdit.password !== confirmPassword && (
            <S.EditUserError>As senhas não coincidem</S.EditUserError>
          )}
        </S.EditUserInputGroup>

        <S.EditUserOptions>
          <Checkbox
            checked={userEdit.admin}
            onChange={e =>
              setUserForm(prev => ({ ...prev, admin: e.target.checked }))
            }
          >
            Administrador
          </Checkbox>
        </S.EditUserOptions>

        {incorrectInfo && <S.EditUserError>{incorrectPhrase}</S.EditUserError>}
      </S.EditUserForm>
    </S.EditUserModal>
  )
}

export default EditUser
