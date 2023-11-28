const { model, Schema } = require("mongoose");

const mealSchema = new Schema({
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
  email: {
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
  reviews: {
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
    type: String,
    required: true,
  },
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
