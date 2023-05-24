import React from 'react';
import { Link } from 'react-router-dom';


const BlogList = () => {
  var blogPosts = [
    { id: 1, title: 'Generalist\'s Mentality', slug: 'generalists_mentality', wallpaperImage: './components/images/placeholder.jpeg' },
    { id: 2, title: 'MLB 2023 Week 1', slug: 'mlb2023week1', wallpaperImage: './components/images/placeholder.jpeg' },
    { id: 3, title: 'Wisdom of Rest', slug: 'restWisdom', wallpaperImage: './components/images/placeholder.jpeg' },
  ];
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blogPosts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
