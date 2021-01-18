import React, {useContext, useState} from 'react'
import {WeatherContext} from "../context/weather/weatherContext";


export const WeatherForm = ()=>{

    const {searchWeather} = useContext(WeatherContext)

    const [city, setCity] = useState('')

    const formSubmitHandler = (e)=>{
        e.preventDefault()
        searchWeather(city)
        setCity('')
    }

    return(
        <form onSubmit={formSubmitHandler} className={}>
            <div className="input-group mt-3 mb-3">
                <input type="text" className="form-control" placeholder="Enter city"
                       value={city} onChange={(e)=> setCity(e.target.value)} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2"><i className="fa fa-search"></i></button>
                    </div>
            </div>
        </form>
    )
}