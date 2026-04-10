import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

const startApp = (coords = null) => {
  root.render(
    <StrictMode>
      <App coords={coords} />
    </StrictMode>
  );
};

document.addEventListener('deviceready', () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      startApp({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    },
    (err) => {
      console.error(err);
      startApp();
    }
  );
}, false);