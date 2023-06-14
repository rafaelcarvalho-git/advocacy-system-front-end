import { Button, Input, Popconfirm, message } from 'antd'
import { BsFillFolderSymlinkFill } from 'react-icons/bs'
import { LinkOutlined } from '@ant-design/icons'
import insertLinkProcess from 'services/processes/insertLinkProcess'
import { primaryColor } from 'assets/global'
import { useState } from 'react'

function InsertFolderLink({ processId, successCallback }) {
  const [processLink, setProcessLink] = useState(null)

  async function handleInsertLink() {
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
        <BsFillFolderSymlinkFill />
      </Button>
    </Popconfirm>
  )
}

export default InsertFolderLink
