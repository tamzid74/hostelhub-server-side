const { model, Schema } = require("mongoose");

const upComingMealSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  mealTitle: {
    type: String,
    required: true,
  },
  distributor_Name: {
    type: String,
    required: true,
  },
  distributor_Email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  mealCategory: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const UpComingMeal = model("UpComingMeal", upComingMealSchema);

module.exports = UpComingMeal;
