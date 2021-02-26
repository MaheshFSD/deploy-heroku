import React from 'react'
import {useHistory} from "react-router-dom"

const UserCard = ({first_name,last_name,email,id,avatar,showLink=true}) => {
    const history=useHistory()
    const handleClick = ()=>{
        if(showLink) 
        history.push(`/users/${id}`)
    }
    return (
        <div onClick={handleClick} style={{
            display:"flex",
            width:"300px",
            padding:10,
            margin:10,
            outline:"1px solid black"
        }}>
            <div>
                <img src={avatar} alt={`profile_${id}`} />
            </div>
            <div style={{paddingLeft:10}}>
                <h3> {`${first_name} ${last_name}`}</h3>
                <h6>{email}</h6>
                {/* <Link to ={`/users/${id}`}>See More Details</Link> */}
            </div>
        </div>
    )
}

export default UserCard
