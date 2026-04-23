

function HourlyWeather({ current,hourly,units }) {
  return (
    <>
      {current.dt}
      { hourly.map((hour)=>(
        hour.dt
      ))}
      Hourly
    </>
  )
}

export default HourlyWeather;