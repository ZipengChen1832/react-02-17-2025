const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

const todosRoute = require("./routes/todos");
const authRoute = require("./routes/auth");
const internalRoute = require("./routes/internal");
const authenticate = require("./middlewares/authenticate");

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Public routes
app.use("/auth", authRoute);

app.use(authenticate);

// private routes
app.use("/todos", todosRoute);

app.use("/internal", internalRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
