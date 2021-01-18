import React, {useContext} from 'react'
import {WeatherForm} from "../components/WeatherForm";
import {WeatherInfo} from "../components/WeatherInfo";
import {WeatherContext} from "../context/weather/weatherContext";
import {Loading} from "../components/Loading";


export const Weather = ()=>{
    const {loading} = useContext(WeatherContext)
    return(
        <div>
            <h1>Check weather in your city!</h1>
            <WeatherForm />
            {
                loading ? <Loading /> : <WeatherInfo />
            }
        </div>
    )
}