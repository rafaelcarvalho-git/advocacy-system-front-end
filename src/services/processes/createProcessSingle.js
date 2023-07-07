import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const createSingleProcess = async data => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.post('/newSingleProcess', data, headers)
}

export default createSingleProcess
