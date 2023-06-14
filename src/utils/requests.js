import { getUserCachedData } from './UserAuthorization'

export const getAuthHeaders = () => {
  const token = getUserCachedData().token

  return {
    Authorization: `Bearer ${token}`,
  }
}
