//dependencies
var fs = require('fs');
var path = require('path');
var friends = require('./../data/friends.js');

//export routes mapping
////////////////////////
module.exports = function (app) {
    'use strict';

    var apiRoutes = require('express').Router();

    //sets get route for api data
    /////////////////////////////
    apiRoutes.get('/friendlist', function (req, res) {
        res.json(friends);
        //res.send('api test');
    });

    //sets post route for when submitting the survey
    /////////////////////////////
    apiRoutes.post("/friendlist", function (req, res) {

        //pulls survey results from request body
        var newFriend = req.body;

        //sets a default difference value above that which is possible.
        //difference value holds the lowest difference between the user submission and previous 
        //submissions to find the most compatible friend
        var difference = 41;
        var match = {
            //slug is the default friend, it will never be read, but I thought it was funny
            name: 'Slug',
            photo: 'https://i.dailymail.co.uk/i/pix/2013/10/13/article-0-19977126000005DC-109_634x377.jpg'
        };

        //Loop through all the existing submissions and compare the user's submission
        //to find the most compatible friend
        for (var i = 0; i < friends.friendList.length; i++) {
            var compatibility = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                compatibility = Math.abs(newFriend.scores[j] - friends.friendList[i].scores[j]);
            }
            //commented out, but available for troubleshooting
            //console.log('Compatibility: ' + compatibility);
            //console.log('Difference: ' + difference);
            if (compatibility < difference) {
                difference = compatibility;

                //set photo and name of match based on difference and compatibility
                match.name = friends.friendList[i].name;
                match.photo = friends.friendList[i].imageLink;
            };
        };

        //add the new submission to the friendList variable
        friends.friendList.push(newFriend);

        //commented out but available for troubleshooting
        //console.log(match);

        //send the match in the response object to the user
        res.send(match);
    });

    return apiRoutes;
}();