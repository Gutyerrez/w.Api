import axios from 'axios'

const api = axios.create({
  baseURL: 'https://authserver.mojang.com/'
})

export default api
