const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 2077;

/*
const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();

*/

require('dotenv').config();
require('./config/express')(app);
require('./config/routes')(app);

app.use(cors());
app.use(express.json());

//mongoose.connect("mongodb+srv://kawekaweau:!Brookesia7$@gekkonidae.lntxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
//{useNewUrlParser: true, useUnifiedTopology: true};

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database is most def kicking it!")
})

const geckoRouter = require('./controllers/gecko');
const speciesRouter = require('./controllers/species');


app.use('/gecko', geckoRouter);
app.use('/species', speciesRouter);

app.listen(port, () => {
    console.log(`Server is doin its shit on port: ${port}`);
});