import * as S from './styles'

function DtStartCause({ setStartDate }) {
    return (
        <S.StartDate>
            <label htmlFor="cadDate"><p>Data cadastro causa</p></label>
            <S.Date id="cadDate" size='large' format={'DD/MM/YYYY'} allowClear onChange={(date, dateString) => setStartDate(dateString)} />
        </S.StartDate>
    )
}

export default DtStartCause;