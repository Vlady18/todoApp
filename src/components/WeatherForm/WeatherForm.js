import React, {useContext, useState} from 'react'
import {WeatherContext} from "../../context/weather/weatherContext";
import classes from './weatherForm.module.css'


export const WeatherForm = ()=>{

    const {searchWeather, defaultCities} = useContext(WeatherContext)

    const [city, setCity] = useState('')

    const formSubmitHandler = (e)=>{
        e.preventDefault()
        searchWeather(city)
        setCity('')
    }

    const formSubmitDefaultCities = (citydef)=>{
        searchWeather(citydef)
        setCity('')
    }



    return(
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <ul className={classes.defaultCities}>
                {
                    defaultCities.map(function(el, i){
                        return <li key={el + i} className="" style={{'marginRight': '5px'}} onClick={()=>formSubmitDefaultCities(el)}>
                                {el}
                        </li>
                    })
                }
            </ul>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter city"
                       value={city} onChange={(e)=> setCity(e.target.value)} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" id="button-addon2"><i className="fa fa-search"></i></button>
                    </div>
            </div>
        </form>
    )
}