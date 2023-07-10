import * as S from './styles'
import { CardTitle, CardContent, CardText, CardIcon } from '../styles'
import { useState } from 'react'
import { Button, Col } from 'antd'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import UpdateIcon from '@mui/icons-material/Update'
import UploadData from 'components/UploadData'


const UploadDataCard = () => {
    const [showUpload, setShowUpload] = useState(false)

    return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <S.Card style={{ minHeight: '132px', height: '46%' }}>
                <CardContent>
                    <CardTitle>Atualizar Processos</CardTitle>
                    <CardText>Suba a planilha com os processos atualizados</CardText>
                    <UploadData open={showUpload} setIsOpen={setShowUpload} />
                    <Button type='primary' onClick={() => setShowUpload(true)} style={{ marginTop: '8px' }} disabled={true}>Upload</Button>
                </CardContent>
                <CardIcon><UploadFileIcon /></CardIcon>
            </S.Card>
            <S.Card style={{ minHeight: '120px', maxHeight: '120px', height: '39%' }}>
                <CardContent>
                    <CardTitle>Ultima Atualização</CardTitle>
                    <CardText>Data e hora da ultima atualização de processos</CardText>
                    <CardTitle>01/07/2023 13:22h</CardTitle>
                </CardContent>
                <CardIcon><UpdateIcon /></CardIcon>
            </S.Card>
        </Col>
    )
}

export default UploadDataCard