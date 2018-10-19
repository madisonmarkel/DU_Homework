// Dependencies
// =============================================================
    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");

// Sets up the Express App
// =============================================================
    var app = express();
    var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
    app.use(bodyParser.text({ type: 'text/html' }));

// =============================================================
// CALLING FILES THAT DIRECT PATHS
//passing app into function in html routes
    require("./app/routing/apiRoutes")(app);
    require("./app/routing/htmlRoutes")(app);


// =============================================================
//STATIC PATHS IN FOLDER - ?????????????????
    app.use(express.static(__dirname + "./public"));

// =============================================================
//PORT LISTENER
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });