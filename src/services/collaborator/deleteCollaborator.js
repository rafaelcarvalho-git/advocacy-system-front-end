import collaboratorClient from '.'
import { getAuthHeaders } from 'utils/requests'

const deleteCollaborator = async id => {
  const headers = { headers: getAuthHeaders() }
  return await collaboratorClient.delete(`/deleteCollaborator/${id}`, headers)
}

export default deleteCollaborator
