const Meal = require("../../models/meal");

const router = require("express").Router();

router.post("/health/meals", async (req, res) => {
  const meal = req.body;
  const result = await Meal.insertMany(meal);
  res.send(result);
});

module.exports = router;

router.get("/health/meals", async (req, res) => {
  const result = await Meal.find();
  res.send(result);
});
