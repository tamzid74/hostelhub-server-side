const express = require("express");
const applyMiddleWare = require("./middlewares/applyMiddleware");
// const connectDB = require("./db/connectDB");
const authRoute = require("./routes/AuthRoute");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/admin");
const mealRouter = require("./routes/meal");
const upComingMealRouter = require("./routes/upComingMeal");
const mealRequestRouter = require("./routes/mealRequest");
const ReviewRouter = require("./routes/reviews");
const mealPackageRouter = require("./routes/membership");
const paymentRouter = require("./routes/payment");
const globalErrorHandler = require("./utils/globalErrorHandler");
// const Review = require("./models/reviews");
require("dotenv").config();
const app = express();

applyMiddleWare(app);

app.use(authRoute);
app.use(userRouter);
app.use(adminRouter);
app.use(mealRouter);
app.use(upComingMealRouter);
app.use(mealRequestRouter);
app.use(ReviewRouter);
app.use(mealPackageRouter);
app.use(paymentRouter);

app.get("/health", (req, res) => {
  res.send("welcome to hostelHub......");
});

app.all("*", (req, res, next) => {
  console.log(req.url);
  const error = new Error(`the url is invalid:[${req.url}]`);
  error.status = 404;
  next(error);
});

app.use(globalErrorHandler);

module.exports = app;
