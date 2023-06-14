import axios from 'axios'

const processClient = axios.create({
  baseURL: 'http://localhost:3333/process',
})

export default processClient

