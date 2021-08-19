
const express = require('express');
const { restart } = require('nodemon');

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
        res.send(req.body)
    })
/*    app.get('/create/eggs', function (req, res) {
        res.render("accessory")
    });
    app.get('/create/eggs/:id', function (req, res) {
        res.render("accessory")
    });  */
    app.get('/incubator', function (req, res) {
        res.render("incubator");
    });
    app.post('/incubator', function(req, res) {
        console.log('dont count ya chickens');
        res.send(req.body);
    })
    app.get('/details/:id', function (req, res) {
        res.render("details");
    });
    app.get('/users', function (req, res) {
        res.render("users")
    });
    app.post('/users', function (req, res) {
        console.log('shit better be workin');
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