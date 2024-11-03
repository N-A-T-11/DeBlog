import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './interest.css';

const Interest = () => {
  const [interests, setInterests] = useState([
    { id: 1, name: 'science', className: '' },
    { id: 2, name: 'Neuroscience', className: '' },
    { id: 3, name: 'Cognitive Science', className: '' },
    { id: 4, name: 'Space', className: '' },
    { id: 5, name: 'writing', className: '' },
    { id: 6, name: 'Relationship', className: '' },
    { id: 7, name: 'Culture', className: '' },
    { id: 8, name: 'Art', className: 'art' },
    { id: 9, name: 'Psychology', className: '' },
    { id: 10, name: 'Life', className: '' },
    { id: 11, name: 'Politics', className: '' },
    { id: 12, name: 'Health', className: '' },
    { id: 13, name: 'Communism', className: '' },
    { id: 14, name: 'Money', className: '' },
    { id: 15, name: 'Women', className: 'women' },
    { id: 16, name: 'Society', className: '' },
    { id: 17, name: 'Humor', className: '' },
    { id: 18, name: 'Education', className: '' },
    { id: 19, name: 'Startup', className: '' },
    { id: 20, name: 'Marketing', className: '' },
    { id: 21, name: 'Design', className: '' },
    { id: 22, name: 'Books', className: 'books' },
    { id: 23, name: 'Programming', className: '' },
    { id: 24, name: 'Blockchain', className: '' },
    { id: 25, name: 'Web-Dev', className: '' },
    { id: 26, name: 'UX', className: '' },
    { id: 27, name: 'Artificial Intelligence', className: '' },
    { id: 28, name: 'Personal Finance', className: '' },
    { id: 29, name: 'Urban Design', className: '' },
    { id: 30, name: 'Travel', className: '' },
    { id: 31, name: 'Films', className: '' },
    { id: 32, name: 'Philosophy', className: '' },
    { id: 33, name: 'Food', className: '' },
  ]);
  
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();


  const handleTagClick = (id) => {
    setSelectedTags((prev) => {
      if (prev.includes(id)) {
        return prev.filter((tagId) => tagId !== id); // Deselect if already selected
      } else {
        return [...prev, id]; // Add to selected if not already in list
      }
    });
  };
  const handleContinue = () => {
    navigate('/feed'); // Navigate to Feed page when button is clicked
  };

  return (
    <div className="interest-container">
      <h1 className="interest-title">What is your affinity?</h1>
      <div className="tags-container">
        {interests.map((interest) => (
          <div 
            key={interest.id} 
            className={`tag ${interest.className} ${selectedTags.includes(interest.id) ? 'selected' : ''}`}
            onClick={() => handleTagClick(interest.id)}
          >
            {interest.name}
          </div>
        ))}
      </div>
      {selectedTags.length >= 3 && (
        <button className="continue-button"  onClick={handleContinue}>Continue</button>
      )}
    </div>
  );
};

export default Interest;
