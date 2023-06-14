import * as S from './styles'

function State({ setState }) {
  return (
    <S.State>
      <label htmlFor='state'>
        <p>UF</p>
      </label>
      <S.SelectState
        id='state'
        defaultValue='Estado'
        size='large'
        onChange={value => {
          setState(value)
        }}
        options={[
          { value: '', label: 'Todos' },
          { value: 'AC', label: 'AC' },
          { value: 'AL', label: 'AL' },
          { value: 'AM', label: 'AM' },
          { value: 'AP', label: 'AP' },
          { value: 'BA', label: 'BA' },
          { value: 'CE', label: 'CE' },
          { value: 'DF', label: 'DF' },
          { value: 'ES', label: 'ES' },
          { value: 'GO', label: 'GO' },
          { value: 'MA', label: 'MA' },
          { value: 'MG', label: 'MG' },
          { value: 'MS', label: 'MS' },
          { value: 'MT', label: 'MT' },
          { value: 'PA', label: 'PA' },
          { value: 'PB', label: 'PB' },
          { value: 'PE', label: 'PE' },
          { value: 'PI', label: 'PI' },
          { value: 'PR', label: 'PR' },
          { value: 'RJ', label: 'RJ' },
          { value: 'RN', label: 'RN' },
          { value: 'RO', label: 'RO' },
          { value: 'RR', label: 'RR' },
          { value: 'RS', label: 'RS' },
          { value: 'SC', label: 'SC' },
          { value: 'SE', label: 'SE' },
          { value: 'SP', label: 'SP' },
          { value: 'TO', label: 'TO' },
        ]}
      />
    </S.State>
  )
}

export default State
