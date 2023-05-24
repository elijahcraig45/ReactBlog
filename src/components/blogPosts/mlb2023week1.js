import React from 'react';

const mlb2023week1 = () => {
  return (
    <div>
      <h1>MLB Stat Analysis 2023 Week 1</h1>
      <p>
        The first week of the 2023 MLB regular season has ended, and we are about 4.3% of the way through the season
        (about 7 games for each team out of 162). My love for baseball and data have inspired me to do some weekly
        (assuming I stay committed) analysis of some random numbers and see what trends I can find. This first week I am
        just getting my feet wet after a long day, so it may be a little sporadic, but the hope is over the next few
        months I will be able to sharpen my analysis skills and maybe find some fun insights in the world of baseball.
      </p>

      <h2 className="">Early Season Batting Trends - Launch Angle, Exit Velocity, and HR</h2>

      <div className="">
        <div className="" style={{ flexBasis: '100%' }}>
          <p>
            Over the past few years, we have seen lots of controversy about juiced balls and deadened balls causing more
            and less HR from year to year, and with MLB's new rule changes attempting to make the game more action-packed,
            I am curious to see how the number of HR this year compares to the numbers from last year and the years of the
            presumably "juiced" baseballs. After week one, we have a limited sample size for data, but we can still
            extrapolate and make some wild claims.
          </p>

          <figure className="image">
            <a href="https://public.tableau.com/static/images/we/week1_2023_baseball/Dashboard1/1_rss.png" target='_blank' rel='noreferrer'>
              <img
                src="https://public.tableau.com/static/images/we/week1_2023_baseball/Dashboard1/1_rss.png"
                alt="Dashboard 1"
              />
            </a>
          </figure>

          <p>
            So, as we can see above, Launch Angle has started a little lower in 2023 than the average across all of 2022.
            It is still early in the season though, so a lot of players may still be finding their groove and getting back
            into playing every day. Look for this number to go up week to week. Exit velocity is not significantly lower
            this year than it averaged last year, so players are still hitting the ball just as hard on average. Now, in
            all of last year there were 5,215 HR hit. So far this year there have been about 230 HR hit. Assuming we are
            a generous 5% of the way through the season, that means we will see 4600 HR this year (230*20), which is
            about 615 less than last year. This may be because there is no shift, so we could see launch angle remain low
            and more teams playing small ball. It could also just be too early for players to be hitting lots of HR. Time
            will tell…
          </p>
        </div>
      </div>

      <h2 className="">Early Season Pitching Trends</h2>

      <div className="">
        <div className="" style={{ flexBasis: '100%' }}>
          <p>
            Early season pitching can be especially volatile. Some pitchers are still trying to adjust to the new pitch
            clock, while others may be coming back from injury or joining a new team. Since it's still early in the season,
            look for unexpected changes among the most notable players.
          </p>

          <figure className="image">
            <img
              src="https://etsadventure.files.wordpress.com/2023/04/2023_pitcher_bbxso.png?w=1024"
              alt=""
              className="image"
            />
          </figure>

          <p>
            I want to start this discussion looking at strikeout rates and walk rates. I made a nice little baseball
            savant chart to show the general trends of these two attributes for the qualified pitchers so far. Starting
            with the outliers, Jacob deGrom currently leads the way in strikeout %, while boasting a BB% of just 5%. So
            far this year, despite the small sample size, he is on pace to keep the same efficiency he boasted last
            season. However, he also struggled a bit in his first two starts, and he currently has an ERA of 5.59 over 9.2
            innings pitched with the Rangers. Given his strikeout and walk rates are about the same as last year, while
            his hits allowed and ERA are way up, Jacob will be one to watch this season as he adjusts to a new team.
            <br />
            Among qualified pitchers, the highest BB% at the end of last year was 10.4% by Dylan Cease. So far this year,
            the highest BB% is 28.9% by Jack Flaherty. I think it is safe to say that free bases have been up this year
            so far, with some big names showing high BB% early (Flaherty, Bumgarner, Ohtani, Strider, etc.) I am looking
            for fewer walks and more strikes as pitchers adjust to the new season and new rule changes.
          </p>

          <p>Next week we will look at an update of the above stats and some new trends as we dig deeper into the season!</p>
        </div>
      </div>
    </div>
  );
};

export default mlb2023week1;
