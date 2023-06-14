import * as S from './styles'
import { message } from 'antd'
import { findProcessItems } from './dummy'

function ProcessInformations({ process }) {
  const processItems = findProcessItems(process)

  function copy(text) {
    navigator.clipboard.writeText(text)
    message.success(`${text} copiado!`)
  }

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
