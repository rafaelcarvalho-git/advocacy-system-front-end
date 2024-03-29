import { useState, useEffect, useCallback } from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { message } from 'antd'
import Header from 'components/Container/Header'
import Loader from 'components/Loader'
import ListRegistrations from 'components/Registrations'
import listCollaborators from 'services/collaborator/listCollaborators'

const Registrations = () => {
  const [collaborators, setCollaborators] = useState([])
  const [lawyers, setLawyers] = useState([])
  const [offices, setOffices] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCollaborators = useCallback(() => {
    setLoading(true)
    listCollaborators()
      .then(({ data }) => {
        setCollaborators(data.filter(u => u.passwordResetToken !== 'Lawyer' && u.passwordResetToken !== 'Office'))
        setLawyers(data.filter(l => l.passwordResetToken === 'Lawyer'))
        setOffices(data.filter(o => o.passwordResetToken === 'Office'))
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
        pageDesc='Lista informações dos usuários de sistema, escritórios e advogados parceiros cadastrados.'
      >
        <PeopleAltIcon style={{ fontSize: '48px' }} />
      </Header>

      {loading ? (
        <Loader />
      ) : (
        <ListRegistrations
          collaborators={collaborators}
          lawyers={lawyers}
          offices={offices}
          successCallback={fetchCollaborators}
        />
      )}
    </>
  )
}

export default Registrations
