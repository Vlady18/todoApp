import React, {useContext, useEffect, useState} from 'react'
import {WeatherContext} from "../../context/weather/weatherContext";
import {Loading} from "../Loading";
import classes from './weather.module.css'

export const WeatherInfo = () => {

    const {main, weather, name, searchWeather} = useContext(WeatherContext)
    const imageUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png` || '';
    if(main === null){
        return null
    }

    const changeUnits = (units)=>{
        searchWeather(name, units)
    }


    return (
        <div className={classes.weatherInfo}>
            <h5>{name}</h5>
            <div className="">
                <img src={imageUrl} alt=""/>
            </div>
            <div>
                <button className="btn btn-dark" style={{'marginRight': '5px'}} onClick={()=>changeUnits('metric')}>&#8451;</button>
                <button className="btn btn-dark" onClick={()=>changeUnits('imperial')}>
                    &#8457;</button>
            </div>
            <ul>
                {
                    Object.keys(main).map((el, i) => {
                        return (
                            <li>
                                <strong>{el}: </strong> {Math.round(main[el])}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}