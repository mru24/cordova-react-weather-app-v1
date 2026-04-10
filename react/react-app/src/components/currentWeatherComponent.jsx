

function CurrentWeather({current}) {
  console.log("Current: ",current);

  if(!current) return <p>Loading weather...</p>

  return (
    <div className="current-weather">
      <h1>{ current.temp }</h1>
    </div>
  )
}

export default CurrentWeather