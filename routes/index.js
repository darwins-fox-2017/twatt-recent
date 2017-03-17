var express = require('express');
var router = express.Router();
var OAuth = require('oauth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timeline', function(req, res, next){
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'TLGmM57uOhQn8Xhqf2IZ3LwRa',
      '0uEgTaPmGp0uhIWLVLWs9K1jIfK34afN9bihD4f21ZcA9hYg6p',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
oauth.get(

    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    '836421347693645827-s5iFfii3RW8Y79m8t1MEMQUyOZjRCyh', //test user token
    'zBGzr4ABkxqK6UzQdWmN1ysD92gQZ44V10w5FLSjE5Ome', //test user secret
    function (e, data, respon){
      if (e) console.error(e);
      // console.log(require('util').inspect(data));
      res.send(data)
    });
})

module.exports = router;
