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
  const { search, category, sort} = req.query;
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

router.delete("/health/allMeals/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await Meal.findByIdAndDelete(query);
  res.send(result);
});
router.patch("/health/meals/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const data = req.body;
  const updatedMeal = {
    image: data.image,
    mealTitle: data.mealTitle,
    distributor_Name: data.distributor_Name,
    email: data.email,
    price: parseFloat(data.price),
    likes: parseFloat(data.likes),
    rating: data.rating,
    mealCategory: data.mealCategory,
    ingredient: data.ingredient,
    description: data.description,
    date: data.dateTime,
    reviews: parseFloat(data.reviews),
  };
  const result = await Meal.findOneAndUpdate(filter, updatedMeal);
  res.send(result);
});

router.get("/health/meal", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await Meal.find(query);
  res.send(result);
});
