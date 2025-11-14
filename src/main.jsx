import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './theme.css' // Import theme variables first
import './app.css' // Import main styles
import './prism-theme.css' // Import local prism theme
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)