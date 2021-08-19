const router = require('express').Router();
let Gecko = require('../models/Gecko.model');

router.route('/').get((req, res) => {
    Gecko.find()
        .then(gecko => res.json(gecko))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/gecko').post((req, res) => {
    const geckoName = req.body.geckoName;
    const description = req.body.description;
    const hatchDate = Date.parse(req.body.date);
    const gender = req.body.gender;
    const imageUrl = req.body.imageUrl;
    const purchasePrice = Number(req.body.purchasePrice);

    const newGecko = new gecko({
        geckoName,
        description,
        hatchDate,
        gender,
        imageUrl,
        purchasePrice,
    });

    newGecko.save()
       .then(() => res.json('Gecko added!'))
       .catch(err => res.status(400).jsono('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Gecko.findById(req.params.id)
        .then(gecko => res.json(gecko))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Gecko.findByIdAndDelete(req.params.id)
        .then(() => res.json('Gecko deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Gecko.findById(req.params.id)
        .then(gecko => {
            gecko.geckoName = req.body.geckoName;
            gecko.description = req.body.description;
            gecko.hatchDate = Date.parse(req.body.hatchDate);
            gecko.gender = req.body.gender;
            gecko.imageUrl = req.body.imageUrl;
            gecko.purchasePrice = Number(req.body.purchasePrice);

            gecko.save()
                .then(() => res.json('Gecko updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
               })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;