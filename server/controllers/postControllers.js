const Post = require('../models/postModel');

// @desc get all posts
// @params GET path:/api/post/getPosts
// @access PUBLIC - USER
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('owner', '-password').sort('-createdAt');
    return res.status(200).json({ msg: "Got all posts", posts: posts }); // Fixed response message and variable name
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

// @desc get all posts of the owner
// @params GET path:/api/post/getuserPosts/:id
// @access PUBLIC - USER
const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ owner: req.params.id }).sort('-createdAt');
    return res.status(200).json({ msg: "Got all posts of user", posts: posts }); // Fixed response message and variable name
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = { getPosts, getUserPosts }; // Removed 'addPost' which seems to be missing

    
    