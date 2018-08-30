$(document).ready()
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdBkKXWxvq4Qlp3Zog34mMMwdvuN3P2Q4",
    authDomain: "du-train-schedule-homework.firebaseapp.com",
    databaseURL: "https://du-train-schedule-homework.firebaseio.com",
    projectId: "du-train-schedule-homework",
    storageBucket: "du-train-schedule-homework.appspot.com",
    messagingSenderId: "799949482144"
  };
  firebase.initializeApp(config);

    var database = firebase.database();


  //-------------------- GLOBAL VARIABLES -------------------- 
  var trainNameInput;
  var destinationInput;
  var firstTrainTimeInput;
  var firstTrainTimeInput;


  // -------------------- SUBMIT BUTTON ON CLICK -------------------- 
  // Creating the initial .on("click") event
  $("#add_train").on("click", function(event) {
    alert("wow");
     event.preventDefault();

     // Grabbed values from text boxes
     trainNameInput = $("#train_name_input").val().trim();
     destinationInput = $("#destination_input").val().trim();
     firstTrainTimeInput = $("#first_train_time_input").val().trim();
     frequencyInput = $("#frequency_input").val().trim();
     
     //current time
     var currentTime = moment();
     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
     //difference between first time train and now
     var trainTimeModified = moment(firstTrainTimeInput, "hh:mm");
     console.log(trainTimeModified);
     //difference between first time train and now
     var diffTime = moment().diff(moment(trainTimeModified), "minutes");
     console.log(diffTime);
     //time apart (remainder)
     var remainingTime = diffTime % frequencyInput;
     console.log(remainingTime);
     // difference between current time (now) and next arrival
     var minutesAway = frequencyInput - remainingTime;
     console.log(minutesAway);
     // combo of first time train and frequency
     var nextArrival = moment().add(moment(minutesAway), "hh:mm");
     console.log(moment(nextArrival).format("hh:mm"));

    //  // First Time (pushed back 1 year to make sure it comes before current time)
    //     var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    //     console.log(firstTimeConverted);

    //  // Current Time
    //     var currentTime = moment();
    //     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    //  // Difference between the times
    //     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    //     console.log("DIFFERENCE IN TIME: " + diffTime);

    //  // Time apart (remainder)
    //     var tRemainder = diffTime % tFrequency;
    //     console.log(tRemainder);

    //  // Minute Until Train
    //     var tMinutesTillTrain = tFrequency - tRemainder;
    //     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    //  // Next Train
    //     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    //     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



     // Code for handling the push
     database.ref().push({
      trainNameInput: trainNameInput,
      destinationInput: destinationInput,
      firstTrainTimeInput: firstTrainTimeInput,
      frequencyInput: frequencyInput,
      nextArrival: nextArrival,
      minutesAway: minutesAway
     });
  });


  //-----------------------
    database.ref().on("child_added", function(snapshot) {
     // storing the snapshot.val() in a variable for convenience
     var databaseInfo = snapshot.val();

     // Console.loging the last input data
     console.log(databaseInfo.trainNameInput);
     console.log(databaseInfo.destinationInput);
     console.log(databaseInfo.firstTrainTimeInput);
     console.log(databaseInfo.frequencyInput);
     console.log(databaseInfo.nextArrival);
     console.log(databaseInfo.minutesAway);

     // Change the HTML to reflect
     $("#train_name_input").text(databaseInfo.trainNameInput);
     $("#destination_input").text(databaseInfo.destinationInput);
     $("#first_train_time_input").text(databaseInfo.firstTrainTimeInput);
     $("#frequency_input").text(databaseInfo.frequencyInput);


     // PUSHING DATABASE INFO INTO TABLE
     // storing the snapshot.val() in a variable for convenience
      console.log(snapshot.val())
       // Get reference to existing tbody element, create a new table row element
       var tBody = $("tbody");
       var tRow = $("<tr>");

       // Methods run on jQuery selectors return the selector they we run on
       // This is why we can create and save a reference to a td in the same statement we update its text
       var newTrainName = $("<td>").text(snapshot.val().trainNameInput);
       var newDestination = $("<td>").text(snapshot.val().destinationInput);
       var newFirstTrainTime = $("<td>").text(snapshot.val().firstTrainTimeInput);
       var newFrequency = $("<td>").text(snapshot.val().frequencyInput);
       var newNextArrival = $("<td>").text(snapshot.val().nextArrival);
    //    console.log(newNextArrival);
       var newMinutesAway = $("<td>").text(snapshot.val().minutesAway);
    //    console.log(newMinutesAway);

       // Append the newly created table data to the table row
       tRow.append(newTrainName, newDestination, newFirstTrainTime, newFrequency, newNextArrival, newMinutesAway);
       // Append the table row to the table body
       tBody.append(tRow);



     // Handle the errors
  }, function(errorObject) {
     console.log("Errors handled: " + errorObject.code);
  });

ready();