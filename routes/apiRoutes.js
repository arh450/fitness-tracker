// Add exercises to a previous workout plan. (PUT)


// Add new exercises to a new workout plan (POST)


// View multiple the combined weight of multiple exercises on the stats page. (GET)


const router = require('express').Router();
const db = require('../models');


router.post('/workouts', (req, res) => {
    // console.log(req.body);
    db.Workout.create(req.body)
        .then((result) => {
            console.log(`Workout added successfully`);
            res.json(result);
        })
        .catch((err) => {
            if (err) {
                res.status(500).json(err);
            }
        });
});

router.put('/workouts/:id', (req, res) => {
    // console.log(req.body);
    db.Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
        .then((result) => {
            console.log(`Workout updated successfully`);
            res.json(result);
        })
        .catch((err) => {
            if (err) {
                res.status(500).json(err);
            }
        });
});

module.exports = router;