//dependencies
var fs = require('fs');
var path = require('path');

//export routes
module.exports = (function(app) {
    'use strict';

        //set up the router as htmlRoutes variable
        var htmlRoutes = require('express').Router();

        //set route for the home page
    htmlRoutes.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        //res.send('Hello home');
    });

    //set route for the survey page
    htmlRoutes.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        //res.send('hello survey');
    });

        return htmlRoutes;
})();