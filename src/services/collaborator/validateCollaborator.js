import collaboratorClient from '.'
import { getAuthHeaders } from 'utils/requests'

const validateCollaborator = async () => {
  const headers = { headers: getAuthHeaders() }

  return await collaboratorClient.get('/validadeCollaborator', headers)
}

export default validateCollaborator
