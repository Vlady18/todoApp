import {SHOW_ALERT, HIDE_ALERT} from './actions'

const handlers = {
    [SHOW_ALERT]: (state, {payload})=>({
        ...payload,
        visible: true
    }),
    [HIDE_ALERT]: (state, {payload})=>({
        ...state,
        visible: false
    }),
    DEFAULT: state => state
}

export const alertReducer = (state, action)=>{
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}
