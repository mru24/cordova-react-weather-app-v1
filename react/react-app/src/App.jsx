import './App.css'

function App({coords}) {

  return (
    <>
      <h1>App ready</h1>
      <p>{coords ? `Lat: ${coords.lat}, Lng: ${coords.lng}` : "Locating..."}</p>
    </>
  )
}

export default App