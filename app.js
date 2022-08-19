// Dependincies
const express = require("express");
require("dotenv").config();

// Importing
const photoRouter = require("./routes/photos");
const sequelize = require("./util/db");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Handlers
app.use("/photos", photoRouter);

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
