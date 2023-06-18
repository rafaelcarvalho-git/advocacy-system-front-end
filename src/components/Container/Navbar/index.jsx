import * as S from './styles'
import { Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ArticleIcon from '@mui/icons-material/Article'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import UserProfile from './UserProfile'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const pages = [{ item: 'Dashboard', icon: <DashboardIcon />, link: '/dashboard' }, { item: 'Processos', icon: <ArticleIcon />, link: '/processos' }, { item: 'Cadastros', icon: <PeopleAltIcon />, link: '/cadastros' }]

const Navbar = ({ setLogout }) => {
    const [openNavMenu, setOpenNavMenu] = useState(null)

    const handleOpenNavMenu = (event) => {
        setOpenNavMenu(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setOpenNavMenu(null)
    }

    return (
        <S.Nav position='static'>
            <Container maxWidth='xl'>
                < Toolbar disableGutters >
                    <S.MobileMenu sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='mobile-menu'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id='mobile-menu'
                            anchorEl={openNavMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={openNavMenu}
                            onClose={() => handleCloseNavMenu()}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {
                                pages.map(({ item, icon, link }) => (
                                    <NavLink key={item} to={link}>
                                        <MenuItem onClick={() => handleCloseNavMenu()}>
                                            <Typography textAlign='center' sx={{ color: ' black', display: 'flex', alignItems: 'center', gap: '5px' }}> {icon} {item}</Typography>
                                        </MenuItem>
                                    </NavLink >
                                ))
                            }
                        </Menu >
                    </S.MobileMenu >

                    <S.DesktopMenu sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(({ item, icon, link }) => (
                            <NavLink key={item} to={link} >
                                <Button
                                    onClick={() => handleCloseNavMenu()}
                                    sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center', gap: '5px' }}
                                >
                                    {icon} {item}
                                </Button>
                            </NavLink>
                        ))}
                    </S.DesktopMenu>
                    <UserProfile setLogout={setLogout} />
                </Toolbar >
            </Container >
        </S.Nav >
    )
}

export default Navbar
