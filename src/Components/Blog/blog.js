import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [blogData, setBlogData] = useState(null);
  
  useEffect(() => {
    const data = location.state?.blogData;
    if (!data) {
      navigate('/feed');
      return;
    }
    setBlogData(data);

    // If image wasn't pre-loaded in Feed, load it here
    if (!data.imageLoaded) {
      const img = new Image();
      img.src = data.image;
      img.onload = () => setImageLoaded(true);
    } else {
      setImageLoaded(true);
    }
  }, [location.state, navigate]);

  if (!blogData) {
    return null;
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <img 
          src="https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453591/Deblog/Deblog.png"
          alt="Logo" 
          className="blog-logo"
          onClick={() => navigate('/feed')}
        />
        <div className="author-tag">NAT</div>
      </div>
      
      <div className="blog-content-card">
        <div className="blog-profile-section">
          <div 
            className={`blog-banner ${imageLoaded ? 'loaded' : ''}`}
            style={{ 
              backgroundImage: imageLoaded ? `url(${blogData.image})` : 'none'
            }}
          >
            {!imageLoaded && (
              <div className="loading-placeholder">
                Loading image...
              </div>
            )}
            <div className="blog-banner-overlay">
              <img
                src={blogData.authorImage}
                alt="Author"
                className="author-image"
                loading="lazy"
              />
              <div className="blog-title-section">
                <h1>{blogData.title}</h1>
                <p className="subtitle">{blogData.subtitle}</p>
              </div>
              <div className="blog-date">{blogData.date}</div>
            </div>
          </div>
        </div>

        <div className="blog-text-content">
          <p className="english-text">{blogData.content.english}</p>
          <p className="tamil-text">{blogData.content.tamil}</p>
          <p className="english-text">{blogData.content.additionalEnglish}</p>
          
          <div className="blog-author-signature">
            <span>- {blogData.authorName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;