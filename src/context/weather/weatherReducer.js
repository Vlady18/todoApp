import {} from './actions'
import {FETCH_WEATHER, TOGGLE_LOADER} from "./actions";

const handlers = {
    [TOGGLE_LOADER]: (state, {bool})=>({
        ...state,
        loading: bool
    }),
    [FETCH_WEATHER]: (state, {payload})=>({
        ...state,
        main: payload.main,
        weather: payload.weather,
        name: payload.name,
        loading: false
    }),
    DEFAULT: state => state
}

export const weatherReducer = (state, action)=>{
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}
