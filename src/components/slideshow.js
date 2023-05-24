import React, { useState } from 'react';
import './slideshow.css';
import { NavLink } from 'react-router-dom';

const Slideshow = ({ blogPosts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % blogPosts.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? blogPosts.length - 1 : prevSlide - 1
    );
  };

  const currentBlogPost = blogPosts[currentSlide];

  return (
    <div className="slideshow">
      {blogPosts.map((blogPost, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentSlide ? 'active' : 'inactive'
          }`}
        >
          <NavLink to={`/blogPosts/${currentBlogPost.slug}`}>
            <img
              className="wallpaper"
              src={currentBlogPost.wallpaperImage}
              alt="Blog Wallpaper"
            />
            <h2 className="title">{currentBlogPost.title}</h2>
          </NavLink>
        </div>
      ))}
      <button className="prev-button" onClick={handlePrevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slideshow;
