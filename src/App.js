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
      <div className='bio'>
        <h1>Welcome!</h1>
        
        <p>Welcome to my website! This is a work in progress site for me to showcase my programming skills and store blog posts. This website was created by me using the React.js framework. For more information on my professional skills, please see the professional resume on my about page.</p>
      </div>
      <Slideshow blogPosts={blogPosts}/>
    </div>
  );
}


export default App;
