# Hey LIRI!

## LIRI is a _Language_ Interpretation and Recognition Interface

### LIRI is a Node command line app that takes in user parameters to return song information from Spotify, movie information from OMDB, concert information from Bands in Town, and also reads a text file that will display information about whatever is in the text file. In this case it will be song information pulled from Spotify.

## NPM Packages and APIs Used

This app is powered by four **NPM packages** and three **APIs**.
Axios is used to send requests to the Bands in Town and OMDB APIs to retrieve the information being displayed for concerts and movies. The moment package is used to format the dates for concerts. DotEnv is used to set any environmental variables. DotEnv allows me to define exactly where I'm loading environment variables from and bundling only variables in my project that are explicitly referenced in my code which will keep certain sensitive information secret like my Spotify API key.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
   * [Moment](https://www.npmjs.com/package/moment)
   * [DotEnv](https://www.npmjs.com/package/dotenv)

APIs:
   * [OMDB API](http://www.omdbapi.com)
   * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

## Screenshots of Functioning App:

### OMDB

   OMDB Example - No movie added by user.:
   ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_movie_default.png "LIRI OMDB - No movie entered")
   OMDB Example - With movie added by user.:
   ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_movie_with_user_input.png "LIRI OMDB - With movie entered")

### SPOTIFY

  Spotify Example - No song added by user.:
  ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_spotify_default.png "LIRI Spotify - No song entered")
  Spotify Example - With song added by user.:
  ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_concerts_with_user_input.png "LIRI Spotify - With song entered")

### BANDS IN TOWN

   Bands in Town Example - No band added by user.:
   ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_concerts_default.png "LIRI Bands in Town - No band entered")
   Bands in Town Example - With band added by user.:
   ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_concerts_with_user_input.png "LIRI Bands in Town - With band entered")

### DO WHAT IT SAYS

  Do What It Says Spotify Example - Utilized the random.txt file to grab parameter information from Spotify.
  ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_doWhatItSays.png "LIRI Do What It Says - reads random.txt file")
  Do What It Says Movie Example - Utilized the random.txt file to grab parameter information from OMDB.
  ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_doWhatItSays.png "LIRI Do What It Says - reads random.txt file")
  Do What It Says Concert Example - Utilized the random.txt file to grab parameter information from Bands in Town.
  * This is currently throwing an error so no screenshot if available yet. Bands in Town works correctly when not using the random.txt file. 
