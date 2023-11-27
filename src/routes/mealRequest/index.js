const MealRequest = require("../../models/mealRequest");

const router = require("express").Router();

module.exports = router;

router.post("/health/meal-requests", async (req, res) => {
  const mealRequest = req.body;
  const result = await MealRequest.insertMany(mealRequest);
  res.send(result);
});
