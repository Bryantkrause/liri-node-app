require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
artist = 'inferi'
var spotify = new Spotify(keys.spotify);

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });
fetch(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
.then(data => data.json())
.then(data => {
    console.log(data)
})
let url = `https://rest.bandsintown.com/artists/${artist}?app_id=codingbootcamp`
curl -X GET "https://rest.bandsintown.com/artists/inferi?app_id=codingbootcamp" -H "accept: application/json"
// fetch(`"https://rest.bandsintown.com/artists/"+${artist}+"/events?app_id=codingbootcamp"`)
// .then(data => data.json())
// .then(data => {
//     console.log(data)
// })
// Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`