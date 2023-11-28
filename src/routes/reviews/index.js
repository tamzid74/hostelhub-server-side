const Review = require("../../models/reviews");

const router = require("express").Router();

router.post("/health/review", async (req, res) => {
  const review = req.body;
  const result = await Review.insertMany(review);
  res.send(result);
});

router.get("/health/reviews", async (req, res) => {
  const result = await Review.find();
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