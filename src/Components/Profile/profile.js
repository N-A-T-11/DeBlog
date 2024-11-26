import React from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom'; // Ensure react-router-dom is installed and used

import logo from '../images/de.png'; // Add site logo image
import edit from '../images/edit.png'; 

const Profile = () => {
  const navigate = useNavigate();

  const handleWriteButtonClick = () => {
    navigate('/createBlog'); // Path to `createBlog.js`
  };

  const stats = [
    { label: 'frequent', value: 0 },
    { label: 'Humanity', value: 12 },
    { label: 'Communism', value: 55 },
    { label: 'Time', value: 25 },
    { label: 'Space', value: 25 },
    { label: 'Death', value: 100 },
  ];

  const memoirs = [
    {
      title: 'Beauty of Beauty',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453610/Deblog/ram.jpg',
    },
    {
      title: 'Feminine Body to an extent',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453593/Deblog/feminine.png',
    },
    {
      title: 'Journey of iris and the pupil',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453633/Deblog/iris.jpg',
    },
    {
      title: 'The History of Jama -part Elevazhan',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453594/Deblog/Jama.png',
    },
    {
      title: 'Jamming the Jam Theory',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453631/Deblog/Jam.jpg',
    },
    {
      title: 'Nat being Naughty',
      image: 'https://res.cloudinary.com/dmoiluzh8/image/upload/v1732453591/Deblog/monanisa.jpg',
    },
  ];

  return (
    <div className="profile-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo}
               alt="Site Logo" 
               className="site-logo" 
               onClick={() => navigate('/feed')}/>
          
        </div>
        <button onClick={handleWriteButtonClick} className="write-button">
          <i className="fas fa-pen"></i> Write
        </button>
      </nav>

      <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div id="edit"> 
            <img id="editimg" src={edit} alt="edit" ></img>
          </div>
          <div className="profile-image-container">
            <img
              src="https://img.atlasobscura.com/Pa2OCKmKLrmT4tiiauh-_1k3efxBn-jzb2sm9kTUPjY/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy85ZDUyZjcxNGU1/ZGE4MzU3YTZfTWFy/eS1CYWdvdC5qcGc.jpg"
              alt="NAT"
              className="profile-image"
            />
          </div>

          <div className="profile-info">
            <h2 className="profile-name">NAT</h2>
            <div className="profile-tag">BROOD</div>

            <div className="profile-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-row">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-dots"></span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="profile-duration">1 year</div>
          </div>
        </div>

        {/* Memoirs Section */}
        <div className="memoirs-section">
          <h1 className="memoirs-title">USER'S MEMOIR</h1>
          <div className="memoirs-grid">
            {memoirs.map((memoir, index) => (
              <div key={index} className="memoir-card">
                <img
                  src={memoir.image}
                  alt={memoir.title}
                  className="memoir-image"
                />
                <div className="memoir-title">{memoir.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
