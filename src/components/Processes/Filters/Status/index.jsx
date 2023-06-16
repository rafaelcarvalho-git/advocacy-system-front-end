import * as S from './styles'

const Status = ({ setProcessStatus }) => {
  return (
    <S.Status>
      <label htmlFor='status'>
        <p>Status</p>
      </label>
      <S.SelectStatus
        id='status'
        defaultValue='Status'
        size='large'
        onChange={value => {
          setProcessStatus(value)
        }}
        options={[
          { value: '', label: 'Todos' },
          { value: 'Acustas', label: 'Acustas' },
          { value: 'Acompanhar', label: 'Acompanhar' },
          { value: 'Acordo', label: 'Acordo' },
          { value: 'Custos', label: 'Custos' },
          { value: 'Pago', label: 'Pago' },
          { value: 'Pedente', label: 'Pedente' },
          { value: 'Sem custos', label: 'Sem custos' },
        ]}
      />
    </S.Status>
  )
}

export default Status
