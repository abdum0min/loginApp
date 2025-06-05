import axios from '../../../shared/api/api'

export const getUser = async() => {
    const {data} = await axios.get('/auth/me', )
    return data
}