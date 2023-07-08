import * as S from '../styles'
import { useState } from 'react'
import { Input, message } from 'antd'
import newCollaborator from 'services/collaborator/newCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const NewRegisterLawyer = ({ open, setIsOpen, successCallback }) => {
    const randomCpf = (length) => {
        let result = ''
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
        const tamanhoCaracteres = caracteres.length

        for (let i = 0; i < length; i++) {
            const indiceAleatorio = Math.floor(Math.random() * tamanhoCaracteres)
            result += caracteres.charAt(indiceAleatorio)
        }

        return result
    }
    const [lawyerForm, setLawyerForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        cpf: randomCpf(10),
        password: 'aljhflakfhapfiahfçois',
        passwordResetToken: 'Lawyer',
        admin: false,
    })
    const [incorrectInfo, setIncorrectInfo] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')

    const NewLawyer = () => {
        const isNotEmpty =
            lawyerForm.first_name !== '' &&
            lawyerForm.last_name !== '' &&
            lawyerForm.email !== '' &&
            lawyerForm.password !== '' &&
            lawyerForm.telephone !== ''
        if (isNotEmpty) {
            validateCollaborator()
            newCollaborator(lawyerForm)
                .then(response => {
                    successCallback()
                    message.success(
                        'Advogado parceiro cadastrado com sucesso!'
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
        }
    }

    const handleOk = () => {
        NewLawyer()
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <S.RegisterModal
            title={`Cadastrar Novo Advogado`}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width={600}
        >
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
                                    setLawyerForm(prev => ({ ...prev, first_name: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='lawyer_name'
                            />
                        </S.RegisterInput>
                        <S.RegisterInput>
                            <label htmlFor='lawyer_telephone'>
                                <h4>Telefone</h4>
                            </label>
                            <Input
                                size='large'
                                onChange={e =>
                                    setLawyerForm(prev => ({ ...prev, telephone: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='lawyer_telephone'
                            />
                        </S.RegisterInput>
                    </S.Flex>
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>
                    <S.RegisterInput>
                        <label htmlFor='lawyer'>
                            <h4>Escritório</h4>
                        </label>
                        <Input
                            type='text'
                            size='large'
                            onChange={e =>
                                setLawyerForm(prev => ({ ...prev, last_name: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            id='lawyer'
                        />
                    </S.RegisterInput>
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>

                    <S.RegisterInput>
                        <label htmlFor='lawyer_email'>
                            <h4>E-mail</h4>
                        </label>
                        <Input
                            id='lawyer_email'
                            size='large'
                            type='email'
                            onChange={e =>
                                setLawyerForm(prev => ({ ...prev, email: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            placeholder='advogado@gmail.com'
                        />
                    </S.RegisterInput>
                </S.RegisterInputGroup>

                {incorrectInfo && <S.RegisterError>{incorrectPhrase}</S.RegisterError>}
            </S.RegisterForm>
        </S.RegisterModal>
    )
}

export default NewRegisterLawyer
