import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { getUserCachedData } from 'utils/UserAuthorization'

const options = ['Profile', 'Account', 'Dashboard', 'Logout'];

function UserProfile({ setLogout }) {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const userData = getUserCachedData()
    const userName = `${userData?.first_name} ${userData?.last_name}`

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setLogout(true);
    };

    return (
        <div sx={{ flexGrow: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4>{userName}</h4>
                <Tooltip title="Open options">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
            </div>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
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
                open={anchorElUser}
                onClose={handleCloseUserMenu}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{option}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default UserProfile