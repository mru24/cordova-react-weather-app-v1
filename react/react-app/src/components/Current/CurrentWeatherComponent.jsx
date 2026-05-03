import './currentWeatherComponent.css'
import SlickSlider from '../SlickSliderComponent'
import { getUnitLabels } from '../Functions'
import Temp from '../WeatherComponents/TempComponent';
import WeatherIcon from '../WeatherComponents/WeatherIconComponent';

function CurrentWeather({ current, units }) {

  const label = getUnitLabels(units);

  if (!current) return <p>Loading weather...</p>

  return (
    <div className="current-weather">
      <div className="current-weather-time">
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

      <div className="current-weather-slider">
        <SlickSlider target={'currentOverview'} current={current} units={units} />
      </div>
    </div>
  )
}

export default CurrentWeather