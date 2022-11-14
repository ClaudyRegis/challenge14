const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1',
    post_text: 'Good job',
    user_id: 2,
  },
  {
    title: 'Post 2',
    post_text: 'So good',
    user_id: 1,
  },
  {
    title: 'Post 3',
    post_text: 'The greatest of all time!',
    user_id: 1,
  },
  {
    title: 'Post 4',
    post_text: 'Better substance',
    user_id: 2,
  },
  {
    title: 'Post 5',
    post_text: 'Cracking jokes',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;