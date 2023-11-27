const UpComingMeal = require("../../models/upComingMeal");

const router = require("express").Router();

router.post("/health/upComingMeals", async (req, res) => {
  const upComingMeal = req.body;
  const result = await UpComingMeal.insertMany(upComingMeal);
  res.send(result);
});

router.get("/health/upComingMeals", async (req, res) => {
  const result = await UpComingMeal.find();
  res.send(result);
});

// router.patch("/health/upComingMeals/:id", async (req, res) => {
//   const { id } = req.params;
//   const {likes} = req.body
//   const result = UpComingMeal.findByIdAndUpdate(
//     id,
//     { new: true }
//   );
//   res.json(result);
// });

module.exports = router;
