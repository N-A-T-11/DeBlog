import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';
import Thattan from '../images/Thattan.JPG';

const Home = () => {
  const navigate = useNavigate();

  const images = [
    { id: 1, url: Thattan, alt: "Nature 1" },
    { id: 2, url: require('../images/waterwall.jpg'), alt: "Landscape 1" },
    { id: 3, url: require('../images/forest.jpg'), alt: "Forest" },
    { id: 4, url: require('../images/vandisai.JPG'), alt: "Adventure" },
    { id: 5, url: require('../images/sai.JPG'), alt: "Nature 2" },
    { id: 6, url: require('../images/clevenat.jpg'), alt: "Portrait" },
    { id: 7, url: require('../images/dish.jpeg'), alt: "Night sky" },
    { id: 8, url: require('../images/natlogo.jpeg'), alt: "Typography" },
    { id: 9, url: require('../images/Bennett outlook.jfif'), alt: "Landscape 2" },
    { id: 10, url: require('../images/ritu.jpg'), alt: "Rit"},
    { id: 11, url: require('../images/ram beuaty.jpg'), alt: "Beauty" },
    { id: 12, url: require('../images/Vaanam.jpg'), alt: "Sunset" },
    { id: 13, url: require('../images/moon.jpg'), alt: "Moon" },
    { id: 14, url: require('../images/milkyway.jpg'), alt: "Stars" },
    { id: 14, url: require('../images/motamadi.jpg'), alt: "Stars" },
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