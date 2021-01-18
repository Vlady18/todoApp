import {
    ADD_NOTE,
    REMOVE_NOTE,
    FETCH_NOTE,
    TOGGLE_LOADER,
    EDIT_NOTE,
    TOGGLE_EDIT,
    SHOW_EDIT,
    HIDE_EDIT,
    FILTER_NOTE, CHANGE_PROPERTY
} from './actions'

const handlers = {
    [TOGGLE_LOADER]: (state, {bool})=>({
        ...state,
        loading: bool
    }),
    [ADD_NOTE]: (state, {payload})=>({
        ...state,
        notes: [...state.notes, payload]
    }),
    [REMOVE_NOTE]: (state, {id})=>({
        ...state,
        notes: state.notes.filter((el)=> el.id !== id)
    }),

    [EDIT_NOTE]: (state, {notes})=>({
        ...state,
        edit: false,
        editId: '',
        notes: notes
    }),

    [SHOW_EDIT]: (state, {editId})=>({
        ...state,
        edit: true,
        editId
    }),
    [HIDE_EDIT]: (state, {editId})=>({
        ...state,
        edit: false,
        editId: ''
    }),
    [FETCH_NOTE]: (state, {payload})=>({
        ...state,
        notes: payload,
        loading: false
    }),
    [CHANGE_PROPERTY]: (state, {notes})=>({
        ...state,
        notes: notes,
    }),
    DEFAULT: state => state
}

export const notesReducer = (state, action)=>{
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}
