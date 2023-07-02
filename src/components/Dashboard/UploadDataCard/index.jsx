import * as S from './styles'
import { useState } from 'react'
import { Button, Col } from 'antd'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import UpdateIcon from '@mui/icons-material/Update'
import UploadData from 'components/UploadData'


const UploadDataCard = () => {
    const [showUpload, setShowUpload] = useState(false)

    return (
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <S.Card>
                <S.CardContent>
                    <S.CardTitle>Atualizar Processos</S.CardTitle>
                    <S.CardText>Suba a planilha com os processos atualizados</S.CardText>
                    <UploadData open={showUpload} setIsOpen={setShowUpload} />
                    <Button type='primary' onClick={() => setShowUpload(true)} style={{ marginTop: '8px' }}>Upload</Button>
                </S.CardContent>
                <S.CardIcon><UploadFileIcon style={{ fontSize: '76px' }} /></S.CardIcon>
            </S.Card>
            <S.Card style={{ marginTop: '26px' }}>
                <S.CardContent>
                    <S.CardTitle>Ultima Atualização</S.CardTitle>
                    <S.CardText>Data e hora da ultima atualização de processos</S.CardText>
                    <S.CardTitle>01/07/2023 13:22h</S.CardTitle>
                </S.CardContent>
                <S.CardIcon><UpdateIcon style={{ fontSize: '76px' }} /></S.CardIcon>
            </S.Card>
        </Col>
    )
}

export default UploadDataCard