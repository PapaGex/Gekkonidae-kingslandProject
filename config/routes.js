
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
    app.post('/species', async function(req, res) {
        let species = ({
            speciesName: req.body.speciesName,
            homeRange: req.body.homeRange,
            tempRange: req.body.tempRange,
            humidity: req.body.humididty,
            notes: req.body.notes
        });
        console.log('ya bettah be adding the genus an species');
        console.log("Species", species);
        await species.save();
        res.send(req.body);
    });
    app.get('/gecko', function(req, res) {
        res.render("gecko");
    });
    app.post('/gecko', async function(req, res) {
        let gecko = ({
            geckoName: req.body.geckoName,
            species: req.body.species,
            hatchDate: Date.parse(req.body.hatchDate),
            imageUrl: req.body.imageUrl,
            gender: req.body.gender,
            purchasePrice: req.body.purchasePrice
        });
        console.log('make me frikken gecko dag-nabbit');
        console.log("Gecko", gecko);
        await gecko.save();
        res.send();
    });
    app.get('/incubator', function(req, res) {
        res.render("incubator");
    });
    app.post('/incubator', async function(req, res) {
        let incubator = ({ 
            evopositionDate: Date.parse(req.body.evopoositionDate), 
            incubationTempRange: req.body.incubationTempRange, 
            hatchDateRange: Date.parse(req.body.hatchDateRange), 
            parents: req.body.parents, 
            species: req.body.species
        });
        console.log('dont count ya chickens');
        console.log('Incubator', incubator);
        await incubator.save();
        res.send();
    });
    app.get('/details/:id', function(req, res) {
        res.render("details");
    });
    app.get('/user', function(req, res) {
        res.render("user");
    });
    app.post('/user', async function(req, res) {
        // access my user model
        console.log(req.body);
        let user = new User({
            username: req.body.username, 
            password: req.body.password
        });
        console.log('User', user);
        await user.save();
        // get passwd username from req.body
        console.log('shit be workin except the username');
        res.send()
    });
    app.get('/*', function(req, res) {
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