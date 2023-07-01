import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import placeholder from './images/placeholder.jpeg';
import wisdomRest from './images/wisdomRest.png';
import mlbweek1wallpaper from './images/mlbWeekOne.png';
import generalistMentality from './images/generalistsMentality.png';

import './blogList.css';

const BlogPostItem = ({ id, title, slug, wallpaperImage, datePosted }) => {
  const formattedDate = format(parseISO(datePosted), 'yyyy-MM-dd');

  return (
    <li>
      <Link to={`/blogPosts/${slug}`}>
        <div className="blog-post-item">
          <img className="wallpaper-image" src={wallpaperImage} alt={title} />
          <div className="blog-post-title">{title}</div>
        </div>
      </Link>
    </li>
  );
};

const BlogList = () => {
  const blogPosts = [
    { id: 1, title: "Generalist's Mentality", slug: 'generalists_mentality', wallpaperImage: generalistMentality, datePosted: '2023-04-05' },
    { id: 2, title: 'MLB 2023 Week 1', slug: 'mlb2023week1', wallpaperImage: mlbweek1wallpaper, datePosted: '2023-05-07' },
    { id: 3, title: 'Wisdom of Rest', slug: 'restWisdom', wallpaperImage: wisdomRest, datePosted: '2023-05-11' },
  ];

  const sortedBlogPosts = blogPosts.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));

  return (
    <div>
      <h1>Blog Posts:</h1>
      <ul className="blog-post-list">
        {sortedBlogPosts.map((post) => (
          <BlogPostItem key={post.id} {...post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
