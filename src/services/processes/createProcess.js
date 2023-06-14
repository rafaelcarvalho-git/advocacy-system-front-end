import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const createProcess = async data => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.post('/create', data, headers)
}

export default createProcess
