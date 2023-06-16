import * as S from './styles'
import { findProcessItems } from './dummy'
import { copy } from 'utils/copy'

const ProcessInformations = ({ process }) => {
  const processItems = findProcessItems(process)

  return (
    <S.InformacoesProcesso>
      {processItems?.map(({ id, title, text }) => (
        <S.Informacao key={id}>
          <h4>{title}</h4>
          <S.InformationText onClick={() => copy(text)}>
            {text}
          </S.InformationText>
        </S.Informacao>
      ))}
    </S.InformacoesProcesso>
  )
}
export default ProcessInformations
