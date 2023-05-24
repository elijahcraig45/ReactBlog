import React from 'react';
import './App.css';
import Slideshow from './components/slideshow';

import placeholder from './components/images/placeholder.jpeg';
import mlbweek1wallpaper from './components/images/mlbWeekOne.png';

var blogPosts = [
  { id: 1, title: 'Generalist\'s Mentality', slug: 'generalists_mentality', wallpaperImage: placeholder },
  { id: 2, title: 'MLB 2023 Week 1', slug: 'mlb2023week1', wallpaperImage: mlbweek1wallpaper },
  { id: 3, title: 'Wisdom of Rest', slug: 'restWisdom', wallpaperImage: placeholder},
];


function App() {
  return (
    <div >
      <Slideshow blogPosts={blogPosts}/>
    </div>
  );
}


export default App;
