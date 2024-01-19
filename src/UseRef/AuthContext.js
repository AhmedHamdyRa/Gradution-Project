import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export function AuthProvider(props){
    const [auth,setAuth] = useState({});
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const email= localStorage.getItem('email')

        //@todo Validate token with Api

        if (email){
            setAuth({
                token,email
            }) 
        }
    },[]);
    
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
        {props.children}
        </AuthContext.Provider>
    )
}