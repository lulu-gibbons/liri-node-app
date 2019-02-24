# Hey Liri!

## LIRI is a _Language_ Interpretation and Recognition Interface

### LIRI is a Node command line app that takes in user parameters to return song information from Spotify, movie information from OMBD, concert information from Bands in Town, and also reads a text file that will display information about whatever is in the text file. In this case it will be song information pulled from Spotify.

### NPM Packages and APIs Used

This app is powered by four **NPM packages** and three **APIs**.
Axios is used to send requests to the Bands in Town and OMBD APIs to retrieve the information being displayed for concerts and movies. The moment package is used to format the dates for concerts. DotEnv is used to set any environmental variables. DotEnv allows me to define exactly where I'm loading environment variables from and bundling only variables in my project that are explicitly referenced in my code which will keep certain sensitive information secret like my Spotify API key.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
   * [Moment](https://www.npmjs.com/package/moment)
   * [DotEnv](https://www.npmjs.com/package/dotenv)

APIs:
   * [OMDB API](http://www.omdbapi.com)
   * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)


   Inline-style:
   ![alt text](https://github.com/lulu-gibbons/liri-node-app/blob/master/LIRI_SS/LIRI_movie_default.png "LIRI OMBD - No movie entered")
