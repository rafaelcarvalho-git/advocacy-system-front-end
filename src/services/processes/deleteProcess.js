import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const deleteProcess = async id => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.delete(`/delete/${id}`, headers)
}

export default deleteProcess
