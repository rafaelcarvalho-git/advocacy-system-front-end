import { useState, useEffect, useCallback } from 'react'
import { Empty, message } from 'antd'
import Filters from 'components/Processes/Filters'
import Pagination from 'components/Processes/Pagination'
import Processes from 'components/Processes'
import Loader from 'components/Loader'
import listProcesses from 'services/processes/listProcesses'


const ActiveProcesses = () => {
  const [activeProcesses, setActiveProcess] = useState([])
  const [totalActiveProcesses, setTotalActiveProcesses] = useState()
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)
  const [searchCod, setSearchCod] = useState()
  const [expireDate, setExpireDate] = useState()
  const [state, setState] = useState()
  const [processStatus, setProcessStatus] = useState()
  const [startDate, setStartDate] = useState([])
  const [responsible, setResponsible] = useState()
  const [paginate, setPaginate] = useState()

  const fetchProcesses = useCallback(() => {
    setLoading(true)
    listProcesses(
      paginate,
      searchCod,
      responsible,
      startDate,
      state,
      processStatus,
      expireDate
    )
      .then(({ data }) => {
        setActiveProcess(data?.process?.filter(p => p.Status !== 'Concluido'))
        setTotalActiveProcesses(data.count ? data.count : data.active)
        setEmpty(
          data?.process?.filter(p => p.Status !== 'Concluido').length === 0
        )
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        message.error('Algo deu errado! Recarregue a página e tente novamente.')
      })
  }, [
    paginate,
    searchCod,
    responsible,
    startDate,
    state,
    processStatus,
    expireDate,
  ])

  useEffect(() => {
    fetchProcesses()
  }, [fetchProcesses])

  return (
    <>
      <Filters
        isActive={true}
        setSearchCod={setSearchCod}
        setExpireDate={setExpireDate}
        setState={setState}
        setProcessStatus={setProcessStatus}
        setStartDate={setStartDate}
        setResponsible={setResponsible}
        successCallback={fetchProcesses}
      />

      {loading ? (
        <Loader />
      ) : empty ? (
        <Empty />
      ) : (
        <Processes
          processes={activeProcesses}
          isActive={true}
          successCallback={fetchProcesses}
        />
      )}
      {activeProcesses && (
        <Pagination
          paginate={paginate}
          setPaginate={setPaginate}
          totalProcesses={totalActiveProcesses}
        />
      )}
    </>
  )
}

export default ActiveProcesses
