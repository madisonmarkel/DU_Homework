$(document).ready(function() {

    // Global Variables
    var allQuestions = [
        {
        question: "What artist cut off his ear?", // 
        choices: ["Van Gogh", "Manet", "Pisarro", "Renoir"],
        rightAnswer: 1,
        timerLength: 30
        },
        {
        question: "Which artist was NOT apart of the Abstract Expressionist Movement?",
        choices: ["Michaelango", "Clyfford Still", "Jackson Pollock", "Robert Motherwell"],
        rightAnswer: 1
        },
        {
        question: "Who painted the Guernica?",
        choices: ["YoMama", "Mother Theresa", "Obama", "Picasso"],
        rightAnswer: 1
        },
    ]
    var currentQuestionIndex = 0;

    // Submit Button
    $("#submit").click(function() {
        currentQuestionIndex++;

        // CJ: Is answer correct?
        // CJ: Record score

        if (allQuestions[currentQuestionIndex]) {
            displayQuestion(currentQuestionIndex);
        } else {
            //diplay end screen
            // CJ: show score
            // Allow game reset
            alert("no more questions, game complete");
        };
    });

    // Display question
    function displayQuestion(questionNumber) {
        var requestedQuestion = allQuestions[questionNumber];
        console.log(requestedQuestion);
        //actually displaying
        $("#questions").html(requestedQuestion.question);

        // need to make these radio choices in a for loop???
        $("#choices").html(requestedQuestion.choices.join(", "));  
        
        var options = allQuestions[currentQuestionIndex].choices;
        for (var i = 0; i < options.length; i++) {
            console.log(requestedQuestion.choices[i]);
            $("#options").html("<div><input type='radio'>" + requestedQuestion.choices[i] + "</input></div>")
        };
       // $("#choices").html("<div><input type='radio' name='option' value=''" + requestedQuestion.choices + "</div>")


        //display choices array but on the choices array only
        // CJ: start timer
    }






    // Initial page load
    displayQuestion(currentQuestionIndex);
});