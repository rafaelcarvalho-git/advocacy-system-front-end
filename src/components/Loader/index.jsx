import * as S from './styles'
import { primaryColor } from 'assets/global'


const Loader = () => {
  return <S.Loader type={'spokes'} color={primaryColor} height={75} width={75} />
}

export default Loader
