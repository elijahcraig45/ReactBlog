
import React from 'react';
import pdfResume from './pdfs/resume_76.pdf';
import '../App.css';
function About() {
  return (
    <div className="About">
      <header className="about-header">
      </header>
      <h1>Henry Craig</h1>
      <p>Henry Craig is a recent graduate from the Georgia Institute of Technology with a Bachelor of Science in Computer Science. As a Zell Miller Scholar, he concentrated in People and Media, which has equipped him with valuable skills in leadership, problem solving, attention to detail, critical thinking, and public speaking.

Henry has experience working in different industries, including software engineering, production, civil engineering, and research. He has worked with various tools and languages, such as Python, Git, ReactJS, GraphQL, Java, C, SQL, Excel, MATLAB, and Dash. He has also used his musical talents in Alto Saxophone, Guitar, Bass, Piano, and Banjo to engage with his community.

Currently, Henry is available for music lessons, tutoring, and any other projects that require his diverse set of skills. He has worked on several projects that showcase his ability to apply machine learning, data analysis, and software development to real-world problems. Some of these projects include the Poultry Health Statistics Dashboard, Homerun Prediction Modeling, Movie Recommendation System using Machine Learning, Text Sentiment Analysis using Machine Learning, and Home Value Prediction Modeling.

Apart from his technical expertise, Henry has also been involved in different activities and leadership roles. As a High School Small Group Leader at Decatur City Church, he led group discussions among high school students. At Theta Xi Fraternity, he served as the Risk Management Chair and Sustainability Chair, where he educated members on safe practices and promoted sustainable practices, including recycle and reuse programs. As a Student Leadership Team/Vice President at Westminster Christian Fellowship, he organized events, building renovations, and retreats for a college community, and designed fliers and made promotional videos for various events.

If you're looking for someone with a wide range of skills, Henry Craig is your go-to person. He is available for music lessons, tutoring, and any other projects that require his skills and experience.</p>
<div id='aboutLinks' style={{display : 'flex' ,alignItems: 'center', justifyContent: 'center'}}>
  <embed src={pdfResume} type="application/pdf" width="58%" height="1000px" />
</div>

    </div>
  );
}

export default About;
