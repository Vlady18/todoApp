import React, {useContext, useState} from 'react'
import {NotesContext} from "../context/Notes/notesContext";

export const FilterForm = ()=>{
    const {filterSearch, filterText} = useContext(NotesContext)
    return(
        <form>
            <div className="input-group">
                <input type="text" className="form-control" value={filterText} onChange={(e)=>filterSearch(e.target.value)} placeholder="Search..." />
            </div>
        </form>
)
}