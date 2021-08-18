const router = require('express').Router();
let User = require('../models/users.model');

router.route('/users').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/users').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        username,
        password,
    });

    newUser.save()
       .then(() => res.json('User Attached!'))
       .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Gecko.findByIdAndDelete(req.params.id)
        .then(() => res.json('User EXTERMINATED!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Gecko.findById(req.params.id)
        .then(users => {
            users.username = req.body.username;
            users.password = req.body.password;

            users.save()
                .then(() => res.json('User Adapted!'))
                .catch(err => res.status(400).json('Error: ' + err));
               })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;