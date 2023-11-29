const Payment = require("../../models/payment");

const router = require("express").Router();

const stripe = require("stripe")(process.env.ACCESS_STRIPE_KEY);
router.post("/health/create-payment-intent", async (req, res) => {
  const price = req.body.price;
  const amount = price * 100;
  console.log(amount);
  console.log(amount, "amount");
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

router.post("/health/payments", async (req, res) => {
  const payments = req.body;
  const paymentResult = await Payment.insertMany(payments);
  console.log("payment info", payments);
  res.send(paymentResult);
});
router.get("/health/payments", async (req, res) => {
    let query = {};
    if (req.query?.email) {
      query = { email: req.query.email };
    }
    const result = await Payment.find(query);
    res.send(result);
  });
  

module.exports = router;
