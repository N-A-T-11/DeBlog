import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useNavigate } from 'react-router-dom';

import './home.css';


const Home = () => {
  const navigate = useNavigate();

  const images = [
    { id: 1, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453620/Deblog/Thattan.jpg', alt: "Nature 1" },
    { id: 2, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453629/Deblog/Waterfall.jpg', alt: "Landscape 1" },
    { id: 3, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453604/Deblog/forest.jpg', alt: "Forest" },
    { id: 4, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453627/Deblog/Travel.jpg', alt: "Adventure" },
    { id: 5, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453630/Deblog/sai.jpg', alt: "Nature 2" },
    { id: 6, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453591/Deblog/monanisa.jpg', alt: "Portrait" },
    { id: 7, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453593/Deblog/Terrace.jpg', alt: "Night sky" },
    { id: 8, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453611/Deblog/Nat.jpg', alt: "Typography" },
    { id: 9, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453612/Deblog/Bennettoutlok.jpg', alt: "Landscape 2" },
    { id: 10, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453613/Deblog/Ritu.jpg', alt: "Rit"},
    { id: 11, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453610/Deblog/ram.jpg', alt: "Beauty" },
    { id: 12, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453619/Deblog/vaanam.jpg', alt: "Sunset" },
    { id: 13, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453606/Deblog/moon.jpg', alt: "Moon" },
    { id: 14, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453697/Deblog/milkyway.jpg', alt: "Stars" },
    { id: 15, url: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453594/Deblog/Jama.png', alt: "Jama" },
  ];

  // Function to handle MetaMask login
  const handleMetaMaskLogin = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
        alert(`Connected to MetaMask account: ${accounts[0]}`);
        
        // Redirect to the Interest page upon successful login
        navigate('/interest');
      } catch (error) {
        console.error('User rejected the request:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to proceed.');
    }
  };

  return (
    <div className="container">
      <nav className="nav">
        <div className="logo-container">
          <img src="https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453591/Deblog/Deblog.png" alt="Site Logo" className="site-logo" />
        </div>
        <button className="login-btn">LOGIN</button>
        <button className="signup-btn"  onClick={handleMetaMaskLogin}>SIGN UP</button>
      </nav>
      
      <h1 className="title">Top Memoir</h1>
      
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