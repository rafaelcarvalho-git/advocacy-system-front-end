import * as S from './styles'
import { Col, Statistic } from 'antd'
import CountUp from 'react-countup'


const Datacard = ({ title, value, icon, link }) => {
    return (
        <Col xs={20} sm={12} md={12} lg={12} xl={6}>
            <S.Card>
                <S.CardContent>
                    <S.CardTitle>{title}</S.CardTitle>
                    <Statistic
                        style={{ marginBottom: '12px', marginTop: '12px' }}
                        value={value}
                        formatter={value => (
                            <h3>
                                <CountUp end={value} />
                            </h3>
                        )}
                    />
                    <S.CardLink to={link}>Mais detalhes</S.CardLink>
                </S.CardContent>
                <S.CardIcon>{icon}</S.CardIcon>
            </S.Card>
        </Col>
    )
}

export default Datacard