import axios from '../../../shared/api/api'

export const userLogin = async(user) => {
    const {data} = await axios.post('/auth/login',user)
    return data 
}