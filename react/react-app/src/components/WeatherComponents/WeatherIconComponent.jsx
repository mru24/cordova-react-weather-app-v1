import { getUnitLabels } from '../Functions'

function WeatherIcon({ icon, size, units }) {
  let iconSize = '';
  size === 2 ? iconSize = '@2x' : iconSize = '';
  console.log(icon);

  const localPath = `/icons/weather-conditions/${icon}.svg`;
  const remotePath = `https://openweathermap.org/img/wn/${icon}${iconSize}.png`;
  console.log(localPath);

  return (
    <div className="flex direction-column align-items-center">
      <img
        src={localPath}
        onError={(e) => {
          e.currentTarget.src = remotePath;
          e.currentTarget.onerror = null; // prevents infinite loops
        }}
        alt="weather condition" />
    </div>
  )
}

export default WeatherIcon;