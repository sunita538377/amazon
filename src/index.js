import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SongContextProvider from './context/songContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <SongContextProvider>
    <App />
  </SongContextProvider>
  // </React.StrictMode>
);

