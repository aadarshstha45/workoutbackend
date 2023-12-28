const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/controller");

// Get all workouts
router.get("/", getWorkouts);

//Get workouts by id
router.get("/:id", getWorkout);

//Post a new workout
router.post("/", createWorkout);

//Delete a new workout
router.delete("/:id", deleteWorkout);

//Update a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
