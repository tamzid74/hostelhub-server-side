const { model, Schema } = require("mongoose");

const PaymentSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

const Payment = model("Payment", PaymentSchema);

module.exports = Payment;
