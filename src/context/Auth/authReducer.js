import {
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    LOGIN,
    LOGOUT,
} from "./actions";

const handlers = {
    [AUTH_SUCCESS]: (state, {token})=>({
        ...state,
        token
    }),
    [AUTH_LOGOUT]: (state, {token})=>({
        ...state,
        token: null
    }),



    DEFAULT: state => state
}

export const authReducer = (state, action)=>{
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}
