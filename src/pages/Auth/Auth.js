import React, {useContext, useState} from 'react'
import {AuthContext} from "../../context/Auth/authContext";
import {Redirect} from "react-router-dom";

export const Auth = () => {

    const {authLogin, token} = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const loginHandler = () => {
        authLogin(email, password, true)
    }

    const registerHandler = () => {
        authLogin(email, password, false)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return !!token ? <Redirect to='/'/>
        :
        <div>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value.trim())}
                               className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" value={password}
                               onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    {/*<div className="form-group form-check">*/}
                    {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                    {/*    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
                    {/*</div>*/}
                    <button type="submit" onClick={loginHandler} className="btn btn-primary mr-2">Sign In</button>
                    <button type="submit" onClick={registerHandler} className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>

}