import React, { useState, useRef } from 'react';
import { Upload, Loader2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './createBlog.css';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const fileInputRef = useRef(null);

  // Pinata configuration - REPLACE WITH YOUR ACTUAL CREDENTIALS
  const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwYzc3NmJiMS1jYjIyLTQ0OTgtYjM2Mi1hMGI3OGZmODE3NjMiLCJlbWFpbCI6ImZvcmxlYXJuaW5nLm5hdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZmQ0N2ZkYWFiYzViYzVmZTg4MTkiLCJzY29wZWRLZXlTZWNyZXQiOiI1OWIwYTU4NWRiNjc3YzMzMGIxZjc4YzE0ZDcxOTcyOTBkN2MyYmMxZGFiMmU0ZTNjMzg5Y2E3ZThmMDlhNDA1IiwiZXhwIjoxNzY0MTYzNjA1fQ.TkfJg21m_-MF7SeU1U1IqkPxQaHSGg_L9nZ4ZOVPGTI';
  const PINATA_GATEWAY = 'https://api.pinata.cloud/pinning';

  const handleNavigateToProfile = () => {
    navigate('/profile');
  };

  const uploadToPinata = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const metadata = JSON.stringify({
      name: file.name,
    });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append('pinataOptions', options);

    try {
      const response = await axios.post(
        `${PINATA_GATEWAY}/pinFileToIPFS`, 
        formData, 
        {
          headers: {
            'Content-Type': `multipart/form-data`,
            'Authorization': `Bearer ${PINATA_JWT}`
          }
        }
      );
      return response.data.IpfsHash;
    } catch (error) {
      console.error('Pinata upload error:', error);
      throw error;
    }
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
          setImageFile(file);
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

  const handlePublish = async () => {
    // Input validation
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
      // Upload image to Pinata (if exists)
      let imageHash = null;
      if (imageFile) {
        imageHash = await uploadToPinata(imageFile);
      }

      // Prepare blog metadata
      const blogMetadata = {
        title: title.trim(),
        content: content.trim(),
        imageHash: imageHash,
        timestamp: new Date().toISOString()
      };

      // Upload blog metadata to Pinata
      const metadataBlob = new Blob([JSON.stringify(blogMetadata)], { type: 'application/json' });
      const metadataFile = new File([metadataBlob], 'blog-metadata.json');
      const metadataHash = await uploadToPinata(metadataFile);
      
      alert(`Blog published to IPFS!\nMetadata Hash: ${metadataHash}`);
      
      // Reset form
      setTitle('');
      setContent('');
      setImage(null);
      setImageFile(null);
    } catch (error) {
      alert("Publishing failed. Please try again.");
      console.error(error);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageFile(null);
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