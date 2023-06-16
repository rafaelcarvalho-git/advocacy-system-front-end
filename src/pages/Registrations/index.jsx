import { useState, useEffect, useCallback } from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { message } from 'antd'
import Header from 'components/Container/Header'
import Loader from 'components/Loader'
import ListRegistrations from 'components/Registrations'
import listCollaborators from 'services/collaborator/listCollaborators'

const Registrations = () => {
  const [collaborators, setCollaborators] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCollaborators = useCallback(() => {
    setLoading(true)
    listCollaborators()
      .then(({ data }) => {
        setCollaborators(data.filter(u => u.email !== 'admin@gmail.com'))
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        message.error('Algo deu errado! Recarregue a página e tente novamente.')
      })
  }, [])

  useEffect(() => {
    fetchCollaborators()
  }, [fetchCollaborators])

  return (
    <>
      <Header
        pageTitle='Cadastros'
        pageDesc='Lista com todos os usuários, escritórios e advogados cadastrados.'
      >
        <PeopleAltIcon />
      </Header>

      {loading ? (
        <Loader />
      ) : (
        <ListRegistrations
          collaborators={collaborators}
          successCallback={fetchCollaborators}
        />
      )}
    </>
  )
}

export default Registrations
