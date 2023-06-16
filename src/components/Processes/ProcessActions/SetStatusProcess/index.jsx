import { Button, Popconfirm, Radio, Space, message } from 'antd'
import { primaryColor } from 'assets/global'
import { useState } from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import setStatusProcess from 'services/processes/setStatusProcess'

const SetStatusProcess = ({ processId, successCallback }) => {
  const [value, setValue] = useState(null)
  const [processStatus, setProcessStatus] = useState()

  const handleAtribute = async () => {
    const status = processStatus
    setStatusProcess(processId, status).then(() => {
      successCallback()
      message.success('Status do processo definido com sucesso!')
    })
  }

  const options = [
    'Acustas',
    'Acompanhar',
    'Acordo',
    'Custos',
    'Pago',
    'Pedente',
    'Sem custos',
  ]

  return (
    <Popconfirm
      placement='topRight'
      title='Definir Status Processo'
      description={
        <Radio.Group onChange={e => setValue(e.target.value)} value={value}>
          <Space direction='vertical' style={{ margin: '15px auto 15px auto' }}>
            {options?.map(st => (
              <Radio key={st} value={st} onClick={() => setProcessStatus(st)}>
                {st}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      }
      onConfirm={handleAtribute}
      okText='Definir'
      cancelText='Cancelar'
      icon={<FormatListBulletedIcon style={{ color: primaryColor, fontSize: '18px' }} />}
    >
      <Button type='primary' ghost>
        <FormatListBulletedIcon />
      </Button>
    </Popconfirm>
  )
}

export default SetStatusProcess
