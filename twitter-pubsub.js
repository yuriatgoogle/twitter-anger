//Twitter credentials
var twitterConfig = {
    consumer_key: 'EYcFK0zkD3LTuBzJhvKrAlY53',
    consumer_secret: '7vnKYJnDMkBcHlw97C2abcV07UjzFlxnCrdlUsoyLE7XakueNq',
    access_token: '1160099912-Pc3QPI32pyVJNnySqLD4xfOxIpLMWf6QiaIWOwY',
    access_token_secret: 'BQbI3168xP4CleJncpbKFLZeSBJrdAqHx6GG6II9yvijv'
}

var Twit = require('twit'); // this is how we import the twit package
var T = new Twit(twitterConfig); 


var params = {
    q: 'donnie',
    count: 100
} 

var stream = T.stream('statuses/sample')

stream.on('tweet', function (tweet) {
 console.log("tweet!")
})
