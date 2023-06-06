import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://usuarios.ronierlima.dev',
  headers: {
    'Content-Type': 'application/json'
  }
})
