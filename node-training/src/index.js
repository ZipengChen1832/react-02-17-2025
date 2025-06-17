const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3000;

const todosRoute = require("./routes/todoRoute");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const internalRoute = require("./routes/internal");
const authenticate = require("./middlewares/authenticate");
const { connectDB } = require("./database/connection");
const populateDB = require("./database/initiation");

(async () => {
  await connectDB();
  await populateDB();

  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );

  // Public routes
  app.use("/auth", authRoute);
  app.use("/users", userRoute);

  app.use(authenticate);

  // private routes
  app.use("/todos", todosRoute);
  app.use("/internal", internalRoute);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
