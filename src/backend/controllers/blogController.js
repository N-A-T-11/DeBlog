const Blog = require('../models/Blog');

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, imageHash, metadataHash } = req.body;

    // Validate input
    if (!title || !content || !metadataHash) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Create new blog
    const blog = new Blog({
      title,
      content,
      author: req.user._id,
      imageHash,
      metadataHash
    });

    // Save blog to database
    const createdBlog = await blog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      blog: createdBlog
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating blog', 
      error: error.message 
    });
  }
};

// Get all blogs for a user
exports.getUserBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user._id })
      .sort({ createdAt: -1 });
    
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching blogs', 
      error: error.message 
    });
  }
};

// Get a single blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Optional: Add check to ensure user can only access their own blogs
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching blog', 
      error: error.message 
    });
  }
};