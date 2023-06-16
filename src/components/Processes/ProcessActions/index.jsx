import * as S from './styles'
import { isAdmin } from 'utils/permissions'
import ConcludeProcess from './ConcludeProcess'
import DeleteProcess from './DeleteProcess'
import AtributeProcess from './AtributeProcess'
import InsertFolderLink from './InsertFolderLink'
import SetStatusProcess from './SetStatusProcess'

const ProcessActions = ({ processId, successCallback }) => {
  return (
    <S.Actions>
      {isAdmin() && (
        <DeleteProcess
          processId={processId}
          successCallback={successCallback}
        />
      )}
      <AtributeProcess
        processId={processId}
        successCallback={successCallback}
      />
      <SetStatusProcess
        processId={processId}
        successCallback={successCallback}
      />
      <InsertFolderLink
        processId={processId}
        successCallback={successCallback}
      />
      <ConcludeProcess
        processId={processId}
        successCallback={successCallback}
      />
    </S.Actions>
  )
}

export default ProcessActions
