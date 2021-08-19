
const express = require('express');
const HandleTemplate = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// app.use(cors());01



module.exports = (app) => {


    app.set('view engine', 'hbs');
    app.engine( "hbs",
        HandleTemplate({ extname: "hbs", defaultLayout: "",
            layoutsDir: __dirname + "/views", partialsDir: __dirname + "/views", })
    );

    app.use(bodyParser.urlencoded({ extended: true}));




    app.use(express.static('static'));
};

