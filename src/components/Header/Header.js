import React, {useState} from 'react'
import {NavLink, useLocation, useRouteMatch} from "react-router-dom"
import {FilterForm} from "./FilterForm";

export const Header = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100" >
                    <NavLink to={'/'} className="navbar-brand" href="/">Todo</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'}>Main</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/about'}>Information</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/weather'}>Weather</NavLink>
                            </li>
                        </ul>
                        {location.pathname === '/' ? <FilterForm/> : null}
                    </div>
                    <div className="">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>

            </div>
        </nav>
    )
}