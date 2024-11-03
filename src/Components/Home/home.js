import React from 'react';
import './home.css';

const Home = () => {
  const images = [
    { id: 1, url: "../images/Thattan.jpg", alt: "Nature 1" },
    { id: 2, url: "https://github.com/N-A-T-11/DeBlog/blob/development/src/Components/images/forest.jpg", alt: "Landscape 1" },
    { id: 3, url: "/path/to/image3.jpg", alt: "Forest" },
    { id: 4, url: "/path/to/image4.jpg", alt: "Adventure" },
    { id: 5, url: "/path/to/image5.jpg", alt: "Nature 2" },
    { id: 6, url: "/path/to/image6.jpg", alt: "Portrait" },
    { id: 7, url: "/path/to/image7.jpg", alt: "Night sky" },
    { id: 8, url: "/path/to/image8.jpg", alt: "Typography" },
    { id: 9, url: "/path/to/image9.jpg", alt: "Landscape 2" },
    { id: 10, url: "/path/to/image10.jpg", alt: "Birthday" },
    { id: 11, url: "/path/to/image11.jpg", alt: "Beauty" },
    { id: 12, url: "/path/to/image12.jpg", alt: "Sunset" },
    { id: 13, url: "/path/to/image13.jpg", alt: "Moon" },
    { id: 14, url: "/path/to/image14.jpg", alt: "Stars" },
  ];

  return (
    <div className="container">
      <nav className="nav">
        <button className="login-btn">LOGIN</button>
        <button className="signup-btn">SIGN UP</button>
      </nav>
      
      <h1 className="title">TOP MEMOIR</h1>
      
      <div className="grid-container">
        <div className="photo-grid">
          {images.map((image) => (
            <div key={image.id} className="photo-item">
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;