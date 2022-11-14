const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'comment 1',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'comment 2',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Comment 3',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
