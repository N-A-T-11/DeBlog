import React from 'react';
import './feed.css';
import dish from '../images/dish.jpeg';
import clevenat from '../images/clevenat.jpg';
import iris from '../images/iris.JPG';
import milkyway from '../images/milkyway.jpg';
import jam from '../images/jam.JPG';
import dir from '../images/ram beuaty.jpg';



const Feed = () => {
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

  const NatLogo = () => (
    <div className="nat-logo">NAT
      {/* <imgages src="url: require('../images/thattan.jpg')" alt="NAT Logo" className="logo-image" /> */}
    </div>
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
      <div className="feed-grid">
        {posts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;