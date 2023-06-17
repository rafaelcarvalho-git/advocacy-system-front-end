import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import BalanceIcon from '@mui/icons-material/Balance'
import ApartmentIcon from '@mui/icons-material/Apartment'

const menuItems = [
    {
        label: (
            <NavLink>
                Usuários
            </NavLink>
        ),
        key: 'users',
        icon: <PersonIcon />,
    },
    {
        label: (
            <NavLink>
                Advogados
            </NavLink>
        ),
        key: 'lawyers',
        icon: <BalanceIcon />,
    },
    {
        label: (
            <NavLink>
                Escritorios
            </NavLink>
        ),
        key: 'offices',
        icon: <ApartmentIcon />,
    }
]

const RegistrationsMenu = ({ menuOption, setMenuOption }) => {

    const menuFunction = (e) => {
        setMenuOption(e.key)
    }

    return (
        <Menu onClick={menuFunction} selectedKeys={[menuOption]} mode='horizontal' items={menuItems} style={{ justifyContent: ' center', marginBottom: '28px' }} />
    )
}

export default RegistrationsMenu
