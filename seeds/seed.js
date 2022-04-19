const sequelize = require('../config/connection');
const seedComments = require('./commentData.json');
const seedPosts = require('./postData.json');
const seedUsers = require('./userData.json');
const {Comment, Post, User} =require('../models')


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUsers);

  await Post.bulkCreate(seedPosts);

  await Comment.bulkCreate(seedComments);


  process.exit(0);
};

seedAll();
