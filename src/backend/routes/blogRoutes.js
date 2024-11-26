const express = require('express');
const router = express.Router();
const { 
  createBlog, 
  getUserBlogs, 
  getBlogById 
} = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes - require authentication
router.post('/', authMiddleware, createBlog);
router.get('/', authMiddleware, getUserBlogs);
router.get('/:id', authMiddleware, getBlogById);

module.exports = router;