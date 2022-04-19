const { Comment } = require('../models');

const commentData = [
  {
    description: "comment test",
    post_id: 3,
    user_id: 1
  },
];
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;