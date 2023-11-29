const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  mealId: {
    type: String,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  user_name: {
    type: String,
    required: true,
  },

  review: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  pic: {
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
  reviews: {
    type: Number,
    default: 0,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
});

const Review = model("Reviews", ReviewSchema);

module.exports = Review;
