import React, {useContext, useEffect, useState} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {NotesContext} from "../context/Notes/notesContext";

export const Modal = () => {


    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)
    const {editNote, edit, editId, hideModal, notes} = useContext(NotesContext)

    useEffect(() => {
        const idx = notes.findIndex(el => el.id == editId);
        if(idx != -1){
            setValue(notes[idx].title)
        }
    }, [editId])

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() !== '') {
            editNote(editId, value.trim());
            alert.show('Заметка успешно добавлена!', 'success')

        } else {
            alert.show('Добавьте текст заметки', 'warning')
        }
        let hideAlert = setTimeout(() => {
            alert.hide();
        }, 5000)
        setValue('')
    }


    return (
        <div className={`modal ${edit ? "active" : ""}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" onClick={hideModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input id="exampleInputEmail1" type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="form-control"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/*<button type="button" className="btn btn-secondary" data-dismiss="weather">Close</button>*/}
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}