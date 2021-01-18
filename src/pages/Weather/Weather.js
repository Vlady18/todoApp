import React, {useContext} from 'react'
import {WeatherForm} from "../../components/WeatherForm/WeatherForm";
import {WeatherInfo} from "../../components/WeatherInfo/WeatherInfo";
import {WeatherContext} from "../../context/weather/weatherContext";
import {Loading} from "../../components/Loading";
import classes from './weather.module.css'


export const Weather = ()=>{
    const {loading} = useContext(WeatherContext)
    return(
        <div className={classes.weatherPage}>
            <div className="container">
                <h1 className="text-center mt-5">Check weather in your city!</h1>
                <WeatherForm />
                {
                    loading ? <Loading /> : <WeatherInfo />
                }
            </div>
        </div>
    )
}