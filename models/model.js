const express = require('express');
const handlebars = require('handlebars');
const app = express();

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kawekaweau:!Brookesia7$@cluster0.lntxf.mongodb.net/Gekkonidae"?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.set('view engine', 'hbs');


