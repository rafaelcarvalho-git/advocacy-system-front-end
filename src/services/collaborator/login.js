import collaboratorClient from '.'

const login = async userLogin => {
  return await collaboratorClient.post('/loginCollaborator', userLogin)
}

export default login
