import React from 'react';
import axios from "axios";

const CityForm = ({setWeatherData, setCity, city, weatherData}) => {
    const API_KEY = '580eb32c5fb0c0c4ff2bf026fa3f4eb1';
    const getWeatherData = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => {
                setWeatherData(data)
            })
            .catch(() => {
                setWeatherData({...weatherData, error: true})
            })
    };
    const inputHandler = (e) => {
        setCity(e.target.value)
    };
    return (
        <div>
            <form action="" onSubmit={getWeatherData}>
                <input type="text" placeholder='Введите город'onChange={inputHandler}/>
                <button type='submit'>Узнать погоду</button>
            </form>
        </div>
    );
};

export default CityForm;