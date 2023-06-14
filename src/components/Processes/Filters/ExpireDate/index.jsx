import * as S from './styles'

function ExpireDate({ setExpireDate }) {
  return (
    <S.Expire>
      <label htmlFor='expireDate'>
        <p>Vencimento</p>
      </label>
      <S.SelectExpireDate
        id='expireDate'
        defaultValue='Prazo'
        size='large'
        onChange={value => {
          setExpireDate(value)
        }}
        options={[
          {
            value: '',
            label: 'Todos',
          },
          {
            value: 1,
            label: '1 dia(s)',
          },
          {
            value: 2,
            label: '2 dia(s)',
          },
          {
            value: 3,
            label: '3 dia(s)',
          },
          {
            value: 4,
            label: '4 dia(s)',
          },
          {
            value: 5,
            label: '5 dia(s)',
          },
          {
            value: 11,
            label: 'Vencidos',
          },
        ]}
      />
    </S.Expire>
  )
}

export default ExpireDate
