import React, {useContext, useReducer, useState} from 'react'
import {NotesContext} from './notesContext'
import {notesReducer} from "./notesReducer";
import {
    ADD_NOTE,
    REMOVE_NOTE,
    FETCH_NOTE,
    TOGGLE_LOADER,
    EDIT_NOTE,
    SHOW_EDIT,
    HIDE_EDIT,
    FILTER_NOTE, CHANGE_PROPERTY
} from "./actions";
import axios from 'axios'
import {AlertContext} from "../alert/alertContext";

// const url = process.env.REACT_APP_DB_URL;
const url = 'https://react-todo-4c518-default-rtdb.firebaseio.com';
// debugger

export const NoteState = ({children}) => {

    const {show, hide} = useContext(AlertContext)

    const [state, dispatch] = useReducer(notesReducer, {
        notes: [],
        loading: false,
        edit: false,
        editId: '',
        editValue: '',
        // filterText: ''
    })

    const [filterText, setFilterText] = useState('');

    const filterHandler = (notes)=>{
        const newArr = notes.filter((el, i) => el.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
        if(filterText === ''){
            return notes
        }
        return newArr
    }

    const visibleNotes = filterHandler(state.notes);

    const filterSearch = (text)=>{
        // visibleNotes = filterHandler(state.notes, value)
        setFilterText(text.trim())
    };


    const changeProperty = async (id, prop)=>{
        try {
            const idx = state.notes.findIndex((el)=>el.id === id);
            const oldItem = state.notes[idx];
            const newItem = {...oldItem, [prop]: !oldItem[prop]}
            const res = await axios.put(`${url}/notes${id}.json`, newItem);
            dispatch({
                type: CHANGE_PROPERTY,
                notes: [
                    ...state.notes.slice(0, idx),
                    newItem,
                    ...state.notes.slice(idx + 1),
                ]
            })
        } catch (e) {
            show('Извините! Что-то пошло не так. Повторите попытку позже!', 'danger');
        }
    }

    const toggleLoading = (bool)=>{
        dispatch({
            type: TOGGLE_LOADER,
            bool
        })
    }



    const fetchNotes = async () => {
        toggleLoading(true)
        const res = await axios.get(`${url}/notes.json`);
        if(res.data){
            const payload = Object.keys(res.data).map((el, i)=>{
                return {
                    ...res.data[el],
                    id: el
                }
            })
            dispatch({
                type: FETCH_NOTE,
                payload
            })
            toggleLoading(false)
        }else {
            toggleLoading(false)
        }
    }

    const addNote = async (title) => {
        const note = {
            title,
            important: false,
            done: false,
            date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {
                ...note,
                id: res.data.name
            }
            dispatch({
                type: ADD_NOTE,
                payload
            })
            show('Заметка успешно добавлена!', 'success')
        } catch (e) {
            show('Извините! Что-то пошло не так. Повторите попытку позже!', 'danger')
            // throw new Error();
        }

    }
    const removeNote = async (id) => {
        try{
            const res = await axios.delete(`${url}/notes/${id}.json` )
            dispatch({
                type: REMOVE_NOTE,
                id
            })
        } catch{
            throw new Error();
        }
    }
    const editNote = async (id, title)=>{
        const note = {
            title,
            important: false,
            done: false,
            date: new Date().toJSON()
        }
        const idx = state.notes.findIndex(el => el.id === id);
        const oldItem = state.notes[idx];
        const newItem = {...oldItem, title}
        const res = await axios.put(`${url}/notes/${id}.json`, note)
        console.log(res)
        dispatch({
            type: EDIT_NOTE,
            notes: [
                ...state.notes.slice(0, idx),
                newItem,
                ...state.notes.slice(idx + 1)
            ]
        })
    }

    const showModal = (id) => {
        dispatch({
            type: SHOW_EDIT,
            editId: id,
        })
    }
    const hideModal = () => {
        dispatch({
            type: HIDE_EDIT,
        })
    }

    return (
        <NotesContext.Provider value={{
            addNote, fetchNotes, removeNote, hideModal, showModal, filterText, filterSearch, editNote,
            visibleNotes: visibleNotes, notes: state.notes, loading: state.loading, edit: state.edit,
            editId: state.editId, changeProperty
        }}>
            {children}
        </NotesContext.Provider>
    )
}