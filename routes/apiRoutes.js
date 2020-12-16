const db = require('../models')

module.exports = (app) => {
    
    //Find all the workouts recorded
    app.get("/api/workouts", (req, res) => {
        db.Workouts.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workouts.create({})
        .then(newWorkout => {
            res.json(newWorkout);
        });
    });
}


