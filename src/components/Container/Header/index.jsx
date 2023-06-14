import * as S from './styles'

const Header = ({ children, pageTitle, pageDesc }) => {
  return (
    <S.Header>
      <S.HeaderIcon>{children}</S.HeaderIcon>
      <h1>{pageTitle}</h1>
      <p>{pageDesc}</p>
    </S.Header>
  )
}

export default Header
