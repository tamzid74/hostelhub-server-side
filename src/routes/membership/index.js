const MealPackage = require("../../models/mealSchema");
const router = require("express").Router();

router.get("/health/mealPackages", async (req, res) => {
  const result = await MealPackage.find();
  res.send(result);
});

router.get("/health/mealPackage/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const result = await MealPackage.findById(query);
    res.send(result);
  });



module.exports = router;
