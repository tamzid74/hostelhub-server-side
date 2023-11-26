const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  photoURL: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema);

module.exports = User;
