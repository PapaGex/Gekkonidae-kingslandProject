const express = require('config/express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app.get('/', function (req, res) {
        res.send('root')
    })
    //TODO: Setup the body parser

    //TODO: Setup the static files

};