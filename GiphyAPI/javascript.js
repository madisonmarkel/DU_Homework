$(document).ready(function() {
    // GLOBAL VARIABLES
    var established_buttons = ["Van Gogh", "Frida Kahlo", "Picasso", "Basquiat"]
    
    var userInput = $(".btn").val();

    //GLOBAL VARIABLES

    //FUNCTIONS
        //Buttons from array
        function renderButton() {
            //clears div to limit dupes
            $("#button_bar").empty();
            // for loop going through established_searches array
            for (var i=0; i < established_buttons.length; i++) {
                var establishedArtistButtons = $("<button class='btn'>" + established_buttons[i] + "</button>");
                // NEED TO CONNECT DATA ARTIST TO ESTABLISHED_BUTTONS[I] AND SEARCH INPUT
                establishedArtistButtons.attr("data-artist", established_buttons[i]);
                // Pushes established_searches array into buttons in button_bar
                $("#button_bar").append(establishedArtistButtons);
            }
        };

        //Create new button for submit
        $("#submit_button").click(function() {
            // event.preventDefault() prevents submit button from trying to send a form.
            event.preventDefault();
            // Takes the value from the search input bar
            var userButton = $("#submit_text_input").val().trim();
            //Pushes the user input from search into the established_buttons array which then add its into the renderButton function
            (established_buttons).push(userButton);
            // Calls the renderButton function so that it's "local" and can access this on click function (ESSENTIAL)
            renderButton();
        });
    renderButton();

    //ON CLICK API CALL
    function displayArtist() {
        $(".btn").click(function() {
            var buttonText = $(this).attr("data-artist");
            //API
            // CONNECTS THE GIPHY PARAMETERS TO SEARCH INPUT AND USES ARTIST TO INPUT INTO API URL
            //var artist = $(this).attr("data-artist");
            //var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0W37hDULOmJ9VytBGG0JJRhBoOb7ZuP7&q=&limit=10&offset=0&lang=en"
            $.ajax({
                url: "https://api.giphy.com/v1/gifs/search?api_key=0W37hDULOmJ9VytBGG0JJRhBoOb7ZuP7&q=" + buttonText + "&limit=10",
                method: "GET",
                data: {

                }
            }).then(function(response) {
                console.log(response);
                var results = response.data;

                for (var i=0; i < results.length; i++) {
                    // Creates div to put in the gif request
                    var artistGifsDiv = $("<div>");
                    artistGifsDiv.attr("id", "display_gifs");
                    
                    //Creates an image tag to put the gif
                    var artistGifs = $("<img>");
                    artistGifs.attr("src", results[i].images.fixed_width_still.url);

                    // Appends the gifts to the html page
                    (artistGifsDiv).append(artistGifs);
                    $("#display_gifs").prepend(artistGifsDiv);
                }
            });
        });
    };

    // Adding click event listeners to all elements
    $(document).on("click", ".btn", displayArtist);
});