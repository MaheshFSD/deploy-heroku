import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import Dashboard from './Dashboard'

const Login = () => {
    const {isAuth}=React.useContext(AuthContext)
    return (
        <div>
            {isAuth?<Dashboard/>:"Login"}
        </div>
    )
}

export default Login
