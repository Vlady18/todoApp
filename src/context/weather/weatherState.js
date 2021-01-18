import React, {useReducer} from 'react'
import {WeatherContext} from "./weatherContext";
import axios from 'axios'
import {notesReducer} from "../Notes/notesReducer";
import {weatherReducer} from "./weatherReducer";
import {FETCH_WEATHER} from "./actions";
import {TOGGLE_LOADER} from "../Notes/actions";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const WeatherState = ({children})=>{

    const [state, dispatch] = useReducer(weatherReducer, {
        main: null,
        weather: [],
        name: '',
        loading: false,
        defaultCities: ['Kyiv', 'London', 'Paris'],
    })

    const toggleLoading = (bool)=>{
        dispatch({
            type: TOGGLE_LOADER,
            bool
        })
    }


    const searchWeather = async (city, units='metric')=>{
        toggleLoading(true)
        try{
            const res = await instance.get(`weather?q=${city}&units=${units}&appid=7bb0d4450f7d6addbe608642a58bcf7a`)
            dispatch({
                type: FETCH_WEATHER,
                payload: {
                    main: res.data.main,
                    weather: res.data.weather[0],
                    name: res.data.name
                }
            })
        }
        catch (e) {
            toggleLoading(false)
            dispatch({
                type: FETCH_WEATHER,
                payload: {
                    main: null,
                    weather: [],
                    name: '',
                }
            })
        }

    }
    return(
        <WeatherContext.Provider value={{
            searchWeather, main: state.main, weather: state.weather, name: state.name, loading: state.loading, defaultCities: state.defaultCities
        }}>
            {children}
        </WeatherContext.Provider>
    )
}