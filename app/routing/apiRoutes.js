//dependencies
var fs = require('fs');
var path = require('path');
var friendList = require('./../data/friends.js');

//export routes
module.exports = function(app) {
    'use strict';

    var apiRoutes = require('express').Router();

    apiRoutes.get('/friendlist', function(req, res) {
        res.json(friendList);
        //res.send('api test');
        
    });

    return apiRoutes;
}();