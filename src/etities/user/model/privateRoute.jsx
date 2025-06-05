import { Navigate, useLocation } from "react-router-dom"


export default function PrivateRoute({children})  {
    const isAuth = !!localStorage.getItem('token')
    const location = useLocation()
    return isAuth ? children : <Navigate to='/login' state={{ from: location }} replace/>
}


