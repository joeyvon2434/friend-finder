//dependencies
var fs = require('fs');
var path = require('path');

//export routes
module.exports = (function(app) {
    'use strict';

        var htmlRoutes = require('express').Router();

    htmlRoutes.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        //res.send('Hello home');
    });

    htmlRoutes.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        //res.send('hello survey');
    });

        return htmlRoutes;
})();