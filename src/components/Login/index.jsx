import * as S from './styles'
import { useState } from 'react'
import logo from 'assets/images/logo.png'
import { Input, message } from 'antd'
import login from 'services/collaborator/login'
import ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'
import useLogin from 'contexts/LoginContext'

function LoginForm() {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
    conected: true,
  })
  const [incorrectLogin, setIncorrectLogin] = useState(false)
  const [incorrectPhrase, setIncorrectPhrase] = useState('')
  const [loading, setLoading] = useState(false)
  const { performLogin } = useLogin()

  const navigate = useNavigate()

  function Auth() {
    if (userLogin.email !== '' && userLogin.password !== '') {
      setLoading(true)
      login(userLogin)
        .then(response => {
          const { data } = response
          localStorage.removeItem('user')
          performLogin(data)
          navigate('/dashboard')
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
          setIncorrectLogin(true)
          setIncorrectPhrase('E-mail ou senha incorretos.')
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setIncorrectLogin(true)
      setIncorrectPhrase('Não podem haver campos vazios.')
    }
  }

  return (
    <S.LoginForm>
      <S.LoginLogo>
        <a
          href='https://github.com/rafaelcarvalho-git/advocacy-system-front-end'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={logo} alt='advocacy-system' />
        </a>
      </S.LoginLogo>
      <S.LoginInput>
        <label htmlFor='user'>
          <h4>E-mail</h4>
        </label>
        <Input
          id='user'
          size='large'
          type='email'
          onChange={e =>
            setUserLogin(prev => ({ ...prev, email: e.target.value }))
          }
          onClick={() => setIncorrectLogin(false)}
          placeholder='advogado@gmail.com'
          required
        />
      </S.LoginInput>

      <S.LoginInput>
        <label htmlFor='password'>
          <h4>Senha</h4>
        </label>
        <Input
          type='password'
          size='large'
          onChange={e =>
            setUserLogin(prev => ({ ...prev, password: e.target.value }))
          }
          onClick={() => setIncorrectLogin(false)}
          id='password'
          required
        />
      </S.LoginInput>

      {incorrectLogin && <S.LoginError>{incorrectPhrase}</S.LoginError>}

      <S.LoginButton type='primary' onClick={() => Auth()}>
        {loading ? (
          <ReactLoading type={'spokes'} color={'white'} height={25} width={25} />
        ) : (
          'Login'
        )}
      </S.LoginButton>

      <h4 style={{ margin: '10px auto 10px auto' }}>ou</h4>

      <S.ForgetButton type='button' onClick={() => navigate('/cadastro')}>
        Cadastre-se
      </S.ForgetButton>

      <S.LoginFooter>
        &copy; {new Date().getFullYear()} - Advocacy System
      </S.LoginFooter>
    </S.LoginForm>
  )
}

export default LoginForm
