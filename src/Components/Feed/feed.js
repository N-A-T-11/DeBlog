// Feed.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Edit } from 'lucide-react';
import './feed.css';

const Feed = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: 'Journey through artistic mastery',
      subtitle: 'Journey through artistic mastery',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453630/Deblog/sai.jpg',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453630/Deblog/sai.jpg',
      size: 'large',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453630/Deblog/sai.jpg',
      authorName: 'Nat',
      date: '12 November 2024'
    },
    {
      id: 2,
      title: 'Journey of iris and the pupil',
      subtitle: 'Exploring visual perception',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453633/Deblog/iris.jpg',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/c_thumb,w_400,h_300/v1732453633/Deblog/iris.jpg',
      size: 'medium',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/c_thumb,w_100,h_100/v1732453633/Deblog/iris.jpg',
      authorName: 'Nat',
      date: '11 November 2024'
    },

    {
      id: 3,
      title: 'Beauty of Director Ram',
      subtitle: 'Exploring visual perception',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453610/Deblog/ram.jpg',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453631/Deblog/ram.jpg',
      size: 'large',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/c_thumb,w_100,h_100/v1732453633/Deblog/iris.jpg',
      authorName: 'Nat',
      date: '11 November 2024'
    },

    {
      id: 4,
      title: 'Suing the stars ',
      subtitle: 'Exploring visual perception',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453697/Deblog/milkyway.jpg',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453697/Deblog/milkyway.jpg',
      size: 'large',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/c_thumb,w_100,h_100/v1732453633/Deblog/iris.jpg',
      authorName: 'Nat',
      date: '11 November 2024'
    },

    {
      id: 5,
      title: 'History of Jama',
      subtitle: 'Exploring visual perception',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453594/Deblog/Jama.png',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453594/Deblog/Jama.png',
      size: 'large',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/c_thumb,w_100,h_100/v1732453633/Deblog/iris.jpg',
      authorName: 'Nat',
      date: '11 November 2024'
    },

    {
      id: 6,
      title: 'Jamming the Jam',
      subtitle: 'Exploring visual perception',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453631/Deblog/Jam.jpg',
      
      size: 'large',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/c_thumb,w_100,h_100/v1732453633/Deblog/iris.jpg',
      authorName: 'Nat',
      date: '11 November 2024'
    },

    {
      id: 7,
      title: 'Love at Terrace',
      subtitle: 'Exploring visual perception',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453593/Deblog/Terrace.jpg',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453593/Deblog/Terrace.jpg',
      size: 'large',
      content: {
        english: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies. Tempor leo dignissim tellus mauris rhoncus nulla leo.',
        tamil: 'அவருரு நூற்று அருதும் தமிழும் அலகும் நாதும் ,அவையும் கூடும் அலகும் நாதும் தமழும் அலகும் அலகும் நாதும் வேரும்',
        additionalEnglish: 'Lorem ipsum dolor sit amet consectetur. Sagittis dolor ante in morbi enim neque ultricies.'
      },
      authorImage: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453631/Deblog/Jam.jpg',
      authorName: 'Nat',
      date: '11 November 2024'
    },
    
    // ... rest of the posts with similar structure
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostClick = (post) => {
    // Pre-load the full-size image before navigation
    const img = new Image();
    img.src = post.image;
    img.onload = () => {
      navigate(`/blog/${post.id}`, { 
        state: { 
          blogData: {
            ...post,
            imageLoaded: true 
          }
        } 
      });
    };
    // If image fails to load, navigate anyway
    img.onerror = () => {
      navigate(`/blog/${post.id}`, { 
        state: { 
          blogData: {
            ...post,
            imageLoaded: false
          }
        } 
      });
    };
  };

  const Card = ({ post }) => (
    <div className={`card ${post.size}`} onClick={() => handlePostClick(post)}>
      <img 
        src={post.image || post.image} 
        alt={post.title}
        loading="lazy"
      />
      <div className="card-content">
        <h2 className="card-title">{post.title}</h2>
      </div>
      <div className="nat-logo">NAT</div>
    </div>
  );

  return (
    <div className="feed-container">
      <div className="header">
        <div className="logo-search-write-container">
          <div className="logo-container">
            <img src="https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453591/Deblog/Deblog.png" alt="Site Logo" className="site-logo" />
          </div>
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