import * as S from './styles'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const OrderBy = ({ isActive, setProcessOrderBy }) => {
  const optActive = [
    { value: '', label: 'Todos' },
    { value: 'NomeA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>Nome</span></S.OrderByLabel> },
    { value: 'NomeZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>Nome</span></S.OrderByLabel> },
    { value: 'CodA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>COD</span></S.OrderByLabel> },
    { value: 'CodZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>COD</span></S.OrderByLabel> },
    { value: 'VencimentoA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>Vencimento</span></S.OrderByLabel> },
    { value: 'VencimentoZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>Vencimento</span></S.OrderByLabel> },
    { value: 'DataCadCausaA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>Data Cad.</span></S.OrderByLabel> },
    { value: 'DataCadCausaZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>Data Cad.</span></S.OrderByLabel> },
  ]
  const optConcluded = [
    { value: '', label: 'Todos' },
    { value: 'NomeA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>Nome</span></S.OrderByLabel> },
    { value: 'NomeZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>Nome</span></S.OrderByLabel> },
    { value: 'CodA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>COD</span></S.OrderByLabel> },
    { value: 'CodZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>COD</span></S.OrderByLabel> },
    { value: 'DataCadCausaA', label: <S.OrderByLabel><ArrowDropUpIcon /><span>Data Cad.</span></S.OrderByLabel> },
    { value: 'DataCadCausaZ', label: <S.OrderByLabel><ArrowDropDownIcon /><span>Data Cad.</span></S.OrderByLabel> },
  ]

  return (
    <S.OrderBy>
      <label htmlFor='orderBy'>
        <p>Ordenar</p>
      </label>
      <S.SelectOrderBy
        id='orderBy'
        defaultValue='Todos'
        size='large'
        onChange={value => {
          setProcessOrderBy(value)
        }}
        options={isActive ? optActive : optConcluded}
      />
    </S.OrderBy>
  )
}

export default OrderBy
