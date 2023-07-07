import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const atributeProcess = async (id, userName, userId) => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.patch(
    `/editProcesses/${id}`,
    { ResponsavelNome: userName, ResponsavelId: userId },
    headers
  )
}

export default atributeProcess
