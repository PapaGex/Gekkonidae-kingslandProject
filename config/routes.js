
const express = require('express');

module.exports = (app) => {


    app.get('/', function(req, res) {
        res.render("index");
    });
    app.get('/about', function (req, res) {
        res.render("about");
    });
    app.get('/create', function (req, res) {
        res.render("create")
    });
    app.get('/create/accessory', function (req, res) {
        res.render("accessory")
    });
    app.get('/create/accessory/:id', function (req, res) {
        res.render("accessory")
    });
    app.get('/incubator', function (req, res) {
        res.render("incubator");
    });
    app.get('/details/:id', function (req, res) {
        res.render("details");
    });
    app.get('/*', function (req, res) {
            res.render("404");
    });
};