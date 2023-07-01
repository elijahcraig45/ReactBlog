import './page.css'

import React from 'react';

const GoalList = () => {
  const fitnessGoals = [
    'Run a 5k in under 30 minutes',
    'Run a 5k in under 25 minutes',
    'Run a mile in under 7 minutes w/ no rests (best: 8:00)',
    'Run a mile in under 10 minutes w/ no rests',
    'Do 20 pushups w/o breaks',
    'Do 10 Pull-ups w/o breaks',
    'Bench/squat/dead-lift my body weight',
    'Freestyle swim ½ mile w/o breaks',
    'Cycle 5 miles at 15 mph or more',
    'Drink a half gallon of water a day for a week (cut out all other drinks)',
    'Health Goal: Include more fruits into my diet',
    'Health Goal: Reduce sugar intake',
  ];

  const adventureGoals = [
    'Raft down the Colorado River',
    'Climb a 50ft wall outdoors',
    'White water kayak the Nantahala',
    'Hike ¼ of the Appalachian Trail',
    'Play a round of golf within 20 strokes of par',
    'Play a round of disc golf within 20 strokes of par',
  ];

  const educationGoals = [
    'Finish bachelors w/ less than $35,000 in debt',
    'Finish masters w/ full-time job ($100,000+ annually)',
  ];

  const financialGoals = [
    'Be debt-free within 1.5 years after college',
    'Own my own house',
    'Be a millionaire by age 30',
    'Personally support a missionary overseas',
  ];

  return (
    <div>
      <h2>Fitness Goals</h2>
      <ul>
        {fitnessGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>

      <h2>Adventure Goals</h2>
      <ul>
        {adventureGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>

      <h2>Education Goals</h2>
      <ul>
        {educationGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>

      <h2>Financial Goals</h2>
      <ul>
        {financialGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};



function ImpossibleList() {
    return (
      <div className="Impossible">
        <header className="Impossible-header">
        </header>
        <h1>Impossible List</h1>
        <p>I've never really had a bucket list. I've done a few things that could go on a bucket list, but most of my long-term goals require building up to the larger goal. So to avoid delayed gratification in achieving these goals, I decided to make my Impossible list. I got this idea from collegeinfogeek.com (who got it from somebody else) and I figured it would serve as a good goal system to push me to do more. I'll do my best to keep it updated. For more info on how to do something like this yourself, and how it differs from a bucket list, try these sources:
        <br /><a href="https://collegeinfogeek.com/about/meet-the-author/my-impossible-list/" target='_blank' rel='noreferrer'>collegeinfogeek.com</a> 
        <br /><a href="https://impossiblehq.com/impossible-list/" target='_blank' rel='noreferrer'>Impossiblehq.com</a> </p>
        <GoalList />
      </div>
    );
  }
  
  export default ImpossibleList;
  