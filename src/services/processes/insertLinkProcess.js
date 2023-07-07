import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const insertLinkProcess = async (processId, processLink) => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.patch(
    `/editProcesses/${processId}`,
    { Link: processLink },
    headers
  )
}

export default insertLinkProcess
