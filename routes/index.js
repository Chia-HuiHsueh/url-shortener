const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const generateShortUrl = require('./modules/generateShortUrl')

router.use('/', home)
router.use('/', generateShortUrl)

module.exports = router
