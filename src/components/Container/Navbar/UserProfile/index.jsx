import { Menu, Avatar, Tooltip, MenuItem, IconButton, Typography } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useState } from 'react'
import { getUserCachedData } from 'utils/UserAuthorization'


const UserProfile = ({ setLogout }) => {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const userData = getUserCachedData()
    const userName = `${userData?.first_name} ${userData?.last_name}`

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }


    return (
        <div sx={{ flexGrow: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4>{userName}</h4>
                <Tooltip title='Open options'>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt='User' src='/static/images/avatar/2.jpg' />
                    </IconButton>
                </Tooltip>
            </div >
            <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <MenuItem onClick={() => {
                    setLogout(true)
                    handleCloseUserMenu()
                }}>
                    <Typography textAlign='center'>Logout</Typography>
                    <ExitToAppIcon style={{ marginLeft: '5px' }} />
                </MenuItem>

            </Menu >
        </div >
    )
}

export default UserProfile