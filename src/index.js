import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Resume from './components/resume';
import About from './components/about';
import Navbar from './components/navbar'; // Import the Navbar component
import ImpossibleList from './components/impossibleList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Add the Navbar component outside the Routes */}
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/impossible" element={<ImpossibleList />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
