//Twitter credentials in separate config file
var twitterCreds = require('./twitterCreds.json');

//twitter setup
var Twit = require('twit');
var T = new Twit(twitterCreds);

//twitter parameters
var params = {
    user: 'yurigrinshteyn'
}

var stream = T.stream('statuses/filter', params)

//start streaming tweets in and publishing them to PubSub
stream.on('tweet', function (tweet) {
    console.log("got tweet!")
})
