const { model, Schema } = require("mongoose");

const mealRequestSchema = new Schema({
  meal: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
  review: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    enum:['pending','delivered'],
    default:'pending'
  },

});

const MealRequest = model("MealRequest", mealRequestSchema);

module.exports = MealRequest;
