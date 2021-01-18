import React, {useContext, useEffect, useReducer} from 'react'
import {Redirect} from "react-router-dom";
import {AuthContext} from "../../context/Auth/authContext";
import {authReducer} from "../../context/Auth/authReducer";

export const Logout = ()=>{
    const {authLogout, autoLogout} = useContext(AuthContext)

    const [state, dispatch] = useReducer(authReducer)
    useEffect(()=>{
        // dispatch(authLogout())
        // autoLogout()
        authLogout()

    }, [])
    return(
        <Redirect to='/auth' />
    )
}