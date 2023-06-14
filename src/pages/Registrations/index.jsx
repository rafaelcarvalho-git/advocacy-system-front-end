import { useState, useEffect, useCallback } from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { message } from 'antd'
import Header from 'components/Container/Header'
import Loader from 'components/Loader'
import ListRegistrations from 'components/ListRegistrations'
import RegistrationsMenu from 'components/ListRegistrations/RegistrationsMenu'
import listCollaborators from 'services/collaborator/listCollaborators'

function Registrations() {
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
        <BsFillPersonLinesFill />
      </Header>

      <RegistrationsMenu />

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
