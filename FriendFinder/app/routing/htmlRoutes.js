//HOW TO GET TO CSS FILES?????

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require("express");

//var app = express();

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // STATIC PATHS IN FOLDER - ?????????????????
    //app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(__dirname + "/../public"));

    //===============SURVEY GET PATH
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //===============HOME GET PATH
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};