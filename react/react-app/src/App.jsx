import { useState,useEffect } from 'react';
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/currentWeatherComponent';

function App({coords}) {
  const [ weather, setWeather ] = useState([]);

  const config = {
    lat: '53.53412623985714',
    lon: '-1.1123927605090957',
    units: 'metric',
    APIkey: 'f0ce22eb3cfa24b1b9be9e02ea65467d'
  }
  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${config.lat}&lon=${config.lon}&appid=${config.APIkey}`)
      setWeather(response.data);
      console.log(response.data);
    }
    getWeather()
  },[])

  return (
    <>
      <h1>App ready</h1>
      <p>{coords ? `Lat: ${coords.lat}, Lng: ${coords.lng}` : "Locating..."}</p>
      <CurrentWeather current={ weather.current } />
    </>
  )
}

export default App