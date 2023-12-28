require("dotenv").config();
const express = require("express");
const workout_router = require("./routes/router");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/api/workouts", workout_router);

const port = process.env.PORT || 5000;

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
