const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Allowing users to create their own exercises
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
//Define the type of exercise
  exercises:[{

    type: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number

    },
    reps: {
        type: Number

    },
    sets: {
        type: Number

    },
    distance: {
        type: Number
    }
  }] 
});


const Workout = mongoose.model("Workout", WorkoutSchema);
//Export 
module.exports = Workout;