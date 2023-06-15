import * as S from './styles'
import { useState, useEffect, useCallback } from 'react'
import Header from 'components/Container/Header'
import { Button, Statistic, message } from 'antd'
import CountUp from 'react-countup'
import {
  BsCalendarWeekFill,
  BsFileEarmarkTextFill,
  BsFillFileEarmarkCheckFill,
  BsFillFileEarmarkExcelFill,
  BsFillGrid1X2Fill,
} from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import Loader from 'components/Loader'
import dashboard from 'services/dashboard/dashboard'
import listCollaborators from 'services/collaborator/listCollaborators'
import UploadData from 'components/UploadData'

function Dashboard() {
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
        pageDesc='Informações gerais sobre os processos e o sistema.'
      >
        <BsFillGrid1X2Fill />
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
                <BsFileEarmarkTextFill />
              </S.CardIcon>
              <UploadData open={showUpload} setIsOpen={setShowUpload} />
              <Button type="primary" onClick={() => setShowUpload(true)}>asdasd</Button>
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
                <BsFileEarmarkTextFill />
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
                <BsFillFileEarmarkCheckFill />
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
                <BsFillFileEarmarkExcelFill />
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
                <BsCalendarWeekFill />
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
                <FaUserAlt />
              </S.CardIcon>
            </S.DataCard>
          </S.CardGroup>
        </>
      )}
    </>
  )
}

export default Dashboard
