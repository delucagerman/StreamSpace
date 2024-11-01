import React from 'react';
import ReactDOM from 'react-dom/client';
import { init } from '@noriginmedia/norigin-spatial-navigation';
import App from './App';
import './index.css';

// Inicializar la navegación espacial con configuración más específica
init({
  debug: true,
  visualDebug: true, // Esto nos ayudará a ver los elementos focusables
  shouldFocusRoot: true,
  defaultElement: 'LAYOUT_FOCUS_KEY',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
