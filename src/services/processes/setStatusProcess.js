import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const setStatusProcess = async (id, status) => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.patch(`/save/${id}`, { Status: status }, headers)
}

export default setStatusProcess
