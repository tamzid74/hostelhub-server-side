const Meal = require("../../models/meal");

const router = require("express").Router();

router.post("/health/meals", async (req, res) => {
  const meal = req.body;
  const result = await Meal.insertMany(meal);
  res.send(result);
});

module.exports = router;

router.get("/health/allMeals", async (req, res) => {
  const result = await Meal.find();
  res.send(result);
});

router.get("/health/meals", async (req, res) => {
  const { search, category, sort, page } = req.query;
  const query = {
    mealTitle: { $regex: search, $options: "i" },
    mealCategory: category ? category : { $exists: true },
  };
  const sortOptions = {};
  if (sort === "lowToHigh") {
    sortOptions.price = 1;
  } else if (sort === "highToLow") {
    sortOptions.price = -1;
  }
  // const skip = page ? (parseInt(page) - 1) * ITEMS_PER_PAGE : 0;
  const result = await Meal.find(query).sort(sortOptions);
  // .skip(skip)
  // .limit(ITEMS_PER_PAGE);
  res.send(result);
});

router.get("/health/meals/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await Meal.findById(query);
  res.send(result);
});
