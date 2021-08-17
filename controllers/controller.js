const program = require('../models/model')
const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://kawekaweau:!Brookesia7$@gekkonidae.lntxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const routes = require('./routes')
    // program_error, program_about, program_create, program_details, program_index

const program_index = (req, res) => {
    program.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { title: 'Gekkonidae Breeding Programs', programs: result })
    })
    .catch((err) => {
        console.log(err);
        router.render('404',{ title: '404 Error'})
    })
}

