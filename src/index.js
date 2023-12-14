import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
      {/* <Navbar_head/> */}
      <App />
      </BrowserRouter>
      
    </React.StrictMode>
  </div>
);

reportWebVitals();
