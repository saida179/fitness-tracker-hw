const router = require("express").Router();
const workout = require("../models/workout.js");

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    });
});

app.post("/api/workout/bulk", ({ body }, res) => {
    workout.insertMany(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } }).then(dbWorkout => {
            res.json(dbWorkout);
        });
});


//app.get("/api/workout", (req, res) => {
    //workout.find({})
        //.sort({ date: -1 })
        //.then(dbWorkout => {
            //res.json(dbWorkout);
        //})
        //.catch(err => {
            //res.status(400).json(err);
        //});
//});

module.exports = app;