const router = require("express").Router();

const Users = require("./userModel.js");

router.get("/", async (req, res) => {
  const users = await Users.get();
  res.status(200).json(users);
});

module.exports = router;
