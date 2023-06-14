import { getUserCachedData } from './UserAuthorization'

export const isAdmin = () => {
  const userCachedData = getUserCachedData()
  return !!userCachedData?.admin
}
