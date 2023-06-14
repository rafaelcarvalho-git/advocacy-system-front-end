import * as S from './styles'
import { useState, useEffect, useCallback } from 'react'
import listCollaborators from 'services/collaborator/listCollaborators'

function Collaborator({ setResponsible }) {
  const [collaborators, setCollaborators] = useState()

  const fetchCollaborators = useCallback(() => {
    listCollaborators().then(({ data }) => {
      setCollaborators(data.filter(u => u.email !== 'admin@gmail.com'))
    })
  }, [])

  useEffect(() => {
    fetchCollaborators()
  }, [fetchCollaborators])

  return (
    <S.Collaborator>
      <label htmlFor='collaborator'>
        <p>Resp. Processo</p>
      </label>
      <S.SelectCollaborator
        id='collaborator'
        defaultValue='Responsável'
        size='large'
        onChange={value => {
          setResponsible(value)
        }}
        options={[
          { value: '', label: 'Todos' },
          ...(collaborators && Array.isArray(collaborators)
            ? collaborators.map(col => ({
                value: col.id,
                label: `${col.first_name} ${col.last_name}`,
              }))
            : []), // Adicione a verificação para garantir que collaborators seja um array antes de mapeá-lo
        ]}
      />
    </S.Collaborator>
  )
}

export default Collaborator
