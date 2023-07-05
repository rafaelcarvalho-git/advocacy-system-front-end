import * as S from './styles'
import Actions from '../Actions'
import { getUserCachedData } from 'utils/UserAuthorization'
import { copy } from 'utils/copy'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import BuildIcon from '@mui/icons-material/Build'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ApartmentIcon from '@mui/icons-material/Apartment'


const ListOffices = ({ collaborators, successCallback }) => {
    const userData = getUserCachedData()
    const isAdmin = userData.admin
    const offices = [
        {
            "id": 1,
            "office_name": "Smith & Johnson Law Firm",
            "telephone": "(123) 456-7890",
            "email": "info@smithjohnsonlaw.com",
            "address": "123 Main Street, Cityville"
        },
        {
            "id": 2,
            "office_name": "Anderson & Brown Legal Services",
            "telephone": "(987) 654-3210",
            "email": "contact@andersonbrownlegal.com",
            "address": "456 Elm Avenue, Townsville"
        },
        {
            "id": 3,
            "office_name": "Williams & Davis Attorneys at Law",
            "telephone": "(555) 123-4567",
            "email": "info@williamsdavislaw.com",
            "address": "789 Oak Street, Villageton"
        },
        {
            "id": 4,
            "office_name": "Thompson Legal Consultants",
            "telephone": "(777) 888-9999",
            "email": "contact@thompsonlegal.com",
            "address": "321 Pine Road, Countryside"
        },
        {
            "id": 5,
            "office_name": "Clarkson & Bell Law Offices",
            "telephone": "(222) 333-4444",
            "email": "info@clarksonbelllaw.com",
            "address": "555 Cedar Lane, Suburbia"
        },
        {
            "id": 6,
            "office_name": "Miller & Turner Legal Associates",
            "telephone": "(444) 555-6666",
            "email": "contact@millerturnerlaw.com",
            "address": "777 Maple Avenue, Towncenter"
        },
        {
            "id": 7,
            "office_name": "Baker & Powell Legal Solutions",
            "telephone": "(777) 999-8888",
            "email": "info@bakerpowelllaw.com",
            "address": "999 Oakwood Drive, Metropolis"
        },
        {
            "id": 8,
            "office_name": "Carter & Foster Law Firm",
            "telephone": "(111) 222-3333",
            "email": "contact@carterfosterlaw.com",
            "address": "222 Elmwood Avenue, Downtown"
        }
    ]

    return (
        <S.TableContent>
            <S.Table>
                <thead>
                    <tr>
                        <th><div><ApartmentIcon /><p>Escritório</p></div></th>
                        <th><div><PhoneIcon /><p>Telefone</p></div></th>
                        <th><div><EmailIcon /><p>E-mail</p></div></th>
                        <th><div><LocationOnIcon /><p>Localidade</p></div></th>
                        {isAdmin && <th><div><BuildIcon /><p>Ações</p></div></th>}
                    </tr>
                </thead>
                <tbody>
                    {offices?.map(
                        ({ id, office_name, telephone, email, address }) => {
                            return (
                                <tr key={id}>
                                    <td
                                        onClick={() => copy(`${office_name}`)}
                                    >{`${office_name}`}</td>
                                    <td onClick={() => copy(telephone)} style={{ minWidth: '180px' }}>
                                        <a
                                            href={`https://api.whatsapp.com/send/?phone=55${telephone}&text&app_absent=0`}
                                            target='_blank'
                                            rel='noreferrer noopener'
                                        >
                                            {telephone}
                                        </a>
                                    </td>
                                    <td onClick={() => copy(email)}>{email}</td>
                                    <td onClick={() => copy(address)}>{address}</td>
                                    {isAdmin && (
                                        <td>
                                            <Actions
                                                collaboratorData={{
                                                    id,
                                                    office_name,
                                                    telephone,
                                                    email,
                                                    telephone,
                                                    address,
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
