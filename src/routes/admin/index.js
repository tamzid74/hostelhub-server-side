
const User = require("../../models/user");

const router = require("express").Router();

router.patch("/health/users/admin/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updatedDoc = {
    role: "admin",
  };
  const result = await User.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});

module.exports = router;
