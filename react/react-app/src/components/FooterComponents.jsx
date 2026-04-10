

import './FooterComponent.css'

function Footer({getUnits,units,coords}) {
  console.log(" units: ",units);

  return (
    <div className="footer">
      <button onClick={getUnits}>Imperial</button>
      <div className="data">
        <small>{coords ? `Lat: ${coords.lat}, Lng: ${coords.lng}` : "Locating..."}</small>
      </div>
    </div>
  )
}

export default Footer