import * as S from '../styles'
import { useState, useEffect } from 'react'
import { Input, message } from 'antd'
import createCollaborator from 'services/collaborator/createCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const NewRegisterLawyer = ({ setIsOpen, successCallback, setRegisterFunction }) => {
    const [lawyerCreate, setLawyerCreate] = useState({
        lawyer_name: '',
        telephone: '',
        email: '',
        office: '',
    })
    const [incorrectInfo, setIncorrectInfo] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')

    const NewLawyer = () => {
        alert('lawyer')
        /*const isNotEmpty =
            lawyerCreate.lawyer_name !== '' &&
            lawyerCreate.telephone !== '' &&
            lawyerCreate.email !== '' &&
            lawyerCreate.office !== ''
        if (isNotEmpty) {
            validateCollaborator()
            createCollaborator(lawyerCreate)
                .then(response => {
                    successCallback()
                    message.success(
                        'Usuário cadastrado com sucesso! Faça login para entrar no sistema.'
                    )
                    setIsOpen(false)
                })
                .catch(error => {
                    console.log(error)
                    message.error(
                        'Algo deu errado! Recarregue a página e tente novamente.'
                    )
                    if (error?.response?.status >= 500) {
                        setIncorrectPhrase(
                            'Servidor fora do ar, aguarde alguns instantes e tente novamente.'
                        )
                    }
                    setIncorrectInfo(true)
                    setIncorrectPhrase('Verifique os dados inseridos.')
                })
        } else {
            setIncorrectInfo(true)
            setIncorrectPhrase('Não podem haver campos vazios.')
        }*/
    }

    useEffect(() => {
        setRegisterFunction(() => {
            return () => {
                NewLawyer()
            }
        })
    }, [setRegisterFunction])

    return (
        <S.RegisterForm>
            <S.RegisterInputGroup>
                <S.Flex>
                    <S.RegisterInput>
                        <label htmlFor='lawyer_name'>
                            <h4>Nome Advogado</h4>
                        </label>
                        <Input
                            type='text'
                            size='large'
                            onChange={e =>
                                setLawyerCreate(prev => ({ ...prev, lawyer_name: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            id='lawyer_name'
                        />
                    </S.RegisterInput>
                </S.Flex>
            </S.RegisterInputGroup>

            <S.RegisterInputGroup>
                <S.Flex>
                    <S.RegisterInput>
                        <label htmlFor='lawyer_telephone'>
                            <h4>Telefone</h4>
                        </label>
                        <Input
                            size='large'
                            onChange={e =>
                                setLawyerCreate(prev => ({ ...prev, telephone: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            id='lawyer_telephone'
                        />
                    </S.RegisterInput>
                </S.Flex>
            </S.RegisterInputGroup>

            <S.RegisterInputGroup>
                <S.Flex>
                    <S.RegisterInput>
                        <label htmlFor='lawyer_email'>
                            <h4>E-mail</h4>
                        </label>
                        <Input
                            id='lawyer_email'
                            size='large'
                            type='email'
                            onChange={e =>
                                setLawyerCreate(prev => ({ ...prev, email: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            placeholder='advogado@gmail.com'
                        />
                    </S.RegisterInput>
                </S.Flex>
            </S.RegisterInputGroup>

            <S.RegisterInputGroup>
                <S.Flex>
                    <S.RegisterInput>
                        <label htmlFor='lawyer'>
                            <h4>Escritório</h4>
                        </label>
                        <Input
                            type='text'
                            size='large'
                            onChange={e =>
                                setLawyerCreate(prev => ({ ...prev, office: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            id='lawyer'
                        />
                    </S.RegisterInput>
                </S.Flex>
            </S.RegisterInputGroup>

            {incorrectInfo && <S.RegisterError>{incorrectPhrase}</S.RegisterError>}
        </S.RegisterForm>
    )
}

export default NewRegisterLawyer
