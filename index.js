const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const app = require('express')();

mongoose.connect('"mongodb+srv://kawekaweau:!Brookesia7$@cluster0.lntxf.mongodb.net/Gekkonidae?retryWrites=true&w=majority"', {useNewUrlParser: true, useUnifiedTopology: true});

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));