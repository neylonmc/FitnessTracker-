const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a workout.",
  },
  type: {
    type: String,
    trim: true,
    required: "Please enter the type of workout.",
  },
  weight: {
    type: Number
    
  },
  sets: {
    type: Number
    
  },
  reps: {
    type: Number
    
  },
  distance: {
    type: Number
    
  },
  duration: {
    type: Number,
    required: "But for how long?"
  },
  
  

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;