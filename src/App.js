import React from 'react';
import './App.css';
import Slideshow from './components/slideshow';
// import placeholder from './components/images/placeholder.jpeg';
import wisdomRest from './components/images/wisdomRest.png';
import mlbweek1wallpaper from './components/images/mlbWeekOne.png';
import generalistMentality from './components/images/generalistsMentality.png';
import TomorrowIOEmbed from './components/tomorrowio';
  const blogPosts = [
    { id: 1, title: "Generalist's Mentality", slug: 'generalists_mentality', wallpaperImage: generalistMentality, datePosted: '2023-04-05' },
    { id: 2, title: 'MLB 2023 Week 1', slug: 'mlb2023week1', wallpaperImage: mlbweek1wallpaper, datePosted: '2023-05-07' },
    { id: 3, title: 'Wisdom of Rest', slug: 'restWisdom', wallpaperImage: wisdomRest, datePosted: '2023-05-11' },
  ];


function App() {
  return (
    <div >
      <TomorrowIOEmbed />
      <Slideshow blogPosts={blogPosts}/>
      
    </div>
  );
}


export default App;
