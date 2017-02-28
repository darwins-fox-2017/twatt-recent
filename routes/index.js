'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/twatt-recent')

router.get('/', function (req, res, next) {
  res.send('Learn twitter recent')
})

module.exports = router
