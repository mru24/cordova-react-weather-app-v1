import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/currentWeatherComponent'
import Footer from './components/FooterComponents'
import Header from './components/HeaderComponent'

function App({coords}) {
  const [ units, setUnits ] = useState('metric')
  const [ data, setData ] = useState(null)
  const [ current, setCurrent ] = useState(null)

  const lat = coords?.lat || '53.53412623985714'
  const lon = coords?.lng || '-1.1123927605090957'
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getUnits = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  }

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`)
      setData(response.data)
      setCurrent(response.data.current)
      console.log(response.data)
    }
    getWeather()
  },[ units, lat, lon ])

  return (
    <>
      <Header data={data} units={units} />

      <div className="content">
        { current && <CurrentWeather current={ current } />}
      </div>

      <Footer getUnits={getUnits} units={units} coords={coords} />
    </>
  )
}

export default App