import collaboratorClient from '.'

const login = async userLogin => {
  return await collaboratorClient.post('/auth', userLogin)
}

export default login
