import { useState, useEffect } from 'react'
import { getUnitLabels } from '../Functions'
import SlickSlider from '../SlickSliderComponent'
import Temp from '../WeatherComponents/TempComponent';
import WeatherIcon from '../WeatherComponents/WeatherIconComponent';

import './CurrentWeatherComponent.css'

function CurrentWeather({ current, units }) {
  const [rotation, setRotation] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const s = now.getSeconds();
      const m = now.getMinutes();
      const h = now.getHours();
      setRotation({
        seconds: s * 6, // 6 degrees per second
        minutes: m * 6 + (s * 0.1), // 6 degrees per minute + tiny nudge for seconds
        hours: (h % 12) * 30 + (m * 0.5) // 30 degrees per hour + nudge for minutes
      })
    }
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const label = getUnitLabels(units);
  let isDay = false;
  const timestamp = Date.now();
  if (timestamp > current.sunrise * 1000 && timestamp < current.sunset * 1000) {
    isDay = true;
  }

  if (!current) return <p>Loading weather...</p>

  return (
    <div className="current-weather">
      <div className="spacer my-3"></div>
      <div className="px-3 py-5">
        <div className="current-weather-time" style={{ backgroundColor: isDay ? '#32609e' : '#162a45', borderColor: isDay ? '#fb3737' : '#9d0505' }}>
          <div id="hours" style={{ transform: `rotate(${rotation.hours}deg)` }}></div>
          <div id="minutes" style={{ transform: `rotate(${rotation.minutes}deg)` }}></div>
          <div id="seconds" style={{ transform: `rotate(${rotation.seconds}deg)` }}></div>
          <div className="content">
            <div className="row text-center pt-3">
              <div className="flex justify-content-center w-100">
                <WeatherIcon icon={current.weather[0].icon} size={2} units={units} />
              </div>
            </div>
            <div className="row pb-4 text-center mt--3">
              <div className="col">
                <div className="">
                  <h1 className="fs-3">
                    <Temp temp={current.temp} units={units} />
                  </h1>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col flex direction-column justify-content-center">
                <div className="fs-5">
                  <p style={{ marginTop: "-15px" }} className="text-center">{current.weather[0].main}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="current-weather-slider">
        <SlickSlider target={'currentOverview'} current={current} units={units} />
      </div>
    </div>
  )
}

export default CurrentWeather