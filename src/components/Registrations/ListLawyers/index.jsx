import * as S from './styles'
import Actions from '../Actions'
import { getUserCachedData } from 'utils/UserAuthorization'
import { copy } from 'utils/copy'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import BuildIcon from '@mui/icons-material/Build'
import PersonIcon from '@mui/icons-material/Person'
import ApartmentIcon from '@mui/icons-material/Apartment'
import RegistrationsOptions from '../RegistrationsOptions'


const ListLawyers = ({ collaborators, successCallback }) => {
    const userData = getUserCachedData()
    const isAdmin = userData.admin

    return (
        <>
            <RegistrationsOptions label={'Advogado'} placeholder={'Nome do Advogado'} setSearch={'a'} />
            <S.TableContent>
                <S.Table>
                    <thead>
                        <tr>
                            <th><div><PersonIcon /><p>Advogado</p></div></th>
                            <th><div><ApartmentIcon /><p>Escritório</p></div></th>
                            <th><div><PhoneIcon /><p>Telefone</p></div></th>
                            <th><div><EmailIcon /><p>E-mail</p></div></th>
                            {isAdmin && <th><div><BuildIcon /><p>Ações</p></div></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {collaborators?.map(
                            ({ id, first_name, last_name, email, telephone, cpf }) => {
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
        </>
    )
}
export default ListLawyers
