import * as S from './styles'
import { useState } from 'react'
import Header from 'components/Container/Header'
import UploadFile from 'components/UploadFile'
import { ImFolderUpload } from 'react-icons/im'
import { message } from 'antd'
import ReactLoading from 'react-loading'
import createProcess from 'services/processes/createProcess'

function UploadData() {
  const [loading, setLoading] = useState(false)
  const [incorrectUpload, setIncorrectUpload] = useState(false)
  const [incorrectPhrase, setIncorrectPhrase] = useState('')
  const [file, setFile] = useState()
  const handleUploadFile = e => setFile(e.target.files[0])

  async function UploadData() {
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

  return (
    <>
      <Header
        pageTitle='Atualizar banco de dados'
        pageDesc='Realize o upload de uma ou mais arquivos para atualizar o sistema com novos processos.'
      >
        <ImFolderUpload />
      </Header>

      <S.Upload>
        <S.UploadArea>
          <p style={{ fontSize: '18px' }}>Clique e selecione o arquivo</p>
          <S.UploadText>
            Suba a planilha com os processos para atualizar os dados do sistema.
          </S.UploadText>
          <S.UploadText>
            (Somente arquivos <b>.csv</b>)
          </S.UploadText>
          <UploadFile onChange={handleUploadFile} file={file} />
          {incorrectUpload ? (
            <S.UploadError>{incorrectPhrase}</S.UploadError>
          ) : (
            ''
          )}
        </S.UploadArea>
        <S.UploadButton type='primary' onClick={() => UploadData()}>
          {loading ? (
            <ReactLoading
              type={'spokes'}
              color={'white'}
              height={25}
              width={25}
            />
          ) : (
            'Enviar Dados'
          )}
        </S.UploadButton>
      </S.Upload>
    </>
  )
}

export default UploadData
