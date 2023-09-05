const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'person', 
  }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;
