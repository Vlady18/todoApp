import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {NotesContext} from "../context/Notes/notesContext";

export const TodoForm = (props)=>{

    const {addNote} = useContext(NotesContext)

    const [value, setValue] = useState('')

    const {alert, hide, show} = useContext(AlertContext)

    const submitHandler = (e) =>{
        e.preventDefault();
        if(value.trim() !== '' ) {
            hide();
            addNote(value.trim());
        } else{
            show('Add note text', 'warning')
        }
        let hideAlert = setTimeout(()=>{
            hide();
        }, 5000)
        setValue('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter your note text" value={value} onChange={(e)=>setValue(e.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" id="button-addon2">Add</button>
                </div>
            </div>
        </form>
    )
}
