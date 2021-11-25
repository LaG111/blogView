
import axios from 'axios'
// 获取用户信息接口
export const getUserInfo = params => {
  return axios.get('/api/auth/account', { params })
}

// 更改用户信息
export const changeInfo = query => {
  return axios.put('/api/auth/account', query, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 获取用户Token
export const getUserToken = query => {
  return axios.post('/api/auth/login', query)
}

// 获取用户信息
export const getInfo = () => {
  return axios.get('/api/auth/account')
}

// 注册用户信息
export const registUser = values => {
  return axios.post('/api/auth/user', {
    username: values.username,
    password: values.password,
  })
}

// demo如下
// export const getindex = params => { return axios.get(`/api/index/`, { params: params }) }

// // 获取城市信息

// export const getcity = params => { return axios.get(`/api/city/`) }

// // 获取详细信息

// export const getdetail = params => { return axios.get(`/api/detail/`, { params: params }) }

// // 注册

// export const postRegister = bodyData => { return axios.post(`${host}/api/register/`, bodyData }
