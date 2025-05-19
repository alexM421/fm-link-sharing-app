import React from "react";

const AuthContext = React.createContext()


export function AuthProvider ({ children }) {

    const [auth, setAuth] = React.useState({
        loggedIn: true,
        userData: undefined,
    })

    const value= {
        auth: auth,
        setAuth: setAuth
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext () {

    const context = React.useContext(AuthContext)

    if(!context){
        throw new Error("AuthContext is undefined")
    }

    return context
}