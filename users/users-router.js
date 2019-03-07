const router = require("express").Router();

const Users = require("./userModel.js");

router.get("/", async (req, res) => {
  res.status(200).json({});
});

module.exports = router;
