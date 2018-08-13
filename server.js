//Dependencies
///////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');


//Set up express app
////////////////////////////////////

var app = express();
var PORT = 3000;

//Set up express app for parsing
////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
/////////////////////////////////////

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


//commented out routing in favor of external routing above
/*
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});
*/



//Set server to listen on designated PORT
/////////////////////////////////////
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});