import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/CurrentWeatherComponent'
import Footer from './components/FooterComponents'
import Header from './components/HeaderComponent'
import SlickSlider from './components/SlickSliderComponent'

function App({coords}) {
  const [ units, setUnits ] = useState('metric')
  const [ data, setData ] = useState(null)
  const [ current, setCurrent ] = useState(null)
  const [ daily, setDaily ] = useState(null)
  const [ hourly, setHourly ] = useState(null)

  const lat = coords?.lat || import.meta.env.VITE_WEATHER_LAT
  const lon = coords?.lng || import.meta.env.VITE_WEATHER_LON
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const getUnits = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  }

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`)
      setData(response.data)
      setCurrent(response.data.current)
      setDaily(response.data.daily)
      setHourly(response.data.hourly)
      console.log(response.data)
    }
    getWeather()
  },[ units, lat, lon ])

  return (
    <>
      <Header data={data} units={units} />

      <div className="content">

        { current && <CurrentWeather current={ current } units={ units } />}

        { hourly && <SlickSlider target={'hourly'} current={ current } hourly={ hourly } units={ units } />}

        { daily && <SlickSlider target={'daily'} current={ current } daily={daily} hourly={ hourly } units={ units } />}

      </div>

      <Footer getUnits={getUnits} units={units} coords={coords} />
    </>
  )
}

export default App