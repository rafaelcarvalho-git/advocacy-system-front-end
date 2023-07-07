import * as S from './styles'
import SearchCod from './SearchCod'
import ExpireDate from './ExpireDate'
import DtStartCause from './DtStartCause'
import Collaborator from './Collaborator'
import State from './State'
import Status from './Status'
import NewProcess from '../NewProcess'


const Filters = ({ isActive, setSearchCod, setExpireDate, setState, setProcessStatus, setStartDate, setResponsible, successCallback }) => {
  return (
    <>
      <S.Options>
        <SearchCod setSearchCod={setSearchCod} />
        {isActive && <NewProcess successCallback={successCallback} />}
      </S.Options>
      <S.Filtering>
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
