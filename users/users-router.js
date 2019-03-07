const router = require("express").Router();

const Users = require("./userModel.js");

router.get("/", async (req, res) => {
  const users = await Users.get();
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const users = await Users.get(req.params.id);
  res.status(200).json(users);
});

router.post("/", async (req, res) => {
  res.status(200).send("hi");
});

router.delete("/:id", async (req, res) => {
  res.status(204).send("hi");
});

module.exports = router;
