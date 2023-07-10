import axios from 'axios'

const collaboratorClient = axios.create({
  baseURL: 'https://advocacy-system-back.vercel.app/collaborator',
})

export default collaboratorClient
