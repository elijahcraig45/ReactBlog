import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/about';
import Navbar from './components/navbar'; // Import the Navbar component
import ImpossibleList from './components/impossibleList';

import GeneralistsMentality from './components/blogPosts/generalistsMentality';
import Mlb2023week1 from './components/blogPosts/mlb2023week1';
import BlogList from './components/blogList';
import RestWisdom from './components/blogPosts/restWisdom';
import WeatherMap from './components/weatherMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reactBlog" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blogPosts/generalists_mentality' element={<GeneralistsMentality />} />
        <Route path='/blogPosts/mlb2023week1' element={<Mlb2023week1 />} />
        <Route path='/blogPosts/restWisdom' element={<RestWisdom /> } />
        <Route path="/impossible" element={<ImpossibleList />} /> 
        <Route path="/Weather" element={<WeatherMap showTomorrowEmbed={false}/> } />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
