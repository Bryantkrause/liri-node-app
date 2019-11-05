// require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
// var Spotify = require('node-spotify-api');
// artist = 'inferi'
// var spotify = new Spotify(keys.spotify);

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });
// axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
// .then(function(response) {
//     console.log(response.data)
// })

// Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`
let concertFinder = (artist) => {
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
.then(function(response) {
    console.log(response.data)
})
}

let songer = _ => {

}

let notGoodFellas = _ => {

}

let doIt = _ => {

}

let myMenu = () =>{
inquirer.prompt({
    type: 'list',
    name: 'options',
    message: 'Choose an option.',
    choices: [`concert-this`,`spotify-this-song`,`movie-this`,`do-what-it-says`]
})
.then(({options})=>{
    switch (options){
        case `concert-this`:
                inquirer.prompt({
                    type: 'input',
                    name: 'artist',
                    message: 'Enter an artist.',
            })
            .then(({artist})=>{
              concertFinder(artist)  
            })
            
            console.log(`concert-this`)
            break
            case `spotify-this-song`:
            songer()
            console.log(`spotify-this-song`)
            break
            case `movie-this`:
            notGoodFellas()    
            console.log(`movie-this`)
            break
            case `do-what-it-says`:
            doIt()
            console.log(`do-what-it-says`)
            break
            
    }
})
.catch(e => console.log(e))
}

myMenu()