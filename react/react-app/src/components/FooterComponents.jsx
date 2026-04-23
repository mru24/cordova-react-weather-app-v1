

import './FooterComponent.css'

function Footer({getUnits,units,coords}) {

  return (
    <div className="footer">
      <button onClick={getUnits}>
        {units==='metric'?'Imperial':'Metric'}
      </button>
      <div className="data">
        <small>{coords ? `Lat: ${coords.lat}, Lng: ${coords.lng}` : "Locating..."}</small>
      </div>
    </div>
  )
}

export default Footer