import React, {useState} from 'react';
import CityForm from "./city-form";
import Weather from "./weather";
import './main.css'
import Error from "./error";
function Main() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('')

    return (
        <div className='app'>
        <div className='weather'>
            <CityForm setWeatherData={setWeatherData} setCity={setCity} city={city} weatherData={weatherData}/>
            {
                Object.keys(weatherData).length === 0 ? 'Тут будет погода' : weatherData.error ? <Error/>: <Weather weatherData={weatherData}/>
            }
        </div>
        </div>
    );
    }


export default Main;


//580eb32c5fb0c0c4ff2bf026fa3f4eb1