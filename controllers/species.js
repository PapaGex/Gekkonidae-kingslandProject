const router = require('express').Router();
let Species = require('../models/Species.model');

router.route('/').get((req, res) => {
    Species.find()
        .then(species => res.json(species))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/species').post((req, res) => {
    const species = req.body.species;

    const newSpecies = new Species({species});

    newSpecies.save()
        .then(() => res.json('Species added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
