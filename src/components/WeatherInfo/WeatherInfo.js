import React, {useContext} from 'react'
import {WeatherContext} from "../context/weather/weatherContext";
import {Loading} from "./Loading";


export const WeatherInfo = () => {
    const {main, weather, name} = useContext(WeatherContext)
    const imageUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png` || '';
    if(main === null){
        return null
    }
    return (
        <div>
            <h5>{name}</h5>
            <div className="">
                <img src={imageUrl} alt=""/>
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