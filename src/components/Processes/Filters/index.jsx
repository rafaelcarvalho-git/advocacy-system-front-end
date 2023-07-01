import * as S from './styles'
import SearchCod from './SearchCod'
import ExpireDate from './ExpireDate'
import DtStartCause from './DtStartCause'
import Collaborator from './Collaborator'
import State from './State'
import Status from './Status'
import { Checkbox } from 'antd'
import ShowFilters from './ShowFilters'

const Filters = ({
  isActive,
  setSearchCod,
  setExpireDate,
  setState,
  setProcessStatus,
  setStartDate,
  setResponsible,
}) => {



  return (
    <>
      {/*<ShowFilters />*/}
      <S.Filtering>
        <SearchCod setSearchCod={setSearchCod} />
        {isActive && <ExpireDate setExpireDate={setExpireDate} />}
        <State setState={setState} />
        {isActive && <Status setProcessStatus={setProcessStatus} />}
        <Collaborator setResponsible={setResponsible} />
        <DtStartCause setStartDate={setStartDate} />
      </S.Filtering>
    </>
  )
}

export default Filters
