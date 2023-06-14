import collaboratorClient from '.'

const createCollaborator = async userCreate => {
  return await collaboratorClient.post('/create', userCreate)
}

export default createCollaborator
