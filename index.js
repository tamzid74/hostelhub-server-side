const app = require("./src/app");
const connectDB = require("./src/db/connectDB");

const port = process.env.port || 5000;

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`hostel server is running in port ${port}`);
  });
};

main();
