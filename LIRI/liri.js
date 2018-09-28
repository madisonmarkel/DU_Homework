require("dotenv").config();
var request = require("request");

var userInput = "";
var nodeArgs = process.argv;

// puts command prompt into index 2 to call in if statements
var command = process.argv[2];

//loop tying in mutliple words for a search after the 3rd index
        for (var i=3; i< nodeArgs.length; i++){
            if(i>3 & i < nodeArgs.length) {
                userInput=userInput + "+" + nodeArgs[i];
            }
            else{
                userInput += nodeArgs[i];
            }
        }

// ---------------------------------- SONG THIS / SPOTIFY ---------------------------------- //
// node liri.js spotify-this-song '<song name here>'
    // This will show the following information about the song in your terminal/bash window    
        // Artist(s)
        // The song's name
        // A preview link of the song from Spotify
        // The album that the song is from
        
        function spotifyThis(command, userInput) {
            var Spotify = require('node-spotify-api');
            var keys = require("./key.js");

            var spotify = new Spotify(keys.spotify);
            if (command === "spotify-this-song" && userInput === "") {
                spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                console.log("Song: " + (data).tracks.items[7].name); 
                console.log("Artist(s): " + (data).tracks.items[7].album.artists[0].name);
                console.log("Album: " + (data).tracks.items[7].album.name);
                console.log("Preview: " + (data).tracks.items[7].preview_url);  
                });
            } else if (command === "spotify-this-song") {                
                spotify.search({ type: 'track', query: userInput }, function(err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                console.log("Song: " + (data).tracks.items[0].name); 
                console.log("Artist(s): " + (data).tracks.items[0].album.artists[0].name);
                console.log("Album: " + (data).tracks.items[0].album.name);
                console.log("Preview: " + (data).tracks.items[0].preview_url);  
                });
            };
        };
        spotifyThis(command, userInput);


// ---------------------------------- CONCERT THIS / BANDS IN TOWN ---------------------------------- //
// node liri.js concert-this <artist/band name here>
    // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
        // Name of the venue
        // Venue location
        // Date of the Event (use moment to format this as "MM/DD/YYYY")

    function concertThis(command, userInput) {
        // if userInput is left blank, it'll pull up concerts for Beyonce because everyone wants concerts for Beyonce
        if (command === "concert-this" && userInput === "") {
            request("https://rest.bandsintown.com/artists/Beyonce/events?app_id=codingbootcamp", function(error, response, body){
                if (!error && response.statusCode === 200) {
                    var data = JSON.parse(body);
                    console.log("Venue: " + data[0].venue.name);
                    console.log("Location: " + data[0].venue.city + ", " + data[0].venue.region + ", " + data[0].venue.country);

                    var dates = data[0].datetime;
                    var moment = require('moment');
                    console.log("Date: " + moment(dates).format("MMM Do YYYY"));
                }
            });
        // allows user input to dictate search
        } else if (command === "concert-this") {
            request("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp", function(error, response, body){
                if (!error && response.statusCode === 200) {
                    var data = JSON.parse(body);
                    console.log("Venue: " + data[0].venue.name);
                    console.log("Location: " + data[0].venue.city + ", " + data[0].venue.region + ", " + data[0].venue.country);

                    var dates = data[0].datetime;
                    var moment = require('moment');
                    console.log("Date: " + moment(dates).format("MMM Do YYYY"));
                }
            });
        }
    };
    concertThis(command, userInput);
            
        
// ---------------------------------- MOVIE THIS / OMDB ---------------------------------- //        
// node liri.js movie-this '<movie name here>'
    // This will output the following information to your terminal/bash window:       
        // * Title of the movie.
        // * Year the movie came out.
        // * IMDB Rating of the movie.
        // * Rotten Tomatoes Rating of the movie.
        // * Country where the movie was produced.
        // * Language of the movie.
        // * Plot of the movie.
        // * Actors in the movie.
        
        //if userInput is left blank, it'll pull up Mr. Nobody
    function movieThis(command, userInput) {
        if (command === "movie-this" && userInput === "") {
            request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body){
                if (!error && response.statusCode === 200) {
                    console.log("Title: " + JSON.parse(body).Title);
                    console.log("Released: " + JSON.parse(body).Released);
                    console.log("IMDB Rating: " + JSON.parse(body).imbdbRating);
                    //console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Country: " + JSON.parse(body).Country);
                    console.log("Language(s): " + JSON.parse(body).Language);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors and Actresses: " + JSON.parse(body).Actors);
                }
            });
        // allows user input to dictate search
        } else if (command === "movie-this") {
            request("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy", function(error, response, body){
                if (!error && response.statusCode === 200) {
                    console.log("Title: " + JSON.parse(body).Title);
                    console.log("Released: " + JSON.parse(body).Released);
                    console.log("IMDB Rating: " + JSON.parse(body).imbdbRating);
                    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                    console.log("Country: " + JSON.parse(body).Country);
                    console.log("Language(s): " + JSON.parse(body).Language);
                    console.log("Plot: " + JSON.parse(body).Plot);
                    console.log("Actors and Actresses: " + JSON.parse(body).Actors);
                }
            });
        };
    };
    movieThis(command, userInput);
    
// ---------------------------------- DO WHAT IT SAYS ---------------------------------- //
// node liri.js do-what-it-says
    //Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
        // Feel free to change the text in that document to test out the feature for other commands.

    function doWhatItSays(){
        var fs = require("fs");
        var textFile = "./random.txt";

        if (command === "do-what-it-says") {
            fs.readFile(textFile, "utf8", function(err, data){
                if(err) {
                    return console.log(err);
                }
                    //put 'doItData" it into a function (make spotify-this a function) spotifyThis(doItData)
                    dataSongName = data.split(",");

                    if (dataSongName[0] === "spotify-this-song") {
                        //spotifyThis(dataSongName[1]);
                        spotifyThis(dataSongName[0], dataSongName[1])
                    };
                })
        };
    };
    doWhatItSays();

// ---------------------------------- LOG COMMANDS + USER INPUT ---------------------------------- //
        
    function logCommands(command, userInput) {
        fs = require("fs");
        var textFile = "./log.txt";

        fs.appendFile(textFile, command + ": " + userInput + ", ", function (err){
        if(err) throw err;
            console.log("Your search of " + userInput + " was logged to our records.");
        });
    }
    logCommands(command, userInput);