const router = require('express').Router();
let Species = require('../models/Species.model');

router.route('/species').get((req, res) => {
    Species.find()
        .then(species => res.json(species))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/species').post((req, res) => {
    const genusName = req.body.genusName;
    const speciesName = req.body.speciesName;
    const homeRange = req.body.homeRange;
    const tempLow = req.body.tempLow;
    const tempHigh = req.body.tempHigh;
    const humidity = req.body.humidity;
    const notes = req.body.notes;

    const newSpecies = new Species({
        genusName,
        speciesName,
        homeRange,
        tempLow,
        tempHigh,
        humidity,
        notes,
    });

    newSpecies.save()
        .then(() => res.json('Species added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Species.findById(req.params.id)
        .then(species => res.json(species))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Species.findByIdAndDelete(req.params.id)
        .then(() => res.json('User EXTERMINATED!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Species.findById(req.params.id)
        .then(species => {
            species.genusName = req.body.genusName;
            species.speciesName = req.body.speciesName;
            species.homeRange = req.body.homeRange;
            species.tempLow = req.body.tempLow;
            species.tempHigh = req.body.tempHigh;
            species.humidity = req.body.humidity;
            species.notes = req.body.notes;

            species.save()
                .then(() => res.json('User Adapted!'))
                .catch(err => res.status(400).json('Error: ' + err));
               })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
