import * as S from './styles'
import { Collapse } from 'antd'
import ProcessInformations from 'components/Processes/ProcessInformations'
import ProcessHeader from './ProcessHeader'
import ProcessActions from './ProcessActions'

const ListProcesses = ({ processes = [], isConcluded, isActive, successCallback }) => {
  const changeColor = diasVencimento => {
    var colorBadge = ''
    if (diasVencimento <= 2) {
      colorBadge = '#f5222d'
    } else if (diasVencimento === 3) {
      colorBadge = '#faad14'
    } else {
      colorBadge = '#52c41a'
    }

    return colorBadge
  }

  const formatDate = dateString => {
    const date = new Date(dateString)
    const day = String(date.getUTCDate()).padStart(2, '0')
    const month = String(date.getUTCMonth() + 1).padStart(2, '0')
    const year = date.getUTCFullYear()
    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  }

  return (
    <Collapse>
      {processes.map(process => {
        return (
          <S.Process
            key={process.id}
            header={
              <ProcessHeader
                process={process}
                isConcluded={isConcluded}
                isActive={isActive}
                badgeCount={
                  isActive
                    ? process.DiasVencimento +
                    (process.DiasVencimento !== 'Vencido' ? ' dia(s)' : '')
                    : formatDate(process.DataConclusao)
                }
                badgeColor={changeColor(process.DiasVencimento)}
              />
            }
          >
            <ProcessInformations process={process} />

            <S.ProcessFolderLink>
              <h4>Link pasta do processo</h4>
              <a href={process.Link} target='_blank' rel='noreferrer noopener'>
                {process.Link ? process.Link : '-'}
              </a>
            </S.ProcessFolderLink>

            {isActive && (
              <ProcessActions
                processId={process.id}
                successCallback={successCallback}
              />
            )}
          </S.Process>
        )
      })}
    </Collapse>
  )
}

export default ListProcesses
