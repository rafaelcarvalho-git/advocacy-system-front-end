import { Button, Popconfirm, message } from 'antd'
import DeleteIcon from '@mui/icons-material/Delete'
import { CloseCircleFilled } from '@ant-design/icons'
import deleteProcess from 'services/processes/deleteProcess'

const DeleteProcess = ({ processId, successCallback }) => {
  const handleDelete = async () => {
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
        <DeleteIcon />
      </Button>
    </Popconfirm>
  )
}

export default DeleteProcess
