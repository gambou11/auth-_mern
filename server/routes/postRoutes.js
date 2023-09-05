const router = require('express').Router();
const { addPost, getPosts, getUserPosts } = require('../controllers/postControllers.js');
const { authMiddleware } = require('../middleware/authMiddleware');
const { check } = require('express-validator'); // Corrected the import

/**
 * @desc create a new post
 * @method POST
 * @path /api/newpost
 * @access PRIVATE - USER
 */
router.post('/newpost', authMiddleware, addPost);

/**
 * @desc get all posts
 * @method GET
 * @path /api/getPosts
 * @access PUBLIC
 */
router.get('/getPosts', getPosts);

/**
 * @desc get posts for a specific user
 * @method GET
 * @path /api/getuserposts/:id
 * @access PUBLIC
 */
router.get('/getuserposts/:id', getUserPosts);

module.exports = router;
