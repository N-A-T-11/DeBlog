import React, { useState, useRef } from 'react';
import { Upload, Loader2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './createBlog.css';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const fileInputRef = useRef(null);

  const handleNavigateToProfile = () => {
    navigate('/profile'); // This will navigate to the profile page
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Please upload an image smaller than 5MB");
        return;
      }

      setIsUploading(true);
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
          setIsUploading(false);
        };
        reader.onerror = () => {
          setIsUploading(false);
          alert("Upload failed. Please try again.");
        };
        reader.readAsDataURL(file);
      } catch (error) {
        setIsUploading(false);
        alert("Upload failed. Please try again.");
      }
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    setContent(e.target.value);
  };

  const handlePublish = async () => {
    if (!title.trim()) {
      alert("Please add a title to your memoir");
      return;
    }

    if (!content.trim()) {
      alert("Please write your story");
      return;
    }

    setIsPublishing(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Your memoir has been published!");
      
      // Reset form
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error) {
      alert("Publishing failed. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-header">
          <h1>Write Your Memoir</h1>
          <div className="header-actions">
            <button
              className="publish-button"
              onClick={handlePublish}
              disabled={isPublishing}
            >
              {isPublishing ? (
                <><Loader2 className="spinner" /> Publishing</>
              ) : (
                'Publish'
              )}
            </button>
            <div 
              className="avatar"
              onClick={handleNavigateToProfile}
              style={{ cursor: 'pointer' }}
            >
              NAT
            </div>
          </div>
        </div>

        <div className="image-upload-section">
          <label className="image-upload-label">
            {image ? (
              <div className="image-preview-container">
                <img
                  src={image}
                  alt="Blog cover"
                  className="image-preview"
                />
                <button
                  className="remove-image-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveImage();
                  }}
                >
                  <X />
                </button>
              </div>
            ) : (
              <div className="upload-placeholder">
                {isUploading ? (
                  <Loader2 className="spinner" />
                ) : (
                  <>
                    <Upload />
                    <span>Upload your image</span>
                  </>
                )}
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden-input"
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </label>
        </div>

        <div className="content-card">
          <input
            type="text"
            placeholder="TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
            maxLength={100}
          />
          <textarea 
            className="content-textarea"
            placeholder="Write your story..."
            value={content}
            onChange={handleTextareaChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;