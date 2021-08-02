const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const url = require('url');
const path = require('path');

let app = express();

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.set('view engine', 'handlebars');
    //TODO: Setup the body parser
    app.use(bodyParser.urlencoded({ extended: true}))
    //TODO: Setup the static files
    app.use('/static', express.static(path.join(__dirname, 'public')))

};