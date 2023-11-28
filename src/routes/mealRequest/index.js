const MealRequest = require("../../models/mealRequest");

const router = require("express").Router();

module.exports = router;

router.post("/health/meal-requests", async (req, res) => {
  const mealRequest = req.body;
  const result = await MealRequest.insertMany(mealRequest);
  res.send(result);
});
router.get("/health/meal-requests", async (req, res) => {
  const { search } = req.query;
  const searchString = String(search);
  const query = {
    $or: [
      { userName: { $regex: searchString, $options: "i" } },
      { userEmail: { $regex: searchString, $options: "i" } },
    ],
  };
  const result = await MealRequest.find(query);
  res.send(result);
});

router.get("/health/mealRequests", async (req, res) => {
  const result = await MealRequest.find();
  res.send(result);
});

router.patch("/health/meal-requests/:id", async (req, res) => {
  const { id } = req.params;
  const result = await MealRequest.findByIdAndUpdate(
    id,
    { Status: "delivered" },
    { new: true }
  );
  //   console.log("ID:", id);
  //   console.log("Result:", result);
  res.send(result);
});
