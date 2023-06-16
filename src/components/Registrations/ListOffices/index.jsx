import * as S from './styles'
import UsersActions from './UsersActions'
import { getUserCachedData } from 'utils/UserAuthorization'


const ListOffices = ({ collaborators, successCallback }) => {
    const userData = getUserCachedData()
    const isAdmin = userData.admin

    return (
        <S.TableContent>
            <S.Table>
                <thead>
                    <tr>
                        <th>Escritório</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        {isAdmin && <th>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {collaborators?.map(
                        ({ id, first_name, last_name, email, telephone, cpf, admin }) => {
                            return (
                                <tr key={id}>
                                    <td
                                        onClick={() => copy(`${first_name} ${last_name}`)}
                                    >{`${first_name} ${last_name}`}</td>
                                    <td onClick={() => copy(email)}>{email}</td>
                                    <td onClick={() => copy(telephone)}>
                                        <a
                                            href={`https://api.whatsapp.com/send/?phone=55${telephone}&text&app_absent=0`}
                                            target='_blank'
                                            rel='noreferrer noopener'
                                        >
                                            {telephone}
                                        </a>
                                    </td>
                                    <td onClick={() => copy(cpf)}>{cpf}</td>
                                    <td>{admin ? 'Sim' : 'Não'}</td>
                                    {isAdmin && (
                                        <td>
                                            <UsersActions
                                                collaboratorData={{
                                                    id,
                                                    first_name,
                                                    last_name,
                                                    email,
                                                    telephone,
                                                    cpf,
                                                    admin,
                                                }}
                                                successCallback={successCallback}
                                            />
                                        </td>
                                    )}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </S.Table>
        </S.TableContent>
    )
}
export default ListOffices
