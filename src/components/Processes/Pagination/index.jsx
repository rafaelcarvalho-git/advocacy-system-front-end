import * as S from './styles'

const Pagination = ({ setPaginate, totalProcesses }) => {
  return (
    <S.PaginationProcess
      total={totalProcesses}
      pageSize={20}
      defaultPageSize={20}
      showSizeChanger={false}
      onChange={page => setPaginate(page - 1)}
    />
  )
}
export default Pagination
