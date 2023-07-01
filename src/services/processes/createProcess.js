import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const createProcess = async data => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.post('/newCollaborator', data, headers)
}

export default createProcess
