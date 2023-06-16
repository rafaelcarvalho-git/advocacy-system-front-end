import { useState } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { VscLaw } from 'react-icons/vsc'

const menuItems = [
    {
        label: (
            <NavLink>
                Usuários
            </NavLink>
        ),
        key: 'users',
        icon: <BsFillPersonFill />,
    },
    {
        label: (
            <NavLink>
                Advogados
            </NavLink>
        ),
        key: 'lawyers',
        icon: <VscLaw />,
    },
    {
        label: (
            <NavLink>
                Escritorios
            </NavLink>
        ),
        key: 'offices',
        icon: <HiOutlineOfficeBuilding />,
    }
]

const RegistrationsMenu = ({ menuOption, setMenuOption }) => {

    const menuFunction = (e) => {
        setMenuOption(e.key)
    }

    return (
        <Menu onClick={menuFunction} selectedKeys={[menuOption]} mode="horizontal" items={menuItems} style={{ justifyContent: 'center' }} />
    )
}

export default RegistrationsMenu
