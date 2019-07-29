require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api")
var fs = require("fs")


var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
var target = process.argv.slice(3).join("")

if (command === "spotify-this-song") {
    spotify.search({ type: 'track', query: target, limit: 1 }).then(function (response) {
        var spotifyArr = response.tracks.items;
        for (i = 0; i < spotifyArr.length; i++) {
            console.log(response.tracks.items[i].album.artists[0].name)
            console.log(response.tracks.items[i].name)
            console.log(response.tracks.items[i].external_urls.spotify)
            // function spotify(){
            //     if (!target) {target = "the sign"};

        }
    })
}





else if (command === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + target + "/events?app_id=codingbootcamp").then(function (response) {
        console.log("-----------------------------------------------------------------------")
        // to get name
        console.log(response.data[0].venue.name)
        console.log(response.data[0].venue.city)

        // console.log(response.data[0].datetime)
        // moment(response.data[0].datetime).formet('DD-MM-YYYY')
        console.log(moment(response.data[0].datetime).format('MM-DD-YYYY'))
    })

}
else if (command === "movie-this") {
    axios.get("http://www.omdbapi.com/?t=" + target + "&y=&plot=short&apikey=trilogy").then(function (response) {
        console.log("-----------------------------------------------------------------------")
        console.log(response.data.Title)
        console.log(response.data.Year)
        console.log(response.data.Rated)
        console.log(response.data.Country)
        console.log(response.data.Language)
        console.log(response.data.Plot)
        console.log(response.data.Actors)
    })
}
else if (command === "do-what-it-says") {
    fs.readFile('random.txt', 'utf8', function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);

    });


}
else { console.log("Please choose one") }