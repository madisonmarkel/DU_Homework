<h1>LIRI App</h1>
<h2>Basics:</h2>
<p>LIRI is a tool created with NodeJS to allow users to search for concerts, movies, and spotify songs via an API request. It's concept is similar to Siri, except is it language (written) based instead of vocally based. Liri uses OMDB, Bands in Town, and Spotify for it's information sources.</p>

<p>In order to use this application, you will have to do several NPM installs.</p>
<ul>
  <li>Node-Spotify-API</li>
  <li>Request</li>
  <li>Moment</li>
  <li>DotEnv</li>
</ul>
  
<p>You will also have to include your Spotify ID and Spotify Secret key in a .env file and create gitignore files to hide node_modules, .DS_store, and .env files.</p>

--------------------------------------------------------------------------------------------------------

<h2>Using the App:</h2>
<p>Using terminal/command line, type in a node command (e.g. node liri.js) plus the follow search keys:</p>
<ul>
  <li>concert-this</li>
  <li>spotify-this-song</li>
  <li>movie-this</li>
</ul>
  
<p>After each search key/command, you can type the name of the artist, song, or movie. If no search term is entered, the app will pull a pre-determined search.</p>

--------------------------------------------------------------------------------------------------------

<h2>Results:</h2>
<p>Once your command is received, LIRI searches the applicable API and outputs the specific information.</p>

<h3>concert-this</h3> 
  <p>Venue, Location, and Date</p>
<h3>spotify-this-song</h3> 
  <p>Name, Artist(s), Album, and URL Preview Link.</p>
<h3>movie-this</h3>
  <p>Title name, Release Date, IMDB rating, Country, Language, Plot Summary, and Actors.</p>

--------------------------------------------------------------------------------------------------------

<h2>Additional Features:</h2>
<h3>do-what-it-says:</h3>
<p>LIRI has a built in search called do-what-it-says. This commando outputs information for the song "I Want It That Way" by the Backstreet Boys pulling the data from a text file (random.txt).</p>

<h3>Logging Commands + User Input:</h3>
<p>LIRI also automatically logs all the commands and user inputs into a text file for storage. It alerts the user with a console.log of "Your search of <userInput> was logged to our records."</p>

--------------------------------------------------------------------------------------------------------

<h2>In Action:</h2>
<h3>Screenshots show expected outputs:</h3>

<h4>spotify-this-song:</h4>
![spotify-this-song](./images/spotify-this-song.png?raw=true "spotify-this-song")

<h4>spotify-this-song Hello:</h4>
![spotify-this-song Hello](./images/spotify-this-song-hello.png?raw=true "spotify-this-song Hello")

<h4>movie-this:</h4>
![movie-this](./images/movie-this.png?raw=true "movie-this")

<h4>movie-this Inglorious Bastards:</h4>
![movie-this Inglorious Bastard](./images/movie-this-inglorious-bastards.png?raw=true "movie-this Inglorious Bastard")

<h4>concert-this:</h4>
![concert-this](./images/concert-this.png?raw=true "concert-this")

<h4>concert-this Anderson .paak:</h4>
![concert-this Anderson .paak](./images/concert-this_paak.png?raw=true "concert-this Anderson .paak")

<h4>do-what-it-says:</h4>
![do-what-it-says](./images/do-what-it-says.png?raw=true "do-what-it-says")
