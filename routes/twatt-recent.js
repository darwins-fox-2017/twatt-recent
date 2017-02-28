'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/twatt-recent')

router.get('/recent', controllers.twitterRecent)

module.exports = router
