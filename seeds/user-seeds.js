const { User } = require('../models');

const userdata = [
  {
    username: 'mike',
    email: 'mike@mail.com',
    password: 'lovely1234',
  },
  {
    username: 'kerv',
    email: 'kerv@mail.com',
    password: 'plovely1234',
  },
  {
    username: 'brad',
    email: 'ibrad@mail.com',
    password: 'plovely1234',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;