// Feed.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Edit } from 'lucide-react';
import './feed.css';
import dish from '../images/dish.jpeg';
import clevenat from '../images/clevenat.jpg';
import iris from '../images/iris.JPG';
import milkyway from '../images/milkyway.jpg';
import jam from '../images/jam.JPG';
import dir from '../images/ram beuaty.jpg';

const Feed = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: 'Things about Mona Nisa',
      image: clevenat,
      size: 'large'
    },
    {
      id: 2,
      title: 'Journey of iris and the pupil',
      image: iris,
      size: 'medium'
    },
    {
      id: 3,
      title: 'Milk behind The Milky way',
      image: milkyway,
      size: 'large'
    },
    {
      id: 4,
      title: 'Facts behind Jam',
      image: jam,
      size: 'medium'
    },
    {
      id: 5,
      title: 'Manifesting Wisdom',
      image: dir,
      size: 'medium'
    },
    {
      id: 6,
      title: 'Power of Astrophotography',
      image: dish,
      size: 'medium'
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const NatLogo = () => (
    <div className="nat-logo">NAT</div>
  );

  const Card = ({ post }) => (
    <div className={`card ${post.size}`}>
      <img src={post.image} alt={post.title} />
      <div className="card-content">
        <h2 className="card-title">{post.title}</h2>
      </div>
      <NatLogo />
    </div>
  );

  return (
    <div className="feed-container">
      <div className="header">
        <div className="search-write-container">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search memoirs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button 
            className="write-button"
            onClick={() => navigate('/createBlog')}
          >
            <Edit className="write-icon" />
            Write
          </button>
        </div>
      </div>
      <div className="feed-grid">
        {filteredPosts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;