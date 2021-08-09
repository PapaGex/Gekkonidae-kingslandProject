const mongoose = require('mongoose');
const create = require('./create');

let conn = null;

const uri = "mongodb+srv://kawekaweau:!Brookesia7$@cluster0.lntxf.mongodb.net/Gekkonidae?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


  const gekkoSchema = new mongoose.GekkoSchema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    ImageUrl: {
        type: String,
        required: true
    },
// {add boolean for adult or hatchling}
// {habitat descriptor from radio button}
// {hatch date or close approximation}
// {ease of care}
  })