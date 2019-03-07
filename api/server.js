const server = require('express')();

server.get('/', (req, res) => {
  res.send('welcome to users api')
});

module.exports = server;