import axios from 'axios'

const processClient = axios.create({
  baseURL: 'https://advocacy-system-back.vercel.app/process',
})

export default processClient
