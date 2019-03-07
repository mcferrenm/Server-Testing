const server = require('express')();
const usersRouter = require('../users/users-router');

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send('welcome to users api')
});

module.exports = server;