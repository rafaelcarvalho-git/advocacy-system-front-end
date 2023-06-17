import * as S from './styles'
import { useState, useEffect, useCallback } from 'react'
import Header from 'components/Container/Header'
import { Button, Statistic, message } from 'antd'
import CountUp from 'react-countup'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Loader from 'components/Loader'
import dashboard from 'services/dashboard/dashboard'
import listCollaborators from 'services/collaborator/listCollaborators'
import UploadData from 'components/UploadData'

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState({})

  const [showUpload, setShowUpload] = useState(false);

  const fetchDashboard = useCallback(() => {
    setLoading(true)
    dashboard()
      .then(({ data }) => {
        setDashboardData(data)
        listCollaborators().then(({ data }) => {
          setDashboardData(prev => ({
            ...prev,
            totalCollaborators: data.length,
          }))
        })
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        message.error('Algo deu errado! Recarregue a página e tente novamente.')
      })
  }, [])

  useEffect(() => {
    fetchDashboard()
  }, [fetchDashboard])

  return (
    <>
      <Header
        pageTitle='Dashboard'
        pageDesc='Dados e informações sobre o sistema, usuários e processos.'
      >
        <DashboardIcon style={{ fontSize: '48px' }} />
      </Header>

      {loading ? (
        <Loader />
      ) : (
        <>
          <S.CardGroup>

            <S.DataCard>
              <S.CardInfo>

                <h4>Atualizar Processos</h4>

                <p>Processos Ativos</p>
              </S.CardInfo>
              <S.CardIcon>
                <PersonIcon />
              </S.CardIcon>
              <UploadData open={showUpload} setIsOpen={setShowUpload} />
              <Button type='primary' onClick={() => setShowUpload(true)}>asdasd</Button>
            </S.DataCard>

            <S.DataCard>
              <S.CardInfo>
                <Statistic
                  value={dashboardData.activeProcesses}
                  formatter={value => (
                    <h2>
                      <CountUp end={value} />
                    </h2>
                  )}
                />
                <p>Processos Ativos</p>
              </S.CardInfo>
              <S.CardIcon>
                <PersonIcon />
              </S.CardIcon>
            </S.DataCard>

            <S.DataCard>
              <S.CardInfo>
                <Statistic
                  value={dashboardData.concludedProcesses}
                  formatter={value => (
                    <h2>
                      <CountUp end={value} />
                    </h2>
                  )}
                />
                <p>Processos Concluidos</p>
              </S.CardInfo>
              <S.CardIcon>
                <PersonIcon />
              </S.CardIcon>
            </S.DataCard>

            <S.DataCard>
              <S.CardInfo>
                <Statistic
                  value={dashboardData.expiredDate}
                  formatter={value => (
                    <h2>
                      <CountUp end={value} />
                    </h2>
                  )}
                />
                <p>Processos Vencidos</p>
              </S.CardInfo>
              <S.CardIcon>
                <PersonIcon />
              </S.CardIcon>
            </S.DataCard>

            <S.DataCard>
              <S.CardInfo>
                <Statistic
                  value={dashboardData.nextDueDate}
                  formatter={value => (
                    <h2>
                      <CountUp end={value} />
                    </h2>
                  )}
                />
                <p>Vencimento Próximo</p>
              </S.CardInfo>
              <S.CardIcon>
                <CalendarMonthIcon />
              </S.CardIcon>
            </S.DataCard>
          </S.CardGroup>

          <S.CardGroup>
            <S.DataCard>
              <S.CardInfo>
                <Statistic
                  value={dashboardData.totalCollaborators}
                  formatter={value => (
                    <h2>
                      <CountUp end={value} />
                    </h2>
                  )}
                />
                <p>Usuarios Cadastrados</p>
              </S.CardInfo>
              <S.CardIcon>
                <PersonIcon />
              </S.CardIcon>
            </S.DataCard>
          </S.CardGroup>
        </>
      )}
    </>
  )
}

export default Dashboard
