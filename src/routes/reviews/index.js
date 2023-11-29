const Review = require("../../models/reviews");
const Meal = require("../../models/meal");

const router = require("express").Router();

router.post("/health/review", async (req, res) => {
  const review = req.body;
  // const result = await Review.insertMany(review);
  const mealId = review.mealId;
  const result = await Review.create(review);
  await Meal.findByIdAndUpdate(mealId, { $inc: { reviews: 1 } });
  await Review.findByIdAndUpdate(result._id, { $inc: { reviews: 1 } });
  res.send(result);
});

router.get("/health/reviews", async (req, res) => {
  const result = await Review.find();
  res.send(result);
});

router.get("/health/review", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await Review.find(query);
  res.send(result);
});

router.delete("/health/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await Review.findByIdAndDelete(query);
  res.send(result);
});

router.patch("/health/reviews/:id", async (req, res) => {
  const { id } = req.params;
  const { review } = req.body;
  const updatedReview = await Review.findByIdAndUpdate(
    id,
    { review },
    { new: true }
  );

  res.send(updatedReview);
});

module.exports = router;
