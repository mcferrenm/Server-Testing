const router = require('express').Router();

const Users = require('./userModel.js');

router.get('/', async (req, res) => {
  res.send('hi')
});

module.exports = router;