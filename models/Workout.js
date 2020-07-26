const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: true,
        },
        duration: {
          type: Number,
          trim: true,
          required: true,
        },
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
      },
    ],
  },
  //   Enable mongoose.virtuals to set up virtual properties that are to be get and set but not saved in mongoDB, this is for the total the duration of workout.
  //  SOURCE: https://mongoosejs.com/docs/guide.html#virtuals
  {
    toJSON: { virtuals: true },
  }
);

// virtualize totalDuration and get the the updated total duration of a workout once a new workout has been added
WorkoutSchema.virtual("totalDuration").get(function () {
  // using the array.prototype.reduce() method to return the reduced array of exercises and the total sum of their durations
  // .reduce() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
