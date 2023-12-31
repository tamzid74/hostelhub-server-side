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
    default: 0,
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
    type: Date,
    required: true,
  },
});

const UpComingMeal = model("UpComingMeal", upComingMealSchema);

module.exports = UpComingMeal;
