const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    excerise: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter an excerise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the excerise name."
            },
            weight: {
                type: Number,
                trim: true
            },
            sets: {
                type: Number,
                trim: true
            },
            reps: {
                type: Number,
                trim: true
            },
            duration: {
                type: Number,
                trim: true
            }
    }]
}); 

const Workouts = mongoose.model("Workouts", workoutSchema); 

module.exports = Workouts;