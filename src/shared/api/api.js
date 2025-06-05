import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    config.headers.Authorization = authorization
    return config
})

export default axios