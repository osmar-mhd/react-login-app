// src/index.js
import React from 'react'; 
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el Router
import './assets/css/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router> {/* Envuelve tu App con el Router */}
            <App />
        </Router>
    </React.StrictMode>
);