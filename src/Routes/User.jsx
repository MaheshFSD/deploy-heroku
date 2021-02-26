import axios from 'axios'
import React from 'react'
import {Link, useParams} from "react-router-dom"
import UserCard from '../Components/UserCard'
const User = () => {
    const [IsLoading,setIsLoading]=React.useState(true)
    const [isError,setIsError]=React.useState(false)
    const [user,setUser]=React.useState({})
    const {id}=useParams();
    const getUser=()=>{
        const baseUrl=process.env.REACT_APP_REQUEST_BASE_URL
        if(!id){
            setIsError(true)
            return
        }
        axios.get(`${baseUrl}/api/users/${id}`)
        .then(res=>{
            setUser(res.data)
            setIsLoading(false)
        })
        .catch(err=>{
            setIsError(true)
            setIsLoading(false)
        })
    }
    React.useEffect(()=>{
        getUser(id)
    },[])
    return IsLoading?(<div>...Loading</div>):isError?(<div>Error</div>) :  (
        <div>
            {" "}
            <UserCard {...user.data} />
            <br></br>
            <Link to="/users">Go Back</Link>
        </div>
    )
}

export default User
