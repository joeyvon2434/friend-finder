//dependencies
var fs = require('fs');
var path = require('path');
var friends = require('./../data/friends.js');

//export routes
module.exports = function(app) {
    'use strict';

    var apiRoutes = require('express').Router();

    apiRoutes.get('/friendlist', function(req, res) {
        res.json(friends);
        //res.send('api test');
    });

    apiRoutes.post("/friendlist", function(req, res) {
        var newFriend = req.body;
        friends.friendList.push(newFriend);
        console.log(friends);
    });

    return apiRoutes;
}();