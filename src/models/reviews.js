const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  meal: {
    type: String,
    required: true,
  },
  user_email: {
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
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
});

const Review = model("Reviews", ReviewSchema);

module.exports = Review;
