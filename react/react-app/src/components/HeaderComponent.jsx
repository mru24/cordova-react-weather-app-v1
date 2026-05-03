import { formatTime, formatDate } from './Functions'
import './HeaderComponent.css'

function Header({ data, units }) {
  const timezone = data?.timezone;
  const offset = data?.timezone_offset;
  const timestamp = data?.current.dt;

  return (
    <div className="header">
      <div className="row justify-content-space-between align-items-center">
        {timezone && <h4>{timezone}</h4>}
        {timestamp && <p className="text-right">{formatDate(timestamp)}  <strong>{formatTime(timestamp + offset - 3600)}</strong></p>}
      </div>
    </div>
  )
}

export default Header