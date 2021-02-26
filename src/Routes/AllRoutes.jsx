import React from 'react'
import {Route, Switch} from "react-router-dom"
import AllUsers from './AllUsers'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import { PrivateRoute } from './PrivateRoute'
import Settings from './Settings'
import User from './User'

const AllRoutes = () => {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <h3>About</h3>
            </Route>
            <PrivateRoute exact path="/login">
                <Login />
            </PrivateRoute>
            <PrivateRoute exact path="/users">
                <AllUsers />
            </PrivateRoute>
            <PrivateRoute path="/users/:id">
                <User />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/settings">
                <Settings />
            </PrivateRoute>
            <Route >
            <h1>Not found</h1>
            </Route>
        </Switch>
        </>
    )
}

export default AllRoutes
