var express = require('express');
var router = express.Router();
require('dotenv').config()
var oauth = require("../helper/twitterOauth")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/twatt', function(req, res, next) {
  oauth.get(
       'https://api.twitter.com/1.1/search/tweets.json?q='+req.query.q,
        process.env.APP_TOKEN, //test user token
        process.env.APP_SECRET, //test user secret
       function (e, data, respond){
         if (e) console.error(e);
         res.send(JSON.parse(data));
       });
   });


module.exports = router;
