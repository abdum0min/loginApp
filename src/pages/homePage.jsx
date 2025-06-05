import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className=' w-[100vw] h-[100vh] flex justify-center items-center'>
            <Link to={'/dashboard'}>dashboard</Link>
        </div>
    )
}

export default HomePage
