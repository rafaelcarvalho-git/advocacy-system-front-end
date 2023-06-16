import * as S from './styles'
import { useState } from 'react'
import logo from 'assets/images/logo.png'
import { Input, message } from 'antd'
import createCollaborator from 'services/collaborator/createCollaborator'
import ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'

const NewUserForm = () => {
  const [userCreate, setUserForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    telephone: '',
    cpf: '',
    admin: false,
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [incorrectInfo, setIncorrectInfo] = useState(false)
  const [incorrectPhrase, setIncorrectPhrase] = useState('')
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const NewUser = () => {
    const isNotEmpty =
      userCreate.first_name !== '' &&
      userCreate.last_name !== '' &&
      userCreate.email !== '' &&
      userCreate.password !== '' &&
      userCreate.telephone !== '' &&
      userCreate.cpf !== '' &&
      confirmPassword !== ''
    if (isNotEmpty) {
      setLoading(true)
      createCollaborator(userCreate)
        .then(response => {
          message.success(
            'Usuário cadastrado com sucesso! Faça login para entrar no sistema.'
          )
          navigate('/login')
        })
        .catch(error => {
          console.log(error)
          message.error(
            'Algo deu errado! Recarregue a página e tente novamente.'
          )
          if (error?.response?.status >= 500) {
            setIncorrectPhrase(
              'Servidor fora do ar, aguarde alguns instantes e tente novamente.'
            )
          }
          setIncorrectInfo(true)
          setIncorrectPhrase('Verifique os dados inseridos.')
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setIncorrectInfo(true)
      setIncorrectPhrase('Não podem haver campos vazios.')
    }
  }

  return (
    <S.NewUserForm>
      <S.AdvocacySystemLogo>
        <a
          href='https://www.advocacysystemassociados.adv.br/'
          target='_blank'
          rel='nologoutModaler noreferrer'
        >
          <img src={logo} alt='advocacysystemadv-logo' />
        </a>
      </S.AdvocacySystemLogo>

      <S.NewUserInputGroup>
        <S.Flex>
          <S.NewUserInput>
            <label htmlFor='first_name'>
              <h4>Nome</h4>
            </label>
            <Input
              type='text'
              size='large'
              onChange={e =>
                setUserForm(prev => ({ ...prev, first_name: e.target.value }))
              }
              onClick={() => setIncorrectInfo(false)}
              id='first_name'
            />
          </S.NewUserInput>
          <S.NewUserInput>
            <label htmlFor='last_name'>
              <h4>Sobrenome</h4>
            </label>
            <Input
              type='text'
              size='large'
              onChange={e =>
                setUserForm(prev => ({ ...prev, last_name: e.target.value }))
              }
              onClick={() => setIncorrectInfo(false)}
              id='last_name'
            />
          </S.NewUserInput>
        </S.Flex>
      </S.NewUserInputGroup>

      <S.NewUserInputGroup>
        <S.Flex>
          <S.NewUserInput>
            <label htmlFor='telefone'>
              <h4>Telefone</h4>
            </label>
            <Input
              size='large'
              onChange={e =>
                setUserForm(prev => ({ ...prev, telephone: e.target.value }))
              }
              onClick={() => setIncorrectInfo(false)}
              id='telefone'
              placeholder='88988123456'
            />
          </S.NewUserInput>
          <S.NewUserInput>
            <label htmlFor='cpf'>
              <h4>Cpf</h4>
            </label>
            <Input
              size='large'
              onChange={e =>
                setUserForm(prev => ({ ...prev, cpf: e.target.value }))
              }
              onClick={() => setIncorrectInfo(false)}
              id='cpf'
              placeholder='12345678910'
            />
          </S.NewUserInput>
        </S.Flex>
      </S.NewUserInputGroup>

      <S.NewUserInputGroup>
        <label htmlFor='email'>
          <h4>E-mail</h4>
        </label>
        <Input
          id='email'
          size='large'
          type='email'
          onChange={e =>
            setUserForm(prev => ({ ...prev, email: e.target.value }))
          }
          onClick={() => setIncorrectInfo(false)}
          placeholder='advogado@gmail.com'
        />
      </S.NewUserInputGroup>

      <S.NewUserInputGroup>
        <S.Flex>
          <S.NewUserInput>
            <label htmlFor='password'>
              <h4>Senha</h4>
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
          </S.NewUserInput>
          <S.NewUserInput>
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
          </S.NewUserInput>
        </S.Flex>
        {userCreate.password !== confirmPassword && (
          <S.NewUserError>As senhas não coincidem</S.NewUserError>
        )}
      </S.NewUserInputGroup>

      {/*<S.NewUserOptions>
        <Checkbox checked={userCreate.admin} onChange={e => setUserForm((prev) => ({ ...prev, admin: e.target.checked }))}>Administrador</Checkbox>
      </S.NewUserOptions>*/}

      {incorrectInfo && <S.NewUserError>{incorrectPhrase}</S.NewUserError>}

      <S.NewUserButton type='primary' onClick={() => NewUser()}>
        {loading ? (
          <ReactLoading type={'spokes'} color={'white'} height={25} width={25} />
        ) : (
          'Cadastrar'
        )}
      </S.NewUserButton>

      <h4 style={{ margin: '10px auto 10px auto' }}>ou</h4>

      <S.LoginButton type='button' onClick={() => navigate('/login')}>
        Faça login
      </S.LoginButton>

      <S.NewUserFooter>
        &copy; {new Date().getFullYear()} - Advocacy System
      </S.NewUserFooter>
    </S.NewUserForm>
  )
}

export default NewUserForm
