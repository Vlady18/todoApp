import React, {useContext, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {NotesContext} from "../context/Notes/notesContext";

export const Form = (props)=>{

    const {addNote} = useContext(NotesContext)

    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)

    const submitHandler = (e) =>{
        e.preventDefault();
        if(value.trim() !== '' ) {
            addNote(value.trim());
            alert.show('Заметка успешно добавлена!', 'success')

        } else{
            alert.show('Добавьте текст заметки', 'warning')
        }
        let hideAlert = setTimeout(()=>{
            alert.hide();
        }, 5000)
        setValue('')
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Текст заметки</label>
                <input type="text" className="form-control" value={value} onChange={(e)=>setValue(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">Вы сможете отредактирвоать или удалить её позже.</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
