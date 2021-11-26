
// 获取文章列表
import axios from 'axios'
export const getSetting = () => {
  return axios.get('/api/auth/getSetting')
}