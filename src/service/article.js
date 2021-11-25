
// 获取文章列表
import axios from 'axios'
export const getArticleList = () => {
  return axios.get('/api/article')
}
export const getMyArticleList = (params) => {
  return axios.get(`/api/Article/${params}`)
}

// 发布文章
export const postArticle = (param) => {
  return axios.post('/api/article', param)
}
                              
// 上传图片
export const postUploadImg = (param) => {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  return axios.post('/api/upload', param)
}

// 获取文章内容
export const getArticleInfo = (params) => {
  return axios.get(`/api/article/${params}`)
}
// 浏览
export const postView = (params) => {
  return axios.post(`/api/view/`, params)
}
// 获取点赞状态
export const getLike = params => {
  return axios.get('/api/like', params)
}

// 点赞接口
export const postLike = (params) => {
  return axios.post(`/api/like`, params)
}

// 删除点赞接口
export const deleteLike = (params) => {
  return axios.delete('/api/like', { article: params })
}

// 评论接口
export const postComment = (params) => {
  return axios.post(`/api/comment`, { article: params.article, replay: params.replay, content: params.content })
}
// 删除评论接口
export const deleteComment = (id) => {
  return axios.delete(`/api/comment`, id)
}

// 获取收藏状态
export const getCollect = (id) => {
  return axios.get(`/api/collect`, id)
}
// 收藏接口
export const postCollect = (id) => {
  return axios.post(`/api/collect`, id)
}
// 取消收藏接口
export const deleteCollect = (id) => {
  return axios.delete(`/api/collect`, id)
}

// export const getindex = params => { return axios.get(`/api/index/`, { params: params }) }

// // 获取城市信息

// export const getcity = params => { return axios.get(`/api/city/`) }

// // 获取详细信息

// export const getdetail = params => { return axios.get(`/api/detail/`, { params: params }) }

// // 注册

// export const postRegister = params => { return axios.post(`${host}/api/register/`, { params: params }) }
