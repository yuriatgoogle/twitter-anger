//Twitter credentials
var config = require('./config.json');

var Twit = require('twit');
var T = new Twit(config); 


var params = {
    track: 'trump'
} 

var stream = T.stream('statuses/filter', params)

stream.on('tweet', function (tweet) {
 console.log("tweet!")
})
