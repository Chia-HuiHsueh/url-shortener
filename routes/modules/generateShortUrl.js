const express = require('express')
const router = express.Router()
const validUrl = require('valid-url')
const URL = require('../../models/url')

const production = 'https://immense-eyrie-21844.herokuapp.com/'
const localhost = 'http://localhost:3000/'
const baseUrl = process.env.NODE_ENV ? production : localhost

router.post('/', (req, res) => {

  function generateShortenedUrl() {
    let random = ''
    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 5; i++) {
      const letterIndex = Math.floor(Math.random() * letters.length)
      random += letters[letterIndex]
    }
    return random
  }

  const originalUrl = req.body.originalUrl
  //驗證輸入的網址
  if (!(validUrl.isUri(originalUrl))) {
    return URL.find()
      .lean()
      .then(() => res.render('invalid', { originalUrl }))
      .catch(error => console.log(error))
  }

  let randomUrl = generateShortenedUrl()
  //檢查輸入網址是否已存在db
  URL.findOne({ originalUrl: originalUrl })
    .lean()
    .then(url => {
      if (!url) {
        checkRandomUrl(randomUrl, originalUrl, res)
      } else {
        let shortenedUrl = baseUrl + (url.shortenedUrl)
        res.render('result', { shortenedUrl })
      }
    })
  //檢查產生縮網址是否重複
  function checkRandomUrl(randomUrl, originalUrl, res) {
    URL.exists({ randomUrl })
      .then((result) => {
        if (result) {
          let regenerateRandomUrl = generateShortenedUrl()
          let shortenedUrl = baseUrl + regenerateRandomUrl
          URL.create({ originalUrl: originalUrl, shortenedUrl: regenerateRandomUrl })
          return shortenedUrl
        } else {
          let shortenedUrl = baseUrl + randomUrl
          URL.create({ originalUrl: originalUrl, shortenedUrl: randomUrl })
          return shortenedUrl
        }
      })
      .then((shortenedUrl) => res.render('result', { shortenedUrl }))

  }

})
module.exports = router
