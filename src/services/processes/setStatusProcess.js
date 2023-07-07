import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const setStatusProcess = async (id, status) => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.patch(
    `/editProcesses/${id}`,
    { Status: status },
    headers
  )
}

export default setStatusProcess
