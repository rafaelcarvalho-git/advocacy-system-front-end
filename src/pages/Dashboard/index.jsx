import { useState, useEffect, useCallback } from 'react'
import { Row, message } from 'antd'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TaskIcon from '@mui/icons-material/Task'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import dashboard from 'services/dashboard/dashboard'
import listCollaborators from 'services/collaborator/listCollaborators'
import Header from 'components/Container/Header'
import Loader from 'components/Loader'
import Datacard from 'components/Dashboard/Datacard'
import RegistrationsCard from 'components/Dashboard/RegistrationsCard'
import UploadDataCard from 'components/Dashboard/UploadDataCard'
import DueDate from 'components/Dashboard/Expired'


const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState({})

  const fetchDashboard = useCallback(() => {
    setLoading(true)
    dashboard()
      .then(({ data }) => {
        setDashboardData(data)
        listCollaborators().then(({ data }) => {
          setDashboardData(prev => ({
            ...prev,
            totalUsers: data.filter(u => u.passwordResetToken === null).length,
            totalLawyers: data.filter(l => l.passwordResetToken === 'Lawyer').length,
            totalOffices: data.filter(o => o.passwordResetToken === 'Office').length
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

  const dados = [{
    title: 'Total Processos',
    value: dashboardData.count,
    icon: <FormatListBulletedIcon />,
    link: '/processos',
    tooltip: 'Qntd. total de processos do mês'
  }, {
    title: 'Processos Ativos',
    value: dashboardData.activeProcesses,
    icon: <InsertDriveFileIcon />,
    link: '/processos',
    tooltip: 'Total de processos ativos do mês'
  }, {
    title: 'Processos Concluidos',
    value: dashboardData.concludedProcesses,
    icon: <TaskIcon />,
    link: '/processos',
    tooltip: 'Total de processos concluídos do mês'
  }, {
    title: 'Vencimento Próximo',
    value: dashboardData.nextDueDate,
    icon: <CalendarMonthIcon />,
    link: '/processos',
    tooltip: 'Total de processos próximos ao seu vencimento'
  }]

  return (
    <>
      <Header
        pageTitle='Dashboard'
        pageDesc='Dados e informações sobre o sistema, usuários e processos.'
      >
        <DashboardIcon style={{ fontSize: '48px' }} />
      </Header>

      {
        loading ? (
          <Loader />
        ) : (
          <>
            <Row gutter={24}>
              {
                dados.map(({ title, value, icon, link, tooltip }) => {
                  return <Datacard key={title} title={title} value={value} icon={icon} link={link} tooltip={tooltip} />
                })
              }
            </Row>

            <Row gutter={24}>
              <UploadDataCard />
              <DueDate expiredDate={dashboardData.expiredDate} />
              <RegistrationsCard totalUsers={dashboardData.totalUsers} totalLawyers={dashboardData.totalLawyers} totalOffices={dashboardData.totalOffices} />
            </Row>
          </>
        )
      }
    </>
  )
}

export default Dashboard
