import React from 'react'
import UserCard from '../Components/UserCard'
import Pagination from "../Components/Pagination"
import axios from "axios"
import { useLocation } from 'react-router-dom'
const AllUsers = () => {
    const [response,setResponse]=React.useState([])
    const [IsLoading,setIsLoading]=React.useState(true)
    const [isError,setIsError]=React.useState(false)
    const [page,setPage]=React.useState(1)
    //const location=useLocation()
    const getUsers = (page = 1)=>{
        const baseUrl=process.env.REACT_APP_REQUEST_BASE_URL
        setIsLoading(true)
        setIsError(false)
        axios.get(`${baseUrl}/api/users?page=${page}`)
        .then(res=>{
            setIsLoading(false)
            setResponse(res.data)
        })
        .catch(err=>setIsError(err))
    }
    React.useEffect(()=>{
        getUsers(page);
    },[page])
    const handleChangePage=(page)=>{
        setPage(page)
    }
    const {data}=response

    return IsLoading?(<div>...Loading</div>):isError?(<div>Error</div>) : (
        <>
        <Pagination handleChangePage={handleChangePage} totalPages={response.total_pages} currentPage={page} />
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}} >{data?.map((item)=>(<UserCard {...item} key={item.id} />))}
            </div>
        </>
    )
}

export default AllUsers
