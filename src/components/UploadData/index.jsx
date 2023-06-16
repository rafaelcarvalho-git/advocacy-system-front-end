import { useState } from 'react'
import { Modal } from 'antd'
import useLogin from 'contexts/LoginContext'
import { useNavigate } from 'react-router-dom';


import * as S from './styles.js'
import UploadFile from 'components/UploadData/UploadFile/index.jsx'
import { ImFolderUpload } from 'react-icons/im'
import { message } from 'antd'
import ReactLoading from 'react-loading'
import createProcess from 'services/processes/createProcess'

function UploadData({ open, setIsOpen }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(false)
    const [incorrectUpload, setIncorrectUpload] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')
    const [file, setFile] = useState()
    const handleUploadFile = e => setFile(e.target.files[0])
    const { performLogout } = useLogin()
    const navigate = useNavigate()






    async function Upload() {
        const data = new FormData()
        if (file) {
            setLoading(true)
            setIncorrectUpload(false)
            data.append('file', file)
            createProcess(data)
                .then(() => {
                    message.success(`${file.name} carregado com sucesso!`)
                })
                .catch(error => {
                    setIncorrectUpload(true)
                    setIncorrectPhrase(
                        'Confira a extensão do seu arquivo ou recarregue a página e tente novamente.'
                    )
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setIncorrectUpload(true)
            setIncorrectPhrase('É necessário escolher um arquivo para enviar.')
        }
    }

    const handleOk = () => {
        setConfirmLoading(true)
        Upload()
        setTimeout(() => {
            setIsOpen(false);
            setConfirmLoading(false);
        }, 1200);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };


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
    );
};

export default UploadData;