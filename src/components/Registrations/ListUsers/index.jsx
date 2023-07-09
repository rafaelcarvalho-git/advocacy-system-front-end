import * as S from './styles'
import Actions from '../Actions'
import { getUserCachedData } from 'utils/UserAuthorization'
import { copy } from 'utils/copy'
import PhoneIcon from '@mui/icons-material/Phone'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import BuildIcon from '@mui/icons-material/Build'


const ListUsers = ({ collaborators, successCallback }) => {
    const userData = getUserCachedData()
    const isAdmin = userData.admin

    return (
        <S.TableContent>
            <S.Table>
                <thead>
                    <tr>
                        <th><div><PersonIcon /><p>Usuário</p></div></th>
                        <th><div><EmailIcon /><p>E-mail</p></div></th>
                        <th><div><PhoneIcon /><p>Telefone</p></div></th>
                        <th><div><AssignmentIndIcon /><p>Cpf</p></div></th>
                        <th><div><LockPersonIcon /><p>Admin</p></div></th>
                        {isAdmin && <th><div><BuildIcon /><p>Ações</p></div></th>}
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
                                    <td onClick={() => copy(email.toLowerCase())}>{email.toLowerCase()}</td>
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
                                            <Actions
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
export default ListUsers
