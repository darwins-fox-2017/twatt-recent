'use strict'

const express = require('express')
const router = express.Router()
const oAuth = require('oauth')

let my_oAuth = new oAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  '37M4pPwv1CBIngCglZGhVprmA',
  'FUyG7LVUyXGmI8K2XqGIJdNZgApZsYXeJUQ5ewgU4MZxM7Mjep',
  '1.0A',
  null,
  'HMAC-SHA1'
)

module.exports = {
  twitterRecent: function (req, res, next) {
    my_oAuth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json`,
      '274991751-Gn09k3MXKekv4rsNYCYUzCKgjWcUjQdoXIY7JvJo', // test user token
      'Lqnyus1kHeVMsJ89TWk0v3w08VB2cblIO4TF7tnoKos9V', // test user secret
      function (e, data, respond) {
        if (e) console.error(e)
        console.log(require('util').inspect(data))
        res.send(data)
      }
    )
  }
}
