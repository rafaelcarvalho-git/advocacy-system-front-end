import collaboratorClient from '.'

const newCollaborator = async userCreate => {
  return await collaboratorClient.post('/newCollaborator', userCreate)
}

export default newCollaborator
