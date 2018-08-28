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

     // Code for handling the push
     database.ref().push({
      trainNameInput: trainNameInput,
      destinationInput: destinationInput,
      firstTrainTimeInput: firstTrainTimeInput,
      frequencyInput: frequencyInput
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
       // Append the newly created table data to the table row
       tRow.append(newTrainName, newDestination, newFirstTrainTime, newFrequency);
       // Append the table row to the table body
       tBody.append(tRow);



     // Handle the errors
  }, function(errorObject) {
     console.log("Errors handled: " + errorObject.code);
  });

ready();