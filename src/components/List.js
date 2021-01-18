import React, {useContext} from 'react'
import {NotesContext} from "../context/Notes/notesContext";
import {AlertContext} from "../context/alert/alertContext";
import {Alert} from "./Alert";


export const List = ({visibleNotes, changeImportant, changeDone}) => {
    const {removeNote, loading, showModal, notes} = useContext(NotesContext)
    const {show} = useContext(AlertContext)
    return (
        <div>
            {
                notes.length === 0
                    ? <div className="alert alert-primary">
                        You don't have any added notifications. Add the first entry.
                    </div>
                    : <ul className="list-group mt-2">
                        {
                            visibleNotes.map((el, i) => (
                                <li key={el.id} className="list-group-item list-note">
                                    <div className="d-flex align-items-center">
                                        <div onClick={() => changeDone(el.id)}
                                             className={`list-title ${el.important ? 'important-item' : ''} ${el.done ? 'done-item' : ''}`}>{el.title}</div>
                                        <small>{new Date(el.date).toLocaleString()}</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="mr-2">
                                            <button className="btn btn-outline-primary"
                                                    onClick={() => showModal(el.id, el.title)}>
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div className="mr-2">
                                            <button
                                                className={`btn ${el.important ? 'btn-success' : 'btn-outline-success'}`}
                                                onClick={() => changeImportant(el.id)}>
                                                <i className="fa fa-exclamation"></i>
                                            </button>
                                        </div>
                                        <div className="">
                                            <button className="btn btn-outline-danger" onClick={() => removeNote(el.id)}>
                                                <i className="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

