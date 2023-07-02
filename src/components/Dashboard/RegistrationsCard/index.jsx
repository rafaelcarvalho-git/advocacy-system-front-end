import * as S from './styles'
import { Col, Statistic } from 'antd'
import CountUp from 'react-countup'
import PersonIcon from '@mui/icons-material/Person'
import BalanceIcon from '@mui/icons-material/Balance'
import ApartmentIcon from '@mui/icons-material/Apartment'


const RegistrationsCard = ({ totalCollaborators }) => {
    return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ margin: 'auto' }}>
            <S.Card>
                <S.CardTitle>Cadastros</S.CardTitle>
                <S.CardText>Total de cadastros do sistema</S.CardText>
                <S.CardContent>
                    <S.CardRegistrations>
                        <PersonIcon style={{ fontSize: '32px' }} />
                        <p>Usuários</p>
                        <Statistic
                            style={{ marginLeft: 'auto' }}
                            value={totalCollaborators}
                            formatter={value => (
                                <h4>
                                    <CountUp end={value} />
                                </h4>
                            )}
                        />
                    </S.CardRegistrations>
                    <S.CardRegistrations>
                        <BalanceIcon style={{ fontSize: '32px' }} />
                        <p>Advogados</p>
                        <Statistic
                            style={{ marginLeft: 'auto' }}
                            value={totalCollaborators}
                            formatter={value => (
                                <h4>
                                    <CountUp end={value} />
                                </h4>
                            )}
                        />
                    </S.CardRegistrations>
                    <S.CardRegistrations>
                        <ApartmentIcon style={{ fontSize: '32px' }} />
                        <p>Escritórios</p>
                        <Statistic
                            style={{ marginLeft: 'auto' }}
                            value={totalCollaborators}
                            formatter={value => (
                                <h4>
                                    <CountUp end={value} />
                                </h4>
                            )}
                        />
                    </S.CardRegistrations>
                </S.CardContent>
                <S.CardLink to='/cadastros'>Mais detalhes</S.CardLink>
            </S.Card>
        </Col>
    )
}

export default RegistrationsCard