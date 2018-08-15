$(document).ready(function() {

    // Global Variables
    var questions = ["blah", "blah 2", "bob loblaw"]
    var currentQuestion = 0;

    // Submit Button
    $("#submit").click(function() {
        currentQuestion++;
        displayQuestion(currentQuestion);
    });

    // Display question
    function displayQuestion(questionNumber) {
        var currentQuestion = questions[questionNumber];

        //actually displaying
        $("#questions").html(currentQuestion);
    }






    // Initial page load
    displayQuestion(currentQuestion);
});