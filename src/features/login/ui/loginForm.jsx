import { useState } from "react"
import { userLogin } from "../api/loginApi"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = async (e) => {
        e.preventDefault()
        const user = {username, password}
        const res = await userLogin(user)
        localStorage.setItem('token', res.accessToken)
        navigate(from, {replace: true})
    }

    return (
        <form>
            <h1>Login</h1>
            <input required value={username} onChange={e=> setUsername(e.target.value)} type="text" placeholder='username'  />
            <input required value={password} onChange={e=> setPassword(e.target.value)}  type="password" placeholder='password' />
            <button onClick={handleLogin}>Log In</button>
        </form>
    )
}

export default LoginForm
