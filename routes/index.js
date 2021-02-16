const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const generateShortUrl = require('./modules/generateShortUrl')
const useShortUrls = require('./modules/useShortUrls')

router.use('/', home)
router.use('/', generateShortUrl)
router.use('/', useShortUrls)

module.exports = router
