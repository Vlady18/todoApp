import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './MobileLayout.module.css'


export const MobileLayout = (props)=>{

    return(
        <div className={classes.mobileMenu}>
            <ul>
                {
                    props.links.map((el, i)=>{
                        return(
                            el.show ? <NavLink className="nav-link" onClick={props.mobileLinkHandler} key={new Date().toString() + el.to} to={el.to}>{el.label}</NavLink> : null
                        )
                    })
                }
            </ul>
        </div>
    )
}