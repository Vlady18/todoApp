import React, {useContext, useState} from 'react'
import {NavLink, useLocation} from "react-router-dom"
import {FilterForm} from "../FilterForm";
import classes from './Header.module.css'
import {MobileLayout} from "../MobileLayout/MobileLayout";
import {AuthContext} from "../../context/Auth/authContext";

export const Header = () => {
    const {token} = useContext(AuthContext)
    const location = useLocation();
    const [mobileMenu, setMobileMenu] = useState(false)
    const links = [
        {label: "Main", to: '/'},
        {label: "Information", to: '/about', show: true},
        {label: "Weather", to: '/weather', show: true},
        {label: "Авторизация", to: '/auth', show: !token},
        {label: "Выйти", to: '/logout', show: !!token},
    ]
    const mobileLinkHandler = ()=>{
        setMobileMenu(false)
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100" >
                    <NavLink to={'/'} className="navbar-brand" href="/">Todo</NavLink>
                    {token ? 'YES' : "NO"}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            {
                                links.map((el, i)=>{
                                    return(
                                        el.show ? <NavLink className="nav-link" onClick={mobileLinkHandler} key={new Date().toString() + el.to} to={el.to}>{el.label}</NavLink> : null
                                    )
                                })
                            }
                        </ul>
                        {location.pathname === '/' ? <FilterForm/> : null}
                    </div>
                    <div className={`${classes.head_burger} ${mobileMenu ? classes.active : ''}`}>
                        <i className={`fa ${mobileMenu ? 'fa-times' : 'fa-bars'}`} onClick={() => setMobileMenu(!mobileMenu)}></i>
                    </div>
                    {mobileMenu ? <MobileLayout mobileLinkHandler={mobileLinkHandler} links={links} /> : null}
                </div>

            </div>
        </nav>
    )
}