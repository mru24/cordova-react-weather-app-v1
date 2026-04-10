import { useState,useEffect } from 'react';
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/currentWeatherComponent';

function App({coords}) {
  const [ units, setUnits ] = useState('metric');
  const [ current, setCurrent ] = useState(null);

  const config = {
    lat: coords?.lat || '53.53412623985714',
    lon: coords?.lng || '-1.1123927605090957',
    units: units,
    APIkey: 'f0ce22eb3cfa24b1b9be9e02ea65467d'
  }
  const getUnits = () => {
    units==='metric'? setUnits('imperial') : setUnits('metric');
  }
  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${config.lat}&lon=${config.lon}&units=${config.units}&appid=${config.APIkey}`)
      setCurrent(response.data.current)
      console.log(response.data);
    }

    getWeather()
  },[ units, config.lat, config.lon ])

  return (
    <>
      <h1>App ready</h1>
      <p>{coords ? `Lat: ${coords.lat}, Lng: ${coords.lng}` : "Locating..."}</p>
      { current && <CurrentWeather current={ current } />}

      <button onClick={getUnits}>Imperial</button>
    </>
  )
}

export default App