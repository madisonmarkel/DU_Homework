$(document).ready(function() {

    // Global Variables
    var questions = ["blah", "blah 2", "bob loblaw"]
    var currentQuestionIndex = 0;

    // Submit Button
    $("#submit").click(function() {
        currentQuestionIndex++;

        // CJ: Is answer correct?
        // CJ: Record score

        if (questions[currentQuestionIndex]) {
            displayQuestion(currentQuestionIndex);
        } else {
            //diplay end screen
            // CJ: show score
            // Allow game reset
            alert("no more questions, game complete")
        };
    });

    // Display question
    function displayQuestion(questionNumber) {
        var requestedQuestion = questions[questionNumber];

        //actually displaying
        $("#questions").html(requestedQuestion);

        // CJ: start timer
    }






    // Initial page load
    displayQuestion(currentQuestionIndex);
});