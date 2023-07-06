import * as S from './styles'
import Actions from '../Actions'
import { getUserCachedData } from 'utils/UserAuthorization'
import { copy } from 'utils/copy'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import BuildIcon from '@mui/icons-material/Build'
import PersonIcon from '@mui/icons-material/Person'
import ApartmentIcon from '@mui/icons-material/Apartment'


const ListLawyers = ({ lawyers, successCallback }) => {
    const userData = getUserCachedData()
    const isAdmin = userData.admin
    /*const lawyers = [
        {
            "id": 1,
            "first_name": "João Guilherme da Silva",
            "telephone": "(85) 988123456",
            "email": "joaogui@gmail.com",
            "office": "JG Advocacia"
        },
        {
            "id": 2,
            "first_name": "Carolina Oliveira Santos",
            "telephone": "(11) 987654321",
            "email": "carolosantos@advogados.com",
            "office": "Santos & Associados"
        },
        {
            "id": 3,
            "first_name": "Marcelo Almeida Barros",
            "telephone": "(21) 999887766",
            "email": "marcelob@barrosadvogados.com",
            "office": "Barros Advogados"
        },
        {
            "id": 4,
            "first_name": "Isabela Nunes Ferreira",
            "telephone": "(31) 988776655",
            "email": "isabelaferreira@lawfirm.com",
            "office": "Ferreira & Advogados Associados"
        },
        {
            "id": 5,
            "first_name": "Ricardo Mendes Carvalho",
            "telephone": "(41) 999665544",
            "email": "ricardo.carvalho@adv.com.br",
            "office": "Carvalho e Lima Advocacia"
        },
        {
            "id": 6,
            "first_name": "Camila Lima Souza",
            "telephone": "(61) 988887777",
            "email": "camilalima@lawyersoffice.com",
            "office": "Souza Advocacia"
        },
        {
            "id": 7,
            "first_name": "Eduardo Santos Costa",
            "telephone": "(31) 987776655",
            "email": "eduardocosta@escritoriocosta.com",
            "office": "Costa & Associados Advogados"
        },
        {
            "id": 8,
            "first_name": "Amanda Ferreira Gomes",
            "telephone": "(81) 988887766",
            "email": "amandagomes@advogadosgomes.com",
            "office": "Gomes e Silva Advocacia"
        },
        {
            "id": 9,
            "first_name": "Pedro Henrique Castro",
            "telephone": "(31) 987887766",
            "email": "phcastro@castroadvogados.com.br",
            "office": "Castro e Castro Advogados"
        },
        {
            "id": 10,
            "first_name": "Mariana Oliveira Lima",
            "telephone": "(21) 988885544",
            "email": "marianalima@advocacialima.com",
            "office": "Lima & Oliveira Advogados Associados"
        }
    ]*/

    return (
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
                    {lawyers?.map(
                        ({ id, first_name, telephone, email, last_name }) => {
                            return (
                                <tr key={id}>
                                    <td
                                        onClick={() => copy(`${first_name}`)}
                                    >{`${first_name}`}</td>
                                    <td onClick={() => copy(last_name)}>{last_name}</td>
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
                                    {isAdmin && (
                                        <td>
                                            <Actions
                                                collaboratorData={{
                                                    id,
                                                    /*first_name,
                                                    last_name,*/
                                                    email,
                                                    telephone,

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
export default ListLawyers
