import * as S from './styles'
import { Avatar, Tooltip } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { getUserCachedData } from 'utils/UserAuthorization'


const UserProfile = ({ setLogout }) => {
    const userData = getUserCachedData()
    const userName = `${userData?.first_name} ${userData?.last_name}`

    return (
        <S.ProfileOpt>
            <h4>{userName}</h4>
            <Avatar alt='User' src='/static/images/avatar/2.jpg' />
            <Tooltip title='Logout'>
                <S.LogoutButton onClick={() => setLogout(true)}>
                    <LogoutIcon />
                </S.LogoutButton>
            </Tooltip>
        </S.ProfileOpt>
    )
}

export default UserProfile