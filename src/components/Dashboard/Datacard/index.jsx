import { Card, CardTitle, CardContent, CardInfo, CardIcon, CardLink } from '../styles'
import { Col, Statistic, Tooltip } from 'antd'
import CountUp from 'react-countup'


const Datacard = ({ title, value, icon, link, tooltip }) => {
    return (
        <Col xs={24} sm={12} md={12} lg={12} xl={6}>
            <Card>
                <CardTitle>{title}</CardTitle>
                <CardInfo>
                    <CardContent>
                        <Statistic
                            style={{ marginBottom: '12px', marginTop: '12px' }}
                            value={value}
                            formatter={value => (
                                <h3>
                                    <CountUp end={value} />
                                </h3>
                            )}
                        />
                        <Tooltip title={tooltip} placement="bottom">
                            <CardLink to={link}>Mais detalhes</CardLink>
                        </Tooltip>
                    </CardContent>
                    <CardIcon>{icon}</CardIcon>
                </CardInfo>
            </Card>
        </Col>
    )
}

export default Datacard