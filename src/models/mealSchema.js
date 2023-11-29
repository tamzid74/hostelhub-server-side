const { model, Schema } = require("mongoose");

const mealPackageSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  services: {
    type: [String],
    required: true,
  },
});

const MealPackage = model("MealPackage", mealPackageSchema);

module.exports = MealPackage;
