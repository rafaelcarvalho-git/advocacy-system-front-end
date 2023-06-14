import collaboratorClient from '.'
import { getAuthHeaders } from 'utils/requests'

const editCollaborator = async (id, userEdit) => {
  const headers = { headers: getAuthHeaders() }
  return await collaboratorClient.patch(`/save/${id}`, userEdit, headers)
}

export default editCollaborator
