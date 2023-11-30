const Review = require("../../models/reviews");
const Meal = require("../../models/meal");

const router = require("express").Router();

router.post("/health/review", async (req, res) => {
  const review = req.body;
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
// router.get("/health/review", async (req, res) => {
//   const filter = req.query
//   console.log(filter);
//   const query = {}
//   const option = {
//     sort:{
//       likes:filter.sort === 'asc'?1:-1
//     }
//   }
//   const result = await Review.find(query,option);
//   res.send(result);
// });
// router.get("/reviews", async (req, res) => {
//   try {
//     let sortField = "like";
//     if (req.query.sort === "reviews") {
//       sortField = "reviews";
//     }

//     let sortOrder = 1;
//     if (req.query.order && req.query.order === "desc") {
//       sortOrder = -1;
//     }

//     const reviews = await Review.find()
//       .sort({ [sortField]: sortOrder })
//       .exec();

//     res.json(reviews);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

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
