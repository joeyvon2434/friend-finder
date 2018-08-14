//dependencies
var fs = require('fs');
var path = require('path');
var friends = require('./../data/friends.js');

//export routes
module.exports = function (app) {
    'use strict';

    var apiRoutes = require('express').Router();

    apiRoutes.get('/friendlist', function (req, res) {
        res.json(friends);
        //res.send('api test');
    });

    apiRoutes.post("/friendlist", function (req, res) {

        var newFriend = req.body;
        var difference = 41;
        var match = {
            name: 'Slug',
            photo: 'https://i.dailymail.co.uk/i/pix/2013/10/13/article-0-19977126000005DC-109_634x377.jpg'
        }

        for (var i = 0; i < friends.friendList.length; i++) {
            var compatibility = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                compatibility = Math.abs(newFriend.scores[j] - friends.friendList[i].scores[j]);
            }
            console.log('Compatibility: ' + compatibility);
            console.log('Difference: ' + difference);
            if (compatibility < difference) {
                difference = compatibility;
                match.name = friends.friendList[i].name;
                match.photo = friends.friendList[i].imageLink;
            };
        };

        friends.friendList.push(newFriend);
        console.log(match);
        res.send(match);
    });

    return apiRoutes;
}();