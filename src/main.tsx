import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EraProvider } from './context/EraContext';
import { SearchProvider } from './context/SearchContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EraProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </EraProvider>
  </React.StrictMode>
);
