import { Button, Popconfirm, message } from 'antd'
import { BsFillTrashFill } from 'react-icons/bs'
import { CloseCircleFilled } from '@ant-design/icons'
import deleteProcess from 'services/processes/deleteProcess'

function DeleteProcess({ processId, successCallback }) {
  async function handleDelete() {
    deleteProcess(processId).then(() => {
      successCallback()
      message.success('Processo deletado com sucesso!')
    })
  }

  return (
    <Popconfirm
      placement='topRight'
      title='Excluir Processo'
      description='Deseja excluir este processo?'
      onConfirm={handleDelete}
      okText='Excluir'
      cancelText='Cancelar'
      icon={<CloseCircleFilled style={{ color: '#f5222d' }} />}
    >
      <Button>
        <BsFillTrashFill />
      </Button>
    </Popconfirm>
  )
}

export default DeleteProcess
