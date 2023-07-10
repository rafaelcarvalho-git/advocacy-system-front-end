import * as S from './styles'
import { useState, useEffect, useCallback } from 'react'
import listCollaborators from 'services/collaborator/listCollaborators'

const Collaborator = ({ setResponsible }) => {
  const [collaborators, setCollaborators] = useState()

  const fetchCollaborators = useCallback(() => {
    listCollaborators().then(({ data }) => {
      setCollaborators(data.filter(u => u.passwordResetToken !== 'Lawyer' && u.passwordResetToken !== 'Office'))
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
            : []),
        ]}
      />
    </S.Collaborator>
  )
}

export default Collaborator
