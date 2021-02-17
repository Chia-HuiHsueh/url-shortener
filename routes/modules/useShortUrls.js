const express = require('express')
const url = require('../../models/url')
const router = express.Router()
const URL = require('../../models/url')


router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  URL.find({ shortenedUrl: shortUrl })
    .lean()
    .then((url) => {
      if (url) {
        res.status(301).redirect(url[0].originalUrl)
      }
    })
    .catch(() => { res.sendStatus(404) })
})

module.exports = router