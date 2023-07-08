import * as S from '../styles'
import { useState } from 'react'
import { Input, message } from 'antd'
import newCollaborator from 'services/collaborator/newCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const NewRegisterOffice = ({ open, setIsOpen, successCallback }) => {
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
    const [officeForm, setOfficeForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        cpf: randomCpf(10),
        password: 'aljhflakfhapfiahfçois',
        passwordResetToken: 'Office',
        admin: false,
    })
    const [incorrectInfo, setIncorrectInfo] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')

    const NewOffice = () => {
        const isNotEmpty =
            officeForm.first_name !== '' &&
            officeForm.last_name !== '' &&
            officeForm.email !== '' &&
            officeForm.password !== '' &&
            officeForm.telephone !== ''
        if (isNotEmpty) {
            validateCollaborator()
            newCollaborator(officeForm)
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
        NewOffice()
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
                            <label htmlFor='office_name'>
                                <h4>Nome Escritório</h4>
                            </label>
                            <Input
                                type='text'
                                size='large'
                                onChange={e =>
                                    setOfficeForm(prev => ({ ...prev, first_name: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='office_name'
                            />
                        </S.RegisterInput>
                        <S.RegisterInput>
                            <label htmlFor='office_telephone'>
                                <h4>Telefone</h4>
                            </label>
                            <Input
                                size='large'
                                onChange={e =>
                                    setOfficeForm(prev => ({ ...prev, telephone: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='office_telephone'
                            />
                        </S.RegisterInput>
                    </S.Flex>
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>
                    <label htmlFor='office_email'>
                        <h4>E-mail</h4>
                    </label>
                    <Input
                        id='office_email'
                        size='large'
                        type='email'
                        onChange={e =>
                            setOfficeForm(prev => ({ ...prev, email: e.target.value }))
                        }
                        onClick={() => setIncorrectInfo(false)}
                        placeholder='escritorio@gmail.com'
                    />
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>
                    <S.RegisterInput>
                        <label htmlFor='address'>
                            <h4>Endereço</h4>
                        </label>
                        <Input
                            type='text'
                            size='large'
                            onChange={e =>
                                setOfficeForm(prev => ({ ...prev, last_name: e.target.value }))
                            }
                            onClick={() => setIncorrectInfo(false)}
                            id='address'
                        />
                    </S.RegisterInput>
                </S.RegisterInputGroup>

                {incorrectInfo && <S.RegisterError>{incorrectPhrase}</S.RegisterError>}
            </S.RegisterForm>
        </S.RegisterModal>
    )
}

export default NewRegisterOffice
