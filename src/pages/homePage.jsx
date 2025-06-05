import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    const logoutHandle = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div className=' w-[100vw] h-[100vh] flex justify-center gap-3 items-center'>
            <Link to={'/account'}>account</Link>
            <button onClick={logoutHandle}>log out</button>
        </div>
    )
}

export default HomePage
