$(document).ready(function() {
    // VARIABLES
    var correctAnswerScore = 0;
    var wrongAnswerScore = 0;
    var userChoice;
    var allQuestions = [
        {
        question: "What artist cut off his ear?", // allQuestions[0].questions in a loop allQuestions[i].questions
        choices: ["Van Gogh", "Manet", "Pisarro", "Renoir"],
        rightAnswer: 1,
        timerLength: 30
        },
        {
        question: "Which artist was NOT apart of the Abstract Expressionist Movement?",
        choices: ["Michaelango", "Clyfford Still", "Jackson Pollock", "Robert Motherwell"],
        rightAnswer: 1
        },
    ]
    var currentQuestion = 0;

    // TIMER FUNCTIONS
        // 10 second timer functions
        function tenSeconds(number = 10) {
            setTimeout(function () {
                number--;
                $("#timer").html("<p>Seconds left: " + number + "</p>") // display timer
                if (number === 0){
                    stopTime();
                } else {
                    tenSeconds(number);
                }
            }, 1000);
        }
        // Stop Timer Function
        function stopTime() {
            clearTimeout(number);
            alert("go to next question");
        };

        // Submit button function
        $("#submit").click(function() {
            alert("this is a string");
        });
        
    
    // DISPLAY QUESTIONS FUNCTION: https://codereview.stackexchange.com/questions/122837/simple-javascript-quiz-application-with-radio-buttons
    function displayQuestions() {
        $('#questions').html(parseInt(currentQuestion) + 1 + ". " + allQuestions[currentQuestion].question);
        var options = allQuestions[currentQuestion].choices;
        var formHtml = '';
        for (var i = 0; i < options.length; i++) {
            formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            allQuestions[currentQuestion].choices[i] + '</label></div><br/>';
            //html for submit button
            //make a submit button function with a click event function that moves onto next question
        }
        $('#form').html(formHtml);
        $("#option0").prop('checked', true);
    };

    // CHECKING IF USER ANSWER IS RIGHT -- NOT WORKING?
    function checkAns() {
        if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
          correctAnswers++;
        };
      };

    // Reset function
        function reset() {
        };


//put into reset function
    // QUESTIONS
    //for loop going through the questions
    for (var i = 0; i < allQuestions.length; i++) {
        console.log("dilly dilly");
        //Timer Starts
        tenSeconds(allQuestions[i].timerLength);
        displayQuestions();
        // if number === 0 then.....
        // if statements that if you choose right question it adds to correctAnswers > displays "congrats, right answer" > moves onto next question
        if (userChoice = rightAnswer) {
            correctAnswerScore++;
            alert("Congrats, that was the right guess");
            //move onto next question function
        } else if (userChoice !== rightAnswer){
            wrongAnswerScore--;
            alert("wrong guess, the right guess was: " + rightAnswer);
            //move onto next question function
            //how to end?? end function?
        };
        // else if you choose the wrong question it adds to the wrongAnswers > displays "wrong, this was the right answer > moves onto next question"

    };
    // put a final screen with score functions here

ready();
});