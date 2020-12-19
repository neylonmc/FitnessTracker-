const router = require("express").Router();
//Routing to workout.js file
const Workout = require("../models/workout.js");

//Post route
router.post("/api/workouts", ({ body }, res) => {

  Workout.create(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Get route
router.get("/api/workouts", (req, res) => {
  
  Workout.find({})
    .then(workoutdb => {
      res.json(workoutdb);
      
    })
    .catch(err => {
      res.json(err);
    });
});

//Put route to get the most recent workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id, 
    {$push: {exercises: body}},
    {new: true, runValidators: true})
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

//Get route
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(9)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;