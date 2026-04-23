import {getUnitLabels,formatTime,formatDate} from './Functions'
import './HourComponent.css'

function Hour({hour,units}) {
  const label = getUnitLabels(units);
  return (
    <div>
      <p>{ formatDate(hour.dt)}</p>
      <p>{ formatTime(hour.dt)}</p>
      { hour.temp }{label.temp}
    </div>
  )
}

export default Hour;