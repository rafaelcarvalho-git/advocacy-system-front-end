import collaboratorClient from '.'
import { getAuthHeaders } from 'utils/requests'

const validateCollaborator = async () => {
  const headers = { headers: getAuthHeaders() }

  return await collaboratorClient.get('/validation', headers)
}

export default validateCollaborator
