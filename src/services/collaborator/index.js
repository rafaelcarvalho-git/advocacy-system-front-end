import axios from 'axios'

const collaboratorClient = axios.create({
  baseURL: 'http://localhost:3333/collaborator',
})

export default collaboratorClient
