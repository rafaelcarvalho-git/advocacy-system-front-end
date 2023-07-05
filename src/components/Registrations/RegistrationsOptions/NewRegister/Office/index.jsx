import * as S from '../styles'
import { useEffect, useState } from 'react'
import { Input, message } from 'antd'
import newCollaborator from 'services/collaborator/newCollaborator'
import validateCollaborator from 'services/collaborator/validateCollaborator'

const NewRegisterOffice = ({ setIsOpen, successCallback, setRegisterFunction }) => {
    const [officeCreate, setOfficeCreate] = useState({
        office_name: '',
        telephone: '',
        email: '',
        address: '',
    })
    const [incorrectInfo, setIncorrectInfo] = useState(false)
    const [incorrectPhrase, setIncorrectPhrase] = useState('')

    const NewOffice = () => {
        alert('office')
        /*const isNotEmpty =
            officeCreate.office_name !== '' &&
            officeCreate.telephone !== '' &&
            officeCreate.email !== '' &&
            officeCreate.address !== ''
        if (isNotEmpty) {
            validateCollaborator()
            newCollaborator(officeCreate)
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
                NewOffice()
            }
        })
    }, [setRegisterFunction])

    return (
        <S.RegisterForm>
            <S.RegisterInputGroup>
                <S.RegisterInput>
                    <label htmlFor='office_name'>
                        <h4>Nome Escritório</h4>
                    </label>
                    <Input
                        type='text'
                        size='large'
                        onChange={e =>
                            setOfficeCreate(prev => ({ ...prev, office_name: e.target.value }))
                        }
                        onClick={() => setIncorrectInfo(false)}
                        id='office_name'
                    />
                </S.RegisterInput>
            </S.RegisterInputGroup>

            <S.RegisterInputGroup>
                <S.RegisterInput>
                    <label htmlFor='office_telephone'>
                        <h4>Telefone</h4>
                    </label>
                    <Input
                        size='large'
                        onChange={e =>
                            setOfficeCreate(prev => ({ ...prev, telephone: e.target.value }))
                        }
                        onClick={() => setIncorrectInfo(false)}
                        id='office_telephone'
                    />
                </S.RegisterInput>
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
                        setOfficeCreate(prev => ({ ...prev, email: e.target.value }))
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
                            setOfficeCreate(prev => ({ ...prev, address: e.target.value }))
                        }
                        onClick={() => setIncorrectInfo(false)}
                        id='address'
                    />
                </S.RegisterInput>
            </S.RegisterInputGroup>

            {incorrectInfo && <S.RegisterError>{incorrectPhrase}</S.RegisterError>}
        </S.RegisterForm>
    )
}

export default NewRegisterOffice
