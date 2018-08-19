$(document).ready(function() {

    // Global Variables
    var allQuestions = [
        {
        question: "What artist cut off his ear?", // 
        choices: ["Van Gogh", "Manet", "Pisarro", "Renoir"],
        rightAnswer: 0,
        },
        {
        question: "Which artist was NOT apart of the Abstract Expressionist Movement?",
        choices: ["Michaelango", "Clyfford Still", "Jackson Pollock", "Robert Motherwell"],
        rightAnswer: 0
        },
        {
        question: "Who painted the Guernica?",
        choices: ["YoMama", "Mother Theresa", "Obama", "Picasso"],
        rightAnswer: 3
        },
        {
        question: "What type of glue can be used to prime canvas?",
        choices: ["Polyurethane", "Elmers", "Rabbit Skin", "Epoxy"],
        rightAnswer: 2
        },
    ]
    var currentQuestionIndex = 0;
    var correctAnswers = 0;
    var timer;

    // SUBMIT BUTTON FUNCTION - This is driving the game, it's like a for loop due to the currentQuestionIndex increment
    $("#submit").click(function() {
        checkAnswer();
        currentQuestionIndex++;
        clearTimeout();
        tenSeconds();
        console.log(correctAnswers);
        if (allQuestions[currentQuestionIndex]) {
            displayQuestion(currentQuestionIndex);
        } else {
            $("#choices").empty();
            $("#submit").empty();
            $("#timer").empty();
            //diplay end screen/score
            $("#end_screen").html("<p>You guessed " + correctAnswers + " correctly</p>"+"<p> That's " + correctAnswers / 4 * 100 + "%!</p>");
            //RESET BUTTON
            //creating button
                var resetButton = $("<button>").text("Reset").attr("id", "reset_button_styling");
                //href for button
                var a_href = $('#reset_button').attr('href');
                $('#reset_button').attr('href','http://www.madisonmarkel.com/DU_Homework/TriviaGame/index.html');
                //appending button to html
                $("#reset_button").append(resetButton);
                //passes reset function into button - reset function is not working
                /*
                resetButton.onclick = reset();
                */
        };
    });

    // CHECKING IF USER ANSWER IS RIGHT FUNCTION- WORKING
    function checkAnswer() {
        if ($("input[name=option]:checked").val() == allQuestions[currentQuestionIndex].rightAnswer) {
          correctAnswers++;
        };
      };

    // RESET FUNCTION -- NOT COMPLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function reset() {
        correctAnswers = 0;
        console.log(correctAnswers);
        stopTime();
        // displayQuestion();
    }

    // TIMER FUNCTIONS
        // 10 second timer functions
        function tenSeconds(number = 20) {
            // Stop Timer Function
            clearTimeout(timer);
            displayTime(number);
            //Start timer function
            timer = setTimeout(function () {
                number--;
                if (number === 0){
                    stopTime();
                    $("#choices").empty();
                    $("#choices").html("<p>Times Up! Go to next question</p>");
                } else {
                    tenSeconds(number);
                }
            }, 1000);
            
        };
        function stopTime() {
            clearTimeout(timer);
            displayTime(0);
        }
        // DISPLAY TIMER
        function displayTime(number) {
            $("#timer").html("<p>Seconds left: " + number + "</p>");
        }

    // DISPLAY QUESTION FUNCTION - WORKING
    function displayQuestion(questionNumber) {
        var requestedQuestion = allQuestions[questionNumber];
        console.log(requestedQuestion);
        //actually displaying
        var outputChoices = "";
        outputChoices += requestedQuestion.question;
        // displays radio choices
        var options = allQuestions[currentQuestionIndex].choices;   
        for (var i = 0; i < options.length; i++) {
            // Start timer
            tenSeconds();
            console.log(requestedQuestion.choices[i]);
            //putting choices into html
            outputChoices += '<div class="question_options"><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            allQuestions[currentQuestionIndex].choices[i] + '</label></div><br/>';

        };
        //calling function push out to HTML
        $('#choices').html(outputChoices);
    }

    // Initial page load
    displayQuestion(currentQuestionIndex);
});