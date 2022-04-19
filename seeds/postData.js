const { Post } = require('../models');

const postData = [
  {
    title: 'test post',
    post_body: 'this is a test post',
    user_id: 1,
    date_created: 'date'
  },
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;