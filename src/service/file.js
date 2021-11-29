
import axios from 'axios'
export const uploadAvatar = () => {
    return axios.post('/api/upload/Avatar')
}

export const getAvatar = () => {
    return axios.get('/api/auth/getSetting')
}


// export const uploadAvatar = () => {
// return axios.post('/api/auth/getSetting')
// }