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
//   const id = req.params.id;
//   console.log(id);
//   const { likes } = req.body;
//   const updateMeal = await UpComingMeal.findByIdAndUpdate(
//     id,
//     { $set: { likes } },
//     { new: true }
//   );
//   res.send(updateMeal);
// });



router.patch("/health/upComingMeals/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = {_id: id}
    const { likes } = req.body;

    if (typeof likes !== 'number') {
      return res.status(400).json({ error: 'Invalid data format for likes' });
    }

    const updateMeal = await UpComingMeal.findByIdAndUpdate(
      id,
      // { $set: { likes } },
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!updateMeal) {
      return res.status(404).json({ error: 'Meal not found' });
    }

    res.json(updateMeal);
  } catch (error) {
    console.error("Error updating like count:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
