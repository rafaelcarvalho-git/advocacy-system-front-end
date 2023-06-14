import collaboratorClient from '.'
import { getAuthHeaders } from 'utils/requests'

const listCollaborators = async () => {
  const headers = { headers: getAuthHeaders() }

  return await collaboratorClient.get('/listUsers', headers)
}

export default listCollaborators
