
import axios from 'axios'
export const uploadAvatar = (param) => {
    let config ={
        headers:{'Content-Type':'form-data'}
    } 		
    return axios.post('/api/upload/Avatar',param,config)
}

export const getAvatar = () => {
    return axios.get('/api/auth/getSetting')
}


// export const uploadAvatar = () => {
// return axios.post('/api/auth/getSetting')
// }