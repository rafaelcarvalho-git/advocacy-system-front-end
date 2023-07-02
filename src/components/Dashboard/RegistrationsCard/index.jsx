import * as S from './styles'
import { CardTitle, CardContent, CardText } from '../styles'
import { Col, Statistic } from 'antd'
import CountUp from 'react-countup'
import PersonIcon from '@mui/icons-material/Person'
import BalanceIcon from '@mui/icons-material/Balance'
import ApartmentIcon from '@mui/icons-material/Apartment'


const RegistrationsCard = ({ totalCollaborators }) => {
    return (
        <Col xs={24} sm={14} md={14} lg={7} xl={7}>
            <S.Card>
                <CardTitle>Cadastros</CardTitle>
                <CardText>Total de cadastros do sistema</CardText>
                <CardContent>
                    <S.CardRegistrations>
                        <PersonIcon style={{ color: '#16658a', fontSize: '32px' }} />
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
                        <BalanceIcon style={{ color: '#16658a', fontSize: '32px' }} />
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
                        <ApartmentIcon style={{ color: '#16658a', fontSize: '32px' }} />
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
                </CardContent>
                <S.CardLink to='/cadastros'>Mais detalhes</S.CardLink>
            </S.Card>
        </Col>
    )
}

export default RegistrationsCard