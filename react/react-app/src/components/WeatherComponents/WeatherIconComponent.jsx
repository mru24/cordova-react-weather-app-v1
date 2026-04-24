import {getUnitLabels} from '../Functions'

function WeatherIcon({icon,size,units}) {
  let iconSize = '';
  size===2 ? iconSize='@2x' : iconSize=''
  return (
    <div className="flex direction-column align-items-center">
      <img src={`https://openweathermap.org/img/wn/${icon}${iconSize}.png`} />
    </div>
  )
}

export default WeatherIcon;