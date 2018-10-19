// ===========CALLING PLANTS ARRAY FROM FRIENDS.JS FILE
var path = require("path");


//PULLING IN PLANTS ARRAY SO I CAN CALL THE RESULTS HERE
var plants = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    
  //===============API GET PATH
    app.get("/api/friends", function(req, res) {
        res.json(plants);
    });

  //===============API POST PATH
  // so THIS is posting to the friends.js - not the on click...right?
    app.post("/api/friends", function(req, res) {
        
        // variable for match
        var plantBuddyMatch = {
            name: "",
            photo: "",
            description: "",
            matchDifference: 1000
        }

        //STRINGIFIES THE JSON BODY - (taking from plants, not exactly sure how)
        var userData = req.body;
        //GETS USER SCORES OUTTA OBJECT
        var userScores = userData.scores;

        // this variable will measure the score difference between the 2 objects... 
      // ...being compared, lower score is better.
      var totalDifference = 0;
      var plantDifference = 0;

      // will loop through each friend in the array
      for (i=0; i<plants.length; i++) {

        totalDifference = 0;

        // next loop through each score in friends[i], and com pare them...
        // to userData scores and calc the absolute difference.
        for (x=0; x<plants[i].scores.length; x++) {

          // calculate total score
          totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(plants[i].scores[x]));
          
        }

        // checks if friend[i]'s totalDifference is less than the bestFriend,... 
        // ...friend difference, if so, it becomes the new best match
        console.log("Plant: ", plants[i].name, "Total Score: ", totalDifference);

        if (totalDifference <= plantBuddyMatch.matchDifference) {
          // sets plantBuddyMatch variables to best match
          plantBuddyMatch.name = plants[i].name;
          plantBuddyMatch.photo = plants[i].photo;
          plantBuddyMatch.description = plants[i].description;
          plantBuddyMatch.matchDifference = totalDifference;

          console.log("The new best match is " + plantBuddyMatch.name + " with a friend score of: " + totalDifference + "\n");

        } else {
          // character is not the best match.
          console.log(plants[i].name + " is not your best friend\n")
        }
      }

      plants.push(userData);
      res.json(plantBuddyMatch);
      console.log(plantBuddyMatch);
      console.log("-----------------------------------------------");
    });

    // Math.abs() - gets absolute value of a number, so if it's negative, makes it positive
    
};