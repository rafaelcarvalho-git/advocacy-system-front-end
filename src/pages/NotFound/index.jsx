import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import notfound from 'assets/images/not-found.svg'
import Header from 'components/Container/Header'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header
        pageTitle='Página não encontrada'
        pageDesc='A página que você tentou acessar não existe ou não foi encontrada, verifique sua URL ou clique no botão para voltar.'
      >
        <WarningAmberIcon style={{ fontSize: '48px' }} />
      </Header>

      <S.ReturnButton
        type='primary'
        size='large'
        onClick={() => navigate('/dashboard')}
      >
        <KeyboardReturnIcon />
        Voltar
      </S.ReturnButton>

      <S.NotFoundImg>
        <img src={notfound} alt='pagina nao encontrada' />
      </S.NotFoundImg>
    </>
  )
}

export default NotFound
