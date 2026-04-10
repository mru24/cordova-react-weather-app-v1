console.log("main.jsx loaded");

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App coords={null} />
  </StrictMode>
);

document.addEventListener('deviceready', () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      root.render(
        <StrictMode>
          <App coords={{
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }} />
        </StrictMode>
      );
    },
    (err) => {
      console.error("Geolocation failed:", err);
    }
  );
}, false);