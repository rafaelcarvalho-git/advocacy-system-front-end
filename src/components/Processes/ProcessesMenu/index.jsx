import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import TaskIcon from '@mui/icons-material/Task'

const menuItems = [
    {
        label: (
            <NavLink>
                Ativos
            </NavLink>
        ),
        key: 'ativos',
        icon: <InsertDriveFileIcon />,
    },
    {
        label: (
            <NavLink>
                Concluidos
            </NavLink>
        ),
        key: 'concluidos',
        icon: <TaskIcon />,
    }
]

const ProcessessMenu = ({ menuOption, setMenuOption }) => {

    const menuFunction = (e) => {
        setMenuOption(e.key)
    }

    return (
        <Menu onClick={menuFunction} selectedKeys={[menuOption]} mode='horizontal' items={menuItems} style={{ justifyContent: ' center', marginBottom: '28px' }} />
    )
}

export default ProcessessMenu