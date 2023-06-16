import { useState, useEffect, useCallback } from 'react'
import Filters from 'components/Processes/Filters'
import Processes from 'components/Processes'
import Pagination from 'components/Processes/Pagination'
import Loader from 'components/Loader'
import findProcesses from 'services/processes/findProcesses'
import { Empty, message } from 'antd'

const ConcludedProcesses = () => {
  const [concludedProcesses, setConcludedProcesses] = useState([])
  const [totalConcludedProcesses, setTotalConcludedProcesses] = useState()
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)
  const [searchCTO, setSearchCTO] = useState()
  const [state, setState] = useState()
  const [startDate, setStartDate] = useState(['', ''])
  const [responsible, setResponsible] = useState()
  const [paginate, setPaginate] = useState()
  const processStatus = 'Concluido'

  const fetchProcesses = useCallback(() => {
    setLoading(true)
    findProcesses(
      paginate,
      searchCTO,
      responsible,
      startDate,
      state,
      processStatus
    )
      .then(({ data }) => {
        setConcludedProcesses(data?.process)
        setEmpty(data?.process.length === 0)
        setTotalConcludedProcesses(data.concluded)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        message.error('Algo deu errado! Recarregue a página e tente novamente.')
      })
  }, [paginate, searchCTO, responsible, startDate, state])

  useEffect(() => {
    fetchProcesses()
  }, [fetchProcesses])

  return (
    <>
      <Filters
        isConcluded={true}
        setSearchCTO={setSearchCTO}
        setStartDate={setStartDate}
        setState={setState}
        setResponsible={setResponsible}
      />
      {loading ? (
        <Loader />
      ) : empty ? (
        <Empty />
      ) : (
        <Processes processes={concludedProcesses} isConcluded={true} />
      )}
      {concludedProcesses && (
        <Pagination
          paginate={paginate}
          setPaginate={setPaginate}
          totalConcludedProcesses={totalConcludedProcesses}
        />
      )}
    </>
  )
}

export default ConcludedProcesses
