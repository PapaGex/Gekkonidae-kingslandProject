const router = require('express').Router();
let Incubator = require('../models/Incubator.model');

router.route('/incubator').get((req, res) => {
    Incubator.find()
        .then(incubator => res.json(incubator))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/incubator').post((req, res) => {
    const evopositionDate = req.body.evopositionDate;
    const incubationTempRange = req.body.incubationTempRange;
    const hatchDateRange = req.body.hatchDateRange;
    const parents = req.body.parents;
    const species = req.body.species;

    const incubator = new Incubator({
        evopositionDate,
        incubationTempRange,
        hatchDateRange,
        parents,
        species,
    });

    newIncubator.save()
       .then(() => res.json('Eggs added!'))
       .catch(err => res.status(400).jsono('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Incubator.findById(req.params.id)
        .then(incubator => res.json(incubator))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Incubator.findByIdAndDelete(req.params.id)
        .then(() => res.json('Egg deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Incubator.findById(req.params.id)
        .then(incubator => {
            incubator.evopositionDate =req.body.evopositionDate;
            incubator.incubationTempRange = req.body.incubationTempRange;
            incubator.hatchDateRange = req.body.hatchDateRange;
            incubator.parents = req.body.parents;
            incubator.species = req.body.species;

            incubator.save()
                .then(() => res.json('Egg updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
               })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;