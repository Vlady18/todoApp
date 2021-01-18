import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import {TodoForm} from "../components/TodoForm";
import {List} from "../components/List";
import {Alert} from "../components/Alert";
import {NotesContext} from "../context/Notes/notesContext";
import {Loading} from "../components/Loading";
import {Modal} from "../components/Modal";
import {FilterForm} from "../components/FilterForm";

export const Home = () => {

    const {fetchNotes, loading, visibleNotes, changeProperty} = useContext(NotesContext)

    useEffect(() => {
        fetchNotes()
    }, []);

    const propertyToggle = (id, prop)=>{
        changeProperty(id, prop)
    }

    const changeImportant = (id)=>{
        propertyToggle(id, 'important')
    }

    const changeDone = (id)=>{
        propertyToggle(id, 'done')
    }

    return (
        <div className="container">
            <div className='mt-2'>
                <Alert/>
                {/*<FilterForm filterSearch={filterSearch} filterText={filterText} />*/}
                <Modal/>
                <TodoForm/>
                {
                    loading
                        ?
                        <Loading/>
                        :
                        <List visibleNotes={visibleNotes} changeImportant={changeImportant} changeDone={changeDone}/>
                }
            </div>
        </div>
    )
}