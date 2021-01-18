import React, {useEffect, useReducer} from 'react'
import {AuthContext} from "./authContext";
import firebase from "firebase";
import {notesReducer} from "../Notes/notesReducer";
import {authReducer} from "./authReducer";
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actions";
import axios from 'axios'
import {Redirect, useLocation, useHistory} from "react-router-dom";

var firebaseConfig = {
    apiKey: "AIzaSyBX4HJOqNx0cNH4JrSfGu7bsAtHQ23dwyQ",
    authDomain: "react-todo-4c518.firebaseapp.com",
    databaseURL: "https://react-todo-4c518-default-rtdb.firebaseio.com",
    projectId: "react-todo-4c518",
    storageBucket: "react-todo-4c518.appspot.com",
    messagingSenderId: "483701227594",
    appId: "1:483701227594:web:16e992bf14a55f9a98a6b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const AuthState = ({children}) => {
    const history = useHistory();
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                dispatch({
                    type: AUTH_LOGOUT
                })
            } else{
                dispatch({
                    type: AUTH_SUCCESS,
                    token
                })
                // dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        } else{
            authLogout()
        }
    }, [])

    const [state, dispatch] = useReducer(authReducer, {
        token: null
    })

    const authLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expirationDate')
        dispatch({
            type: AUTH_LOGOUT
        })
    }

    // const autoLogout = (time)=>{
    //         setTimeout(() =>{
    //             authLogout()
    //         }, +time*1000)
    // }

  // function autoLogout(time){
  //       // return dispatch =>{
  //           setTimeout(() =>{
  //               authLogout()
  //           }, time*1000)
  //       // }
  //   }

    const authLogin = async (email, password, isLogin) => {
        const url = isLogin
            ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBX4HJOqNx0cNH4JrSfGu7bsAtHQ23dwyQ'
            : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBX4HJOqNx0cNH4JrSfGu7bsAtHQ23dwyQ';
        const res = await axios.post(url, {email, password}).then(data => data.data)
        dispatch({
            type: AUTH_SUCCESS,
            token: res.idToken
        })
        const expirationDate = new Date(new Date().getTime() + res.expiresIn * 1000)

        localStorage.setItem('token', res.idToken)
        localStorage.setItem('userId', res.localId)
        localStorage.setItem('expirationDate', expirationDate)
        // history.push('/')
        // window.location = '/'

        // autoLogout(res.expiresIn)

    }

    return (
        <AuthContext.Provider value={{authLogin: authLogin, token: state.token, authLogout: authLogout}}>
            {children}
        </AuthContext.Provider>
    )
}