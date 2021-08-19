const program = require('../models/model');
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const program_index = (req, res) => {
    program.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { title: 'Gekkonidae Breeding Programs', programs: result })
    })
    .catch((err) => {
        console.log(err);
        router.render('404',{ title: '404 Error'})
    });
};

