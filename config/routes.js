
const express = require('express');
const { restart } = require('nodemon');
const User = require('../models/User.model.js');
const Species = require('../models/Species.model');
const Gecko = require('../models/Gecko.model');
const Incubator = require('../models/Incubator.model'); 
const mongoose = require('mongoose');


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
        let newSpecies = new Species({
            genusName: req.body.genusName,
            speciesName: req.body.speciesName,
            homeRange: req.body.homeRange,
            tempLow: req.body.tempLow,
            tempHigh: req.body.tempHigh,
            humidity: req.body.humidity,
            notes: req.body.notes,
        });
        console.log('ya bettah be adding the genus an species');
        console.log("Species", Species);
        newSpecies.save();
        res.send();
    });
    app.get('/gecko', function(req, res) {
        res.render("gecko");
    });
    app.post('/gecko', async function(req, res) {
        let newGecko = new Gecko({
            geckoName: req.body.geckoName,
            speciesName: req.body.speciesName,
            hatchDate: req.body.hatchDate,
            gender: req.body.gender,
            purchasePrice: req.body.purchasePrice
        });
        console.log('make me frikken gecko dag-nabbit');
        console.log("Gecko", newGecko);
        await newGecko.save();
        res.send();
    });
    app.get('/incubator', function(req, res) {
        res.render("incubator");
    });
    app.post('/incubator', async function(req, res) {
        let newIncubator = new Incubator({ 
            evopositionDate: req.body.evopositionDate, 
            incubationTempRange: req.body.incubationTempRange, 
            hatchDateRange: req.body.hatchDateRange, 
            parents: req.body.parents, 
            species: req.body.species
        });
        console.log('dont count ya chickens');
        console.log('Incubator', newIncubator);
        await newIncubator.save();
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
        let newUser = new User({
            username: req.body.username, 
            password: req.body.password
        });
        console.log('User', newUser);
        await newUser.save();
        // get passwd username from req.body
        console.log('shit be workin');
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