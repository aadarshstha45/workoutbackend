require("dotenv").config();
const express = require("express");
const workout_router = require("./routes/router");
const user_router = require("./routes/user-router");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

const options = {
  origin: "*",
};

app.use(cors(options));
app.use("/api/workouts", workout_router);
app.use("/api/users/", user_router);

const port = process.env.PORT;

//connecting to database

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to DB and Listening on port ${port}`);
      console.log("dot");
    });
  })
  .catch((e) => {
    console.log(e);
  });
