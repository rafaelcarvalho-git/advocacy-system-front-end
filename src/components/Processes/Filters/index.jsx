import * as S from './styles'
import SearchCod from './SearchCod'
import ExpireDate from './ExpireDate'
import DtStartCause from './DtStartCause'
import Collaborator from './Collaborator'
import State from './State'
import Status from './Status'
import NewProcess from '../NewProcess'
import OrderBy from './OrderBy'


const Filters = ({ isActive, setSearchCod, setExpireDate, setState, setProcessStatus, setStartDate, setResponsible, successCallback }) => {
  return (
    <>
      <S.Options>
        <SearchCod setSearchCod={setSearchCod} />
        {isActive && <NewProcess successCallback={successCallback} />}
      </S.Options>
      <S.Filtering>
        {/*<OrderBy isActive={isActive} />*/}
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
