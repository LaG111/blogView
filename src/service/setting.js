import axios from 'axios'
export const getSetting = () => {
  return axios.get('/api/auth/getSetting')
}