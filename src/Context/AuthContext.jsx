import React from "react"
export const AuthContext = React.createContext()

AuthContext.displayName = "Authentication context"
export const AuthContextProvider = ({children})=>{
    const [isAuth,setIsAuth]=React.useState(true)
    const [token,setToken]=React.useState("")

    const loginSuccess = (value)=>{
        setToken(value);
        setIsAuth(true)
    }
    const logout = () => {
        setToken("")
        setIsAuth(false)
    }
    const value={
        isAuth,
        token,
        loginSuccess,
        logout
    }
    return <AuthContext.Provider value={value} > {children} </AuthContext.Provider>
}