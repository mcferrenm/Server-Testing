const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send('hi')
});

module.exports = router;