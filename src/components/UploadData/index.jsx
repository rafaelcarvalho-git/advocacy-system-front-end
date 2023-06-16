import * as S from './styles.js'
import { useState } from 'react'
import { Modal, message } from 'antd'
import UploadFile from 'components/UploadData/UploadFile/index.jsx'
import createProcess from 'services/processes/createProcess'


const UploadData = ({ open, setIsOpen }) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [incorrectUpload, setIncorrectUpload] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')
    const [file, setFile] = useState()
    const handleUploadFile = e => setFile(e.target.files[0])

    const Upload = async () => {
        const data = new FormData()
        if (file) {
            confirmLoading(true)
            setIncorrectUpload(false)
            data.append('file', file)
            createProcess(data)
                .then(() => {
                    message.success(`${file.name} carregado com sucesso!`)
                    setTimeout(() => {
                        setIsOpen(false)
                        setConfirmLoading(false)
                    }, 1200)
                })
                .catch(error => {
                    setIncorrectUpload(true)
                    setIncorrectPhrase(
                        'Confira a extensão do seu arquivo ou recarregue a página e tente novamente.'
                    )
                })
                .finally(() => {
                    confirmLoading(false)
                })
        } else {
            setIncorrectUpload(true)
            setIncorrectPhrase('É necessário escolher um arquivo para enviar.')
        }
    }

    const handleOk = () => {
        Upload()
    }

    const handleCancel = () => {
        setIsOpen(false)
    }


    return (
        <Modal
            title="Atualizar Banco de Dados"
            open={open}
            onOk={handleOk}
            okText='Enviar Dados'
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <S.Upload>
                <S.UploadText>
                    Realize o upload da planilha com os dados para atualizar os processos do sistema.
                </S.UploadText>
                <S.UploadText>
                    (Somente arquivos <b>.csv</b>)
                </S.UploadText>
                <p style={{ fontSize: '18px' }}>Clique e selecione o arquivo</p>
                <UploadFile onChange={handleUploadFile} file={file} />
                {incorrectUpload ? (
                    <S.UploadError>{incorrectPhrase}</S.UploadError>
                ) : (
                    ''
                )}
            </S.Upload>
        </Modal>
    )
}

export default UploadData
