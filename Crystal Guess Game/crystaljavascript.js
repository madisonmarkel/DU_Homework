$(document).ready(function() {
    // Global Variables
    var wins = 0;
    var losses = 0;
    var goalNumber = 0; // calling math.random elsewhere
    var score = 0;

    var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"]; // calling each crystal with a crystal1: Math.Random() * (max - min) + min later

// Functions
    // Reset function
    function reset() {
        randomNumberFromRange();
        randomCrystalNumbers();
        score = 0;
        document.getElementById("userGuessAdding_display").innerHTML = score;
    }
        //GOAL NUMBER RANDOM # GENERATOR - Show random number between 19 - 120
        function randomNumberFromRange() {
            goalNumber = (Math.floor(Math.random() * 101) +19);
            document.getElementById("goalNumber_display").innerHTML = goalNumber;
        }
        randomNumberFromRange();

        //CRYSTALS RANDOM # GENERATOR - Assign each crystal hidden value between 1 - 12
        for (var i =0; i <crystals.length; i++){
            function randomCrystalNumbers() {
                crystals[i] = (Math.floor(Math.random() * 12) +1);
                console.log(crystals[i]);
            }
        randomCrystalNumbers();
        }


        //CRYSTALS
        // Loop making crystal buttons
        for (var i = 0; i < crystals.length; i++) {
            var crystalButton = $("<button>");
            crystalButton.addClass("crystal_button");
            crystalButton.text("Guess");
            crystalButton.val(crystals[i]);
            $("#crystals_display").append(crystalButton); 
        }
        // On click function that makes button into a random number from randomNumberFromRange
        $(".crystal_button").click(function() {
            userGuess = parseInt($(this).val()); // this is pulling from this current context (.crystal_button) which is then taking value from the for loop above
            score += userGuess; // score = userGuess + score;
            document.getElementById("userGuessAdding_display").innerHTML = score;

            // If statements matching userGuess to goalNumber
            if (score === goalNumber) {
                wins++;
                alert("way to go, dude");
                reset();
            } else if (score > goalNumber) {
                losses++;
                alert("loser");
                reset();
            };
        });

ready()
});