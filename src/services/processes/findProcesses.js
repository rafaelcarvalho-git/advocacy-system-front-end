import processClient from '.'
import { getAuthHeaders } from 'utils/requests'

const findProcesses = async (
  paginate,
  searchCod,
  responsible,
  startDate,
  state,
  processStatus,
  expireDate
) => {
  const config = {
    headers: getAuthHeaders(),
    params: {},
  }

  if (paginate) {
    config.params.paginate = paginate
  }

  if (searchCod) {
    config.params.CodCausa = searchCod
  }

  if (responsible) {
    config.params.ResponsavelId = responsible
  }

  if (startDate && startDate.length === 2) {
    config.params.dataCadCausaStart = startDate[0]
    config.params.dataCadCausaLast = startDate[1]
  }

  if (expireDate) {
    config.params.DiasVencimento = expireDate
  }

  if (state) {
    config.params.UF = state
  }

  if (processStatus) {
    config.params.Status = processStatus
  }

  return await processClient.get('/find', config)
}

export default findProcesses
