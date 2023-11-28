const express = require("express");
const applyMiddleWare = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
const authRoute = require("./routes/AuthRoute");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/admin");
const mealRouter = require("./routes/meal");
const upComingMealRouter = require("./routes/upComingMeal");
const mealRequestRouter = require("./routes/mealRequest");
const ReviewRouter =require("./routes/reviews")
const globalErrorHandler = require("./utils/globalErrorHandler");
const Review = require("./models/reviews");
require("dotenv").config();
const app = express();
const port = process.env.port || 5000;

applyMiddleWare(app);

app.use(authRoute);
app.use(userRouter);
app.use(adminRouter);
app.use(mealRouter);
app.use(upComingMealRouter);
app.use(mealRequestRouter);
app.use(ReviewRouter)

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

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`hostel server is running in port ${port}`);
  });
};

main();
