
const express = require('express');
/*const handlebars = require('handlebars');
const router = express.router();

router.get('/views/about.hbs', (req, res) => {
    res.render('/views/about.hbs');
});
*/

module.exports = (app) => {

  //  app.set('view engine', 'handlebars');
    // TODO...
    app.get('/', function(req, res) {
        res.render("index");
    });
    app.get('/about', function (req, res) {
        res.render("about");
    });
    app.get('/create', function (req, res) {
        res.render("create")
    });
    app.get('/details/:id', function (req, res) {
        res.render("details");
    });
    app.get('/*', function (req, res) {
            res.render("404");
    });
};