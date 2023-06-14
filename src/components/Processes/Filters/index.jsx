import * as S from './styles'
import SearchCTO from './SearchCTO'
import ExpireDate from './ExpireDate'
import DtStartCause from './DtStartCause'
import Collaborator from './Collaborator'
import State from './State'
import Status from './Status'

function Filters({
  isActive,
  setSearchCTO,
  setExpireDate,
  setState,
  setProcessStatus,
  setStartDate,
  setResponsible,
}) {
  return (
    <S.Filtering>
      <SearchCTO setSearchCTO={setSearchCTO} />
      {isActive && <ExpireDate setExpireDate={setExpireDate} />}
      <State setState={setState} />
      {isActive && <Status setProcessStatus={setProcessStatus} />}
      <Collaborator setResponsible={setResponsible} />
      <DtStartCause setStartDate={setStartDate} />
    </S.Filtering>
  )
}

export default Filters
