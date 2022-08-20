// Dependincies
const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

// Importing
const photoRouter = require("./routes/photos");
const captionRouter = require("./routes/captions");
const userRouter = require("./routes/user");

const sequelize = require("./util/db");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Route Handlers
app.use("/captions", captionRouter);
app.use("/photos", photoRouter);
app.use("/users", userRouter);

// Server
(async () => {
  try {
    sequelize.sync({ force: false });
    await app.listen(process.env.PORT || 4001, () => {
      console.log("app running");
    });
  } catch (error) {
    console.error(error);
  }
})();
