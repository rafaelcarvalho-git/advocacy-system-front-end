import { Button, Popconfirm, Radio, Space, message } from 'antd'
import { primaryColor } from 'assets/global'
import { useState, useEffect, useCallback } from 'react'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import listCollaborators from 'services/collaborator/listCollaborators'
import atributeProcess from 'services/processes/atributeProcess'

function AtributeProcess({ processId, successCallback }) {
  const [value, setValue] = useState(null)
  const [user, setUser] = useState()
  const [collaborators, setCollaborators] = useState()

  const fetchCollaborators = useCallback(() => {
    listCollaborators().then(({ data }) => {
      setCollaborators(data.filter(u => u.email !== 'admin@gmail.com'))
    })
  }, [])

  useEffect(() => {
    fetchCollaborators()
  }, [fetchCollaborators])

  async function handleAtribute() {
    const userInfo = user
    atributeProcess(
      processId,
      `${userInfo.first_name} ${userInfo.last_name}`,
      userInfo.id
    ).then(() => {
      successCallback()
      message.success('Processo atribuido com sucesso!')
    })
  }

  return (
    <Popconfirm
      placement='topRight'
      title='Atribuir Processo'
      description={
        <>
          <p>Escolha o usuário:</p>
          <Radio.Group onChange={e => setValue(e.target.value)} value={value}>
            <Space
              direction='vertical'
              style={{ margin: '15px auto 15px auto' }}
            >
              {collaborators?.map(({ id, first_name, last_name }) => (
                <Radio
                  key={id}
                  value={id}
                  onClick={() => setUser({ id, first_name, last_name })}
                >
                  {`${first_name} ${last_name}`}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </>
      }
      onConfirm={handleAtribute}
      okText='Atribuir'
      cancelText='Cancelar'
      icon={<BsFillPersonPlusFill style={{ color: primaryColor }} />}
    >
      <Button type='primary' ghost>
        <BsFillPersonPlusFill />
      </Button>
    </Popconfirm>
  )
}

export default AtributeProcess
