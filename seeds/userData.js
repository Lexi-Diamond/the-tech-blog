const { User } = require('../models');

const userData = [
  {
    username: "Cassie",
    email: "cassie@gmail.com",
    password: "password1234"
  },
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;