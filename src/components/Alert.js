import React, {useContext} from 'react'
import {AlertContext} from "../context/alert/alertContext";

export const Alert = ({emptyNotes})=>{

    const {show, hide, alert} = useContext(AlertContext)

    if(!alert.visible){
        return null
    }
    return(
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
            <strong>Внимание </strong>
            {alert.text}
            <button type="button" onClick={hide} className="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
