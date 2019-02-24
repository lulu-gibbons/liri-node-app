require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require('moment'); //formats the time
var fs = require("fs"); //built in node function that can read files
var spotify = new Spotify(keys.spotify);

var getArtistNames = function(artist) {
  return artist.name;
}
//function from Spotify npm to grab song information for Spotify API
var mySpotify = function(songInput) {
  if (songInput === undefined) {
    songInput = "The Sign"; //default Song
  }
  spotify.search({
      type: 'track',
      query: songInput,
      limit: 5
    },
    function(err, data) {
      if (err) {
        console.log('Error occurred: ' + err);
        return;
      }
      //loops through songs, grabs information and displays in console
      var songs = data.tracks.items;
      for (var i = 0; i < songs.length; i++) {
        console.log('==============SONG INFO==============');
        console.log(i);
        console.log('artist(s): ' + songs[i].artists.map(
          getArtistNames
        ));
        console.log('song names: ' + songs[i].name);
        console.log('preview songs: ' + songs[i].preview_url);
        console.log('album: ' + songs[i].album.name);
        console.log('=====================================');
      }
    });
}

function bandsInTown(artist) {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response) {
      //console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        console.log('==============CONCERT INFO==============');
        console.log('Venue Name: ' + response.data[i].venue.name);
        console.log('Venue Location: ' + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log('Date of the Event: ' + moment(response.data[i].datetime).format("MM/DD/YYYY")); //dateArr[0] should be the date separated from the time
        console.log('=====================================');
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getMovie(movieName) {
  if (movieName === undefined) {
    movieName = "Mr. Nobody"; //default Movie
  }
  axios.get("https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
      console.log(response.data.Ratings);
      console.log('==============MOVIE INFO==============');
      console.log('Movie Title: ' + response.data.Title);
      console.log('Year of Release: ' + response.data.Year);
      console.log('IMDB Rating: ' + response.data.imdbRating);
      console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);
      console.log('Country Produced: ' + response.data.Country);
      console.log('Language: ' + response.data.Language);
      console.log('Plot: ' + response.data.Plot);
      console.log('Actors/Actresses: ' + response.data.Actors);
      console.log('=====================================');
    })
    .catch(function(error) {
      console.log(error);
    });
}

var doWhatItSays = function() {

  fs.readFile('random.txt', 'utf8', function(err, data) {

    var arr = data.split(",");
    //console.log(arr[0]);
    //console.log(arr[1]);

    mySpotify(arr[1]);

    if (err) throw err;
    })
  }

var pick = function(caseData, functionData) {
  switch (caseData) {
    case 'spotify-this-song':
      mySpotify(functionData);
      break;
    case 'concert-this':
      bandsInTown(functionData);
      break;
    case 'movie-this':
      getMovie(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays(functionData);
      break;
    default:
      console.log('LIRI does not know that');
  }
}

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

//process.arg[2]='spotify-this-song' entered by user, parcess arg[3]=song user wants
runThis(process.argv[2], process.argv[3]);
