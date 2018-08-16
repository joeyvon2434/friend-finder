//Dependencies
///////////////////////////////////

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require('fs');
var favicon = require("serve-favicon");


//Set up express app
////////////////////////////////////

var app = express();
var PORT = process.env.PORT || 3000;

//Set up express app for parsing
////////////////////////////////////
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
/////////////////////////////////////

//pulls in external routing files
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

//uses proper variables to connect routes from external routing files
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
console.log(__dirname);
//app.use(express.static(__dirname + "app" + "public"));

//display favicon
/////////////////////////////////////
//app.use(favicon(path.join(__dirname,'app', 'public')));


//Set server to listen on designated PORT
/////////////////////////////////////
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});