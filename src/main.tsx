import React from 'react';
import ReactDOM from 'react-dom/client';
import Pages from './pages';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
);
