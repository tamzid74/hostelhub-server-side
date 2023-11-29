// const verifyToken = require("../../../middlewares/verifyToken");
// const findAll = require("../api/service/controllers/findAll");

const User = require("../models/user");

const router = require("express").Router();
// router.post('/logout',logout)
// router.get("/services", findAll);

router.post("/health/users", async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const existingUser = await User.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already exists", insertedId: null });
  }
  const result = await User.insertMany(user);
  res.send(result);
});

router.get("/health/user", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await User.find(query);
  res.send(result);
});

router.get("/health/users", async (req, res) => {
  const { search } = req.query;
  const searchString = String(search);
  const query = {
    $or: [
      { name: { $regex: searchString, $options: "i" } },
      { email: { $regex: searchString, $options: "i" } },
    ],
  };
  const result = await User.find(query);
  res.send(result);
});

router.delete("/health/user/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await User.deleteOne(query);
  res.send(result);
});

module.exports = router;
