import collaboratorClient from '.'
import { getAuthHeaders } from 'utils/requests'

const editCollaborator = async (id, userEdit) => {
  const headers = { headers: getAuthHeaders() }
  return await collaboratorClient.patch(
    `/editCollaborator/${id}`,
    userEdit,
    headers
  )
}

export default editCollaborator
