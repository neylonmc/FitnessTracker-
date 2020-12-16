const db = require ("../models");

module.exports = function (app) {
    
    //Find all the workouts recorded
    app.post("/api/workouts", (req, res) => {
        db.Workouts.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post
}