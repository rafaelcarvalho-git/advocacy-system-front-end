import { Button, Input, Popconfirm, message } from 'antd'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import { LinkOutlined } from '@ant-design/icons'
import insertLinkProcess from 'services/processes/insertLinkProcess'
import { primaryColor } from 'assets/global'
import { useState } from 'react'

const InsertFolderLink = ({ processId, successCallback }) => {
  const [processLink, setProcessLink] = useState(null)

  const handleInsertLink = () => {
    insertLinkProcess(processId, processLink).then(() => {
      successCallback()
      message.success('Link inserido com sucesso!')
    })
  }

  return (
    <Popconfirm
      placement='topRight'
      title='Inserir link'
      onConfirm={handleInsertLink}
      okText='Salvar'
      cancelText='Cancelar'
      icon={<LinkOutlined style={{ color: primaryColor }} />}
      description={
        <>
          <p>Insira o link da pasta do processo</p>
          <Input
            onChange={e => setProcessLink(e.target.value)}
            style={{ marginTop: '12px', marginBottom: '12px' }}
          />
        </>
      }
    >
      <Button>
        <CreateNewFolderIcon />
      </Button>
    </Popconfirm>
  )
}

export default InsertFolderLink
