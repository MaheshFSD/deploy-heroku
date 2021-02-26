import React from 'react'
import {useHistory} from "react-router-dom"
import {AuthContext} from "../Context/AuthContext"
const Home = () => {
    const {isAuth,loginSuccess,logout}=React.useContext(AuthContext)
    const history=useHistory()
    const handleLogin = ()=>{
        loginSuccess("fake_token")
        history.push("/users")
    }
    return (
        <>
            <h4>Home Page</h4>
            {
                !isAuth ? (<button onClick={handleLogin} >Login</button>) :<button onClick={logout} >Logout</button> 
            }
        </>
    )
}

export default Home
