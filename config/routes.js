
const express = require('express');
const { restart } = require('nodemon');
const User = require('../models/User.model.js')
module.exports = (app) => {


    app.get('/', function(req, res) {
        res.render("index");
    });
    app.get('/about', function (req, res) {
        res.render("about");
    });
    app.get('/species', function(req, res) {
        res.render("species");
    });
    app.post('/species', function(req, res) {
        console.log('ya bettah be adding the genus an species');
        res.send(req.body);
    })
    app.get('/create', function (req, res) {
        res.render("create");
    });
    app.post('/create', function (req, res) {
        console.log('make me frikken gecko dag-nabbit');
        res.send(req.body);
    });
    app.get('/incubator', function (req, res) {
        res.render("incubator");
    });
    app.post('/incubator', function(req, res) {
        console.log('dont count ya chickens');
        res.send(req.body);
    });
    app.get('/details/:id', function (req, res) {
        res.render("details");
    });
    app.get('/user', function (req, res) {
        res.render("user")
    });
    app.post('/user', async function (req, res) {
        // access my user model
        console.log(req.body);
        let user = new User({username: req.body.username, password: req.body.password})
        console.log('User', user);
        await user.save()
        // get passwd username from req.body
        // create a new user then save it
        console.log('shit be workin except the username');
        res.send()
    })
    app.get('/*', function (req, res) {
            res.render("404");
    });
};

/* 
var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash("B4c0/V", salt, function(err, hash){
    });
});
*/