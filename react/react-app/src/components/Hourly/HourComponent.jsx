import { getUnitLabels, formatTime, formatDate } from '../Functions'
import Gusts from '../WeatherComponents/GustsComponent';
import PoP from '../WeatherComponents/PoPComponent';
import Pressure from '../WeatherComponents/PressureComponent';
import Temp from '../WeatherComponents/TempComponent';
import Wind from '../WeatherComponents/WindComponent'
import './HourComponent.css'

function Hour({ hour, units }) {
  const label = getUnitLabels(units);
  const rainVolume = hour.rain?.["1h"] || 0;
  const snowVolume = hour.snow?.["1h"] || 0;
  return (
    <div className="p-2 text-center">
      <p>{formatTime(hour.dt)}</p>
      <div className="flex direction-column align-items-center justify-content-center h-100">
        <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} />
        <p style={{ marginTop: "-5px", marginBottom: "5px" }}>{hour.weather[0].main}</p>
      </div>
      <Temp temp={hour.temp} units={units} />
      <Wind wind={hour.wind_speed} units={units} />
      <Gusts gusts={hour.wind_gust} units={units} />
      <Pressure pressure={hour.pressure} units={units} />
      <PoP pop={hour.pop} rain={rainVolume} snow={snowVolume} units={units} />
    </div>
  )
}

export default Hour;