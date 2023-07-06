import * as S from '../styles'
import { useState } from 'react'
import { Input, Checkbox, message } from 'antd'
import newCollaborator from 'services/collaborator/newCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const NewRegisterUser = ({ open, setIsOpen, successCallback }) => {
    const [userForm, setUserForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        telephone: '',
        cpf: '',
        admin: '',
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [incorrectInfo, setIncorrectInfo] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')

    const NewUser = () => {
        const isNotEmpty =
            userForm.first_name !== '' &&
            userForm.last_name !== '' &&
            userForm.email !== '' &&
            userForm.password !== '' &&
            userForm.telephone !== '' &&
            userForm.cpf !== ''
        if (isNotEmpty) {
            validateCollaborator()
            newCollaborator(userForm)
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
        }
    }

    const handleOk = () => {
        NewUser()
    }

    const handleCancel = () => {
        setIsOpen(false)
    }

    return (
        <S.RegisterModal
            title={`Cadastrar Novo Usuário`}
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width={600}
        >
            <S.RegisterForm>
                <S.RegisterInputGroup>
                    <S.Flex>
                        <S.RegisterInput>
                            <label htmlFor='first_name'>
                                <h4>Nome</h4>
                            </label>
                            <Input
                                type='text'
                                size='large'
                                onChange={e =>
                                    setUserForm(prev => ({ ...prev, first_name: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='first_name'
                            />
                        </S.RegisterInput>
                        <S.RegisterInput>
                            <label htmlFor='last_name'>
                                <h4>Sobrenome</h4>
                            </label>
                            <Input
                                type='text'
                                size='large'
                                onChange={e =>
                                    setUserForm(prev => ({ ...prev, last_name: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='last_name'
                            />
                        </S.RegisterInput>
                    </S.Flex>
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>
                    <S.Flex>
                        <S.RegisterInput>
                            <label htmlFor='telefone'>
                                <h4>Telefone</h4>
                            </label>
                            <Input
                                size='large'
                                onChange={e =>
                                    setUserForm(prev => ({ ...prev, telephone: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='telefone'
                            />
                        </S.RegisterInput>
                        <S.RegisterInput>
                            <label htmlFor='cpf'>
                                <h4>Cpf</h4>
                            </label>
                            <Input
                                size='large'
                                onChange={e =>
                                    setUserForm(prev => ({ ...prev, cpf: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='cpf'
                            />
                        </S.RegisterInput>
                    </S.Flex>
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>
                    <label htmlFor='email'>
                        <h4>E-mail</h4>
                    </label>
                    <Input
                        id='email'
                        size='large'
                        type='email'
                        onChange={e =>
                            setUserForm(prev => ({ ...prev, email: e.target.value }))
                        }
                        onClick={() => setIncorrectInfo(false)}
                        placeholder='advogado@gmail.com'
                    />
                </S.RegisterInputGroup>

                <S.RegisterInputGroup>
                    <S.Flex>
                        <S.RegisterInput>
                            <label htmlFor='password'>
                                <h4>Senha</h4>
                            </label>
                            <Input
                                type='password'
                                size='large'
                                onChange={e =>
                                    setUserForm(prev => ({ ...prev, password: e.target.value }))
                                }
                                onClick={() => setIncorrectInfo(false)}
                                id='password'
                            />
                        </S.RegisterInput>
                        <S.RegisterInput>
                            <label htmlFor='confirm_password'>
                                <h4>Confirmar senha</h4>
                            </label>
                            <Input
                                type='password'
                                size='large'
                                onChange={e => setConfirmPassword(e.target.value)}
                                onClick={() => setIncorrectInfo(false)}
                                id='confirm_password'
                            />
                        </S.RegisterInput>
                    </S.Flex>
                    {userForm.password !== confirmPassword && (
                        <S.RegisterError>As senhas não coincidem</S.RegisterError>
                    )}
                </S.RegisterInputGroup>

                <S.RegisterOptions>
                    <Checkbox
                        checked={userForm.admin}
                        onChange={e =>
                            setUserForm(prev => ({ ...prev, admin: e.target.checked }))
                        }
                    >
                        Administrador
                    </Checkbox>
                </S.RegisterOptions>

                {incorrectInfo && <S.RegisterError>{incorrectPhrase}</S.RegisterError>}
            </S.RegisterForm>
        </S.RegisterModal>
    )
}

export default NewRegisterUser
