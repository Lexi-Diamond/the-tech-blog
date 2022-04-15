const sequelize = require('../config/connection');
const {Comment, Post, User} = require('../models');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Comment.bulkCreate(commentData);

  await Post.bulkCreate(postData);

  await User.bulkCreate(userData);


  process.exit(0);
};

seedAll();
