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
        // CJ: Record score
        if (allQuestions[currentQuestionIndex]) {
            displayQuestion(currentQuestionIndex);
        } else {
            //diplay end screen/score
            $("#end_screen").html("<p>You guessed " + correctAnswers + " correctly</p>");
            // calls reset button
            reset();
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
        stopTime();
        //creating a reset button
        var resetButton = $("<button>").text("Reset");
        $("#reset_button").append(resetButton);
    }

    // TIMER FUNCTIONS
        // 10 second timer functions
        function tenSeconds(number = 10) {
            // Stop Timer Function
            clearTimeout(timer);
            displayTime(number);
            //Start timer function
            timer = setTimeout(function () {
                number--;
                if (number === 0){
                    stopTime();
                } else {
                    tenSeconds(number);
                }
            }, 1000);
            
        };

        function stopTime() {
            clearTimeout(timer);
            // bug right here, do something when time stops
            displayTime(0);
            currentQuestionIndex++;
            // move to next question!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // dynamically change the whole container???
        }

        function displayTime(number) {
            $("#timer").html("<p>Seconds left: " + number + "</p>"); // display timer
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
            outputChoices += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
            allQuestions[currentQuestionIndex].choices[i] + '</label></div><br/>';

        };
        //calling function push out to HTML
        $('#choices').html(outputChoices);
    }

    // Initial page load
    displayQuestion(currentQuestionIndex);
});