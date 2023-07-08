import * as S from './styles'
import { useState } from 'react'
import { Input, message, Button, Select } from 'antd'
import createSingleProcess from 'services/processes/createProcessSingle'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const NewProcess = ({ successCallback }) => {
  const formatDate = () => {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
  const [open, setOpen] = useState(false)
  const [newSingleProcess, setNewSingleProcess] = useState({
    CodCausa: '',
    DtCadCausa: formatDate(),
    DtEncerramento: null,
    DtInicioCausa: formatDate(),
    Esfera: '',
    Indenizavel: '',
    MotivodoStatus: '',
    NProcesso: '',
    DiasVencimento: '',
    ParteCONPrincipalCPFCNPJ: '',
    ParteCONPrincipalNome: '',
    PartePROPrincipalNome: '',
    Produto: '',
    Recurso: '',
    Link: null,
    UF: ''
  })

  const NewSingleProcess = () => {
    validateCollaborator()
      .then(response => {
        createSingleProcess(newSingleProcess)
          .then(response => {
            successCallback()
            message.success(
              `Processo cadastrado com sucesso!`
            )
            setTimeout(() => {
              setOpen(false)
            }, 900)
          })
          .catch(error => {
            console.log(error)
            message.error(
              'Algo deu errado! Recarregue a página e tente novamente.'
            )
          })
      })
      .catch(error => {
        console.log(error)
        message.error(
          'Algo deu errado! Recarregue a página e tente novamente.'
        )
      })
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>Novo Processo</Button>
      <S.NewProcessModal
        title='Inserir Novo Processo Manualmente'
        open={open}
        onOk={NewSingleProcess}
        okText={'Cadastrar Processo'}
        onCancel={handleCancel}
        width={760}
      >
        <S.NewProcessForm>
          <S.NewProcessInputGroup>
            <S.NewProcessInput>
              <label htmlFor='CodCausa'>
                <h4>Código Processo</h4>
              </label>
              <Input
                style={{ maxWidth: '260px', marginBottom: '1.1rem' }}
                type='text'
                size='large'
                value={newSingleProcess.CodCausa}
                onChange={e =>
                  setNewSingleProcess(prev => ({ ...prev, CodCausa: e.target.value }))
                }
                id='CodCausa'
              />
            </S.NewProcessInput>
            <S.Flex>
              <S.NewProcessInput>
                <label htmlFor='ParteCONPrincipalNome'>
                  <h4>Parte CON Principal - Nome</h4>
                </label>
                <Input
                  type='text'
                  size='large'
                  value={newSingleProcess.ParteCONPrincipalNome}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, ParteCONPrincipalNome: e.target.value }))
                  }
                  id='ParteCONPrincipalNome'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='ParteCONPrincipalCPFCNPJ'>
                  <h4>CPF ou CNPJ</h4>
                </label>
                <Input
                  type='text'
                  size='large'
                  value={newSingleProcess.ParteCONPrincipalCPFCNPJ}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, ParteCONPrincipalCPFCNPJ: e.target.value }))
                  }
                  id='ParteCONPrincipalCPFCNPJ'
                />
              </S.NewProcessInput>
            </S.Flex>
          </S.NewProcessInputGroup>

          <S.NewProcessInputGroup>
            <S.Flex>
              <S.NewProcessInput>
                <label htmlFor='PartePROPrincipalNome'>
                  <h4>PRO Principal Nome</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.PartePROPrincipalNome}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, PartePROPrincipalNome: e.target.value }))
                  }

                  id='PartePROPrincipalNome'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='NProcesso'>
                  <h4>N° Processo</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.NProcesso}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, NProcesso: e.target.value }))
                  }

                  id='NProcesso'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='UF'>
                  <h4>UF</h4>
                </label>
                <Select
                  style={{ width: '100%' }}
                  id='UF'
                  defaultValue='Estado'
                  size='large'
                  onChange={value => {
                    setNewSingleProcess(prev => ({ ...prev, UF: value }))
                  }}
                  options={[
                    { value: '', label: 'Todos' },
                    { value: 'AC', label: 'AC' },
                    { value: 'AL', label: 'AL' },
                    { value: 'AM', label: 'AM' },
                    { value: 'AP', label: 'AP' },
                    { value: 'BA', label: 'BA' },
                    { value: 'CE', label: 'CE' },
                    { value: 'DF', label: 'DF' },
                    { value: 'ES', label: 'ES' },
                    { value: 'GO', label: 'GO' },
                    { value: 'MA', label: 'MA' },
                    { value: 'MG', label: 'MG' },
                    { value: 'MS', label: 'MS' },
                    { value: 'MT', label: 'MT' },
                    { value: 'PA', label: 'PA' },
                    { value: 'PB', label: 'PB' },
                    { value: 'PE', label: 'PE' },
                    { value: 'PI', label: 'PI' },
                    { value: 'PR', label: 'PR' },
                    { value: 'RJ', label: 'RJ' },
                    { value: 'RN', label: 'RN' },
                    { value: 'RO', label: 'RO' },
                    { value: 'RR', label: 'RR' },
                    { value: 'RS', label: 'RS' },
                    { value: 'SC', label: 'SC' },
                    { value: 'SE', label: 'SE' },
                    { value: 'SP', label: 'SP' },
                    { value: 'TO', label: 'TO' },
                  ]}
                />
              </S.NewProcessInput>
            </S.Flex>
          </S.NewProcessInputGroup>

          <S.NewProcessInputGroup>
            <S.Flex>
              <S.NewProcessInput>
                <label htmlFor='DtInicioCausa'>
                  <h4>Dt. Inicio Causa</h4>
                </label>
                <S.ProcessDate
                  size='large'
                  format={'DD/MM/YYYY'}
                  onChange={(dateString) =>
                    setNewSingleProcess(prev => ({ ...prev, DtInicioCausa: dateString }))
                  }

                  id='DtInicioCausa'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='DtEncerramento'>
                  <h4>Dt. Encerramento</h4>
                </label>
                <S.ProcessDate
                  size='large'
                  format={'DD/MM/YYYY'}
                  onChange={(dateString) =>
                    setNewSingleProcess(prev => ({ ...prev, DtEncerramento: dateString }))
                  }

                  id='DtEncerramento'
                />
              </S.NewProcessInput>
            </S.Flex>
          </S.NewProcessInputGroup>

          <S.NewProcessInputGroup>
            <S.Flex>
              <S.NewProcessInput>
                <label htmlFor='DiasVencimento'>
                  <h4>Dias Vencimento</h4>
                </label>
                <Select
                  style={{ width: '100%' }}
                  id='DiasVencimento'
                  defaultValue='Vencimento'
                  size='large'
                  onChange={value => {
                    setNewSingleProcess(prev => ({ ...prev, DiasVencimento: value }))
                  }}
                  options={[
                    { value: '1', label: '1 dia' },
                    { value: '2', label: '2 dias' },
                    { value: '3', label: '3 dias' },
                    { value: '4', label: '4 dias' },
                    { value: '5', label: '5 dias' }
                  ]}
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='Esfera'>
                  <h4>Esfera</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.Esfera}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, Esfera: e.target.value }))
                  }

                  id='Esfera'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='MotivodoStatus'>
                  <h4>Motivo do Status</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.MotivodoStatus}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, MotivodoStatus: e.target.value }))
                  }

                  id='MotivodoStatus'
                />
              </S.NewProcessInput>
            </S.Flex>
          </S.NewProcessInputGroup>

          <S.NewProcessInputGroup>
            <S.Flex>
              <S.NewProcessInput>
                <label htmlFor='Indenizavel'>
                  <h4>Indenizavel</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.Indenizavel}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, Indenizavel: e.target.value }))
                  }

                  id='Indenizavel'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='Produto'>
                  <h4>Produto</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.Produto}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, Produto: e.target.value }))
                  }

                  id='Produto'
                />
              </S.NewProcessInput>
              <S.NewProcessInput>
                <label htmlFor='Recurso'>
                  <h4>Recurso</h4>
                </label>
                <Input
                  size='large'
                  value={newSingleProcess.Recurso}
                  onChange={e =>
                    setNewSingleProcess(prev => ({ ...prev, Recurso: e.target.value }))
                  }

                  id='Recurso'
                />
              </S.NewProcessInput>
            </S.Flex>
            <S.NewProcessInput style={{ marginTop: '1.1rem' }}>
              <label htmlFor='Link'>
                <h4>Link</h4>
              </label>
              <Input
                size='large'
                value={newSingleProcess.Link}
                onChange={e =>
                  setNewSingleProcess(prev => ({ ...prev, Link: e.target.value }))
                }

                id='Link'
              />
            </S.NewProcessInput>
          </S.NewProcessInputGroup>
        </S.NewProcessForm>
      </S.NewProcessModal>
    </>
  )
}

export default NewProcess
