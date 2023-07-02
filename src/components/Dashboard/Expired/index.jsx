import * as S from './styles'
import { CardTitle, CardContent, CardText, CardIcon } from '../styles'
import { Col, Statistic } from 'antd'
import CountUp from 'react-countup'
import EventBusyIcon from '@mui/icons-material/EventBusy'


const DueDate = ({ expiredDate }) => {
    return (
        <Col xs={24} sm={10} md={10} lg={5} xl={5}>
            <S.Card>
                <CardContent style={{ marginBottom: '0' }}>
                    <CardTitle>Vencidos</CardTitle>
                    <CardText>Total processos vencidos ou atrasados</CardText>
                    <Statistic
                        value={expiredDate}
                        formatter={value => (
                            <h2>
                                <CountUp end={value} />
                            </h2>
                        )}
                    />
                </CardContent>
                <CardIcon><EventBusyIcon /></CardIcon>
            </S.Card>
        </Col>
    )
}

export default DueDate