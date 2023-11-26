const UpComingMeal = require("../../models/upComingMeal");

const router = require("express").Router();

router.post("/health/upComingMeals", async (req, res) => {
  const upComingMeal = req.body;
  const result = await UpComingMeal.insertMany(upComingMeal);
  res.send(result);
});

module.exports = router;
