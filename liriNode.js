require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api")
var fs = require("fs")


var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var target = process.argv[3]

if (command === "spotify-this-song"){

}
else if (command=== "concert-this"){
    axios.get("https://rest.bandsintown.com/artists/" + target + "/events?app_id=codingbootcamp").then(function(response){
        console.log("-----------------------------------------------------------------------")
        // to get name
    console.log(response.data[0].venue.name)
    console.log(response.data[0].venue.city)
    
    // console.log(response.data[0].datetime)
    // moment(response.data[0].datetime).formet('DD-MM-YYYY')
    console.log(moment(response.data[0].datetime).format('MM-DD-YYYY'))
    })

}
else if (command=== "movie-this"){
axios.get()
}
else if (command==="do-what-it-says"){

}
else {console.log("Please choose one")}