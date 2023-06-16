import * as S from './styles'
import { Badge, Tag } from 'antd'
import { primaryColor } from 'assets/global'

const ProcessHeader = ({ process, isConcluded, badgeCount, badgeColor }) => {
  return (
    <S.PHeader>
      <b>{process.CodCausa}</b>
      <S.Name> - {process.ParteCONPrincipalNome}</S.Name>
      {process.ResponsavelNome && (
        <Tag color='purple'>{process.ResponsavelNome}</Tag>
      )}
      {process.Status && <Tag color='cyan'>{process.Status}</Tag>}
      <Badge
        count={badgeCount}
        style={{ backgroundColor: isConcluded ? primaryColor : badgeColor }}
      />
    </S.PHeader>
  )
}

export default ProcessHeader
