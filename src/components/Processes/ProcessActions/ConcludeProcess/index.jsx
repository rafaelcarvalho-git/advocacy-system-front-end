import { Button, Popconfirm, message } from 'antd'
import { BsCheckLg } from 'react-icons/bs'
import { CheckCircleFilled } from '@ant-design/icons'
import concludeProcess from 'services/processes/concludeProcess'

function ConcludeProcess({ processId, successCallback }) {
  async function handleConclude() {
    const now = new Date()
    const day = now.getDate().toString().padStart(2, '0')
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const year = now.getFullYear().toString()
    const DtConcluded = `${year}-${month}-${day}`

    concludeProcess(processId, DtConcluded).then(() => {
      successCallback()
      message.success('Processo concluido com sucesso!')
    })
  }

  return (
    <Popconfirm
      placement='topRight'
      title='Concluir Processo'
      description='Deseja concluir este processo?'
      onConfirm={handleConclude}
      okText='Concluir'
      cancelText='Cancelar'
      icon={<CheckCircleFilled style={{ color: '#52c41a' }} />}
    >
      <Button type='primary'>
        <BsCheckLg />
      </Button>
    </Popconfirm>
  )
}

export default ConcludeProcess
