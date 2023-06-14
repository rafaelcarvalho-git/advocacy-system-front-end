import processClient from '../processes'
import { getAuthHeaders } from 'utils/requests'

const dashboard = async () => {
  const headers = { headers: getAuthHeaders() }
  return await processClient.get('/dashboard', headers)
}

export default dashboard
