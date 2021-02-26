import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const links=[
        {
            to:"/",
            title:"Home"
        },
        {
            to:"/login",
            title:"Login"
        },
        {
            to:"/users",
            title:"Users"
        },
        {
            to:"/settings",
            title:"Settings"
        },
        {
            to:"/dashboard",
            title:"Dashboard"
        },
        {
            to:"/about",
            title:"About"
        },
    ]
    return (
        <>
            {
                links.map(({to,title})=><NavLink style={{margin:20 , backgroundColor:"whitesmoke"}} activeStyle={{color:"red"}} to={to} key={to}>{title}</NavLink>)
            }
        </>
    )
}

export default Navbar
