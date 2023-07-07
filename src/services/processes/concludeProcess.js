import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const concludeProcess = async (id, DtConcluded) => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.patch(
    `/editProcesses/${id}`,
    { Status: 'Concluido', DataConclusao: DtConcluded },
    headers
  )
}

export default concludeProcess
