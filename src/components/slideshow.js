import React, { useState, useEffect } from 'react';
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

  const sortedBlogPosts = blogPosts.slice(0, 3).sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));

  const currentBlogPost = sortedBlogPosts[currentSlide];

  useEffect(() => {
    const handleResize = () => {
      const slideshow = document.querySelector('.slideshow');
      const screenWidth = window.innerWidth;
      slideshow.style.width = `${screenWidth}px`;

      const images = document.querySelectorAll('.wallpaper');
      images.forEach((image) => {
        image.style.width = `${screenWidth}px`;
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="slideshow">
      {sortedBlogPosts.map((blogPost, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentSlide ? 'active' : 'inactive'
          }`}
        >
          <NavLink to={`/blogPosts/${blogPost.slug}`}>
            <img
              className="wallpaper"
              src={blogPost.wallpaperImage}
              alt="Blog Wallpaper"
            />
            <h2 className="title">{blogPost.title}</h2>
          </NavLink>
        </div>
      ))}
      <button className="prev-button" onClick={handlePrevSlide}>
        {'<<<'}
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        {'>>>'}
      </button>
    </div>
  );
};

export default Slideshow;
