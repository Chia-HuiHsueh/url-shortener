const express = require('express')
const router = express.Router()
const checkUrlValidation = require('../../public/javascripts/checkUrlValidation')

const production = ''
const localhost = 'http://localhost:3000/'
const baseUrl = process.env.NODE_ENV ? production : localhost

router.post('/', (req, res) => {
  const urlData = req.body
  checkUrlValidation(urlData, baseUrl, res)
})
module.exports = router