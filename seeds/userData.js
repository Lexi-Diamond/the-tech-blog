const { User } = require('../models');

const userData = [
  {
    username: "Charles",
    email: "charles@charles.com",
    password: "password1234"
  },
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;